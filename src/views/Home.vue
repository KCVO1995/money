<template>
  <div class="global">
    <Top leftIcon="more" rightIcon="setting">米奇记账</Top>
    <ul class="month">
      <li>5月</li>
      <li class="selected">6月</li>
      <li>7月</li>
    </ul>
    <div class="main">
      <div class="type" @click="toRecord('+')">+</div>
      <div class="output">收入/支出</div>
      <div class="type" @click="toRecord('-')">-</div>
    </div>
    <div class="container-daily">
      <div class="daily outlay">
        <div class="amount-daily">
          <span>今日支出</span>
          <span class="amount">-￥{{showAmount("-")}}</span>
        </div>
        <Icon name="curve" class="icon-daily"/>
      </div>
      <div class="line"></div>
      <div class="daily income">
        <div class="amount-daily">
          <span>今日收入</span>
          <span class="amount">￥{{showAmount("+")}}</span>
        </div>
        <Icon name="curve" class="icon-daily"/>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import clone from '@/lib/clone';
  import {Component, Inject} from 'vue-property-decorator';
  import dayjs from 'dayjs';

  @Component
  export default class Home extends Vue {
    @Inject() eventBus;

    toRecord(type: string) {
      this.$router.push('/money/0');
      this.$nextTick(() => {
        this.eventBus.$emit('update:type', type);
      });
    }

    showAmount(type: string) {
      const recordList = clone(this.$store.state.recordList).filter(record => record.type === type);
      if (recordList.length === 0) {return 0;}
      const today = dayjs();
      const todayGroup = [];
      let dailyTotal = 0;
      for (let i = 0; i < recordList.length; i++) {
        const recordCreateAt = dayjs(recordList[i].createAt);
        if (dayjs(recordCreateAt).isSame(today, 'day')) {
          console.log('一样');
          todayGroup.push(recordList[i]);
        }
      }
      for (let i = 0; i < todayGroup.length; i++) {
        dailyTotal += todayGroup[i].amount;
      }
      return dailyTotal;
    }
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
  }
</style>