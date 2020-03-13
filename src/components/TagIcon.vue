<template>
  <div>
    <Icon :name="tagName" class="iconTag" v-if="showIcon(tagName)"/>
    <div v-else class="firstName">{{firstName(tagName)}}</div>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import iconList from '@/constants/iconList';

  @Component
  export default class TagIcon extends Vue {
    @Prop(String) tagName: string | undefined;

    showIcon(name: string) {return iconList.indexOf(name) >= 0;}

    firstName(name: string) {return name.trim().split('').splice(0, 1).join('');}
  }

</script>

<style lang='scss' scoped>
  @import "~@/assets/style/helper.scss";
  .iconTag,
  .firstName {
    fill: #999;
    width: 30px;
    height: 30px;
  }
  .firstName {
    font-family: $font-kai;
    font-size: 30px;
    line-height: 30px;
    text-align: center;
  }
</style>