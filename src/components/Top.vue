<template>
  <div class="navBar">
    <Icon :name="leftIcon" class="leftIcon" @click="toggle"/>
    <span class="title"><slot/></span>
    <Icon :name="rightIcon" class="rightIcon"/>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Top extends Vue {
    @Prop(String) leftIcon: string | undefined;
    @Prop(String) rightIcon: string | undefined;

    toggle() {
      if (this.leftIcon === 'left') {
        this.$router.back();
      } else {
        return;
      }
    }
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