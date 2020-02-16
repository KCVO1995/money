<template>
  <ul class="types">
    <li :class="type === '-' && 'selected'" @click="selectType('-')">支出</li>
    <li :class="type === '+' && 'selected'" @click="selectType('+')">收入</li>
  </ul>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';

  @Component
  export default class Types extends Vue {
    type = '-'; // 表示收入 + 支出 -

    selectType(type: string) {
      if (type === '-' || type === '+') {
        this.type = type;
      } else {
        throw new Error('请输入+ — ');
      }
    }

    @Watch('type', {immediate: true})
    onTypeChange(value: string) {

      this.$emit('update:value', value)
    }
  }
</script>

<style lang='scss' scoped>
  .types {
    background: #C4C4C4;
    font-size: 24px;
    display: flex;

    > li {
      flex-grow: 1;
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      &.selected::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: #333;
        width: 100%;
        height: 3px;
      }
    }
  }
</style>