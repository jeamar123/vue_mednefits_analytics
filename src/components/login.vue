<script>
/* eslint-disable */
//imports here

// vue js here
var login = {
  components: {},
  data() {
    return {
      showLoader: false,
      user_data: {},
      loginState: "login",
      showmodal: false,
      login_data: {
        email : null,
        password : null,
      },
    };
  },
  created() {},
  methods: {
    showLoading() {
      this.showLoader = true;
    },
    hideLoading() {
      setTimeout(()=>{
        this.showLoader = false;
      },1000);
    },
    changeState(data) {
      if (data === "login") {
        this.loginState = data;
        //methods here
      } else if (data === "forgot") {
        this.loginState = data;
        //methods here
      } else if (data === "signup") {
        this.loginState = data;
        //methods here
      }
    },
    login( data ){
      console.log( data );
      if( !data.email ){
        this.$swal( 'Error!', 'Input your email.', 'error');
        return false;
      }
      if( !data.password ){
        this.$swal( 'Error!', 'input your password.', 'error');
        return false;
      }
      this.$parent.showLoading();
      axios.get( axios.defaults.serverUrl + "/employee/get_health_partner_lists?type=" + this.eclaim_data.spending_type )
        .then(res => {
          // console.log( res );
          this.claimTypesArr = res.data;
          this.$parent.hideLoading();
        })
        .catch(err => {
          console.log( err );
          this.$parent.hideLoading();
        });
    }
  },
};

export default login;
</script>

<style lang="scss" scoped>
@import "./src/assets/css/login.scss";
</style>