import Vue from 'vue';
import App from './App.vue';
import API from '@/api';
import './scss/index.scss';
Vue.prototype.API = API;

Vue.config.productionTip = false;
App.mpType = 'app';

const app = new Vue(App);
app.$mount();
