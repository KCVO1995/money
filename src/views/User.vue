<template>
  <div class="global">
    <Top leftIcon="left">米奇记账</Top>
    <div class="container">
      <Icon name="user" class="useIcon"/>
      <div class="username">{{$store.state.currentUser.username}}</div>
      <Button class="button" @click="logout">退出登录</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Button from '@/components/Button.vue';

@Component({components: {Button}})
export default class User extends Vue {
  logout() {
    this.$store.commit('logout')
    this.$router.push('/login')
  }
}
</script>

<style lang="scss" scoped>
.global {
  > .container {
    margin-top: 200px;
    text-align: center;
    > .useIcon {
      width: 100px;
      height: 100px;
      margin: 0 auto;
      display: block;
      color: #1878f3;
    }
    > .username {
      margin-top: 20px;
      font-size: 20px;
      text-align: center;
    }
    > .button {
      margin-top: 20px;
    }

  }
}

</style>
