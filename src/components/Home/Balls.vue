<template>
  <div class="main">
    <div class="type" @click="toRecord(false)">+</div>
    <div class="output">
      <div class="income">
        <span>{{ selectedMonth }}月收入</span>
        <div class="amount">￥ {{ amountIncome }}</div>
      </div>
      <div class="line"></div>
      <div class="outlay">
        <div class="amount">￥{{ amountExpend }}</div>
        <span>{{ selectedMonth }}月支出</span>
      </div>
    </div>
    <div class="type" @click="toRecord(true)">-</div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component, Inject, Prop, Watch} from 'vue-property-decorator';
import showAmount from '@/lib/ShowAmount';
import dayjs from 'dayjs';

@Component
export default class Balls extends Vue {
  @Inject() eventBus: any;
  @Prop(Number) selectedMonth: number | undefined;

  amountExpend = 0;
  amountIncome = 0;

  @Watch('selectedMonth', {immediate: true})
  async onSelectedMonthChanged(val: number) {
    const startAt = dayjs().set('month', val - 1).startOf('month').toISOString();
    const endAt = dayjs().set('month', val - 1).endOf('month').toISOString();
    this.amountExpend = await showAmount(startAt, endAt, true);
    this.amountIncome = await showAmount(startAt, endAt, false);
  }

  toRecord(type: boolean) {
    this.$router.push('/money/0');
    this.$nextTick(() => {
      this.eventBus.$emit('update:type', type);
    });
  }
}
</script>

<style lang='scss' scoped>
@import "~@/assets/style/helper.scss";

.main {
  position: absolute;
  top: 50%;
  transform: translateY(-60%);
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
    height: 150px;
    width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    > .line {
      width: 120px;
      height: 1px;
      background: #999999;
      top: 50%;
      transform: translateY(-50%)
    }

    > .income,
    .outlay {
      flex-grow: 1;
      text-align: center;
      display: flex;
      flex-direction: column;

      > .amount {
        font-size: 20px;
        line-height: 35px;
      }

      > span {
        font-size: 12px;
        line-height: 18px;
      }
    }

    > .income {
      justify-content: flex-end;

      > .amount {
        color: #1296DB;
      }
    }

    > .outlay {
      > .amount {
        color: rgba(225, 90, 130)
      }
    }
  }

  > .type {
    height: 50px;
    width: 50px;
    font-size: 30px;
  }
}
</style>
