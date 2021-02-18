<template>
  <div class="global">
    <Top leftIcon="left">记一笔</Top>
    <Tags :tag_id.sync="record.tag_id"/>
    <div class="main">
      <label>
        <Input placeholder="在这里输入备注" :value.sync="record.note"/>
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
import api from '@/api';


@Component({
  components: {Button, FormItem, Tabs, NumberPad, Tags, Input},
})
export default class Money extends Vue {
  @Inject() eventBus: any;
  record: RecordItem = {
    id: 0,
    // eslint-disable-next-line @typescript-eslint/camelcase
    tag_id: undefined,
    // eslint-disable-next-line @typescript-eslint/camelcase
    user_id: undefined,
    note: '',
    // eslint-disable-next-line @typescript-eslint/camelcase
    is_expend: false,
    amount: 0,
    // eslint-disable-next-line @typescript-eslint/camelcase
    created_at: undefined,
    // eslint-disable-next-line @typescript-eslint/camelcase
    updated_at: undefined
  };

  async created() {
    this.eventBus.$on('update:type', (type: boolean) => {
      // eslint-disable-next-line @typescript-eslint/camelcase
      this.record.is_expend = type;
    });
    const routeId = this.$route.params.id;
    if (parseInt(routeId) > 0) {
      await this.getOneRecord(parseInt(routeId));
    }
  }

  async getOneRecord(id: number) {
    return await api.record.getOne(id).then(res => {
      // eslint-disable-next-line @typescript-eslint/camelcase
      const {id, amount, is_expend, note, tag_id, created_at, updated_at, user_id} = res.data;
      this.record.id = id;
      this.record.amount = amount;
      this.record.note = note;
      // eslint-disable-next-line @typescript-eslint/camelcase
      this.record.is_expend = is_expend;
      // eslint-disable-next-line @typescript-eslint/camelcase
      this.record.tag_id = tag_id;
      // eslint-disable-next-line @typescript-eslint/camelcase
      this.record.created_at = created_at;
      // eslint-disable-next-line @typescript-eslint/camelcase
      this.record.updated_at = updated_at;
      // eslint-disable-next-line @typescript-eslint/camelcase
      this.record.user_id = user_id;
    }, e => {
      console.log('e', e);
    });
  }

  saveRecord() {
    if (this.record) {
      if (!this.record.tag_id) {
        return alert('选择一个标签，分类记录有助于统计');
      } else if (this.record.id > 0) { // TODO 编辑
        store.dispatch('updateRecord', this.record);
        this.$router.back();
      } else {
        store.dispatch('createRecord', this.record);
        this.$router.back();
      }
      this.record.note = '';
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
