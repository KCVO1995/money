import Vue from 'vue';
import VueRouter from 'vue-router';
import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';
import Sta from '@/views/Statistics.vue';
import CreateLabel from '@/views/CreateLabel.vue';
import NotFound from '@/views/NotFound.vue';
import EditRecord from '@/views/EditRecord.vue';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home' // 重新定向
  },
  {
    path: '/money/:id',
    name: 'money',
    meta: {index: 666},
    component: Money
  },
  {
    path: '/home',
    name: 'home',
    meta: {index: 1},
    component: Home
  },
  {
    path: '/labels',
    name: 'labels',
    meta: {index: 1},
    component: Labels
  },
  {
    path: '/labels/create',
    name: 'crateLabel',
    meta: {index: 666},
    component: CreateLabel
  },
  {
    path: '/statistics',
    name: 'statistics',
    meta: {index: 2},
    component: Statistics
  },
  {
    path: '/statistics/edit/:id',
    name: 'editRecord',
    meta: {index: 3},
    component: EditRecord
  },
  {
    path: '*',
    component: NotFound
  }
];


const router = new VueRouter({
  routes
});

export default router;
