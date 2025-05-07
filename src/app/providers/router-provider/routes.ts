import { RouteRecordRaw } from 'vue-router';
import { MainPage } from '@/pages/main';

export const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },
] as RouteRecordRaw[];
