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

  type Record = {
    tags: string[];
    notes: string;
    type: string;
    amount: number;
  }
  const xxx = () => {
    const recordList = localStorage.getItem('recordList');
    if (recordList) {
      return JSON.parse(recordList);
    }
  };

  @Component({
    components: {Types, NumberPad, Tags, Notes}
  })
  export default class Money extends Vue {
    tags = ['衣', '食', '住', '行'];
    recordList: Record[] = [];
    record: Record = {tags: [], notes: '', type: '-', amount: 0};

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
      const record2 = JSON.parse(JSON.stringify(this.record));
      this.recordList.push(record2);
    }

    @Watch('recordList')
    onRecordListChange() {
      localStorage.setItem('recordList', JSON.stringify(this.recordList));
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