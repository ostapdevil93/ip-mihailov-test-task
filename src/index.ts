import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { App } from '@/app';
import { router } from './app/providers/router-provider/router-provider.ts';

const app = createApp(App).use(router).use(createPinia());
app.mount('#app');
