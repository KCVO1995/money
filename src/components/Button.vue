<template>
    <button @click="$emit('click', $event)">
      <slot/>
    </button>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Button extends Vue {

  }

</script>

<style lang='scss' scoped>
  button {
    color: #fff;
    background: #767676;
    min-height: 40px;
    padding: 0 15px;
    font-size: 17px;
    border: none;
    border-radius: 4px;
  }
</style>