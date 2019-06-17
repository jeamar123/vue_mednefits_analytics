<template>
  <div class="status-user-container">
    <h4 class="status-text">Active</h4>
    <h3>{{ users.users }}</h3>
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
    this.getActiveUsers( this.start_date, this.end_date );
  },
  methods: {
    getActiveUsers( start_date, end_date ){
      this.start_date = start_date;
      this.end_date = end_date;

      var data = {
        start : moment( this.start_date ).format('YYYY-MM-DD'),
        end : moment( this.end_date  ).format('YYYY-MM-DD')
      }
      console.log( data );
      axios.get( axios.defaults.serverUrl + "analytics/active_users?start=" + moment( this.start_date ).format('YYYY-MM-DD') + "&end=" + moment( this.end_date ).format('YYYY-MM-DD') )
        .then(res => {
          console.log( res );
          this.users = res.data.data;
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

