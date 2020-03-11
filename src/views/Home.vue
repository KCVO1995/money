<template>
  <div class="global">
    <Top leftIcon="more" rightIcon="setting">米奇记账</Top>
    <ul class="month">
      <li v-for="(mon, index) in months" :key="index" @click="selectMonth(index)">{{mon}}月</li>
    </ul>
    <Balls :selected-month="selectedMonth">placeholder</Balls>
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

    mounted() {this.selectMonth(1);}

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
  }
</style>