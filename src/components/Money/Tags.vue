<template>
  <div class="tags">
    <div class="new">
      <button @click="create">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in dataSource" :key="tag" @click="toggle(tag)"
          :class="{selected: selectedTags.indexOf(tag) >= 0}">{{tag}}
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Tags extends Vue {
    @Prop() dataSource: string[] | undefined;
    selectedTags: string[] = [];

    toggle(tag: string) {
      const index = this.selectedTags.indexOf(tag);
      if (index >= 0) {
        this.selectedTags.splice(index, 1);
      } else {
        this.selectedTags.push(tag);
      }
      this.$emit('update:value', this.selectedTags)
    }

    create() {
      const name = window.prompt('请输入标签名');
      if (this.dataSource && name) {
        if (this.dataSource.indexOf(name) === -1) {
          this.$emit('update:dataSource', [...this.dataSource, name])
        }
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