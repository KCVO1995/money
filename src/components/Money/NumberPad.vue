<template>
  <div class="numberPad">
    <div class="output">
      <span class="clear" @click="clear">清除</span>
      <div class="amount">
        {{output}}
      </div>
      <span class="ok" @click="ok">提交</span>
    </div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button @click="inputContent">.</button>
      <button @click="inputContent" class="zero">0</button>
      <button @click="remove">
        <Icon name="退格"/>
      </button>
    </div>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class NumberPad extends Vue {
    @Prop(Number) value: number | undefined;
    output = this.value && this.value.toString() || '0';

    inputContent(event: MouseEvent) {
      const button = event.target as HTMLButtonElement;
      const input = button.textContent as string;

      // 最大支持16位数字 使用0-9替代初始0,并排除 00 .. 的情况
      if (this.output.length < 10) {
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
      } else {
        this.$emit('update:value', parseFloat(this.output));
        this.$emit('submit');
        this.output = '0';
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import "~@/assets/style/helper.scss";

  .numberPad {
    > .output {
      margin: 15px auto 15px auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 250px;
      height: 50px;
      font-family: Consolas, monospace;
      color: #999;
      > .amount {
        font-size: 32px;
        color: black;
      }
      > .ok,
      .clear {
        font-size: 18px;
        color: #666666;
        border-bottom: 1.5px solid #1296DB;
      }
    }
    > .buttons {
      width: 275px;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      > button {
        @extend %Shadow;
        color: #999;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        margin-bottom: 20px;
        width: 70px;
        height: 70px;
        background: white;
        border: none;
        border-radius: 50%;
        flex-shrink: 0;
        > .icon {
          width: 26px;
          height: 26px
        }
        &:active {
          color: white;
          background: rgb(175, 190, 244);
        }
      }
    }
  }
</style>