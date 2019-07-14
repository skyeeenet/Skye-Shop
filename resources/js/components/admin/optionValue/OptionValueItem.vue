<template>
  <tr>
    <td>{{ option.id }}</td>
    <td>{{ option.name }}</td>
    <td>{{ option.group.name }}</td>
    <td><img :src=" '/' + option.image.thumbnail " alt=""></td>
    <td>{{ option.sort_order }}</td>
    <td>
            <span>
                <a href="#" class="mr-4" data-toggle="modal" data-target="#updateModal" data-placement="top"
                   title="Edit"
                   @click="editHandler"

                >
                    <i class="fa fa-pencil color-muted"></i> </a>
                <a href="#" data-toggle="modal" data-target="#basicModal" data-placement="top" title="Close"

                >
                    <i class="fa fa-close color-danger"
                       @click="remove"
                    ></i>
                </a>
            </span>
    </td>
  </tr>
</template>

<script>
  export default {

    props: ['option'],

    data() {

      return {}
    },

    methods: {

      remove() {

        this.$emit('remove', this.option);
      },

      editHandler() {

        this.$router.push('/admin/option-value/' + this.option.id);
      },
    }
  }

</script>