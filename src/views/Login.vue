<template>
	<div class="login-page">
	  <div class="container">
	  	<div class="analytics-login-container data-mednefits-box">
	  		<div class="login-header">
	  			<img :src="'../assets/img/mednefits_logo_v3_(blue)_LARGE.png'">
	  			<h2>data analytics</h2>
	  		</div>
	  		<!-- for login forms -->
	  		<form v-if="true">
	  			<div class="analytics-input-wrapper">
	  				<input type="text" placeholder="Email address">
	  			</div>
	  			<div class="analytics-input-wrapper">
	  				<input type="text" placeholder="Enter password">
	  			</div>
	  			<div class="checkbox-wrapper">
	  				<label>
	  					<input type="checkbox"> Stay signed in
	  				</label>
	  			</div>
	  			<div>
	  				<button>Log in</button>
	  			</div>
	  			<div class="reset-login-wrapper">
	  				<a>Forgot password?</a>
	  			</div>
	  		</form>
	  		<!-- for forgot password form -->
	  		<form v-if="false" class="reset-container">
	  			<div class="analytics-input-wrapper">
	  				<input type="text" placeholder="Communication Email address">
	  			</div>
	  			<div>
	  				<button>Reset Password</button>
	  			</div>
	  			<div class="reset-login-wrapper">
	  				<a>Login</a>
	  			</div>
	  		</form>
	  		<!-- for sign up form -->
	  		<form>
	  			
	  		</form>
	  	</div>
  	</div>
  </div>	
</template>

<script>
import login from "@/components/login";
export default login;
</script>
