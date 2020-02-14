<template>
  <div class="layout-wrapper" :style="{ height: screenHeight +'px' }">
    <div class="content" :class="classPrefix&&`${classPrefix}-content` ">
      <slot/>
    </div>
    <Nav/>
  </div>
</template>

<script lang='ts'>
  export default {
    data() {
      return {
        screenHeight: document.documentElement.clientHeight
      }
    },
    name: 'Layout',
    props: ['classPrefix']
  };
</script>

<style lang='scss' scoped>
  .layout-wrapper {
    display: flex;
    flex-direction: column;
  }
  .content {
    flex-grow: 1;
    overflow: auto;
  }
</style>