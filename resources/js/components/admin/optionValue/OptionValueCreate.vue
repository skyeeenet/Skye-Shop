<template>
  <div class="row">

    <div class="card-body col-md-12">
      <!-- <button @click="back" type="button" class="col-md-1 mb-4 btn btn-ft btn-flat btn-dark">&larr;</button> -->
      <h4 class="card-title mb-4">Create Option</h4>
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
          <button v-if="!showPreloader" type="submit" class="btn btn-primary btn-form mr-2">Submit</button>
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

    data() {

      return {

        isShowImageSelect: false,
        showPreloader: false,
        optionName: '',
        optionSort: '',
        groups: [],
        selectedGroup: null,
        selectedImage: null,
        selectedUrlImage: '#',
      }
    },

    components: {

      ImageSelect,
      Preloader,
    },

    mounted() {

      this.getGroups();
    },

    watch: {

      selectedImage() {

        console.log(this.selectedImage);
      }
    },

    methods: {

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

      back() {

        this.$router.push({name: 'option-value-index'});
      },

      getGroups() {

        axios.get('/api/options').then( (response) => {

          this.groups = response.data.data;
        } );
      },

      onSubmitForm() {

        this.showPreloader = true;

        const optionValue = {

          name: this.optionName,
          sort_order: this.optionSort,
          option_id: this.selectedGroup,
          image_id: this.selectedImage,
        };

        axios.post('/api/option-value', optionValue).then( () => {

          this.showPreloader = false;
          this.$router.push({name: 'option-value-index'});
        } );
      }

    }
  }

</script>