<template lang="pug">
  .payProcess
    div
      b-navbar(toggleable="lg",
      variant="faded",
      type="light") 專案正在進行中
        b-container(class="bv-example-row")
          b-col
            span.circle.finished
              i(class="material-icons") check
            span 付款方式
          b-col
            span.circle.working
            span 最後確認
          b-col
            span.circle
            span 完成
</template>

<script>
export default {
  name: "PayProcess"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.payProcess {
  #navTitle {
    color: #2b3e62;
    font-weight: bolder;
  }
  .container {
    max-width: 500px !important;
    position: relative;
    &::before {
      content: "";
      background-color: #657257;
      display: block;
      height: 1px;
      left: 100px;
      width: 300px;
      top: 10px;
      position: absolute;
    }
  }
  .col {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .circle {
    background-color: #F2F2F2;
    border: 1px solid #657257;
    border-radius: 50%;
    color: #657257;
    display: block;
    height: 20px;
    line-height: 20px;
    text-align: center;
    width: 20px;
  }
  .finished {
    background-color: #657257;
    i {
      color: #ffffff;
      font-size: 12px;
      line-height: 20px;
    }
  }
  .working {
    position: relative;
    &::before {
      content: "";
      background-color: #657257;
      border-radius: 50%;
      display: block;
      height: 5px;
      left: 7px;
      position: absolute;
      top: 7px;
      width: 5px;
    }
  }
}
</style>
