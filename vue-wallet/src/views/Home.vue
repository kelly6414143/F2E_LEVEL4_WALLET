<template lang="pug">
  .home
    pay-process
    //- view-router
</template>

<script>
import payProcess from "@/components/PayProcess.vue"

export default {
  // name: 'home',
  components:{
    "pay-process":payProcess
  }
}
</script>
