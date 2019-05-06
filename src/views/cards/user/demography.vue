<template>
  <div class="active-registerd-graph-container">
    <h4>User Demography base pie and bar graph</h4>
    <canvas id="pie-chart"></canvas>
    <canvas id="bar-chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import planetChartData from "../../../chart-data/chart-data.js";
import pieChartData from "../../../chart-data/pie-chart-data.js";

export default {
  data() {
    return {
      planetChartData: planetChartData, // bar chart data
      pieChartData: pieChartData, // bar chart data
      user_data: {}
    };
  },
  created() {},
  methods: {
    createChart(chartid, chartData) {
      const ctx = document.getElementById(chartid);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options
      });
    }
  },
  mounted() {
    this.createChart("bar-chart", this.planetChartData);
    this.createChart("pie-chart", this.pieChartData);
  }
};
</script>

<style>

</style>

