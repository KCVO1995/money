<template>
  <div>
    <Top leftIcon="left" rightIcon="setting">新增标签</Top>
    <ul class="current">
      <li v-for="tag in tagList" :key="tag.id" @click="toggle(tag)"
          :class="select(tag)">
        <Icon :name="`${tag.name}`" class="iconTag" v-if="showIcon(tag.name)"/>
        <div v-else class="firstName">{{firstName(tag.name)}}</div>
        {{tag.name}}
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class CreateTag extends Vue {

  }

</script>

<style lang='scss' scoped>

</style>