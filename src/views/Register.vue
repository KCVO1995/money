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

@Component({components: {Form}})
export default class Login extends Vue {
  formData: RegisterForm = {
    username: '',
    password: '',
    passwordConfirmation: ''
  };
  form = [
    {name: '用户名', type: 'text', key: 'username'},
    {name: '密码', type: 'password', key: 'password'},
    {name: '再次输入密码', type: 'password', key: 'passwordConfirmation'},
  ];

  submit() {
    this.$api.user.register(this.formData)
  }

  onChange({key, value}:  { [key: string]: string }) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    this.formData[key] = value;
    console.log(this.formData,'data');
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
