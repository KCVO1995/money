<template>
  <div class="container">
    <h2 class="title">Welcome</h2>
    <form>
      <label v-for="(item, index) in form" :key="index">
        <span>
          <span>{{item.name}}</span>
        </span>
        <input @change="e => $emit('dataChange', {key: item.key, value: e.target.value})" :type="item.type">
        <span class="errorTip">{{item.error.join(',')}}</span>
      </label>
      <button @click="$emit('submit')">{{buttonText}}</button>
    </form>
    <span v-if="type === 'login'">尚无账号，立即<span style="color: #1878f3" @click="$router.push('/register')">注册</span></span>
    <span v-else>已有账号，立即<span style="color: #1878f3" @click="$router.push('/login')">登录</span></span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Login extends Vue {
  @Prop({default: []}) form!: [];
  @Prop({default: ''}) buttonText!: string;
  @Prop({default: 'login'}) type!: string;

}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.container {
  @extend %Shadow;
  width: 80vw;
  background: white;
  border-radius: 10px;
  transform: translateY(-40px);
  text-align: center;
  padding: 30px;

  > .title {
    color: #666;
  }

  > form {
    margin-top: 20px;
    text-align: left;

    > label {
      margin-top: 10px;
      display: block;
      position: relative;

      > span {
        display: block;
        margin-bottom: 5px;
      }

      > .errorTip {
        color: red;
        font-size: 12px;
        text-align: right;
        position: absolute;
        bottom: -24px;
        right: 0;
      }

      > input {
        width: 100%;
        height: 30px;
        border: none;
        background: #f5f5f5;
        border-radius: 5px;
        padding: 0 10px;
        color: #666;
      }
    }

    > button {
      width: 100%;
      height: 30px;
      border: none;
      border-radius: 5px;
      margin-top: 20px;
      background: #1878f3;
      color: white;
    }
  }

  > span {
    margin-top: 10px;
    display: block;
    color: #999;
    font-size: 14px;
  }
}
</style>
