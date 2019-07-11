<template>
    <div class="bootstrap-modal">

        <!-- Button trigger modal -->
        <div class="bootstrap-modal">
            <!-- Button trigger modal -->

            <button type="button" data-toggle="modal" data-target="#createModal" class="btn btn-rounded btn-info mb-4"><span class="btn-icon-left text-info"><i class="fa fa-plus color-info"></i> </span>Add</button>
            <!-- Modal -->
            <div class="modal fade" id="createModal">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h5 class="modal-title">Create Category</h5>
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
                                    <option v-for="category in categories" :value="category.id">{{ category.name }}</option>
                                </select>
                                <div class="modal-footer">
                                    <button v-if="!showPreloader" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button v-if="!showPreloader" type="submit" class="btn btn-primary">Add</button>

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


    mounted() {

        this.getCategories();
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

            const category = {

                name: this.name,
                slug: this.slug,
                parent: this.parent,
            };

            this.showPreloader = true;

            axios.post('/api/category', category).then( ()=> {

                this.getCategories();
                this.clear();
                this.showPreloader = false;
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
        Preloader,
    }
}
</script>
