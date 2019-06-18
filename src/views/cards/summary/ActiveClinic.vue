<template>
  <div class="status-clinic-container">
    <h4 class="status-text">Active</h4>
    <h3>{{ clinics.clinic_count }}</h3>
    <h5>Clinics</h5>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment';

export default {
  data() {
    return {
      clinics: {},
      start_date : moment(),
      end_date : moment(),
    };
  },
  created() {
  },
  methods: {
    getActiveClinics( start_date, end_date ){
      this.start_date = start_date;
      this.end_date = end_date;

      var data = {
        start : moment( this.start_date ).format('YYYY-MM-DD'),
        end : moment( this.end_date  ).format('YYYY-MM-DD')
      }
      axios.get( axios.defaults.serverUrl + "analytics/active_clinics?start=" + moment( this.start_date ).format('YYYY-MM-DD') + "&end=" + moment( this.end_date ).format('YYYY-MM-DD') )
        .then(res => {
          // console.log( res );
          this.clinics = res.data.data;
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

