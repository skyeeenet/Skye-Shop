<template>
    <div class="bootstrap-pagination my-3">
        <nav>
            <ul class="pagination pagination-rounded pagination-sm">
                <li @click="getPrevItems" v-if="prevPageUrl != null" class="page-item"><a class="page-link" href="#"><</a></li>
                <li
                        v-for="item in totalPages"
                        :class="{active: item === currentPage, 'page-item': 1 }"
                        :key="item"
                        @click="getSelectedPage(item)"
                ><a class="page-link" href="#">{{ item }}</a></li>
                <li @click="getNextItems" v-if="nextPageUrl != null" class="page-item"><a class="page-link" href="#">></a></li>
            </ul>
        </nav>
    </div>
</template>

<script>

    export default {

        props: ['pagination'],

        computed: {

        },

        watch: {

            pagination(value) {

                this.currentPage = value.current_page;
                this.nextPageUrl = value.next_page_url;
                this.prevPageUrl = value.prev_page_url;
                this.totalPages = this.pagination.last_page;
            },

            paginationItems(value) {

                this.currentPage = value.current_page;
                this.nextPageUrl = value.next_page_url;
                this.prevPageUrl = value.prev_page_url;
            }
        },

        data() {

            return {

                currentPage: 0,
                nextPageUrl: null,
                prevPageUrl: null,
                totalPages: 0,
                paginationItems: [],
            }
        },

        methods: {

            getNextItems() {

                if (this.currentPage <= this.totalPages) {

                    this.currentPage += 1;
                }

                this.getItems(this.currentPage);
            },

            getPrevItems() {

                if(this.currentPage > 0) {

                    this.currentPage -= 1;
                }

                this.getItems(this.currentPage);
            },

            getItems(offset) {

                axios.get('/api/image?page=' + offset).then( (response) => {

                    this.paginationItems = response.data.data;

                    this.$emit('get-new-items', response.data.data.data);
                } )
            },

            getSelectedPage(key) {

                if (key <= this.totalPages && key > 0) {

                    this.getItems(key);

                    this.currentPage = key;
                }
            }
        }
    }
</script>