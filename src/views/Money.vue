<template>
  <div class="global">
    <Tags :selected-tags.sync="record.selectedTags"/>
    <div class="formItemWrapper">
      <FormItem :value.sync="record.notes" field-name="备注" placeholder="在这里添加备注"/>
    </div>
    <Tabs :data-source="recordTypeList" :value.sync="record.type"/>
    <NumberPad @submit="saveRecord" @update:value="onUpdateAmount"/>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Tags from '@/components/Money/Tags.vue';
  import FormItem from '@/components/Money/FormItem.vue';
  import Tabs from '@/components/Tabs.vue';
  import store from '@/store/index';
  import Button from '@/components/Button.vue';
  import recordTypeList from '@/constants/recordTypeList';


  @Component({
    components: {Button, FormItem, Tabs, NumberPad, Tags},
  })
  export default class Money extends Vue {
    get recordList() {
      return store.state.recordList;
    }

    recordTypeList = recordTypeList;
    record: RecordItem = {id: 0, selectedTags: [], notes: '', type: '-', amount: 0, createAt: undefined};

    onUpdateAmount(value: string) {
      this.record.amount = parseFloat(value);
    }

    saveRecord() {
      if (this.record.selectedTags.length === 0) {
        return alert('选择一个标签，分类记录有助于统计');
      } else {
        store.commit('createRecord', this.record);
        this.record.notes = '';
        this.record.selectedTags = [];
      }

    }

  }

</script>

<style lang="scss" scoped>
  .global {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .formItemWrapper {
    padding: 12px 0;
  }
</style>
<style lang='scss' scoped>
</style>