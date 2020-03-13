<template>
  <div class="global">
    <Top leftIcon="left" rightIcon="setting">账目明细</Top>
    <SelectMonth :selected-month.sync="selectedMonth">placeholder</SelectMonth>
    <SelectDate :selected-date.sync="selectedDate" :selected-month="selectedMonth">placeholder</SelectDate>
    <div class="output">
      <ul class="statistics">
        <li class="item income">
          <span>本周收入</span>
          <div class="amount">￥{{showWeek("+")}}</div>
        </li>
        <li class="line"/>
        <li class="item outlay">
          <span>本周支出</span>
          <div class="amount">￥{{showWeek("+")}}</div>
        </li>
      </ul>
      <ul class="statistics">
        <li class="item income">
          <span>今日收入</span>
          <div class="amount">￥{{showDaily("+")}}</div>
        </li>
        <li class="line"/>
        <li class="item outlay">
          <span>今日支出</span>
          <div class="amount">￥{{showDaily("-")}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import SelectMonth from '@/components/SelectMonth.vue';
  import dayjs from 'dayjs';
  import SelectDate from '@/components/SelectDate.vue';
  import ShowAmount from '@/lib/ShowAmount';


  @Component({components: {SelectDate, SelectMonth}})
  export default class Sta extends Vue {
    selectedMonth = 0;

    selectedDate = dayjs().set('month', this.selectedMonth - 1).set('date', 1);

    mounted() {this.selectedDate = dayjs().set('month', this.selectedMonth - 1).set('date', 1);}

    showDaily(type: string) {return ShowAmount(type, 'day', this.selectedDate);}

    showWeek(type: string) {
      return ShowAmount(type, 'week', this.selectedDate);
    }

  }
</script>

<style lang='scss' scoped>
  .global {
    color: #999999;
    .output {
      margin-top: 20px;
      > .statistics {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
        > .line {
          content: '';
          height: 100%;
          width: 1px;
          background: #999999;
        }
        > .item {
          width: 50vw;
          text-align: center;
          > span {
            font-size: 10px;
            line-height: 10px;
          }
          > .amount {
            display: flex;
            justify-content: center;
            height: 50-12px;
            font-size: 22px;
          }
          &.outlay {
            .amount {color: rgba(225, 90, 130);}
          }
          &.income {
            .amount {color: #1296DB;}
          }
        }
      }
    }

  }

</style>