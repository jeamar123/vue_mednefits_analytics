<template>
  <div class="home-container-wrapper">
    <div class="home-container">
      <!-- -->
      <div>
        <div class="data-mednefits-box">
          <!-- credit time Period -->
          <CreditTimePeriod></CreditTimePeriod>
        </div>
        <!-- Active cards -->
        <div class="data-mednefits-box">
        	<div class="status-wrapper">
        		<div class="user-lifeplan-container">
	        		<ActiveUser></ActiveUser>
	        		<ActiveLifePlan></ActiveLifePlan>
        		</div>
        		<div class="clinic-proplan-container">
	        		<ActiveClinic></ActiveClinic>
	        		<ActiveProPlan></ActiveProPlan>
        		</div>
        		<div class="allocated-user-container">
	        		<CreditAllocated></CreditAllocated>
	        		<CreditUsed></CreditUsed>
        		</div>
        	</div>
        </div>
      </div>
      <!--  -->
      <div>
        <!-- Growth time period -->
        <div class="data-mednefits-box">
          <GrowthTimePeriod></GrowthTimePeriod>
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
