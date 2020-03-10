<template>
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
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import clone from '@/lib/clone';
  import dayjs from 'dayjs';

  @Component
  export default class DailyAmount extends Vue {
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