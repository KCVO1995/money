<template>
  <div class="global">
    <Top leftIcon="more" rightIcon="setting">米奇记账</Top>
    <SelectMonth :selected-month.sync="selectedMonth">placeholder</SelectMonth>
    <balls :selected-month="selectedMonth">placeholder</balls>
    <router-link to="/statistics" class="detail">查看明细</router-link>
    <DailyAmount/>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import DailyAmount from '@/components/Home/DailyAmount.vue';
  import Balls from '@/components/Home/Balls.vue';
  import SelectMonth from '@/components/SelectMonth.vue';

  @Component({
    components: {SelectMonth, Balls, DailyAmount}
  })
  export default class Home extends Vue {
    selectedMonth = 0;
  }
</script>

<style lang='scss' scoped>
  .global {
    color: #999;
    position: relative;
    width: 100vw;
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