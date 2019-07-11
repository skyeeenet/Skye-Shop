<template>
    <tr>
        <td>{{ attribute.id }}</td>
        <td>{{ attribute.name }}</td>
        <td>{{ attribute.slug }}</td>
        <td>
            <span>
                <a href="#" class="mr-4" data-toggle="modal" data-target="#updateModal" data-placement="top" title="Edit"
                   @click="updateAttribute"
                >
                    <i class="fa fa-pencil color-muted"></i> </a>
                <a href="#" data-toggle="modal" data-target="#basicModal" data-placement="top" title="Close"
                    @click="removeAttribute"
                >
                    <i class="fa fa-close color-danger"></i>
                </a>
            </span>
        </td>
    </tr>
</template>

<script>
export default {

    mounted() {

    },

    props: [
        'attribute',
    ],

    methods: {

        removeAttribute() {

            this.$emit('remove', this.attribute);
        },

        updateAttribute() {

            this.$emit('update', this.attribute);
        }
    }
}
</script>
