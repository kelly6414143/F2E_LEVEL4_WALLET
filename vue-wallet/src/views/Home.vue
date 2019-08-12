<template lang="pug">
  .home
    pay-process

    .finishedPage(v-if="$store.state.isFinished") finishepage

    b-container(
      class="bv-example-row",
      v-if="!$store.state.isFinished")
      b-row
        b-col(md="8")
          keep-alive(v-if="$route.meta.keepAlive")
            router-view
          keep-alive(v-if="!$route.meta.keepAlive")
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
.finishedPage {
  background-color: #657257;
  color: white;
  font-size: 36px;
  height: calc(100vh - 60px);
  text-align: center;
  text-transform: uppercase;
}
</style>
