<template>
  <Layout>
    <Tabs :data-source="recordTypeList" class-prefix="types" :value.sync="recordType"/>
    <Tabs :data-source="intervalList" class-prefix="interval" :value.sync="interval"/>
    <ol>
      <li v-for="group in result" :key="group.title">
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

  @Component({
    components: {Tabs}
  })
  export default class Statistics extends Vue {
    get recordList() {
      return store.state.recordList;
    }

    get result() {
      const recordList = store.state.recordList;
      const hashTable: { [key: string]: { title: string; items: RecordItem[] } } = {};
      for (let i = 0; i < recordList.length; i++) {
        const [date] = recordList[i].createAt!.split('T');
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


[{"selectedTags":[],"notes":"xxx xxxx","type":"-","amount":1,"createAt":"2020-02-15T14:35:49.281Z"},{"selectedTags":["食"],"notes":"","type":"-","amount":2,"createAt":"2020-02-16T14:35:51.994Z"},{"selectedTags":["食"],"notes":"","type":"-","amount":3,"createAt":"2020-02-17T14:35:53.297Z"},{"selectedTags":["食"],"notes":"","type":"-","amount":4,"createAt":"2020-02-18T14:35:54.665Z"},{"selectedTags":["食"],"notes":"","type":"-","amount":5,"createAt":"2020-02-19T14:35:55.817Z"},{"selectedTags":["食"],"notes":"","type":"-","amount":6,"createAt":"2020-02-20T14:35:56.946Z"},{"selectedTags":["食"],"notes":"","type":"-","amount":7,"createAt":"2020-02-20T15:01:09.237Z"},{"selectedTags":["食"],"notes":"很短很短","type":"-","amount":8,"createAt":"2020-02-20T15:01:10.605Z"},{"selectedTags":[],"notes":"","type":"-","amount":9,"createAt":"2020-02-21T03:48:35.592Z"},{"selectedTags":[],"notes":"我我我","type":"-","amount":9,"createAt":"2020-02-21T03:49:01.704Z"},{"selectedTags":[],"notes":"","type":"-","amount":3,"createAt":"2020-02-21T04:01:18.963Z"},{"selectedTags":[],"notes":"","type":"-","amount":1,"createAt":"2020-02-21T05:50:30.527Z"}]