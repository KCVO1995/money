<template>
  <div class="tags">
    <div class="new">
      <button>新增标签</button>
    </div>
    <ul class="current">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
    </ul>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Tags extends Vue {
    tags: string[] = []

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
        margin-top: 4px;
        padding: 0 18px;
        height: $h;
        margin-right: $h;
        line-height: $h;
        border-radius: $h/2;
        background-color: #D9D9D9;
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