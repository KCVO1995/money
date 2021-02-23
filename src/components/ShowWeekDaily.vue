<template>
  <div class="output">
    <ul class="statistics">
      <li class="item income">
        <span>本周收入</span>
        <div class="amount">￥{{ amountIncomeWeek }}</div>
      </li>
      <li class="line"/>
      <li class="item outlay">
        <span>本周支出</span>
        <div class="amount">￥{{ amountExpendWeek }}</div>
      </li>
    </ul>
    <ul class="statistics">
      <li class="item income">
        <span>今日收入</span>
        <div class="amount">￥{{ amountIncomeDate }}</div>
      </li>
      <li class="line"/>
      <li class="item outlay">
        <span>今日支出</span>
        <div class="amount">￥{{ amountExpendDate }}</div>
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {Dayjs} from 'dayjs';

@Component
export default class ShowWeekDaily extends Vue {
  @Prop() selectedDate?: Dayjs;
  @Prop() amountExpendWeek?: number;
  @Prop() amountIncomeWeek?: number;
  @Prop() amountExpendDate?: number;
  @Prop() amountIncomeDate?: number;
}

</script>

<style lang='scss' scoped>
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
        .amount {
          color: rgba(225, 90, 130);
        }
      }

      &.income {
        .amount {
          color: #1296DB;
        }
      }
    }
  }
}
</style>
