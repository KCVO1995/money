<template>
  <div>
    <Top leftIcon="left" rightIcon="setting">账目明细</Top>
    <SelectMonth :selected-month.sync="selectedMonth">placeholder</SelectMonth>
    <div class="calendar">
      <ul class="weeks" v-for="week in days" :key="week.key">
        <Icon name="left" class="icon-date"/>
        <li v-for="date in week" :key="date.key" class="container-date">
          <span class="date">{{date.$D}}</span>
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
  import dayjs from 'dayjs';

  @Component({
    components: {SelectMonth}
  })
  export default class Sta extends Vue {
    selectedMonth = 0;

    get days() {
      return this.createDay(this.selectedMonth - 1);
    }

    getDaysInMonth(month: number) {
      const mon = dayjs().set('month', month).set('date', 1);
      return dayjs(mon).daysInMonth();
    }

    createDay(month: number) {
      const daysInMonth = this.getDaysInMonth(month);
      const daysInLastMonth = this.getDaysInMonth(month - 1);
      const hashTable: { [key: number]: [] } = {};
      let weeks = 1;
      for (let i = 1; i < daysInMonth; i++) {
        const date = dayjs().set('month', month).set('date', i);
        hashTable[weeks] = hashTable[weeks] || [];
        hashTable[weeks].push(date);
        if (date.$W === 0) {weeks++;}
      }
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
      console.log(hashTable);
      return hashTable;
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