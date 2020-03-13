<template>
  <div class="global">
    <Top leftIcon="left" rightIcon="setting">账目明细</Top>
    <SelectMonth :selected-month.sync="selectedMonth">placeholder</SelectMonth>
    <SelectDate :selected-date.sync="selectedDate" :selected-month="selectedMonth">placeholder</SelectDate>
    <ShowWeekDaily :selected-date="selectedDate"/>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import SelectMonth from '@/components/SelectMonth.vue';
  import dayjs from 'dayjs';
  import SelectDate from '@/components/SelectDate.vue';
  import ShowAmount from '@/lib/ShowAmount';
  import ShowWeekDaily from '@/components/ShowWeekDaily.vue';


  @Component({components: {ShowWeekDaily, SelectDate, SelectMonth}})
  export default class Sta extends Vue {
    selectedMonth = 0;

    selectedDate = dayjs().set('month', this.selectedMonth - 1).set('date', 1);

    mounted() {this.selectedDate = dayjs().set('month', this.selectedMonth - 1).set('date', 1);}

  }
</script>

<style lang='scss' scoped>
  .global {
    color: #999999;
  }

</style>