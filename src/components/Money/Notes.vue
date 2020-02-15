<template>
  <label class="notes">
    {{value}}
    <span class="name">备注</span>
    <input type="text" v-model="value" placeholder="在这里添加备注">
  </label>
</template>
<script lang='ts'>
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Notes extends Vue {
    value = '';
  }
</script>

<style lang='scss' scoped>
  .notes {
    display: flex;
    align-items: center;
    background: #f5f5f5;
    font-size: 14px;
    padding: 0 16px;

    .name {
      padding-right: 16px;
    }

    input {
      background: transparent;
      border: none;
      height: 64px;
      flex-grow: 1;
      color: #999;
    }
  }
</style>