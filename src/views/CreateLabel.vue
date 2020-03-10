<template>
  <div>
    <Top leftIcon="left" rightIcon="setting">新增标签</Top>
    <ul>
      <li v-for="(newTag, index) in newTagList" :key="index">
        <Icon :name="`${newTag}`" class="iconTag"/>
        {{newTag}}
      </li>
      <li>
        <Icon name="add" class="iconTag"/>
        自定义
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import iconList from '@/constants/iconList';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class CreateTag extends Vue {
    newTagList = iconList;
  }

</script>

<style lang='scss' scoped>
  ul {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    color: #999;
    > li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100px;
      min-width: 75px;
      > .iconTag {
        fill: #999;
        width: 30px;
        height: 30px;
        margin-bottom: 5px;
      }
    }
  }
</style>