<template>
  <div class="global">
    <Top leftIcon="left" rightIcon="setting">账目明细</Top>
    <SelectMonth :selected-month.sync="selectedMonth">placeholder</SelectMonth>
    <SelectDate :selected-date.sync="selectedDate" :selected-month="selectedMonth">placeholder</SelectDate>
    <ShowWeekDaily :selected-date="selectedDate"/>
    <ul class="record-list">
      <li v-for="(record,index) in todayRecord('+')" :key="index" class="record">
        <TagIcon :tagName="record.selectedTags[0].name" class="icon-tag"/>
        <div class="detail">
          <span class="record-amount income">￥{{record.amount}}</span>
          <span class="record-tag">{{record.selectedTags[0].name}}收入</span>
        </div>
      </li>
      <li v-for="(record,index) in todayRecord('-')" :key="index" class="record">
        <TagIcon :tagName="record.selectedTags[0].name" class="icon-tag"/>
        <div class="detail">
          <span class="record-amount outlay">￥{{record.amount}}</span>
          <span class="record-tag">{{record.selectedTags[0].name}}支出</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import SelectMonth from '@/components/SelectMonth.vue';
  import dayjs from 'dayjs';
  import SelectDate from '@/components/SelectDate.vue';
  import ShowWeekDaily from '@/components/ShowWeekDaily.vue';
  import ShowAmount from '@/lib/ShowAmount';


  @Component({components: {ShowWeekDaily, SelectDate, SelectMonth}})
  export default class Sta extends Vue {
    selectedMonth = 0;

    selectedDate = dayjs().set('month', this.selectedMonth - 1).set('date', 13);


    mounted() {this.selectedDate = dayjs().set('month', this.selectedMonth - 1).set('date', 13);}

    todayRecord(type: string) {return ShowAmount(type, 'day', this.selectedDate, true);}

  }
</script>

<style lang='scss' scoped>
  @import "~@/assets/style/helper.scss";
  $color: #999;
  .global {
    color: $color;
    > .record-list {
      margin: 0 25px;
      color: $color;
      > .record {
        @extend %Shadow;
        background: white;
        height: 65px;
        display: flex;
        align-items: center;
        margin-top: 20px;
        border-radius: 15px;
        > .icon-tag {margin: auto 20px;}
        > .detail {
          padding-left: 20px;
          border-left: 1px solid $color;
          font-size: 14px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          > .record-amount {
            font-size: 18px;
            &.income {color: #1296DB}
            &.outlay {color: rgba(225, 90, 130)}
          }
        }
      }
    }

  }
</style>