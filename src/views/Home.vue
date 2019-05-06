<template>
  <div class="home-container-wrapper">
    <div class="home-container">
      <!-- left box -->
      <div>
        <div class="data-mednefits-box">
          <!-- credit time Period -->
          <CreditTimePeriod></CreditTimePeriod>
        </div>
        <!-- Growth time period -->
        <div class="data-mednefits-box">
          <GrowthTimePeriod></GrowthTimePeriod>
        </div>
      </div>
      <!-- right box -->
      <div>
        <!-- Active cards -->
        <div class="data-mednefits-box">
        	<div class="status-wrapper">
        		<div class="user-lifeplan-container">
	        		<div class="status-user-container">
	        			<h4 class="status-text">Active</h4>
	        			<h3>03</h3>
	        			<h5>Users</h5>	
	        		</div>
	        		<div class="status-lifeplan-container">
	        			<h4 class="status-text">Active</h4>
	        			<h3>30</h3>
	        			<h5>Life Plan</h5>
	        		</div>
        		</div>
        		<div class="clinic-proplan-container">
	        		<div class="status-clinic-container">
	        			<h4 class="status-text">Active</h4>
	        			<h3>24</h3>
	        			<h5>Clinics</h5>
	        		</div>
	        		<div class="status-proplan-container">
	        			<h4 class="status-text">Active</h4>
	        			<h3>23</h3>
	        			<h5>Pro Plan</h5>
	        		</div>
        		</div>
        		<div class="allocated-user-container">
	        		<div class="credit-allocated-container">
	        			<h4 class="credit-text">Credit</h4>
	        			<h3>S$ <span>1400.00</span></h3>
	        			<h5>Allocated</h5>
	        		</div>
	        		<div class="credit-use-container">
	        			<h4 class="credit-text">Credit</h4>
	        			<h3>S$ <span>5400.00</span></h3>
	        			<h5>Used</h5>
	        		</div>
        		</div>
        	</div>
        </div>
        <!-- life Pro plan  -->
        <div class="data-mednefits-box">
          <LifeProPlan></LifeProPlan>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import home from "@/components/home";
export default home;
</script>
