<template>
  <ul class="month">
    <li v-for="(mon, index) in months" :key="index" @click="selectMonth(mon)" :class="liClass(mon)">{{mon}}月</li>
  </ul>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import dayjs from 'dayjs';

  @Component
  export default class MonthList extends Vue {
    @Prop(Number) selectedMonth: number | undefined;

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
      const currentMonth = dayjs().get('month') + 1;
      this.selectMonth(currentMonth);
    }

    selectMonth(mon: number) {this.$emit('update:selectedMonth', mon);}

    liClass(mon: number) {return {selected: mon === this.selectedMonth};}
  }

</script>

<style lang='scss' scoped>
  @import "~@/assets/style/helper.scss";
  $line-height: 50px;
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
</style>