<template>
	<div class="login-page">
	  <div class="container">
	  	<div class="analytics-login-container data-mednefits-box">
	  		<div class="login-header">
	  			<img :src="'../assets/img/mednefits_logo_v3_(blue)_LARGE.png'">
	  			<h2>data analytics</h2>
	  		</div>
	  		<form>
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
	  			<div class="forgot-pass-wrapper">
	  				<a>Forgot password?</a>
	  			</div>
	  		</form>
	  	</div>
  </div>
</template>

<script>
import login from "@/components/login";
export default login;
</script>
