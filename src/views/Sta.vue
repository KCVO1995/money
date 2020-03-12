<template>
  <div class="global">
    <Top leftIcon="left" rightIcon="setting">账目明细</Top>
    <SelectMonth :selected-month.sync="selectedMonth">placeholder</SelectMonth>
    <div class="calendar">
      <ul class="weeks" v-for="week in days" :key="week.key">
        <Icon name="left" class="icon-date"/>
        <li v-for="date in week" :key="date.key" class="container-date">
          <span class="date" :class="currentMonth(date)">{{date.$D}}</span>
        </li>
        <Icon name="right" class="icon-date"/>
      </ul>
    </div>
    <ul class="week-container">
      <li>Mon</li>
      <li>Tue</li>
      <li>Wed</li>
      <li>Thu</li>
      <li>Fri</li>
      <li>Sat</li>
      <li>Sun</li>
    </ul>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import SelectMonth from '@/components/SelectMonth.vue';
  import dayjs from 'dayjs';
  type dateGroup = { [key: number]: [] }

  @Component({
    components: {SelectMonth}
  })
  export default class Sta extends Vue {
    selectedMonth = 0;

    get days() {return this.createDay(this.selectedMonth - 1);}

    getDaysInMonth(month: number) {
      const mon = dayjs().set('month', month).set('date', 1);
      return dayjs(mon).daysInMonth();
    }

    currentMonth(date: any) {
      const currentDay = dayjs().set('month', this.selectedMonth - 1).set('date', 1);
      console.log(dayjs(date).isSame(currentDay, 'month'));
      return {
        currentMonth: dayjs(date).isSame(currentDay, 'month')
      };
    }

    createDay(month: number) {
      const daysInMonth = this.getDaysInMonth(month);
      const hashTable: dateGroup = {};
      let weeks = 1;
      for (let i = 1; i < daysInMonth; i++) {
        const date = dayjs().set('month', month).set('date', i);
        hashTable[weeks] = hashTable[weeks] || [];
        hashTable[weeks].push(date);
        if (date.$W === 0) {weeks++;}
      }
      this.complement(hashTable, month);
      return hashTable;
    }

    complement(hashTable: dateGroup, month: number) {
      const daysInLastMonth = this.getDaysInMonth(month - 1);
      const last = hashTable[Object.keys(hashTable).length];
      const first = hashTable[1];
      if (first.length < 7) {
        const delta = 7 - first.length;
        for (let i = 0; i < delta; i++) {
          const date = dayjs().set('month', month - 1).set('date', daysInLastMonth - i);
          first.unshift(date);
        }
      }
      if (last.length < 7) {
        const delta = 7 - last.length;
        for (let i = 0; i < delta; i++) {
          const date = dayjs().set('month', month + 1).set('date', i + 1);
          last.push(date);
        }
      }
    }


  }
</script>

<style lang='scss' scoped>
  .global {
    color: #999999;
    .calendar {
      margin-top: 20px;
      display: flex;
      border: 1px solid red;
      overflow: auto;
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
            &.currentMonth {
              color: black;
            }
          }
        }
      }
    }
    .week-container {
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 91vw;
      transform: translateY(-130%);
      > li {
        line-height: 12px;
        font-size: 12px;
        width: 13vw;
        flex-grow: 1;
        text-align: center;
      }
    }
  }

</style>