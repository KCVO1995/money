<template>
  <Layout class-prefix="layout">
    <div class="tags">
      <div class="new">
        <button>新增标签</button>
      </div>
      <ul class="current">
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ul>
    </div>

    <label class="notes">
      <span class="name">备注</span>
      <input type="text" placeholder="在这里添加备注">
    </label>

    <ul class="types">
      <li class="selected">支出</li>
      <li>收入</li>
    </ul>

    <div class="numberPad">
      <div class="output">100</div>
      <div class="buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button class="ok">OK</button>
        <button class="zero">0</button>
        <button>.</button>
      </div>
    </div>

  </Layout>
</template>

<script lang='ts'>
  export default {
    name: 'Money',
  };
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column;
  }
</style>
<style lang='scss' scoped>
  @import "~@/assets/style/helper.scss";

  .tags {
    font-size: 14px;
    padding: 16px;
    flex-grow: 1;
    display: flex;
    flex-direction: column-reverse;
    overflow: auto;
    > .current {
      display: flex;
      text-align: center;
      flex-wrap: wrap;
      > li {
        $h: 24px;
        margin-top: 4px;
        padding: 0 18px;
        height: $h;
        margin-right: $h;
        line-height: $h;
        border-radius: $h/2;
        background-color: #D9D9D9;
      }
    }

    > .new {
      padding-top: 16px;

      > button {
        background: transparent;
        border: none;
        color: #999;
        border-bottom: 1px solid;
        padding: 0 4px;
      }
    }
  }

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
      color: #D9D9D9;
      flex-grow: 1;
    }
  }

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