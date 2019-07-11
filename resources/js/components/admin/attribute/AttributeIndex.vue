<template>
    <div class="row">
        <div class="col-lg-12">
        <AttributeCreate @refresh="getAttributes"></AttributeCreate>
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title mb-4">Attributes</h4>
                    <div class="table-responsive"
                         v-if="attributes.length"
                    >
                        <table class="table table-bordered verticle-middle" style="min-width: 400px;">
                            <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Attribute</th>
                                <th scope="col">Slug</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>

                            <AttributeItem
                                v-for="(attribute, index) in attributes"
                                :key="attribute.id"
                                :attribute="attribute"
                                @remove="showSubmitChanges"
                                @update="showUpdate"
                            >
                            </AttributeItem>

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
                    :item="selectedAttribute"
                    @apply-remove="removeAttribute"
                >
                </SubmitChanges>

                <AttributeUpdate
                    v-if="showUpdateForm"
                    @close-update-form="closeUpdateForm"
                    :selected="selectedAttribute"
                >
                </AttributeUpdate>
            </div>
        </div>
    </div>
</template>

<script>

import AttributeItem from './AttributeItem';
import AttributeCreate from './AttributeCreate';
import AttributeUpdate from './AttributeUpdate';
import SubmitChanges from '../modal/SubmitChanges';
import Preloader from '../../common/Preloader'

export default {

    mounted() {

        this.getAttributes();
    },

    data() {

        return {

            attributes: [],
            selectedAttribute: '',
            showUpdateForm: false,
        };
    },

    components: {

        AttributeItem,
        SubmitChanges,
        AttributeCreate,
        AttributeUpdate,
        Preloader,
    },

    methods: {

        getAttributes() {

            axios.get('/api/attribute').then((response) => {

                this.attributes = response.data.data;
            });
        },

        showSubmitChanges(category) {

            this.selectedAttribute = category;
        },

        removeAttribute(item) {

            axios.delete('/api/attribute/' + item.id).then((response) => {


            });

            this.getAttributes();
        },

        showUpdate(attribute) {

            this.selectedAttribute = attribute;
            this.showUpdateForm = true;
        },

        closeUpdateForm() {

            this.getAttributes();
            this.showUpdateForm = false;
        },
    },
}
</script>
