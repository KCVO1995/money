<template>
  <div class="global">
    <Top leftIcon="more" rightIcon="setting">米奇记账</Top>
    <ul class="month">
      <li>5月</li>
      <li class="selected">6月</li>
      <li>7月</li>
    </ul>
    <div class="main">
      <div class="type">+</div>
      <div class="output">收入/支出</div>
      <div class="type">-</div>
    </div>
    <div class="container-daily">
      <div class="daily outlay">
        <span>今日支出</span>
        <span>-￥640</span>
        <Icon name="curve" class="icon-daily"/>
      </div>
      <div class="daily income">
        <span>今日收入</span>
        <span>￥1200</span>
        <Icon name="curve" class="icon-daily"/>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Home extends Vue {

  }

</script>

<style lang='scss' scoped>
  @import "~@/assets/style/helper.scss";
  $line-height: 50px;
  .global {
    color: #999;
    position: relative;
    width: 100vw;
    .month {
      height: 50px;
      margin-top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      > li {
        flex-grow: 1;
        text-align: center;
        line-height: $line-height;
        &.selected {
          @extend %Shadow;
          background: white;
          border-radius: $line-height/2;
        }
      }
    }
    .main {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100vw;
      > .output,
      .type {
        @extend %Shadow;
        border-radius: 50%;
        background: white;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      > .output {
        height: 120px;
        width: 120px;
      }
      > .type {
        height: 50px;
        width: 50px;
        font-size: 30px;
      }
    }
    .container-daily {
      position: absolute;
      bottom: 25px;
      display: flex;
      > .daily {
        width: 50vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        > .icon-daily {
          width: 100px;
          height: 100px;
        }
        &.outlay {
          color: #D81E06;
          > .icon-daily {fill: #D81E06;}
        }
        &.income {
          color: #1296DB;
          > .icon-daily {fill: #1296DB;}
        }
      }
    }
  }
</style>