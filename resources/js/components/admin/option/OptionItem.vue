<template>
    <tr>
        <td>{{ group.id }}</td>
        <td>{{ group.name }}</td>
        <td>{{ group.sort_order }}</td>
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

        props: ['group'],

        methods: {

            editHandler() {

                this.$router.push('/admin/option/' + this.group.id);
            },

            remove() {

                this.$emit('remove', this.group);
            }
        }
    }

</script>