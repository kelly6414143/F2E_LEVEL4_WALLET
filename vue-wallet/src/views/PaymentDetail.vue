<template lang="pug">
  .paymentDetail
    h4 請填寫付款資訊
    b-card
        b-form(@submit="onSubmit" @reset="onReset")
            b-form-group(
                id="input-group-1" 
                label="*持卡人姓名" 
                label-for="input-1")
                b-form-input(
                    id="input-1",
                    required,
                    v-model="form.name",
                    :state="validationName",
                    placeholder="葉大雄"
                )
                b-form-invalid-feedback(
                  id="input-live-feedback",
                  :state="validationName") {{nameMsg}}

            b-form-group(
                    id="input-group-2" 
                    label="*信用卡號" 
                    label-for="input-2")
                
                b-input-group
                    b-form-input(
                        id="input-2",
                        v-model= "creditCard",
                        required,
                        placeholder="0000-0000-0000-0000",
                        :state="validationCard",
                        maxlength="19"
                        ) 
                    b-input-group-append(is-text)                      
                        img(src="@/assets/images/baseline-credit_card.svg")
                b-form-invalid-feedback(
                  id="input-live-feedback",
                  :state="validationCard") {{cardMsg}}
            b-form-group(
                id="input-group-3"
                label="*信用卡期限"
                label-for="input-3")
                b-row
                    b-col(md="6")
                        b-form-select(
                            id="input-3"
                            v-model="form.year"
                            :options="year"
                            required,
                            :state="validationYear")
                            option(:value="null") 選擇年份
                        b-form-invalid-feedback(
                          id="input-live-feedback",
                          :state="validationYear") {{yearMsg}}
                    b-col(md="6")
                        b-form-select(
                            id="input-3"
                            v-model="form.month"
                            :options="month"
                            required,
                            :state="validationMonth")
                            option(:value="null") 選擇月份
                        b-form-invalid-feedback(
                          id="input-live-feedback",
                          :state="validationMonth") {{monthMsg}}
                
        b-form-group(
                id="input-group-4" 
                label="*背面安全碼" 
                label-for="input-4")
          b-form-input(
              id="input-4",
              required,
              v-model="securityNum",
              placeholder="123",
              maxlength="3",
              :state="validationSecurity"
          )
          b-form-invalid-feedback(
            id="input-live-feedback",
            :state="validationSecurity") {{securityMsg}}
</template>

