<template>
  <div>
    <transition :name="transitionName">
      <router-view :style="{ minHeight: screenHeight +'px' }">placeholder</router-view>
    </transition>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import {Component, Provide, Watch} from 'vue-property-decorator';
import {Route} from 'vue-router';
import store from '@/store/index';

@Component
export default class App extends Vue {
  transitionName = '';
  screenHeight = document.documentElement.clientHeight;

  @Provide('eventBus') eventBus = new Vue();

  @Watch('$route')

  // TODO 错误提醒
  // TODO 引发 router 跳转是错误
  created() {
    store.dispatch('getUser');
    store.dispatch('getTags');
  }

  onRouteChange(to: Route, from: Route) {
    if (to.meta.index === 666) {
      this.transitionName = 'up';
      return;
    } else if (from.meta.index === 666) {
      this.transitionName = 'down';
      return;
    } else if (to.meta.index > from.meta.index) {
      this.transitionName = 'left';
      return;
    } else if (to.meta.index < from.meta.index) {
      this.transitionName = 'right';
      return;
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/style/reset.scss';
@import '~@/assets/style/helper.scss';

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  background: #f8f8f8;
  line-height: 1.5;
  font-family: $font-hei;
  font-size: 16px;
}

.up-enter-active {
  position: absolute;
  animation: upEnter 300ms;
}

.up-leave-active {
  position: absolute;
  animation: upOut 300ms;
}

.down-enter-active {
  position: absolute;
  animation: downEnter 300ms;
}

.down-leave-active {
  position: absolute;
  animation: downOut 300ms;
}

.left-enter-active {
  position: absolute;
  animation: leftEnter 300ms;
}

.left-leave-active {
  position: absolute;
  animation: leftOut 300ms;
}

.right-enter-active {
  position: absolute;
  animation: rightEnter 300ms;
}

.right-leave-active {
  position: absolute;
  animation: rightOut 300ms;
}

@keyframes upEnter {
  from {
    transform: translate3d(0, 100%, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes upOut {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, -100%, 0);
  }
}

@keyframes downEnter {
  from {
    transform: translate3d(0, -100%, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes downOut {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, 100%, 0);
  }
}

@keyframes rightEnter {
  from {
    transform: translate3d(-100%, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes rightOut {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(100%, 0, 0);
  }
}

@keyframes leftEnter {
  from {
    transform: translate3d(100%, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes leftOut {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-100%, 0, 0);
  }
}
</style>


