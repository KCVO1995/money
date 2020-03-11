<template>
  <div class="container-daily">
    <div class="daily outlay">
      <div class="amount-daily">
        <span>今日支出</span>
        <span class="amount">-￥{{show("-")}}</span>
      </div>
      <Icon name="curve" class="icon-daily"/>
    </div>
    <div class="line"></div>
    <div class="daily income">
      <div class="amount-daily">
        <span>今日收入</span>
        <span class="amount">￥{{show("+")}}</span>
      </div>
      <Icon name="curve" class="icon-daily"/>
    </div>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import showAmount from '@/lib/ShowAmount';

  @Component
  export default class DailyAmount extends Vue {
    show(type: string) {
      return showAmount(type, 'day', undefined);
    }
  }

</script>

<style lang='scss' scoped>
  .container-daily {
    position: absolute;
    bottom: 20px;
    display: flex;
    > .line {
      position: absolute;
      bottom: 60px;
      left: 50%;
      transform: translateX(-50%);
      height: 60px;
      width: 2px;
      background: #999999;
    }
    > .daily {
      width: 50vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      > .amount-daily {
        display: flex;
        flex-direction: column;
        justify-content: center;
        transform: translateY(70%);
        text-align: center;
        .amount {
          margin-top: 10px;
        }
      }
      > .icon-daily {
        width: 100px;
        height: 100px;
      }
      &.outlay {
        .amount {color: #D81E06;}
        > .icon-daily {fill: #D81E06;}
      }
      &.income {
        .amount {color: #1296DB;}
        > .icon-daily {fill: #1296DB;}
      }
    }
  }
</style>