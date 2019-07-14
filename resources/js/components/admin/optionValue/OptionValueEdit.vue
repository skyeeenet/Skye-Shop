<template>
  <div class="row">

    <div class="card-body col-md-12">
      <!-- <button @click="back" type="button" class="col-md-1 mb-4 btn btn-ft btn-flat btn-dark">&larr;</button> -->
      <h4 class="card-title mb-4">Edit Option</h4>
      <div class="basic-form">
        <form @submit.prevent="onSubmitForm">
          <label for="group" class="text-label">Group*</label>
          <select id="group" class="form-control" required=""
                  v-model="selectedGroup"
          >
            <option
                    v-for="group in groups"
                    :value="group.id"
            >{{ group.name }}</option>
          </select>
          <div class="form-group">
            <label class="text-label">Option Name*</label>
            <input type="text" name="name" class="form-control" required=""
                   v-model="optionName"
            >
          </div>
          <div class="form-group">
            <div class="mb-4"
                 v-if="selectedUrlImage"
            >
              <img :src="selectedUrlImage" alt="">
            </div>
            <button class="btn btn-file"
                    @click.prevent="showImageSelect"
            >Изображение
            </button>
          </div>
          <ImageSelect
                  v-if="isShowImageSelect"
                  @close-form="hideImageSelect"
                  @selected-image="applyImageSelect"
          ></ImageSelect>
          <div class="form-group">
            <label class="text-label">Sort Order</label>
            <input type="text" name="order" class="form-control"
                   v-model="optionSort"
            >
          </div>
          <div v-if="showPreloader" class="d-flex justify-content-start">
            <Preloader></Preloader>
          </div>
          <button v-if="!showPreloader" type="submit" class="btn btn-primary btn-form mr-2">Update</button>
          <button v-if="!showPreloader" @click="back" type="button" class="btn btn-light text-dark btn-form">Cancel
          </button>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import ImageSelect from '../../common/ImageSelect';
  import Preloader from '../../common/Preloader';

  export default {

    props: ['id'],

    mounted() {

      this.getGroups();
      this.getOptionById(this.id);
    },

    data() {

      return {

        selectedGroup: null,
        optionName: '',
        optionSort: '',
        groups: [],
        selectedUrlImage: null,
        isShowImageSelect: false,
        showPreloader: false,
        selectedImage: null,
      }
    },

    methods: {

      getOptionById(id) {

        axios.get('/api/option-value/' + id). then( (response) => {

          this.selectedGroup = response.data.data.option_id;
          this.optionName = response.data.data.name;
          this.optionSort = response.data.data.sort_order;
          this.selectedImage = response.data.data.image_id;
          this.selectedUrlImage = '/' + response.data.data.image.thumbnail;
        } );
      },

      getGroups() {

        axios.get('/api/options').then( (response) => {

          this.groups = response.data.data;
        } );
      },

      back() {

        this.$router.push({name: 'option-value-index'});
      },

      showImageSelect() {

        this.isShowImageSelect = true;
      },

      hideImageSelect() {

        this.isShowImageSelect = false;
      },

      applyImageSelect(images) {

        this.selectedImage = images[0];
        this.getImagesById(this.selectedImage);
        this.isShowImageSelect = false;
      },

      getImagesById(id) {

        axios.get('/api/image/' + id).then( (response) => {

          this.selectedUrlImage = '/' + response.data.data.thumbnail;
        } );
      },

      onSubmitForm() {

        this.showPreloader = true;

        const option = {

          name: this.optionName,
          sort_order: this.optionSort,
          image_id: this.selectedImage,
          option_id: this.selectedGroup,
        };

        axios.put('/api/option-value/' + this.id, option).then( (response) => {

          this.showPreloader = false;
          this.$router.push({name: 'option-value-index'});
        } );
      },
    },

    components: {

      ImageSelect,
      Preloader,
    }
  }
</script>