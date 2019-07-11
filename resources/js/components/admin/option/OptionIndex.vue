<template>
<div class="row">
    <div class="col-md-12">
        <button @click="create" type="button" class="btn btn-rounded btn-info"><span class="btn-icon-left text-info"><i class="fa fa-plus color-info"></i> </span>Add</button>

        <div class="card mt-3">
            <div class="card-body">
                <h4 class="card-title mb-4">Attributes</h4>
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

                        <OptionItem></OptionItem>

                        </tbody>
                    </table>
                </div>
            </div>
            <SubmitChanges
                    :item="selectedAttribute"
                    @apply-remove="removeAttribute"
            >
            </SubmitChanges>
        </div>

    </div>
</div>
</template>

<script>
import OptionItem from './OptionItem'

    export default {

        methods: {

            create() {

                this.$router.push('/admin/option/create');
            }
        },

        components: {

            OptionItem,
        }
    }
</script>