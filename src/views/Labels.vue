<template>
  <div>
    <Top leftIcon="left" rightIcon="setting">标签管理</Top>
    <ul class="tagList">
      <li v-for="tag in tagList" :key="tag.id" class="tag">
        <Icon :name="`${tag.name}`" class="iconTag" v-if="showIcon(tag.name)"/>
        <div v-else class="firstName">{{firstName(tag.name)}}</div>
        <span>{{tag.name}}</span>
        <Icon name="trash" class="trashIcon" @click="removeTag(tag.id)"/>
      </li>
    </ul>
    <div class="createTagWrapping">
      <Button @click="createTag">新建标签</Button>
    </div>
  </div>
</template>

<script lang='ts'>
  import {Component} from 'vue-property-decorator';
  import Button from '@/components/Button.vue';
  import store from '@/store/index';
  import {mixins} from 'vue-class-component';
  import CreateTag from '@/mixins/CreateTag.vue';
  import iconList from '@/constants/iconList';

  @Component({
    components: {Button},
  })
  export default class Labels extends mixins(CreateTag) {
    get tagList() {
      return store.state.tagList;
    }

    showIcon(name: string) {
      return iconList.indexOf(name) >= 0;
    }

    firstName(name: string) {
      return name.trim().split('').splice(0, 1).join('');
    }

    removeTag(id: number) {
      this.$store.commit('removeTag', id);
    }

  }
</script>

<style lang='scss' scoped>
  @import "~@/assets/style/helper.scss";
  $color: #999;

  .tagList {
    margin: 0 35px;
    color: $color;

    > .tag {
      @extend %Shadow;
      background: white;
      height: 80px;
      display: flex;
      align-items: center;
      margin-top: 20px;
      border-radius: 15px;

      > .iconTag,
      .trashIcon,
      .firstName {
        fill: $color;
        width: 30px;
        height: 30px;
        margin: auto 20px;
      }
      > .iconTag {fill: $color}
      > .firstName {
        font-family: $font-kai;
        font-size: 30px;
        line-height: 30px;
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

  .createTagWrapping {
    text-align: center;
    margin-top: 45px;
  }


</style>