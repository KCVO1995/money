<template>
  <label class="formItem">
    <span class="name">{{fieldName}}</span>
    <input type="text" :value="value" @input="onValueChange($event.target.value)" :placeholder="placeholder">
  </label>
</template>
<script lang='ts'>
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class FormItem extends Vue {
    @Prop({default: ''}) readonly value: string | undefined;
    @Prop(String) fieldName: string | undefined;
    @Prop({default: ''}) placeholder: string | undefined;

    onValueChange(value: string) {
      this.$emit('update:value', value);
    }
  }
</script>

<style lang='scss' scoped>
  .formItem {
    display: flex;
    align-items: center;
    font-size: 14px;
    padding: 0 16px;

    .name {
      padding-right: 16px;
    }

    input {
      background: transparent;
      border: none;
      height: 40px;
      flex-grow: 1;
      color: #999;
    }
  }
</style>