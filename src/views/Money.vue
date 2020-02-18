<template>
  <Layout class-prefix="layout">
    <Tags @update:value="onUpdateTags"/>
    <div class="formItemWrapper">
      <FormItem :value.sync="record.notes" field-name="备注" placeholder="在这里添加备注"/>
    </div>
    <Types :value.sync="record.type"/>
    <NumberPad @submit="saveRecord" @update:value="onUpdateAmount"/>
  </Layout>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';
  import Types from '@/components/Money/Types.vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Tags from '@/components/Money/Tags.vue';
  import FormItem from '@/components/Money/FormItem.vue';
  import recordListModel from '@/models/recordListModel';

  recordListModel.fetch();


  @Component({
    components: {FormItem, Types, NumberPad, Tags}
  })
  export default class Money extends Vue {
    recordList = recordListModel.data;
    record: RecordItem = {tags: [], notes: '', type: '-', amount: 0, createAt: undefined};

    onUpdateTags(value: string[]) {
      this.record.tags = value;
    }

    onUpdateAmount(value: string) {
      this.record.amount = parseFloat(value);
    }

    // 不能直接push this.record, this.record是一个对象，每次push，只push了地址，重复push的时候所有的记录都会相同
    saveRecord() {
      this.record.createAt = new Date();
      const record2 = recordListModel.clone(this.record);
      this.recordList.push(record2);
    }

    @Watch('recordList')
    onRecordListChange() {
      recordListModel.save(this.recordList);
    }
  }

</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column;
  }
  .formItemWrapper {
    padding: 12px 0;
  }
</style>
<style lang='scss' scoped>
</style>