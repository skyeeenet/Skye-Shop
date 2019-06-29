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
                            <button type="button" class="close" data-dismiss="modal"><span>&times;</span>
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
                                    <option v-for="category in categories">{{ category.name }}</option>
                                </select>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-primary">Add</button>
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
    import VueNotification from '../../notification';

    export default {

        props: ['category'],

        mounted() {

            this.getCategories();
        },

        data() {

            return {

                name: '',
                slug: '',
                parent: 0,
                categories: [],
            };
        },

        methods: {

            onSubmit() {

                const category = {

                    name: this.name,
                    slug: this.slug,
                    parent: this.parent,
                };

                axios.post('/api/category', category).then( ()=> {

                    this.$notification.new("Updated", {
                        timer: 4,
                        type: 'warning',
                    });
                    this.getCategories();
                    this.clear();

                    this.$emit('refresh-cat');
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
        },

        components: {
            VueNotification,
        }
    }
</script>
