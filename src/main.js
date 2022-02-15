const { createApp } = require('vue');
import './grid.css';
import Vue from 'vue';
import App from './App.vue';

import $ from 'jquery';
import jQuery from 'jquery';
Vue.prototype.jQuery = jQuery;

createApp(App).mount('#app');
