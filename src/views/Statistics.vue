<template>
  <Layout>
    <Tabs :data-source="recordTypeList" class-prefix="types" :value.sync="recordType"/>
    <Tabs :data-source="intervalList" class-prefix="interval" :value.sync="interval"/>
    <ol>
      <li v-for="(group,index) in result" :key="index">
        <h3 class="title">{{group.title}}</h3>
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

  @Component({
    components: {Tabs}
  })
  export default class Statistics extends Vue {
    get recordList() {
      return store.state.recordList;
    }

    get result() {
      const recordList = store.state.recordList.reverse();
      const hashTable: { [key: string]: { title: string; items: RecordItem[] } } = {};
      for (let i = 0; i < recordList.length; i++) {
        const [date, time] = recordList[i].createAt!.split('T');
        hashTable[date] = hashTable[date] || {title: date, items: []};
        hashTable[date].items.push(recordList[i]);
      }
      console.log(hashTable);
      return hashTable;
    }

    intervalList = intervalList;
    interval = 'day';
    recordTypeList = recordTypeList;
    recordType = '-';

    tagString(tag: string[]) {
      return tag.length === 0 ? '无' : tag.join(',');
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


