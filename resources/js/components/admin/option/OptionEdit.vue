<template>
    <div class="row">

        <div class="card-body col-md-12">
            <!-- <button @click="back" type="button" class="col-md-1 mb-4 btn btn-ft btn-flat btn-dark">&larr;</button> -->
            <h4 class="card-title mb-4">Basic Forms</h4>
            <div class="basic-form">
                <form @submit.prevent="onSubmitForm">
                    <div class="form-group">
                        <label class="text-label">Option Group Name*</label>
                        <input type="text" name="name" class="form-control" required=""
                               v-model="optionName"
                        >
                    </div>
                    <div class="form-group">
                        <label class="text-label">Order</label>
                        <input type="text" name="order" class="form-control"
                               v-model="optionSort"
                        >
                    </div>
                    <div v-if="showPreloader" class="d-flex justify-content-start">
                        <Preloader></Preloader>
                    </div>
                    <button v-if="!showPreloader" type="submit" class="btn btn-primary btn-form mr-2">Update</button>
                    <button v-if="!showPreloader" @click="back" type="button" class="btn btn-light text-dark btn-form">Cancel</button>

                </form>
            </div>
        </div>
    </div>

</template>

<script>
    import Preloader from '../../common/Preloader';

    export default {

        data() {

            return {

                optionName: '',
                optionSort: '',
                showPreloader: false,
            }
        },

        props: ['id'],

        mounted() {

          console.log(this.id);

          axios.get('/api/options/' + this.id).then( (response) => {

              this.optionName = response.data.data.name;
              this.optionSort = response.data.data.sort_order;
          } );
        },

        methods: {

            back() {

                this.$router.push('/admin/option')
            },

            onSubmitForm() {

                this.showPreloader = true;

                const group = {

                    name: this.optionName,
                    sort_order: this.optionSort,
                };

                axios.put('/api/options/' + this.id, group).then( () => {

                    this.showPreloader = false;
                    this.$router.push('/admin/option')
                } );
            }
        },

        components: {

            Preloader,
        }
    }
</script>