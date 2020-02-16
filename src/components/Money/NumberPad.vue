<template>
  <div class="numberPad">
    <div class="output">{{output}}</div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="remove">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button @click="ok" class="ok">OK</button>
      <button @click="inputContent" class="zero">0</button>
      <button @click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class NumberPad extends Vue {
    output = '0';

    inputContent(event: MouseEvent) {
      const button = event.target as HTMLButtonElement;
      const input = button.textContent as string;

      // 最大支持16位数字 使用0-9替代初始0,并排除 00 .. 的情况
      if (this.output.length < 16) {
        if (this.output === '0' && input !== '.') {
          this.output = input;
        } else if (input !== '.' || input === '.' && this.output.indexOf('.') === -1) {
          this.output += input;
        }
      }
    }

    remove() {
      if (this.output.length > 1) {
        this.output = this.output.slice(0, -1);
      } else {
        this.output = '0';
      }
    }

    clear() {
      this.output = '0';
    }

    ok() {
      if (this.output === '0.') {
        alert('请输入正确的金额');
        this.output = '0';
      }
      this.$emit('update:value', this.output);
      this.output = '0';
    }
  }
</script>

<style lang='scss' scoped>
  @import "~@/assets/style/helper.scss";

  .numberPad {
    > .output {
      @extend %innerShadow;
      font-size: 36px;
      font-family: Consolas, monospace;
      padding: 9px 16px;
      text-align: right;
    }

    > .buttons {
      @extend %clearFix;

      > button {
        float: left;
        height: 64px;
        width: 25%;
        border: none;
        background: transparent;

        &.ok {
          height: 128px;
          float: right;
        }

        &.zero {
          width: 50%;
        }

        $bgc: #f2f2f2;

        &:nth-child(1) {
          background: $bgc;
        }

        &:nth-child(2), &:nth-child(5) {
          background: darken($bgc, 4%);
        }

        &:nth-child(3), &:nth-child(6), &:nth-child(9) {
          background: darken($bgc, 4*2%);
        }

        &:nth-child(4), &:nth-child(7), &:nth-child(10) {
          background: darken($bgc, 4*3%);
        }

        &:nth-child(8), &:nth-child(11), &:nth-child(13) {
          background: darken($bgc, 4*4%);
        }

        &:nth-child(14) {
          background: darken($bgc, 4*5%);
        }

        &:nth-child(12) {
          background: darken($bgc, 4*6%);
        }
      }
    }
  }
</style>