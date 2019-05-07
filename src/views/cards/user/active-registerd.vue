<template>
  <div class="active-registerd-graph-container">
    <h4>User</h4>
    <canvas id="active-line-chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import planetChartData from "../../../chart-data/chart-data.js";
import lineChartData from "../../../chart-data/line-chart-data.js";

export default {
  data() {
    return {
      planetChartData: planetChartData, // Bar chart data
      lineChartData: lineChartData, // Line chart data
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
    this.createChart("active-line-chart", this.lineChartData);
  }
};
</script>

<style>

</style>

