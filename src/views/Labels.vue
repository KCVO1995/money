<template>
  <Layout class="global">
    <ol>
      <li>
        <span>衣</span>
        <Icon name="right"/>
      </li>
      <li>
        <span>食</span>
        <Icon name="right"/>
      </li>
      <li>
        <span>住</span>
        <Icon name="right"/>
      </li>
      <li>
        <span>行</span>
        <Icon name="right"/>
      </li>
    </ol>
    <div class="createTagWrapping">
      <button class="createTag">新建标签</button>
    </div>
  </Layout>
</template>

<script lang='ts'>
  export default {
    name: 'Labels',
  };
</script>

<style lang='scss' scoped>
  ol {
    background: #ffffff;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);

    > li {
      border-bottom: 1px solid #e6e6e6;
      margin-left: 16px;
      padding: 10px 16px 10px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;

      > span {
        font-weight: 500;
        color: #000;
      }

      > .icon {
        width: 24px;
        height: 24px;
      }
    }
  }

  .createTagWrapping {
    text-align: center;
    button {
      color: #fff;
      background: #767676;
      min-height: 40px;
      padding: 0 15px;
      margin-top: 45px;
      font-size: 17px;
      border: none;
      border-radius: 4px;
    }
  }


</style>