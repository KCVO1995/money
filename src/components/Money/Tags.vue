<template>
  <div class="tags">
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in tagList" :key="tag.id" @click="toggle(tag)"
          :class="x(tag)">{{tag.name}}
      </li>
    </ul>
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

    x(tag: Tag) {
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
          console.log(tag);
          this.selectedTags.push(tag);
          console.log(this.selectedTags);
        }
        this.$emit('update:value', this.selectedTags);
      }
    }
  }
</script>

<style lang='scss' scoped>
  .tags {
    font-size: 14px;
    padding: 16px;
    flex-grow: 1;
    display: flex;
    flex-direction: column-reverse;
    overflow: auto;
    background: #fff;

    > .current {
      display: flex;
      text-align: center;
      flex-wrap: wrap;
      margin-right: -16px;

      > li {
        $h: 24px;
        $bg: #D9D9D9;
        margin-top: 4px;
        padding: 0 18px;
        height: $h;
        margin-right: 18px;
        line-height: $h;
        border-radius: $h/2;
        background-color: $bg;

        &.selected {
          color: #fff;
          background: darken($bg, 30%);
        }
      }


    }

    > .new {
      padding-top: 16px;

      > button {
        background: transparent;
        border: none;
        color: #999;
        border-bottom: 1px solid;
        padding: 0 4px;
      }
    }
  }
</style>