<script>
export default {
  name: "paymentdetail",
  data() {
    return {
      creditCard: "",
      securityNum: "",
      form: {
        creditCard: "",
        name: "",
        month: null,
        year: null
      },
      month: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
      year: ["2019", "2020", "2021", "2022", "2033"],
      show: true,
      cardMsg: "",
      yearMsg: "",
      monthMsg: "",
      securityMsg: "",
      nameMsg: ""
    };
  },
  created() {
    this.form.name = this.$store.state.validMainPage.name;
  },
  computed: {
    validationName() {
      if (this.$store.state.isPaymentpageSubmit) {
        if (this.form.name === "") {
          this.nameMsg = "必填";
          this.$store.commit("setPaymentPageName", { name: false });
          return false;
        } else {
          this.nameMsg = "";
          this.$store.commit("setPaymentPageName", { name: true });
          return true;
        }
      } else {
        if (this.form.name === "") {
          return null;
        } else {
          this.nameMsg = "";
          this.$store.commit("setPaymentPageName", { name: true });
          return true;
        }
      }
    },
    validationCard() {
      let valid = this.creditCard.replace(/-/g, "");
      if (this.$store.state.isPaymentpageSubmit) {
        if (valid === "") {
          this.cardMsg = "必填";
          this.$store.commit("setPaymentPageCardNum", { cardNum: false });
          return false;
        }
      }
      if (valid === "") {
        this.securityMsg = "";
        return null;
      }
      if (isNaN(valid)) {
        this.cardMsg = "請輸入16位數字";
        this.$store.commit("setPaymentPageCardNum", { cardNum: false });
        return false;
      } else {
        if (valid.length === 16) {
          this.$store.commit("setPaymentPageCardNum", { cardNum: true });
          return true;
        } else {
          this.cardMsg = "請輸入16位數字";
          this.$store.commit("setPaymentPageCardNum", { cardNum: false });
          return false;
        }
      }
    },
    validationYear() {
      if (this.$store.state.isPaymentpageSubmit) {
        if (this.form.year === null) {
          this.yearMsg = "必填";
          this.$store.commit("setPaymentPageYear", { year: false });
          return false;
        } else {
          this.yearMsg = "";
          this.$store.commit("setPaymentPageYear", { year: true });
          return true;
        }
      }
      return null;
    },
    validationMonth() {
      if (this.$store.state.isPaymentpageSubmit) {
        if (this.form.month === null) {
          this.monthMsg = "必填";
          this.$store.commit("setPaymentPageMonth", { month: false });
          return false;
        } else {
          this.monthMsg = "";
          this.$store.commit("setPaymentPageMonth", { month: true });
          return true;
        }
      }
      return null;
    },
    validationSecurity() {
      let valid = this.securityNum;
      let length = valid.length - 1;
      if (isNaN(valid)) {
        this.$nextTick(() => {
          this.securityNum = valid.substring(0, length);
        });
      }
      if (this.$store.state.isPaymentpageSubmit) {
        if (valid === "") {
          this.securityMsg = "必填";
          this.$store.commit("setPaymentPageSecurityNum", {
            securityNum: false
          });
          return false;
        }
      }
      if (this.securityMsg === "") {
        this.securityMsg = "";
        return null;
      }

      if (isNaN(valid)) {
        this.securityMsg = "請輸入數字";
        this.$store.commit("setPaymentPageSecurityNum", {
          securityNum: false
        });
        return false;
      } else {
        if (valid.length === 3) {
          this.monthMsg = "";
          this.$store.commit("setPaymentPageSecurityNum", {
            securityNum: true
          });
          return true;
        }
      }
    }
  },
  watch: {
    creditCard() {
      let string = "";
      let arr = [];
      this.creditCard = this.creditCard.replace(/-/g, "");
      let cardLength = this.creditCard.length - 1;
      if (isNaN(this.creditCard)) {
        this.$nextTick(() => {
          this.creditCard = this.creditCard.substring(0, cardLength);
        });
      }

      // let length = parseInt(this.creditCard.length / 4);
      // let res = this.creditCard.length % 4;
      // res = res === 0 ? 4 : res;
      // if (length > 0) {
      //   for (let i = 0; i <length; i++) {
      //     string = this.creditCard.slice(i * 4, (i + 1) * 4);
      //     console.log(string);
      //     arr.push(`${string}-`);
      //   }
      // this.creditCard=arr.join("")
      // if(this.creditCard.length>19){
      //   this.creditCard=this.creditCard.substring(0,18)
      // }
      // }

      let vm = this;
      let length = parseInt(this.creditCard.length / 4);
      let res = this.creditCard.length % 4;
      res = res === 0 ? 4 : res;

      function cardNumberStructure(length) {
        for (let i = 0; i <= length; i++) {
          if (i === 0) {
            if (length === i) {
              string = vm.creditCard.slice(i * 4, i * 4 + res);
            } else {
              string = vm.creditCard.slice(i * 4, (i + 1) * 4);
            }
          } else if (i === 1) {
            if (length === i) {
              string = vm.creditCard.slice(i * 4, i * 4 + res);
            } else {
              string = vm.creditCard.slice(i * 4, (i + 1) * 4);
            }
          } else if (i === 2) {
            if (length === i) {
              string = vm.creditCard.slice(i * 4, i * 4 + res);
            } else {
              string = vm.creditCard.slice(i * 4, (i + 1) * 4);
            }
          } else if (i === 3) {
            string = vm.creditCard.slice(i * 4, i * 4 + res);
          }
          arr.push(`${string}`);
        }
        vm.creditCard = arr.join("-");
        if (vm.creditCard.length > 19) {
          vm.creditCard = vm.creditCard.substring(0, 19);
        }
      }

      if (length > 2) {
        cardNumberStructure(length);
      } else if (length > 1) {
        cardNumberStructure(length);
      } else if (length > 0) {
        cardNumberStructure(length);
      }

      // for (let i = 0; i < this.creditCard.length; i = i + 4) {
      //   if (this.creditCard.length === 4) {
      //     this.creditCard = `${this.creditCard}-`;
      //   } else if (this.creditCard.length === 4 * 2 + 1) {
      //     this.creditCard = `${this.creditCard}-`;
      //   } else if (this.creditCard.length === 4 * 3 + 2) {
      //     this.creditCard = `${this.creditCard}-`;
      //   }
      // }
    }
  },
  methods: {
    onSubmit() {},
    onReset() {}
  }
};
</script>


<style lang="scss" scoped>
</style>
