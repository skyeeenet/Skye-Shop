<template>
    <tr>
        <td>{{ category.id }}</td>
        <td>{{ category.name }}</td>
        <td>{{ category.parent }}</td>
        <td>{{ category.slug }}</td>
        <td>
            <span>
                <a href="#" class="mr-4" data-toggle="modal" data-target="#updateModal" data-placement="top" title="Edit"
                   @click="updateCategory"
                >
                    <i class="fa fa-pencil color-muted"></i> </a>
                <a href="#" data-toggle="modal" data-target="#basicModal" data-placement="top" title="Close"
                    @click="removeCategory"
                >
                    <i class="fa fa-close color-danger"></i>
                </a>
            </span>
        </td>
    </tr>
</template>

<script>
export default {

    name: 'CategoryItem',

    mounted() {

    },

    props: [
        'category',
    ],

    methods: {

        removeCategory() {

            this.$emit('remove-category', this.category);
        },

        updateCategory() {

            this.$emit('update-category', this.category);
        }
    }
}
</script>
