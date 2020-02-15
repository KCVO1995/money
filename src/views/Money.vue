<template>
  <Layout class-prefix="layout">
    <Tags/>
    <Notes/>
    <Types/>
    <NumberPad/>
  </Layout>
</template>

<script lang='ts'>
  import Types from '@/components/Money/Types.vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Tags from '@/components/Money/Tags.vue';
  import Notes from '@/components/Money/Notes.vue';

  export default {
    name: 'Money',
    components: {NumberPad, Types, Tags, Notes},
  };
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column;
  }
</style>
<style lang='scss' scoped>
</style>