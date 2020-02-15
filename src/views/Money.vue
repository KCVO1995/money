<template>
  <Layout class-prefix="layout">
    <Tags :data-source.sync="tags"/>
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
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator';

  @Component ({
    components: {
      Types,
      NumberPad,
      Tags,
      Notes
    }
  })
  export default class Money extends Vue {
    tags = ['衣', '食', '住', '行']
  }

</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column;
  }
</style>
<style lang='scss' scoped>
</style>