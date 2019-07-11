<template>
    <div class="bootstrap-modal">
        <!-- Button trigger modal -->
        <div class="bootstrap-modal">
            <!-- Button trigger modal -->

            <!-- Modal -->
            <div class="modal fade" id="updateModal">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Update Category</h5>
                            <button @click="closeForm" type="button" class="close" data-dismiss="modal"><span>&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form @submit.prevent="onSubmit">
                                <div class="form-group">
                                    <label class="text-label">Category</label>
                                    <input type="text" name="name" class="form-control" placeholder="Category Name" required=""
                                           v-model="name"
                                    >
                                </div>
                                <div class="form-group">
                                    <label class="text-label">Category Slug</label>
                                    <input type="text" name="slug" class="form-control" placeholder="Category Slug" required=""
                                           v-model="slug"
                                    >
                                </div>
                                <label class="text-label">Parent Category</label>
                                <select class="form-control"
                                        v-model="parent"
                                >
                                    <option value="0">No-Category</option>
                                    <option v-for="item in categoriesWithoutSelected">{{ item.name }}</option>
                                </select>
                                <div class="modal-footer">
                                    <button v-if="!showPreloader" @click="closeForm" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button v-if="!showPreloader" type="submit" class="btn btn-primary">Update</button>

                                    <Preloader v-if="showPreloader"></Preloader>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Preloader from '../../common/Preloader'

    export default {

        props: ['selectedCategory'],

        mounted() {

            this.getCategories();
            this.name = this.selectedCategory.name;
            this.slug = this.selectedCategory.slug;
        },

        computed: {

            categoriesWithoutSelected() {

                return this.categories.filter( t => t.id != this.selectedCategory.id);
            },
        },

        data() {

            return {

                name: '',
                slug: '',
                parent: 0,
                categories: [],
                showPreloader: false,
            };
        },

        methods: {

            onSubmit() {

                this.showPreloader = true;

                const category = {

                    id: this.selectedCategory.id,
                    name: this.name,
                    slug: this.slug,
                    parent: this.parent,
                };

                axios.put('/api/category/' + category.id, category).then( (response)=> {

                    this.showPreloader = false;
                    this.getCategories();
                } );

            },

            clear() {

                this.name = '';
                this.slug = '';
                this.parent = 0;
            },

            getCategories() {

                axios.get('/api/category').then((response) => {

                    this.categories = response.data.data;
                });
            },

            closeForm() {

                this.$emit('close-update-form');
            },
        },

        components: {
            Preloader,
        }
    }
</script>
