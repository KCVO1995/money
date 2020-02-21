<template>
  <ul class="tabs" :class="{[classPrefix + '-tabs']: classPrefix}">
    <li v-for="item in dataSource" :key="item.value" class="tabs-item" :class="liClass(item)" @click="select(item)">
      {{item.text}}
    </li>
  </ul>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  type DataSourceItem = { text: string; value: string }
  @Component
  export default class Tabs extends Vue {
    @Prop({required: true, type: Array}) dataSource!: DataSourceItem[];
    @Prop(String) value!: string;
    @Prop(String) classPrefix?: string;

    liClass(item: DataSourceItem) {
      return {
        [this.classPrefix + '-tabs-item']: this.classPrefix,
        selected: item.value === this.value,
      };
    }

    select(item: DataSourceItem) {
      this.$emit('update:value', item.value);
    }
  }
</script>

<style lang='scss' scoped>
  .tabs {
    background: #C4C4C4;
    font-size: 24px;
    display: flex;

    &-item {
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