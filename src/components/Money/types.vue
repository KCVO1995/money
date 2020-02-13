<template>
  <ul class="types">
    <li class="selected">支出</li>
    <li>收入</li>
  </ul>
</template>
<script lang='ts'>
  export default {
    name: 'types'
  };
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