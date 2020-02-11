<template>
  <div>
    <router-link to="/money">
      记账
      <Icon name = 'money'/>
    </router-link>
    |
    <router-link to="/labels">
      标签
      <Icon name = 'label'/>
    </router-link>
    |
    <router-link to="/statistics">
      统计
      <Icon name = 'statistics'/>
    </router-link>
  </div>
</template>

<script lang='ts'>
  const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
  try {
    importAll(require.context('../assets/icons', true, /\.svg$/));
  } catch (e) {
    console.log(e)
  }

  export default {
    name: 'Nav'
  };
</script>
