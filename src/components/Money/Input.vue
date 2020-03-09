<template>
  <label class="formInput">
    <Icon name="input" class="Icon"/>
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
  .formInput {
    display: flex;
    align-items: center;
    font-size: 14px;
    margin: 0 60px;
    border-bottom: 2px solid #999999;
    height: 40px;
    > .icon {
      margin-right: 30px;
    }
    input {
      background: transparent;
      border: none;
      flex-grow: 1;
      color: #999;
    }
  }
</style>
