<template>
  <div class="credit-use-container">
    <h4 class="credit-text">Credit</h4>
    <h3>S$ <span>{{ credit }}</span></h3>
    <h5>Used</h5>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment';

export default {
  data() {
    return {
      credit: {},
      start_date : moment(),
      end_date : moment(),
    };
  },
  created() {
  },
  methods: {
    getUsedCredits( start_date, end_date ){
      this.start_date = start_date;
      this.end_date = end_date;

      var data = {
        start : moment( this.start_date ).format('YYYY-MM-DD'),
        end : moment( this.end_date  ).format('YYYY-MM-DD')
      }
      axios.get( axios.defaults.serverUrl + "analytics/get_credit_spent?start=" + moment( this.start_date ).format('YYYY-MM-DD') + "&end=" + moment( this.end_date ).format('YYYY-MM-DD') )
        .then(res => {
          console.log( res );
          this.credit = res.data.data.toFixed(2);
        })
        .catch(err => {
          console.log( err.response );
        });
    }
  }
};
</script>

<style lang="scss" scoped>
  @import './src/assets/css/summary-active-cards.scss'
</style>

