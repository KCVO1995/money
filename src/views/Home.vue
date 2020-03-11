<template>
  <div class="global">
    <Top leftIcon="more" rightIcon="setting">米奇记账</Top>
    <ul class="month">
      <li>5月</li>
      <li class="selected">6月</li>
      <li>7月</li>
    </ul>
    <div class="main">
      <div class="type" @click="toRecord('+')">+</div>
      <div class="output" @click="showMonth">收入/支出</div>
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

  @Component({
    components: {DailyAmount}
  })
  export default class Home extends Vue {
    @Inject() eventBus;

    toRecord(type: string) {
      this.$router.push('/money/0');
      this.$nextTick(() => {
        this.eventBus.$emit('update:type', type);
      });
    }

    showMonth() {
      const x = dayjs.get('month');
      console.log(x);
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
        height: 120px;
        width: 120px;
      }
      > .type {
        height: 50px;
        width: 50px;
        font-size: 30px;
      }
    }

  }
</style>