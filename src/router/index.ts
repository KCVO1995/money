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
    path: '/money',
    component: Money
  },
  {
    path: '/labels',
    component: Labels
  },
  {
    path: '/labels/edit/:id',
    component: EditLabel
  },
  {
    path: '/statistics',
    component: Statistics
  },
  {
    path: '/money/edit/:id',
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
