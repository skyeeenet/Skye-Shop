<template>
  <div class="row">
    <div class="col-md-12">
      <button @click="create" type="button" class="btn btn-rounded btn-info"><span class="btn-icon-left text-info"><i
              class="fa fa-plus color-info"></i> </span>Add
      </button>

      <div class="card mt-3">
        <div class="card-body">
          <h4 class="card-title mb-4">Options</h4>
          <div class="table-responsive">
            <table class="table table-bordered verticle-middle" style="min-width: 400px;">
              <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Group</th>
                <th scope="col">Image</th>
                <th scope="col">Sort Order</th>
                <th scope="col">Action</th>
              </tr>
              </thead>
              <tbody>

              <OptionItem
                      v-for="option in options"
                      :option="option"
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
  import SubmitChanges from '../modal/SubmitChanges';
  import OptionItem from "./OptionValueItem";

  export default {

    data() {

      return {

        selected: null,
        options: [],
      }
    },

    mounted() {

      this.getOptions();
    },

    methods: {

      create() {

        this.$router.push({name: 'option-value-create'});
      },

      remove(option) {

        axios.delete('/api/option-value/' + option.id).then(() => {

          this.getOptions();
        });
      },

      removeOption(option) {

        this.selected = option;
      },

      getOptions() {

        axios.get('/api/option-value').then((response) => {

          this.options = response.data.data;
        });
      },

    },

    components: {

      OptionItem,
      SubmitChanges
    }
  }
</script>