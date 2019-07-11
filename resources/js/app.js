
require('./bootstrap');

window.Vue = require('vue');

import router from './routes';

Vue.component('admin-app', require('./components/admin/App').default);

window.onload = function () {
    const app = new Vue({
        router: router,
        el: '#app',
    })
};
