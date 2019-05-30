<template>
  <div class="status-user-container">
    <h4 class="status-text">Active</h4>
    <h3>{{ users.user_count }}</h3>
    <h5>Users</h5>  
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      users: {}
    };
  },
  created() {
    this.getActiveUsers();
  },
  methods: {
    getActiveUsers(){
      axios.get( axios.defaults.serverUrl + "employees/active_users")
        .then(res => {
          console.log( res );
          this.users = res.data;
        })
        .catch(err => {
          console.log( err );
        });
    }
  }
};
</script>  

<style lang="scss" scoped>
  @import './src/assets/css/summary-active-cards.scss'
</style>

