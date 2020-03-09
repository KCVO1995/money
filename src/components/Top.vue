<template>
  <div class="navBar">
    <Icon name="left" class="leftIcon"/>
    <span class="title"><slot/></span>
    <Icon class="rightIcon"/>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Top extends Vue {

  }

</script>

<style lang='scss' scoped>
  .navBar {
    width: 100vw;
    height: 60px;
    text-align: center;
    font-size: 16px;
    padding: 12px 16px;
    background: #f8f8f8;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid red;

    > .title {
    }

    > a > .leftIcon {
      width: 24px;
      height: 24px;
    }

    > .rightIcon {
      width: 24px;
      height: 24px;
    }
  }
</style>