<template>
  <Layout class-prefix="layout">
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    <Notes @update:value="onUpdateNotes"/>
    <Types @update:value="onUpdateType"/>
    <NumberPad @update:value="onUpdateAmount"/>
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

  @Component({
    components: {Types, NumberPad, Tags, Notes}
  })
  export default class Money extends Vue {
    tags = ['衣', '食', '住', '行'];
    record: Record = {tags: [], notes: '', type: '', amount: 0};
    @Watch('record', {deep: true})
    onRecordChange(record: Record) {
      console.log(record);
    }

    onUpdateTags(value: string[]) {
      this.record.tags = value
    }

    onUpdateNotes(value: string) {
      this.record.notes = value
    }

    onUpdateType(value: string) {
      this.record.type = value
    }

    onUpdateAmount(value: string) {
      this.record.amount = parseFloat(value)
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