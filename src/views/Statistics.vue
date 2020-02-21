<template>
  <Layout>
    <Tabs :data-source="recordTypeList" class-prefix="types" :value.sync="recordType"/>
    <Tabs :data-source="intervalList" class-prefix="interval" :value.sync="interval"/>
    <ol>
      <li v-for="(group,index) in resultArray" :key="index">
        <h3 class="title">{{beautify(group.title)}}</h3>
        <ol>
          <li v-for="item in group.items" :key="item.id" class="record">
            <span>{{tagString(item.selectedTags)}}</span>
            <span class="notes">{{item.notes}}</span>
            <span>￥ {{item.amount}}</span>
          </li>
        </ol>
      </li>
    </ol>
  </Layout>
</template>


<script lang='ts'>
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Tabs from '@/components/Tabs.vue';
  import intervalList from '@/constants/intervalList';
  import recordTypeList from '@/constants/recordTypeList';
  import store from '@/store';
  import dayjs from 'dayjs';
  import clone from '@/lib/clone';

  @Component({
    components: {Tabs}
  })
  export default class Statistics extends Vue {
    get recordList() {
      return store.state.recordList;
    }

    get resultArray() {
      // [
      //   {title, items}
      //   {title, items}
      // ]
      const recordList = clone(store.state.recordList);
      if (recordList.length === 0) return [];
      recordList.sort((a: RecordItem, b) => dayjs(b.createAt).valueOf() - dayjs(a.createAt).valueOf());

      const groupList = [{title: dayjs(recordList[0].createAt).format('YYYY-MM-DD'), items: [recordList[0]]}];
      for (let i = 1; i < recordList.length; i++) {
        const recordCreateAt = dayjs(recordList[i].createAt);
        const last = groupList[groupList.length - 1];
        if (recordCreateAt.isSame(last.title, 'day')) {
          last.items.push(recordList[i]);
        } else {
          groupList.push({title: recordCreateAt.format('YYYY-MM-DD'), items: [recordList[i]]});
        }
      }
      console.log(groupList);
      return groupList;

    }

    intervalList = intervalList;
    interval = 'day';
    recordTypeList = recordTypeList;
    recordType = '-';

    tagString(tag: string[]) {
      return tag.length === 0 ? '无' : tag.join(',');
    }

    beautify(date: string) {
      const d = dayjs(date);
      const today = dayjs();
      if (d.isSame(today, 'day')) {
        return '今天';
      } else if (d.isSame(today.subtract(1, 'day'), 'day')) {
        return '昨天';
      } else if (d.isSame(today.subtract(2, 'day'), 'day')) {
        return '前天';
      } else if (d.isSame(today, 'year')) {
        return d.format('M月D日');
      } else {
        return d.format('YYYY年M月D日');
      }
    }
  }

</script>

<style scoped lang="scss">
  %item {
    padding: 8px 16px;
    line-height: 24px;
    display: flex;
    justify-content: space-between;
    align-content: center;
  }

  .title {
    @extend %item;
  }

  .record {
    background: white;
    @extend %item;
  }

  .notes {
    flex: 1;
    margin-right: auto;
    margin-left: 16px;
    color: #999999;
  }

  ::v-deep {
    .types-tabs-item {
      background: #fff;

      &.selected {
        background: #c4c4c4;

        &::after {
          display: none;
        }
      }
    }

    .interval-tabs-item {
      height: 40px;
    }
  }
</style>


