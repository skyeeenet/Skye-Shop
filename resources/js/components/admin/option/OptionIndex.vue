<template>
<div class="row">
    <div class="col-md-12">
        <button @click="create" type="button" class="btn btn-rounded btn-info"><span class="btn-icon-left text-info"><i class="fa fa-plus color-info"></i> </span>Add</button>

        <div class="card mt-3">
            <div class="card-body">
                <h4 class="card-title mb-4">Option Groups</h4>
                <div class="table-responsive">
                    <table class="table table-bordered verticle-middle" style="min-width: 400px;">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Sort Order</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>

                        <OptionItem
                                v-for="group in groups"
                                :group="group"
                                :key="group.id"
                                @remove="removeOption"
                        ></OptionItem>

                        </tbody>
                    </table>
                </div>
            </div>
            <SubmitChanges
                    v-if="selected"
                    :item="selected"
                    @apply-remove="remove"
            ></SubmitChanges>
        </div>
    </div>
</div>
</template>

<script>
import OptionItem from './OptionItem'
import SubmitChanges from '../modal/SubmitChanges';

    export default {

        data() {

            return {

                groups: [],
                selected: null,
            }
        },

        mounted() {

            this.getOptions();
        },

        methods: {

            create() {

                this.$router.push('/admin/option/create');
            },

            getOptions() {

                axios.get('/api/options').then( (response) => {

                    this.groups = response.data.data;
                } );
            },

            removeOption(option) {

                this.selected = option;
            },

            remove(option) {

                axios.delete('/api/options/' + option.id).then( () => {

                    this.getOptions();
                } );
            }
        },

        components: {

            OptionItem,
            SubmitChanges,
        }
    }
</script>