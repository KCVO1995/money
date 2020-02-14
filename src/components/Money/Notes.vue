<template>
  <label class="notes">
    <span class="name">备注</span>
    <input type="text" placeholder="在这里添加备注">
  </label>
</template>
<script lang='ts'>
  export default {
    name: 'Notes'
  };
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