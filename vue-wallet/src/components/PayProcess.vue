<template lang="pug">
  .payProcess
    div
      b-navbar(toggleable="lg",
      variant="faded",
      type="light")
        b-navbar-brand(href="#",
        id="navTitle") THE F2E

        b-container(class="bv-example-row")
          b-col
            span.circle 1
            span 付款方式
          b-col
            span.circle.working 2
            span 最後確認
          b-col
            span.circle 3
            span 完成
</template>

<script>
export default {
  name: 'PayProcess',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.payProcess{
  #navTitle{
  color:#2B3E62;
  font-weight: bolder;
  }
  .col{
    align-items: center;
    display: flex;
  }
  .circle{
    background-color: #40619F;
    border-radius: 50%;
    color: #FFFFFF;
    display: block;
    height: 38px;
    line-height: 38px;
    opacity: .2;
    text-align: center;
    width: 38px;
  }
  .working{
    opacity: 1;
  }
}

</style>
