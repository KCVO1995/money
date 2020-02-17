<template>
  <Layout>
    <div class="navBar">
      <router-link to="/labels">
        <Icon name="left" class="leftIcon"/>
      </router-link>
      <span class="title">编辑标签</span>
      <Icon class="rightIcon"/>
    </div>
    <div class="form-wrapper">
      <FormItem field-name="标签名" :placeholder="tagName"/>
    </div>
    <div class="buttonWrapper">
      <Button>删除标签</Button>
    </div>
  </Layout>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import tagListModel from '@/models/tagListModel';
  import FormItem from '@/components/Money/FormItem.vue';
  import Button from '@/components/Button.vue';

  @Component({
    components: {Button, FormItem}
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
  @import "~@/assets/style/helper.scss";
  .navBar {
    text-align: center;
    font-size: 16px;
    padding: 12px 16px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > .title {
    }
    > a > .leftIcon {
      width: 24px;
      height: 24px;
    }
    > .rightIcon {
      width: 24px;
      height: 24px;
    }
  }
  .form-wrapper {
    @extend %bottomShadow;
    background: #fff;
    margin-top: 8px;
  }
  .buttonWrapper {
    text-align: center;
    margin-top: 44px;
  }


</style>