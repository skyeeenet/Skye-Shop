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
            name: 'option-group',
            component: Option,
        },
        {
            path: '/admin/option/create',
            name: 'option-group-create',
            component: OptionCreate,
        },
        {
            path: '/admin/option/:id',
            name: 'option-group-edit',
            props: true,
            component: () => import('./components/admin/option/OptionEdit.vue')
        },
        {
            path: '/admin/option-value',
            name: 'option-value-index',
            props: true,
            component: () => import('./components/admin/optionValue/OptionValueIndex.vue')
        },
        {
            path: '/admin/option-value/create',
            name: 'option-value-create',
            props: true,
            component: () => import('./components/admin/optionValue/OptionValueCreate.vue')
        },
        {
            path: '/admin/option-value/:id',
            name: 'option-value-edit',
            props: true,
            component: () => import('./components/admin/optionValue/OptionValueEdit.vue')
        },
    ]
});

export default router;