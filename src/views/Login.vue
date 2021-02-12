<template>
  <div class="global">
    <Top leftIcon="left">登录</Top>
    <div class="page">
      <Form :form="form" button-text="立即登录" @submit="submit" @dataChange="onChange"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Form from '@/components/User/Form.vue';

type LoginForm = {
  username: string;
  password: string;
}

@Component({components: {Form}})
export default class Login extends Vue {
  formData: LoginForm = {
    username: '',
    password: ''
  };
  form = [
    {name: '用户名', type: 'text', key: 'username'},
    {name: '密码', type: 'password', key: 'password'}
  ];

  submit() {
    alert('login');
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
