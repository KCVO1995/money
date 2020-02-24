<template>
  <div>
    <div class="navBar">
      <Icon name="left" class="leftIcon" @click="goBack"/>
      <span class="title">编辑记录</span>
      <Icon class="rightIcon"/>
    </div>
    <ol class="recordDetail">
      <li class="item">
        <span class="name">标签</span>
        <span class="detail">{{beautifyTags(foundRecord.selectedTags)}}</span>
      </li>
      <li class="item">
        <span class="name">类型</span>
        <span class="detail">{{beautifyType(foundRecord.type)}}</span>
      </li>
      <li class="item">
        <span class="name">金额</span>
        <span class="detail">{{foundRecord.amount}} 元</span>
      </li>
      <li class="item">
        <span class="name">日期</span>
        <span class="detail">{{beautifyDate(foundRecord.createAt)}}</span>
      </li>
      <li class="item">
        <span class="name">备注</span>
        <span class="detail">{{foundRecord.notes}}</span>
      </li>
    </ol>
    <div class="buttonWrapper">
      <router-link to="`/money/${foundRecord.id}`">
        <Button>编辑记录</Button>
      </router-link>
      <Button @click="remove">删除记录</Button>
    </div>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Button from '@/components/Button.vue';
  import store from '@/store/index';
  import Money from '@/views/Money.vue';
  import dayjs from 'dayjs';

  @Component({
    components: {Money, Button},
  })
  export default class EditRecord extends Vue {
    get foundRecord() {
      return store.state.foundRecord;
    }

    created() {
      store.commit('findRecord', parseInt(this.$route.params.id));
      if (!this.foundRecord) {
        this.$router.replace('/404');
      }
    }

    beautifyTags(tags: Tag[]) {
      const tagsName = [];
      if (tags) {
        for (let i = 0; i < tags.length; i++) {
          tagsName.push(tags[i].name);
        }
      }
      return tagsName.join('，');
    }

    beautifyType(type: string) {
      if (type === '-') {
        return '支出';
      } else if (type === '+') {
        return '收入';
      }
    }

    beautifyDate(date: string) {
      return dayjs(date).format('YYYY年M月D日');
    }

    goBack() {
      this.$router.back();
    }

    remove() {
      if (this.foundRecord) {
        store.commit('removeRecord', this.foundRecord.id);
      }
    }
  }


</script>

<style lang='scss' scoped>
  @import "~@/assets/style/helper.scss";

  .navBar {
    width: 100vw;
    text-align: center;
    font-size: 16px;
    padding: 12px 16px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > .title {
    }

    > a > .leftIcon {
      width: 24px;
      height: 24px;
    }

    > .rightIcon {
      width: 24px;
      height: 24px;
    }
  }

  .recordDetail {
    @extend %bottomShadow;
    background: #fff;
    margin-top: 8px;

    > .item {
      display: flex;
      align-items: center;
      font-size: 14px;
      padding: 0 16px;

      .name {
        padding-right: 16px;
        line-height: 40px;
        height: 40px;
      }

      .detail {
        flex-grow: 1;
        color: #999;
      }
    }
  }

  .buttonWrapper {
    text-align: center;
    margin: 44px auto 0;
    display: flex;
    justify-content: space-between;
    width: 70vw;
  }


</style>