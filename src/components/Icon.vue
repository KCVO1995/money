<template>
  <svg class="icon" @click="$emit('click', $event)">
    <use :xlink:href= "'#' + name" />
  </svg>
</template>
<script lang='ts'>
  export default {
    props: ['name']
  };
</script>

<style lang='scss' scoped>
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>