<template>
  <div class="global">
    <Top leftIcon="left">账目明细</Top>
    <SelectMonth :selected-month.sync="selectedMonth">placeholder</SelectMonth>
    <SelectDate :selected-date.sync="selectedDate" :selected-month="selectedMonth">placeholder</SelectDate>
    <ShowWeekDaily :selected-date="selectedDate"/>
    <span class="note">今天明细</span>
    <ul class="record-list">
      <li v-for="record in recordsIncome" :key="record.id" class="record">
        <TagIcon :tagName="record.tag.name" class="icon-tag"/>
        <div class="detail">
          <span class="record-amount income">￥{{ record.amount }}</span>
          <span class="record-tag">{{ record.tag.name }}收入</span>
        </div>
        <span class="detail-note">{{ record.note }}</span>
        <Icon name="trash" class="trash" @click="remove(record.id)"/>
      </li>
      <li v-for="record in recordsExpend" :key="record.id" class="record">
        <TagIcon :tagName="record.tag.name" class="icon-tag"/>
        <div class="detail">
          <span class="record-amount outlay">￥{{ record.amount }}</span>
          <span class="record-tag">{{ record.tag.name }}支出</span>
        </div>
        <span class="detail-note">{{ record.note }}</span>
        <Icon name="trash" class="trash" @click="remove(record.id)"/>
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import SelectMonth from '@/components/SelectMonth.vue';
import dayjs, {Dayjs} from 'dayjs';
import SelectDate from '@/components/SelectDate.vue';
import ShowWeekDaily from '@/components/ShowWeekDaily.vue';
import store from '@/store';
import api from '@/api';


@Component({components: {ShowWeekDaily, SelectDate, SelectMonth}})
export default class Sta extends Vue {
  selectedMonth = 0;
  selectedDate = dayjs();
  recordsExpend = [];
  recordsIncome = [];

  @Watch('selectedDate', {immediate: true})
  async onSelectedDateChanged(value: Dayjs) {
    const query = {
      // eslint-disable-next-line @typescript-eslint/camelcase
      start_at: value.startOf('date').toISOString(),
      // eslint-disable-next-line @typescript-eslint/camelcase
      end_at: value.endOf('date').toISOString(),
      // eslint-disable-next-line @typescript-eslint/camelcase
      is_expend: true
    };
    const {data: {rows: expend}} = await api.record.list(query);
    // eslint-disable-next-line @typescript-eslint/camelcase
    query.is_expend = false;
    const {data: {rows: income}} = await api.record.list(query);
    this.recordsExpend = expend;
    this.recordsIncome = income;

  }

  mounted() {
    this.selectedDate = dayjs();
    setTimeout(() => {
      const selectedDate = this.$el.querySelector('.selectedDate');
      if (selectedDate) {
        let left = selectedDate.getBoundingClientRect().left;
        const {width} = document.body.getBoundingClientRect();
        const calendar = document.querySelector('.calendar');
        let toLeft = 0;
        for (let i = 0; i < 10; i++) {
          if (left < width) {
            toLeft = width * i;
            break;
          }
          left -= width;
        }
        if (calendar) {
          calendar.scrollLeft = toLeft;
        }
      }
    }, 350);
  }


  todayRecord() {
    // return ShowAmount(type, 'day', this.selectedDate, true);
    return 100;
  }

  remove(id: number) {
    store.commit('removeRecord', id);
  }

}
</script>

<style lang='scss' scoped>
@import "~@/assets/style/helper.scss";

$color: #999;
.global {
  color: $color;

  > .note {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 14px;
    line-height: 14px;
    margin-top: 25px;
  }

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

      > .icon-tag {
        margin: auto 20px;
      }

      > .trash {
        width: 30px;
        height: 30px;
        margin-right: 15px;
      }

      &:last-child {
        margin-bottom: 20px;
      }

      > .detail {
        flex-grow: 1;
        flex-shrink: 1;
        padding-left: 15px;
        border-left: 1px solid $color;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        > .record-amount {
          font-size: 18px;

          &.income {
            color: #1296DB
          }

          &.outlay {
            color: rgba(225, 90, 130)
          }
        }

        > .record-tag {
          display: block;
          flex-shrink: 1;
        }
      }

      > .detail-note {
        width: 100px;
        display: block;
        font-size: 12px;
      }
    }
  }

}
</style>
