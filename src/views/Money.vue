<template>
  <Layout class-prefix="layout">
    <Tags @update:value="onUpdateTags" :data-source.sync="tags"/>
    <Notes @update:value="onUpdateNotes"/>
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
  import Notes from '@/components/Money/Notes.vue';
  import recordListModel from '@/models/recordListModel';


  @Component({
    components: {Types, NumberPad, Tags, Notes}
  })
  export default class Money extends Vue {
    tags = ['衣', '食', '住', '行'];
    recordList = recordListModel.fetch();
    record: RecordItem = {tags: [], notes: '', type: '-', amount: 0, createAt: undefined};

    onUpdateTags(value: string[]) {
      this.record.tags = value;
    }

    onUpdateNotes(value: string) {
      this.record.notes = value;
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
</style>
<style lang='scss' scoped>
</style>