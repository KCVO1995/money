<template>
  <div>
    <Top leftIcon="left">标签管理</Top>
    <ul class="tagList">
      <li class="tag" @click="createLabel">
        <Icon name="add" class="iconTag"/>
        <span>新增标签</span>
      </li>
      <li v-for="tag in tagList" :key="tag.id" class="tag">
        <TagIcon :tagName="tag.name" class="iconTag"/>
        <span>{{ tag.name }}</span>
        <Icon name="trash" class="trashIcon" @click="removeTag(tag.id)"/>
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import store from '@/store/index';

@Component
export default class Labels extends Vue {
  get tagList() {
    return store.state.tagList;
  }

  created() {
    this.getTags()
  }

  removeTag(id: number) {
    this.$store.dispatch('deleteTag', id);
  }

  async getTags() {
    await this.$store.dispatch('getTags');
  }

  createLabel() {
    this.$router.push('/labels/create');
  }

}
</script>

<style lang='scss' scoped>
@import "~@/assets/style/helper.scss";

$color: #999;

.tagList {
  margin: 0 25px;
  color: $color;

  > .tag {
    @extend %Shadow;
    background: white;
    height: 65px;
    display: flex;
    align-items: center;
    margin-top: 20px;
    border-radius: 15px;

    > .iconTag,
    .trashIcon {
      fill: $color;
      width: 30px;
      height: 30px;
      margin: auto 20px;
    }

    &:last-child {
      margin-bottom: 20px;
    }

    > span {
      display: block;
      padding-left: 20px;
      border-left: 1px solid $color;
      line-height: 30px;
      font-size: 20px;
      flex-grow: 1;
    }
  }
}
</style>
