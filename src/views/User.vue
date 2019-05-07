<template>
  <div class="home-container-wrapper">
    <div class="home-container">
      <!-- -->
      <div>
        <div class="data-mednefits-box">
          <!-- Active Registerd User-->
          <ActiveRegistered></ActiveRegistered>
        </div>
        <!-- Active cards -->
        <div class="data-mednefits-box">
          <BarGraph></BarGraph>
        </div>
      </div>
      <!--  -->
      <div>
        <!-- Growth time period -->
        <div class="data-mednefits-box">
        </div>
        <!-- life Pro plan  -->
        <div class="data-mednefits-box">
          <BarGraph></BarGraph>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import user from "@/components/user";
export default user;
</script>
