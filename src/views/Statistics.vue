<template>
  <Layout>
    <Tabs :data-source="recordTypeList" class-prefix="types" :value.sync="recordType"/>
    <Tabs :data-source="intervalList" class-prefix="interval" :value.sync="interval"/>
    <div>
      type: {{type}}
      <br>
      interval: {{interval}}
    </div>
  </Layout>
</template>

<style scoped lang="scss">
  ::v-deep .types-tabs-item {
    background: #fff;

    &.selected {
      background: #c4c4c4;

      &::after {
        display: none;
      }
    }
  }

  ::v-deep .interval-tabs-item {
    height: 40px;
  }
</style>

<script lang='ts'>
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Tabs from '@/components/Tabs.vue';
  import intervalList from '@/constants/intervalList';
  import recordTypeList from '@/constants/recordTypeList';

  @Component({
    components: {Tabs}
  })
  export default class Statistics extends Vue {
    intervalList = intervalList;
    interval = 'day';
    recordTypeList = recordTypeList;
    recordType = '-';
  }

</script>


