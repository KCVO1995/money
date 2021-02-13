<template>
  <div class="global">
    <Top leftIcon="left">注册</Top>
    <div class="page">
      <Form :form="form" type="register" button-text="立即注册" @submit="submit" @dataChange="onChange"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Form from '@/components/User/Form.vue';
import { AxiosError } from 'axios';

@Component({components: {Form}})
export default class Login extends Vue {
  formData: RegisterForm = {
    username: '',
    password: '',
    passwordConfirmation: ''
  };
  form = [
    {name: '用户名', type: 'text', key: 'username', error: []},
    {name: '密码', type: 'password', key: 'password', error: []},
    {name: '再次输入密码', type: 'password', key: 'passwordConfirmation', error: []},
  ];

  submit() {
    this.$api.user.register(this.formData).then(() => {
      this.$router.push('/login')
    }, (e: AxiosError) => {
      const {errors} = e.response?.data
      for(let i = 0; i < this.form.length; i++ ) {
        Object.keys(errors).forEach(key => {
          if(this.form[i].key === key) {
            this.form[i].error = errors[key]
          }
        })
      }
    })
  }

  onChange({key, value}:  { [key: string]: string }) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    this.formData[key] = value;
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
