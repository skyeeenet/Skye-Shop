<template>
    <div class="row">
        <div class="col-lg-12">
        <CategoryCreate @refresh-cat="refreshCategories"></CategoryCreate>
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title mb-4">Categories</h4>
                    <div class="table-responsive"
                         v-if="categories.length"
                    >
                        <table class="table table-bordered verticle-middle" style="min-width: 400px;">
                            <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Category</th>
                                <th scope="col">Parent-Category</th>
                                <th scope="col">Slug</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>

                            <CategoryItem
                                v-for="(category, index) in categories"
                                :key="category.id"
                                :category="category"
                                @remove-category="showSubmitChanges"
                                @update-category="showUpdate"
                            >
                            </CategoryItem>

                            </tbody>
                        </table>
                    </div>
                    <div
                        v-else
                    >
                        <Preloader></Preloader>
                        <h2 class="text-center">Nothing to Show</h2>
                    </div>
                </div>
                <SubmitChanges
                    :item="selectedCategory"
                    @apply-remove="removeCategory"
                >
                </SubmitChanges>

                <CategoryUpdate
                    v-if="showUpdateForm"
                    @submit-update="submitUpdate"
                    @close-update-form="closeUpdateForm"
                    :selectedCategory="selectedCategory"
                >
                </CategoryUpdate>
            </div>
        </div>
    </div>
</template>

<script>

import CategoryItem from './CategoryItem';
import CategoryCreate from './CategoryCreate';
import CategoryUpdate from './CategoryUpdate';
import SubmitChanges from '../modal/SubmitChanges';
import Preloader from '../../common/Preloader'

export default {
    name: 'category-index',

    mounted() {

        this.getCategories();
    },

    data() {

        return {

            categories: [],
            selectedCategory: '',
            showUpdateForm: false,
        };
    },

    components: {

        CategoryItem,
        SubmitChanges,
        CategoryCreate,
        CategoryUpdate,
        Preloader,
    },

    methods: {

        getCategories() {

            this.showPreloader = true;

            axios.get('/api/category').then((response) => {

                this.categories = response.data.data;
                this.showPreloader = false;
            });
        },

        showSubmitChanges(category) {

            this.selectedCategory = category;
        },

        removeCategory(item) {

            axios.delete('/api/category/' + item.id).then((response) => {

                this.getCategories();
            });
        },

        refreshCategories() {

            this.getCategories();
        },

        showUpdate(category) {

            this.selectedCategory = category;
            this.showUpdateForm = true;
        },

        submitUpdate(category) {

            this.refreshCategories();
        },

        closeUpdateForm() {

            this.showUpdateForm = false;
        },
    },
}
</script>
