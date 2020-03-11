<template>
  <div class="global">
    <Top leftIcon="more" rightIcon="setting">米奇记账</Top>
    <ul class="month">
      <li v-for="(mon, index) in months" :key="index" @click="selectMonth(mon)" :class="liClass(mon)">{{mon}}月</li>
    </ul>
    <balls :selected-month="selectedMonth">placeholder</balls>
    <router-link to="/statistics" class="detail">查看明细</router-link>
    <DailyAmount/>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import DailyAmount from '@/components/Home/DailyAmount.vue';
  import dayjs from 'dayjs';
  import Balls from '@/components/Home/Balls.vue';

  @Component({
    components: {Balls, DailyAmount}
  })
  export default class Home extends Vue {
    selectedMonth = 0;

    get months() {
      const currentMonth = dayjs().get('month');
      const months = [];
      let mon = currentMonth;
      for (let i = 0; i < 3; i++) {
        months.push(mon);
        mon += 1;
      }
      return months;
    }

    mounted() {
      const currentMonth = dayjs().get('month') + 1;
      this.selectMonth(currentMonth);
    }

    selectMonth(mon: number) {
      this.selectedMonth = mon;
    }

    liClass(mon: number) {
      return {selected: mon === this.selectedMonth};
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
    > .month {
      height: 50px;
      margin-top: 20px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      > li {
        width: 28vw;
        text-align: center;
        line-height: $line-height;
        &.selected {
          @extend %Shadow;
          background: white;
          border-radius: $line-height/2;
          color: #1296DB;
        }
      }
    }
    > .detail {
      font-size: 14px;
      position: absolute;
      top: 63%;
      left: 50%;
      transform: translateX(-50%);
      border-bottom: 1px solid #1296DB;
    }
  }
</style>