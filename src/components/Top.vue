<template>
  <div class="navBar">
    <Icon name="more" class="leftIcon"/>
    <span class="title"><slot/></span>
    <Icon name="setting" class="rightIcon"/>
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
    font-size: 18px;
    color: #999999;
    padding: 12px 16px;
    background: #f8f8f8;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid red;

    > .title {
    }

    > .leftIcon {
      fill: #999999;
      width: 24px;
      height: 24px;
    }

    > .rightIcon {
      fill: #999999;
      width: 24px;
      height: 24px;
    }
  }
</style>