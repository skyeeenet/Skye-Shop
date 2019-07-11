import Vue from 'vue';
import VueRouter from 'vue-router';

import Category from './components/admin/category/CategoryIndex';
import Attribute from './components/admin/attribute/AttributeIndex';
import Option from './components/admin/option/OptionIndex';
import OptionCreate from './components/admin/option/OptionCreate';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
          path: '/admin',
          name: 'dashboard',
          component: () => import('./components/admin/dashboard/AdminDashboard'),
        },
        {
            path: '/admin/category',
            name: 'category',
            component: Category,
        },
        {
            path: '/admin/attribute',
            name: 'attribute',
            component: Attribute,
        },
        {
            path: '/admin/option',
            name: 'option',
            component: Option,
        },
        {
            path: '/admin/option/create',
            name: 'option-create',
            component: OptionCreate,
        },
    ]
});

export default router;