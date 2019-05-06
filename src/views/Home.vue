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
          <ActiveUser></ActiveUser>
          <ActiveClinic></ActiveClinic>
          <ActiveLifePlan></ActiveLifePlan>
          <ActiveProPlan></ActiveProPlan>
          <CreditUsed></CreditUsed>
          <CreditAllocated></CreditAllocated>
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
