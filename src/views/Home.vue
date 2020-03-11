<template>
  <div class="global">
    <Top leftIcon="more" rightIcon="setting">米奇记账</Top>
    <ul class="month">
      <li v-for="(mon, index) in months" :key="index" @click="selectMonth(index)">{{mon}}月</li>
    </ul>
    <div class="main">
      <div class="type" @click="toRecord('+')">+</div>
      <div class="output">
        <div class="income">
          <span>{{selectedMonth}}月收入</span>
          <div class="amount">￥ {{show("-")}}</div>
        </div>
        <div class="line"></div>
        <div class="outlay">
          <div class="amount">￥{{show("+")}}</div>
          <span>{{selectedMonth}}月支出</span>
        </div>
      </div>
      <div class="type" @click="toRecord('-')">-</div>
    </div>
    <DailyAmount/>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component, Inject} from 'vue-property-decorator';
  import DailyAmount from '@/components/DailyAmount.vue';
  import dayjs from 'dayjs';
  import showAmount from '@/lib/ShowAmount';

  @Component({
    components: {DailyAmount}
  })
  export default class Home extends Vue {
    @Inject() eventBus: any;

    selectedMonth = 3;

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
      this.selectMonth(1);
    }

    toRecord(type: string) {
      this.$router.push('/money/0');
      this.$nextTick(() => {
        this.eventBus.$emit('update:type', type);
      });
    }

    selectMonth(index: number) {
      this.selectedMonth = this.months[index];
      const li = this.$el.querySelectorAll('li');
      for (let i = 0; i < li.length; i++) {
        if (i === index) {
          li[i].classList.add('selected');
        } else {
          li[i].classList.remove('selected');
        }
      }
    }

    show(type: string) {
      return showAmount(type, 'month', this.selectedMonth - 1);
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
        height: 130px;
        width: 130px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        > .line {
          width: 100px;
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
          color: #1296DB;
        }
        > .outlay {
          color: rgba(225, 90, 130)
        }


      }
      > .type {
        height: 50px;
        width: 50px;
        font-size: 30px;
      }
    }

  }
</style>