<template>
  <Layout>
    <div>
      <Icon name="left"/>
      <span>编辑标签</span>
    </div>
    <Notes field-name="标签名" :placeholder="tagName"/>

    <div>
      <button>删除标签</button>
    </div>
  </Layout>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import tagListModel from '@/models/tagListModel';
  import Notes from '@/components/Money/Notes.vue';

  @Component({
    components: {Notes}
  })
  export default class EditLabel extends Vue {
    tagName = '';

    created() {
      console.log(this.$route.params);
      const id = this.$route.params.id;
      tagListModel.fetch();
      const tags = tagListModel.data;
      const tag = tags.filter(tag => tag.id === id)[0];
      if (tag) {
        this.tagName = tag.name
      } else {
        this.$router.replace('/404');
      }
    }

  }

</script>

<style lang='scss' scoped>

</style>