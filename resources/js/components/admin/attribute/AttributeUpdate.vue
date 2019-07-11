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
                            <h5 class="modal-title">Update Attribute</h5>
                            <button @click="closeForm" type="button" class="close" data-dismiss="modal"><span>&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form @submit.prevent="onSubmit">
                                <div class="form-group">
                                    <label class="text-label">Attribute</label>
                                    <input type="text" name="name" class="form-control" placeholder="Attribute Name" required=""
                                           v-model="name"
                                    >
                                </div>
                                <div class="form-group">
                                    <label class="text-label">Attribute Slug</label>
                                    <input type="text" name="slug" class="form-control" placeholder="Attribute Slug" required=""
                                           v-model="slug"
                                    >
                                </div>
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

        props: ['selected'],

        mounted() {
            this.name = this.selected.name;
            this.slug = this.selected.slug;
        },

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

                    id: this.selected.id,
                    name: this.name,
                    slug: this.slug,
                };

                axios.put('/api/attribute/' + attribute.id, attribute).then( (response)=> {

                    this.showPreloader = false;
                } );

            },

            closeForm() {

                this.$emit('close-update-form');
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
