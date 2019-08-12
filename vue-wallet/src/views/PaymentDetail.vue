<template lang="pug">
  .paymentDetail
    h4 請填寫付款資訊
    b-card
        b-form(@submit="onSubmit" @reset="onReset")
            b-form-group(
                id="input-group-1" 
                label="持卡人姓名" 
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
                    label="信用卡號" 
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
                label="信用卡期限"
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
                label="背面安全碼" 
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
      nameMsg:""
    };
  },
  created(){
    this.form.name = this.$store.state.validMainPage.name
  },
  computed: {
    validationName() {
      if (this.$store.state.isMainpageSubmit) {
        if (this.form.name === "") {
          this.nameMsg = "必填";
          // this.$store.commit("setValidMainPageName", { name: this.form.name });
          return false;
        } else {
          this.nameMsg = "";
          // this.$store.commit("setValidMainPageName", { name: this.form.name });
          return true;
        }
      } else {
        if (this.form.name === "") {
          return null;
        } else {
          this.nameMsg = "";
          // this.$store.commit("setValidMainPageName", { name: this.form.name });
        }
      }
    },
    validationCard() {
      let valid = this.creditCard;
      if(valid===""){
        this.cardMsg = "必填";
        return false
      }
      if (isNaN(valid)) {
        this.cardMsg = "請輸入數字";
        if (valid.indexOf("-") > 0) {
          valid = valid.split("-");
          let format = valid.filter(x => isNaN(Number(x)));
          if (format.length === 0) {
            if (valid.length === 4 && valid[3].length === 4) {
              return true;
            }
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
    },
    validationYear() {
      if(this.form.year===null){
        this.yearMsg="必填"
        return false
      }
      return null;
    },
    validationMonth() {
      if(this.form.month===null){
        this.monthMsg="必填"
        return false
      }
      return null;
    },
    validationSecurity() {
      let valid = this.securityNum;
      if(this.securityNum===""){
        this.securityMsg="必填"
        return false
      }
      if (isNaN(valid)) {
        this.securityMsg = "請輸入數字";
        return false;
      }
    }
  },
  watch: {
    creditCard() {
      for (let i = 0; i < this.creditCard.length; i = i + 4) {
        if (this.creditCard.length === 4) {
          this.creditCard = `${this.creditCard}-`;
        } else if (this.creditCard.length === 4 * 2 + 1) {
          this.creditCard = `${this.creditCard}-`;
        } else if (this.creditCard.length === 4 * 3 + 2) {
          this.creditCard = `${this.creditCard}-`;
        }
      }
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
