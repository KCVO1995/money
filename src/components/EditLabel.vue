<template>
  <Layout>
    <div class="navBar">
      <Icon name="left" class="leftIcon" @click="goBack"/>
      <span class="title">编辑标签</span>
      <Icon class="rightIcon"/>
    </div>
    <div class="form-wrapper">
      <FormItem field-name="标签名" :placeholder="needPlaceholder && tag.name" @update:value="update"/>
    </div>
    <div class="buttonWrapper">
      <Button @click="remove">删除标签</Button>
    </div>
  </Layout>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import FormItem from '@/components/Money/FormItem.vue';
  import Button from '@/components/Button.vue';

  @Component({
    components: {Button, FormItem}
  })
  export default class EditLabel extends Vue {
    tag?: Tag = undefined;
    needPlaceholder = true;

    created() {
      console.log(this.$route.params);
      const id = parseInt(this.$route.params.id);
      const tag = window.findTag(id);
      if (tag) {
        this.tag = tag;
      } else {
        this.$router.replace('/404');
      }
    }

    goBack() {
      this.$router.back();
    }

    update(name: string) {
      if (this.tag) {
        this.needPlaceholder = name !== '';
        window.updateTag(this.tag.id, name)
      }
    }

    remove() {
      if (this.tag) {
        if (window.removeTag(this.tag.id)) {
          this.$router.back();
        } else {
          alert('删除失败');
        }

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