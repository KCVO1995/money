<template>
  <ul class="types">
    <li :class="{[classPrefix + '-item']: classPrefix, selected: value === '-'}" @click="selectType('-')">支出</li>
    <li :class="{[classPrefix + '-item']: classPrefix, selected: value === '+'}" @click="selectType('+')">收入</li>
  </ul>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Types extends Vue {
    @Prop(String) readonly value: string | undefined;
    @Prop(String) readonly classPrefix: string | undefined;

    selectType(value: string) {
      if (value === '-' || value === '+') {
        this.$emit('update:value', value);
      } else {
        throw new Error('请输入+ — ');
      }
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