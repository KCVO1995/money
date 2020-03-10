<script lang='ts'>
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import store from '@/store';

  @Component
  export default class CreateTag extends Vue {
    createTag() {
      const name = prompt('请输入标签名');
      if (name) {
        store.commit('createTag', name);
        this.$router.back();
      }
    }
  }
</script>

