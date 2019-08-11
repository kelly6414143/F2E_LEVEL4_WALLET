<template lang="pug">
  .home
    pay-process

    b-container(class="bv-example-row")
      b-row
        b-col(md="8")
          router-view
        b-col(md="4")
          booking-detail
</template>

<script>
import payProcess from "@/components/PayProcess.vue";
import bookingDetail from "@/components/BookingDetail.vue";

export default {
  name: "home",
  components: {
    "pay-process": payProcess,
    "booking-detail": bookingDetail
  }
};
</script>

<style lang="scss" scoped>
</style>
