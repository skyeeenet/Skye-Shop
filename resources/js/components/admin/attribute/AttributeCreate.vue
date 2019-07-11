<template>
    <div class="bootstrap-modal">
        <!-- Button trigger modal -->
        <div class="bootstrap-modal">
            <!-- Button trigger modal -->

            <button type="button" data-toggle="modal" data-target="#createModal" class="btn btn-rounded btn-info mb-4">
                <span class="btn-icon-left text-info"><i class="fa fa-plus color-info"></i> </span>Add
            </button>
            <!-- Modal -->
            <div class="modal fade" id="createModal">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Create Attribute</h5>
                            <button type="button" class="close" data-dismiss="modal"><span>&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form @submit.prevent="onSubmit">
                                <div class="form-group">
                                    <label class="text-label">Attribute</label>
                                    <input type="text" name="name" class="form-control" placeholder="Attribute Name"
                                           required=""
                                           v-model="name"
                                    >
                                </div>
                                <div class="form-group">
                                    <label class="text-label">Attribute Slug</label>
                                    <input type="text" name="slug" class="form-control" placeholder="Attribute Slug"
                                           required=""
                                           v-model="slug"
                                    >
                                </div>
                                <div class="modal-footer">
                                    <button v-if="!showPreloader" type="button" class="btn btn-secondary"
                                            data-dismiss="modal">Close
                                    </button>
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

        data() {

            return {

                name: '',
                slug: '',
                showPreloader: false,
            };
        },

        methods: {

            onSubmit() {

                this.showPreloader = true;

                const attribute = {

                    name: this.name,
                    slug: this.slug,
                };

                axios.post('/api/attribute', attribute).then(() => {

                    this.clear();
                    this.showPreloader = false;
                    this.$emit('refresh');
                });

            },

            clear() {

                this.name = '';
                this.slug = '';
            },

        },

        components: {
            Preloader,
        }
    }
</script>
