<template>
  <div class="navBar">
    <Icon :name="leftIcon" class="leftIcon" @click="toggle"/>
    <span class="title"><slot/></span>
    <Icon :name="rightIcon" class="rightIcon"/>
    <ul class="more" v-show="visible">
      <li>
        <router-link to="/labels">
          标签管理
        </router-link>
      </li>
      <li>
        <router-link to="/labels/create">
          新增标签
        </router-link>
      </li>
      <li>
        <router-link to="/statistics">
          账目明细
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Top extends Vue {
    @Prop(String) leftIcon: string | undefined;
    @Prop(String) rightIcon: string | undefined;
    visible = false;

    toggle() {
      if (this.leftIcon === 'left') {
        this.$router.back();
      } else if (this.leftIcon === 'more') {
        this.visible = !this.visible;
      } else {
        return;
      }
    }

  }

</script>

<style lang='scss' scoped>
  @import "~@/assets/style/helper.scss";
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
    position: relative;

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

    > .more {
      @extend %Shadow;
      position: absolute;
      top: 100%;
      transform: translateY(-10px);
      background: white;
      border-radius: 5px;
      padding: 10px;
      font-size: 18px;
      z-index: 1;
      > li {
        margin-top: 5px;
      }

    }
  }
</style>