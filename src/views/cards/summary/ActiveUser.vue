<template>
  <div class="status-user-container">
    <h4 class="status-text">Active</h4>
    <h3>23</h3>
    <h5>Users</h5>  
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment';

export default {
  data() {
    return {
      users: {},
      start_date : moment(),
      end_date : moment(),
    };
  },
  created() {
  },
  methods: {
    getActiveUsers( start_date, end_date ){
      console.log( start_date );
      console.log( end_date );
      this.start_date = start_date;
      this.end_date = end_date;
    }
  }
};
</script>  

<style lang="scss" scoped>
  @import './src/assets/css/summary-active-cards.scss'
</style>

