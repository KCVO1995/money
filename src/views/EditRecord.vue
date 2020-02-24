<template>
  <div>
    <div class="navBar">
      <Icon name="left" class="leftIcon" @click="goBack"/>
      <span class="title">编辑记录</span>
      <Icon class="rightIcon"/>
    </div>
    <div class="form-wrapper">
      <FormItem field-name="标签" placeholder="请输入标签名" @update:value="updateTags"
                :value="beautify(foundRecord.selectedTags)"/>
      <FormItem field-name="金额" placeholder="请输入标签名" @update:value="updateAmount" :value="foundRecord.amount"/>
      <FormItem field-name="日期" placeholder="请输入标签名" @update:value="updateDate" :value="foundRecord.createAt"/>
      <FormItem field-name="备注" placeholder="请输入标签名" @update:value="updateNotes" :value="foundRecord.notes"/>
    </div>
    <div class="buttonWrapper">
      <Button @click="remove">删除记录</Button>
    </div>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import FormItem from '@/components/Money/FormItem.vue';
  import Button from '@/components/Button.vue';
  import store from '@/store/index';
  import Money from '@/views/Money.vue';
  import Tags from '@/components/Money/Tags.vue';
  import Tabs from '@/components/Tabs.vue';
  import NumberPad from '@/components/Money/NumberPad.vue';

  @Component({
    components: {Money, Button, FormItem, Tags, Tabs, NumberPad},
  })
  export default class EditRecord extends Vue {
    get foundRecord() {
      return store.state.foundRecord;
    }

    created() {
      console.log(this.$route.params.id);
      store.commit('findRecord', parseInt(this.$route.params.id));
      if (!this.foundRecord) {
        this.$router.replace('/404');
      }
    }

    beautify(tags: Tag[]) {
      const tagsName = [];
      if (tags) {
        for (let i = 0; i < tags.length; i++) {
          tagsName.push(tags[i].name);
        }
      }
      return tagsName;
    }

    goBack() {
      this.$router.back();
    }


    updateTags(tags: string) {
      console.log(tags);
    }

    updateAmount(amount: number) {
      console.log(amount);
    }

    updateDate(date: string) {
      console.log(date);
    }

    updateNotes(notes: string) {
      console.log(notes);
    }

    remove() {
      if (this.foundTag) {
        store.commit('removeTag', this.foundTag.id);
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