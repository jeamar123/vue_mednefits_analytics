<template>
  <div class="status-lifeplan-container">
    <h4 class="status-text">Active</h4>
    <h3>{{ lite_plan.plan_count }}</h3>
    <h5>Lite Plan</h5>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment';

export default {
  data() {
    return {
      lite_plan: {},
      start_date : moment(),
      end_date : moment(),
    };
  },
  created() {
  },
  methods: {
    getActivePlan( start_date, end_date ){
      this.start_date = start_date;
      this.end_date = end_date;

      var data = {
        start : moment( this.start_date ).format('YYYY-MM-DD'),
        end : moment( this.end_date  ).format('YYYY-MM-DD')
      }
      axios.get( axios.defaults.serverUrl + "analytics/active_plans?plan_type=lite_plan&start=" + moment( this.start_date ).format('YYYY-MM-DD') + "&end=" + moment( this.end_date ).format('YYYY-MM-DD') )
        .then(res => {
          // console.log( res );
          this.lite_plan = res.data.data;
        })
        .catch(err => {
          console.log( err.response );
        });
    },
  }
};
</script>

<style lang="scss" scoped>
  @import './src/assets/css/summary-active-cards.scss'
</style>

