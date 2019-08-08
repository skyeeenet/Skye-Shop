
require('./bootstrap');

window.Vue = require('vue');

import router from './routes';
import store from './store';

Vue.component('admin-app', require('./components/admin/App').default);
Vue.component('auth-app', require('./components/auth/AuthApp').default);

window.onload = function () {
    const app = new Vue({
        router: router,
        store: store,
        el: '#app',
    })
};
