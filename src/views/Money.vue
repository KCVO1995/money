<template>
  <div class="global">
    <Top leftIcon="left">记一笔</Top>
    <Tags :tag_id.sync="record.tag_id"/>
    <div class="main">
      <label>
        <Input placeholder="在这里输入备注" :value.sync="record.notes"/>
      </label>
      <NumberPad @submit="saveRecord" :value.sync="record.amount"/>
    </div>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component, Inject} from 'vue-property-decorator';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Tags from '@/components/Money/Tags.vue';
  import FormItem from '@/components/Money/FormItem.vue';
  import Tabs from '@/components/Tabs.vue';
  import store from '@/store/index';
  import Button from '@/components/Button.vue';
  import Input from '@/components/Money/Input.vue';
  import recordTypeList from '@/constants/recordTypeList';


  @Component({
    components: {Button, FormItem, Tabs, NumberPad, Tags, Input},
  })
  export default class Money extends Vue {
    @Inject() eventBus: any;
    reset: RecordItem = {
      id: 0,
      // eslint-disable-next-line @typescript-eslint/camelcase
      tag_id: undefined,
      // eslint-disable-next-line @typescript-eslint/camelcase
      user_id: undefined,
      notes: '',
      // eslint-disable-next-line @typescript-eslint/camelcase
      is_expend: false,
      amount: 0,
      // eslint-disable-next-line @typescript-eslint/camelcase
      created_at: undefined,
      // eslint-disable-next-line @typescript-eslint/camelcase
      updated_at: undefined
    };

    // get recordList() {
    //   return store.state.recordList;
    // }

    created() {
      this.eventBus.$on('update:type', (type: boolean) => {
        // eslint-disable-next-line @typescript-eslint/camelcase
        this.reset.is_expend = type;
      });
    }

    get record() {
      const routeId = this.$route.params.id;
      if (routeId > '0') {
        store.commit('findRecord', parseFloat(this.$route.params.id));
        return store.state.foundRecord;
      } else {
        return this.reset;
      }
    }

    recordTypeList = recordTypeList;

    saveRecord() {
      if (this.record) {
        if (!this.record.tag_id) {// TODO tag
          return alert('选择一个标签，分类记录有助于统计');
        } else if (this.record.id > 0) { // TODO 编辑
          store.commit('saveRecords', this.record);
          this.$router.back();
        } else {
          store.dispatch('createRecord', this.record);
          this.$router.back();
        }
        this.record.notes = '';
        // eslint-disable-next-line @typescript-eslint/camelcase
        this.record.tag_id = undefined;
      }

    }
  }

</script>

<style lang="scss" scoped>
  .global {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
  }
  .main {
    margin: auto;
  }


</style>
<style lang='scss' scoped>
</style>
