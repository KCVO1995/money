<template>
  <div class="monthsGroup">
    <ul class="month">
      <li v-for="(mon, index) in months" :key="index" @click="selectMonth(mon)" :class="liClass(mon)">{{mon}}月</li>
    </ul>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import dayjs from 'dayjs';

  @Component
  export default class MonthList extends Vue {
    @Prop(Number) selectedMonth: number | undefined;

    get months() {
      const months = [];
      for (let i = 1; i < 13; i++) {months.push(i);}
      return months;
    }

    mounted() {
      setTimeout(() => {
        const {width} = document.body.getBoundingClientRect();
        const currentMonth = dayjs().get('month') + 1;
        this.selectMonth(currentMonth);
        const monthGroup = this.$el;
        if (currentMonth > 1) {
          monthGroup.scrollLeft = (currentMonth - 2) * width / 3;
        }
      }, 350);

    }

    selectMonth(mon: number) {this.$emit('update:selectedMonth', mon);}

    liClass(mon: number) {return {selected: mon === this.selectedMonth};}

  }

</script>

<style lang='scss' scoped>
  @import "~@/assets/style/helper.scss";
  $line-height: 50px;
  .monthsGroup {
    overflow: auto;
    .month {
      width: 400vw;
      margin-top: 20px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      transform: translateY(-5%);
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