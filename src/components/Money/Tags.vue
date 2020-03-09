<template>
  <div class="tags">
    <!--    <div class="new">-->
    <!--      <button @click="createTag">新增标签</button>-->
    <!--    </div>-->
    <ul class="current">
      <li v-for="tag in tagList" :key="tag.id" @click="toggle(tag)"
          :class="select(tag)">
        <Icon :name="`${tag.name}`" class="iconTag"/>
        {{tag.name}}
      </li>
      <li class="new">
        <router-link to="/labels" active-class="active">
          <Icon name="add" class="addTag">placeholder</Icon>
          <span>新增</span>
        </router-link>
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
    > .current {
      display: flex;
      text-align: center;
      overflow: auto;
      color: $color;
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
          width: 35px;
          height: 35px;
          margin-bottom: 5px;
        }
        &.selected {
          color: #fff;
          background: darken($bg, 20%);
          > .iconTag {
            fill: white;
          }
        }
      }
    }

    .new {
      > a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        > .addTag {
          fill: $color;
          width: 35px;
          height: 35px;
          margin-bottom: 5px;
        }
        & .active {
          background: darken($bg, 20%);
          color: #fff;
          > .addTag {
            fill: white;
          }
        }
      }

    }
  }
</style>