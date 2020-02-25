import Vue from 'vue';
import VueRouter from 'vue-router';
import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';
import NotFound from '@/views/NotFound.vue';
import EditLabel from '@/views/EditLabel.vue';
import EditRecord from '@/views/EditRecord.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/statistics' // 重新定向
  },
  {
    path: '/money/:id',
    name: 'money',
    meta: {index: 666},
    component: Money
  },
  {
    path: '/labels',
    name: 'labels',
    meta: {index: 1},
    component: Labels
  },
  {
    path: '/labels/edit/:id',
    name: 'editLabel',
    meta: {index: 2},
    component: EditLabel
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
