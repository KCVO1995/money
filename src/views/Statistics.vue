<template>
  <Layout>
    <Tabs :data-source="typeList" class-prefix="types" :value.sync="type"/>
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
</style>

<script lang='ts'>
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Types from '@/components/Money/Types.vue';
  import Tabs from '@/components/Tabs.vue';
  import intervalList from '@/constants/intervalList';
  import typeList from '@/constants/typeList';

  @Component({
    components: {Tabs, Types}
  })
  export default class Statistics extends Vue {
    intervalList = intervalList;
    interval = 'day';
    typeList = typeList;
    type = '-';
  }

</script>


