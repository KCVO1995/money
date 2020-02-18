<template>
  <Layout class="global">
    <div class="tagList">
      <router-link :to="`/labels/edit/${tag.id}`" class="tag" v-for="tag in tagList" :key="tag.id">
        <span>{{tag.name}}</span>
        <Icon name="right" class="rightIcon"/>
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
  import Button from '@/components/Button.vue';

  @Component({
    components: {Button}
  })
  export default class Labels extends Vue {
    tagList = window.tagList;

    createTag() {
      const name = prompt('请输入标签名');
      if (name) {
        window.createTag(name);
      }
    }

  }
</script>

<style lang='scss' scoped>
  @import "~@/assets/style/helper.scss";

  .tagList {
    @extend %bottomShadow;
    background: #ffffff;

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

      .rightIcon {
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