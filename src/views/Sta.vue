<template>
  <div>
    <Top leftIcon="left" rightIcon="setting">账目明细</Top>
    <SelectMonth :selected-month.sync="selectedMonth">placeholder</SelectMonth>
    <div class="calendar">
      <ul class="weeks" v-for="week in days" :key="week.value">
        <Icon name="left" class="icon-date"/>
        <li v-for="date in week" :key="date" class="container-date">
          <span class="date">{{date}}</span>
          <span class="day">{{day(date)}}</span>
        </li>
        <Icon name="right" class="icon-date"/>
      </ul>
    </div>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import SelectMonth from '@/components/SelectMonth.vue';
  import Days from '@/constants/weekInMonth';
  import dayjs from 'dayjs';

  @Component({
    components: {SelectMonth}
  })
  export default class Sta extends Vue {
    selectedMonth = 0;
    days = Days;

    day(date: number) {
      const day = dayjs().set('month', this.selectedMonth - 1).set('date', date);
      const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      return week[day.$W];
    }

  }
</script>

<style lang='scss' scoped>
  .calendar {
    margin-top: 20px;
    display: flex;
    > .weeks {
      flex-grow: 1;
      flex-shrink: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      > .icon-date {
        width: 4.5vw;
      }
      > .container-date {
        width: 13vw;
        height: 60px;
        text-align: center;
        > .date {
          display: block;
          line-height: 40px;
          text-align: center;
          font-size: 22px;
          font-family: Consolas, monospace;
        }
        > .day {
          font-size: 12px;
          color: #999999;
        }
      }
    }
  }

</style>