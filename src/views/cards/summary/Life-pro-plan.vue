<template>
  <div class="life-pro-plan-container">
    <h4>Life plan growth month and yearly vs one year back date</h4>
    <div class="account-type-btn-container">
      <button class="btn-life-plan active">Life Plan</button>
      <button class="btn-pro-plan">Pro Plan</button>
    </div>
    <canvas id="life-pro-plan-chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import planetChartData from "../../../chart-data/chart-data.js";

export default {
  data() {
    return {
      planetChartData: planetChartData, // chart data
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
    this.createChart("life-pro-plan-chart", this.planetChartData);
  }
};
</script>

<style lang="scss" scoped>
  @import './src/assets/css/home.scss'
</style>

