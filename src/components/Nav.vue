<template>
  <nav>
    <router-link to="/labels" class="nav-item" active-class="selected">
      <Icon name='label'/>
      标签
    </router-link>
    <router-link to="/money" class="nav-item" active-class="selected">
      <Icon name='money'/>
      记一笔
    </router-link>
    <router-link to="/statistics" class="nav-item" active-class="selected">
      <Icon name='statistics'/>
      统计
    </router-link>
  </nav>
</template>

<script lang='ts'>
  const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
  try {
    importAll(require.context('../assets/icons', true, /\.svg$/));
  } catch (e) {
    console.log(e);
  }

  export default {
    name: 'Nav'
  };
</script>

<style lang="scss">
  @import '~@/assets/style/helper.scss';

  nav {
    display: flex;
    justify-content: space-around;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
    font-size: 12px;
    > .nav-item {
      padding: 2px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-grow: 1;
      color: #BFBFBF;
      .icon {
        width: 32px;
        height: 32px;
      }
    }
    > .nav-item.selected {
      color: $color-highLight;
    }
  }
</style>
