<template>
  <div class="tags">
    <ul class="current">
      <li v-for="tag in tagList" :key="tag.id" @click="toggle(tag)"
          :class="select(tag)">
        <Icon :name="`${tag.name}`" class="iconTag"/>
        {{tag.name}}
      </li>
      <li class="new" @click="createTag">
        <Icon name="add" class="iconTag">placeholder</Icon>
        <span>新增</span>
      </li>
    </ul>
    <div class="more">
      滑动选择更多
    </div>
  </div>
</template>

<script lang='ts'>
  import {Component, Prop} from 'vue-property-decorator';
  import store from '@/store/index';
  import {mixins} from 'vue-class-component';
  import CreateTag from '@/mixins/CreateTag.vue';


  @Component
  export default class Tags extends mixins(CreateTag) {
    get tagList() {
      return store.state.tagList;
    }

    @Prop() selectedTags: Tag[] | undefined;

    select(tag: Tag) {
      const arr = this.selectedTags?.map(item => item.id);
      if (arr) {
        return {selected: arr.indexOf(tag.id) >= 0};
      }
    }

    toggle(tag: Tag) {
      if (this.selectedTags) {
        const arr = this.selectedTags?.map(item => item.id);
        const index = arr.indexOf(tag.id);
        if (index >= 0) {
          this.selectedTags.splice(index, 1);
        } else {
          this.selectedTags.push(tag);
        }
        this.$emit('update:value', this.selectedTags);
      }
    }
  }
</script>

<style lang='scss' scoped>
  $bg: #f8f8f8;
  $color: #999;
  .tags {
    font-size: 14px;
    color: $color;
    position: relative;
    > .current {
      display: flex;
      text-align: center;
      overflow: auto;
      > li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 75px;
        min-width: 75px;
        background: $bg;
        > .iconTag {
          fill: $color;
          width: 30px;
          height: 30px;
          margin-bottom: 5px;
        }
        &.selected {
          color: #fff;
          background: darken($bg, 20%);
          border-radius: 15px;
          > .iconTag {
            fill: white;
          }
        }
      }
    }
    > .more {
      position: absolute;
      bottom: -12px;
      right: 12px;
      line-height: 12px;
      font-size: 12px;


    }
  }
</style>