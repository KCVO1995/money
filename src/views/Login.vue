<template>
  <div class="global">
    <Top leftIcon="">登录</Top>
    <div class="page">
      <Form :form="form" button-text="立即登录" @submit="submit" @dataChange="onChange"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Form from '@/components/User/Form.vue';
import {AxiosError, AxiosResponse} from 'axios';

@Component({components: {Form}})
export default class Login extends Vue {
  formData: LoginForm = {
    username: '',
    password: ''
  };
  form = [
    {name: '用户名', type: 'text', key: 'username', error: []},
    {name: '密码', type: 'password', key: 'password', error: []}
  ];

  onChange({key, value}: { [key: string]: string }) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    this.formData[key] = value;
  }

  submit() {
    this.$api.user.login(this.formData).then((res: AxiosResponse) => {
      const {data: {token}} = res;
      document.cookie = `token=${token}`;
      this.$store.dispatch('getUser');
      this.$router.push('/');
    }, (e: AxiosError) => {
      const {errors} = e.response?.data;
      for (let i = 0; i < this.form.length; i++) {
        Object.keys(errors).forEach(key => {
          if (this.form[i].key === key) {
            this.form[i].error = errors[key];
          }
        });
      }
    });
  }

}
</script>

<style lang="scss" scoped>
.global {
  > .page {
    width: 100%;
    height: calc(100% - 60px);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
