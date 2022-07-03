import { createApp } from 'vue'
import App from './App.vue'

import './assets/styles/main.scss'

import router from './plugins/router'
import { createPinia } from 'pinia'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';


createApp(App)
    .use(router)
    .use(createPinia())
    .use(Antd)
    .mount('#app')
