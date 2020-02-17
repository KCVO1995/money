<template>
  <label class="notes">
    <span class="name">{{fieldName}}</span>
    <input type="text" v-model="value" :placeholder="this.placeholder">
  </label>
</template>
<script lang='ts'>
  import Vue from 'vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';

  @Component
  export default class FormItem extends Vue {
    value = '';
    @Prop(String) fieldName: string | undefined;
    @Prop({default: ''}) placeholder: string | undefined;

    @Watch('value')
    onValueChange(value: string) {
      this.$emit('update:value', value);
    }
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