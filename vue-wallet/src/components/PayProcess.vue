<template lang="pug">
  .payProcess
    div
      b-navbar(toggleable="lg",
      variant="faded",
      type="light")
        b-container(class="bv-example-row")
          #leave-outter
            #top-leaves
            #bottom-leaves
          b-col
            span.circle(:class="$store.state.isFinishedMainPage?'finished':'working'")
              i(v-if="$store.state.isFinishedMainPage",
              class="material-icons") check
            span 付款方式
          b-col
            span.circle(
              :class="$store.state.isFinishedMainPage?'working':''",
              :style="$store.state.isFinished?stylebg:''"
            )
              -const styleJson={"color": "#ffffff","font-size": "12px","line-height": "20px","position":"relative","z-index":"1"}
              i(v-if="$store.state.isFinished",
                style=styleJson,
                class="material-icons") check
            span 最後確認
          b-col
            span.circle(:class="$store.state.isFinished?'finished':''")
              i(v-if="$store.state.isFinished",
              class="material-icons") check
            span 完成
</template>

<script>
export default {
  name: "PayProcess",
  data() {
    return {
      stylebg: { "background-color": "#657257" }
    };
  }
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
    background-color: #f2f2f2;
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
#leave-outter {
  position: relative;
  top: 40px;
  left: -10px;
  z-index: 3;
  transform: rotate(-20deg);
  transform-origin: 0;
  &:after {
    content: "";
    position: absolute;
    top: 15px;
    left: 20px;
    width: 3px;
    height: 50px;
    transform: rotate(-10deg);
    display: block;
    background-color: #187a00;
    border-bottom-left-radius: 80%;
  }
}
#top-leaves {
  position: absolute;
  &:before {
    content: "";
    position: absolute;
    top: -35px;
    left: -30px;
    transform: rotate(-5deg);
    display: block;
    width: 45px;
    height: 45px;
    background: linear-gradient(to left, #187a00, #51883f);
    // background-color: #51883F;
    border-radius: 50%;
    border-bottom-right-radius: 0%;
    box-shadow: -0.2em 0.2em 0.3em -0.1em rgba(0, 0, 0, 0.15);
  }
  &:after {
    content: "";
    position: absolute;
    top: -43px;
    left: 14px;
    z-index: 1;
    transform: rotate(-5deg);
    display: block;
    width: 45px;
    height: 45px;
    background: linear-gradient(to right, #187a00, #51883f);
    border-radius: 50%;
    border-bottom-left-radius: 0%;
    box-shadow: -0.2em 0.2em 0.3em -0.1em rgba(0, 0, 0, 0.15);
  }
}
#bottom-leaves {
  position: absolute;
  &:before {
    content: "";
    position: absolute;
    top: 5px;
    left: -25px;
    z-index: 1;
    transform: rotate(-10deg);
    display: block;
    width: 45px;
    height: 45px;
    background: linear-gradient(to right, #187a00, #51883f);
    border-radius: 50%;
    border-top-right-radius: 0%;
    box-shadow: -0.2em 0.2em 0.3em -0.1em rgba(0, 0, 0, 0.15);
  }
  &:after {
    content: "";
    position: absolute;
    top: -3px;
    left: 18px;
    transform: rotate(-10deg);
    display: block;
    width: 45px;
    height: 45px;
    background: linear-gradient(to right, #187a00, #51883f);
    border-radius: 50%;
    border-top-left-radius: 0%;
    border-bottom: 5px solid #187a00;
    box-shadow: -0.2em 0.2em 0.3em -0.1em rgba(0, 0, 0, 0.15);
  }
}
</style>
