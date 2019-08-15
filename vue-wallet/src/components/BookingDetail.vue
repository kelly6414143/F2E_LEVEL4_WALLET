<template lang="pug">
    .bookingDetail
        h4 訂單明細
        b-card
            b-list-group(flush)
                b-list-group-item
                    b-row(no-gutters)
                        b-col(md="4")
                            b-card-img(src="https://picsum.photos/400/400/?image=20" class="rounded-0")
                        b-col.bookingDetail_detail(md="8")
                            .bookingDetail_detail_title 私房茶禮盒
                            .bookingDetail_detail_price NT$888
                    b-row(no-gutters)
                        b-col 數量
                        b-col 5
                    b-row(no-gutters)
                        b-col 小計
                        b-col NT$4440
            b-row.totalRow(no-gutters)
                    b-col 總計
                    b-col NT$4440
            b-row.buttonRow(no-gutters)
                    b-col 
                        b-button(v-if="isPaymentDetail")(
                          type="submit",
                          variant="dark",
                           @click="toPre") 回上一步
                        b-button(v-if="!isPaymentDetail")(
                          type="submit",
                          variant="dark",
                          @click="toShopping") 繼續購物
                    b-col 
                        b-button(
                          v-if="!isPaymentDetail",
                          type="submit",
                          @click="toSubmitMain") 確認送出
                        b-button(
                          v-if="isPaymentDetail",
                          type="submit",
                          @click="toSubmitPayment") 確認送出
</template>
<script>
export default {
  data() {
    return {
      isPaymentDetail : false
    };
  },
  methods: {
    toSubmitMain() {
      this.$store.commit('setMainPageSubmit',true)
      this.$store.commit('setIdDone',true)
      if(!this.$store.state.validMainPage.name||!this.$store.state.validMainPage.email||!this.$store.state.validMainPage.phone){
        return
      }
      this.$router.push({ path: "/paymentDetail" });
      this.isPaymentDetail = true
      this.$store.commit('setFinishedMainpage',true)
    },
    toSubmitPayment(){
       this.$store.commit('setPaymentpageSubmit',true)
        if(!this.$store.state.validPaymentPage.name||!this.$store.state.validPaymentPage.cardNum||!this.$store.state.validPaymentPage.year||!this.$store.state.validPaymentPage.month||!this.$store.state.validPaymentPage.securityNum){
        return
      }
       this.$store.commit('setFinishedStatus',true)
    },
    toPre(){
      this.$router.push({ path: "/mainPage" });
      this.$store.commit('setFinishedMainpage',false)
      this.isPaymentDetail = false
    },
    toShopping(){
      alert('go shopping')
    }
  }
};
</script>


<style lang="scss" scoped>
.bookingDetail {
  box-sizing: border-box;
  .row {
    margin: 5px 0;
    .col {
      &:nth-child(2) {
        text-align: right;
      }
    }
  }

  .list-group-item {
    padding: 0;
  }
  &_detail {
    padding-left: 10px;
    &_title {
      font-weight: bolder;
      margin-bottom: 5px;
    }
    &_price {
      color: rgba(0, 0, 0, 0.5);
      font-size: 12px;
    }
  }
  .totalRow {
    margin: 20px 0;
  }
  .buttonRow {
    .col {
      margin: 0 5px;
      &:nth-child(1) {
        text-align: right;
      }
      &:nth-child(2) {
        text-align: left;
        button {
          background-color: #657257;
        }
      }
    }
  }
}
</style>

