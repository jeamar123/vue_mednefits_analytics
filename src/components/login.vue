<script>
/* eslint-disable */
//imports here

// vue js here
var login = {
  components: {},
  data() {
    return {
      user_data: {},
      loginState: "login"
    };
  },
  created() {},
  methods: {
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
    }
  },
};

export default login;
</script>

<style lang="scss" scoped>
@import "./src/assets/css/login.scss";
</style>