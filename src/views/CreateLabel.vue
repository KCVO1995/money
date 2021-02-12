<template>
  <div>
    <Top leftIcon="left">新增标签</Top>
    <ul>
      <li v-for="(newTag, index) in newTagList" :key="index" @click="createLabel(newTag)">
        <Icon :name="`${newTag}`" class="iconTag"/>
        {{newTag}}
      </li>
      <li @click="createTag">
        <Icon name="add" class="iconTag"/>
        自定义
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
  import iconList from '@/constants/iconList';
  import {Component} from 'vue-property-decorator';
  import {mixins} from 'vue-class-component';
  import CreateTag from '@/mixins/CreateTag.vue';

  @Component
  export default class CreateLabel extends mixins(CreateTag) {
    newTagList = iconList;

    createLabel(newTag: string) {
      this.$store.commit('createTag', newTag);
      this.$router.back();
    }
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
