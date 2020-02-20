<template>
  <div class="tags">
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in tagList" :key="tag.id" @click="toggle(tag.name)"
          :class="{selected: selectedTags && selectedTags.indexOf(tag.name) >= 0}">{{tag.name}}
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
  import {Component, Prop} from 'vue-property-decorator';
  import store from '@/store/index';
  import {mixins} from 'vue-class-component';
  import CreateTag from '@/mixins/CreateTag.vue';


  @Component({
    computed: {
      tagList() {
        return store.state.tagList;
      }
    }
  })
  export default class Tags extends mixins(CreateTag) {
    @Prop() selectedTags: string[] | undefined;

    toggle(tagName: string) {
      if (this.selectedTags) {
        const index = this.selectedTags.indexOf(tagName);
        if (index >= 0) {
          this.selectedTags.splice(index, 1);
        } else {
          this.selectedTags.push(tagName);
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

      > li {
        $h: 24px;
        $bg: #D9D9D9;
        margin-top: 4px;
        padding: 0 18px;
        height: $h;
        margin-right: $h;
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