<template>
  <form @submit.prevent="onSubmitHandler" class="image-select-container">
    <div class="image-select-header-container">
      <div class="image-select-header-item">
        <h2>Upload Image</h2>
        <button @click="onCloseHandler" type="button" class="close"><span>&times;</span></button>
      </div>
      <div class="image-select-header-item mt-10">
        <div>
          <input type="file" ref="file" name="image" id="image"
                 @change="fileUpload"
          >
        </div>
        <button
                @click="deleteItems"
                type="button" class="btn btn-danger">Remove <span class="btn-icon-right"><i
                class="fa fa-close"></i></span></button>
      </div>
    </div>

    <div class="image-select-main-container">
      <div v-for="image in images" :key="image.id" class="image-select-main-item mr-5">
        <div class="image-select-item-image" :style="{ 'background-image': 'url(' + '/' + image.thumbnail + ')' }"></div>
        <div class="d-flex">
          <input :key="image.id" class="mr-3 mt-1" :id="image.id" type="checkbox" :name="image.id"
                 @click="selectItem(image.id)"
          >
          <label :for="image.id">{{ image.id }}</label>
        </div>
      </div>

    </div>

    <div class="image-select-footer-container">
      <Pagination
              v-if="pagination"
              :pagination="pagination"
              @get-new-items="getNewItems"
      ></Pagination>
      <div>
        <button @click="onCloseHandler" v-if="!showPreloader" type="button" class="btn mr-2 btn-ft btn-flat btn-dark">
          Close
        </button>
        <button :disabled="disableSubmit" v-if="!showPreloader" type="submit" class="btn btn-ft btn-flat btn-success">
          Select
        </button>

        <Preloader
                v-if="showPreloader"
        ></Preloader>
      </div>
    </div>
  </form>
</template>

<script>
  import Preloader from './Preloader'
  import Pagination from './Pagination'

  export default {

    data() {

      return {

        file: '',
        images: [],
        showPreloader: false,
        pagination: [],
        selectedItems: [],
      }
    },

    mounted() {

      this.getImages();
    },

    computed: {

      disableSubmit() {

        if (this.selectedItems.length > 1) {

          return true;
        } else {

          return false;
        }
      },

    },

    methods: {

      /*find(array, value) {

        for (var i = 0; i < array.length; i++) {
          if (array[i] == value) return i;
        }

        return -1;
      },*/

      getImages() {

        axios.get('/api/image').then((response) => {

          this.images = response.data.data.data;
          this.pagination = response.data.data;
          //console.log(response.data.data);
        });
      },

      selectItem(item) {

        if (this.selectedItems.indexOf(item) == -1) {

          this.selectedItems.push(item);

        } else {

          this.selectedItems.splice(this.selectedItems.indexOf(item), 1);
        }
      },

      getNewItems(images) {

        this.images = images;
      },

      fileUpload() {

        this.showPreloader = true;

        this.file = this.$refs.file.files[0];

        let formData = new FormData();

        formData.append('image', this.file);

        axios.post('/api/image', formData, {

          headers: {

            'Content-Type': 'multipart/form-data',
          }
        }).then(() => {

          this.getImages();
          this.showPreloader = false;

        }).catch((error) => {
          console.log(error);
        });
      },

      deleteItems() {

        this.showPreloader = true;

        axios.post('/api/image/delete', {items: this.selectedItems}).then(() => {

          this.getImages();
          this.showPreloader = false;
        });
      },

      onSubmitHandler() {

        this.$emit('selected-image', this.selectedItems);
      },

      onCloseHandler() {

        this.$emit('close-form');
      }
    },

    components: {

      Preloader,
      Pagination,
    }
  }
</script>

<style scoped lang="sass">

  .image-select-container
    position: absolute
    z-index: 999
    width: 700px
    height: 500px
    background-color: #fff
    border: 1px solid black

    .image-select-header-container
      display: flex
      flex-direction: column
      padding: 10px 20px

    .image-select-header-item
      display: flex
      justify-content: space-between

    .mt-10
      margin-top: 10px

    .image-select-main-container
      display: flex
      flex-wrap: wrap
      height: 300px
      padding: 0 20px


    .image-select-footer-container
      display: flex
      justify-content: space-between
      padding: 10px 20px

    .image-select-main-item
      display: flex
      flex-direction: column
      width: 100px
      height: 100px

    .image-select-item-image
      background-position: center
      background-size: contain
      background-repeat: no-repeat
      width: 100px
      height: 100px
</style>