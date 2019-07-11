import { Pie, mixins } from "vue-chartjs";

export default {
    extends: Pie,

    data() {

        return {

            dataCollection: {

                labels: ["Green", "Red", "Blue"],
                datasets: [
                    {
                        label: "Data One",
                        backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
                        data: [1, 10, 5]
                    }
                ]
            },

            options: {

                responsive: true,
                maintainAspectRatio: false
            },

        };
    },

    mounted() {

        this.renderChart(this.dataCollection, this.options);
    }
};