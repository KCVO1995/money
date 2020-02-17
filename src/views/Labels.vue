<template>
  <Layout class="global">
    <div class="tagList">
      <router-link :to="`/labels/edit/${tag.id}`" class="tag" v-for="tag in tagList" :key="tag.id">
        <span>{{tag.name}}</span>
          <Icon name="right"/>
      </router-link>
    </div>
    <div class="createTagWrapping">
      <Button @click="createTag">新建标签</Button>
    </div>
  </Layout>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import tagListModel from '@/models/tagListModel';
  import Button from '@/components/Button.vue';

  tagListModel.fetch();
  @Component({
    components: {Button}
  })
  export default class Labels extends Vue {
    tagList = tagListModel.data;

    createTag() {
      const name = prompt('请输入标签名');
      if (name) {
        const message = tagListModel.create(name);
        if (message === 'duplicated') {
          alert('便签名重复')
        }
      }
    }

  }
</script>

<style lang='scss' scoped>
  .tagList {
    background: #ffffff;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);

    > .tag {
      border-bottom: 1px solid #e6e6e6;
      margin-left: 16px;
      padding: 10px 16px 10px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;

      > span {
        font-weight: 500;
        color: #000;
      }

      .icon {
        width: 24px;
        height: 24px;
      }
    }
  }

  .createTagWrapping {
    text-align: center;
    margin-top: 45px;
  }


</style>