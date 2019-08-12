<template lang="pug">
  .mainPage
    h4 請選擇付款方式
    b-card-group(deck)
        b-card.selected
          .checked
            i(class="material-icons") check
          .imgSize
            img(src="@/assets/images/baseline-credit_card.svg")
          p 線上刷卡
        b-card.payPal
          .imgSize
            img(src="@/assets/images/PayPal.svg")
          p 使用PayPal付款

    h4 請填寫購買明細
    b-card
        b-form(@submit="onSubmit" @reset="onReset")
          b-row
            b-col(md="6")
              b-form-group(
                id="input-group-1"
                label="*姓名"
                label-for="input-1")
                b-form-input(
                    id="input-1",
                    type="email",
                    v-model="form.name",
                    required,
                    placeholder="葉大雄",
                    :state="validationName"
                )
                b-form-invalid-feedback(:state="validationName") {{nameMsg}}
                b-form-valid-feedback(:state="validationName") 正確
            b-col(md="6")
              b-form-group(
                id="input-group-2" 
                label="*手機電話" 
                label-for="input-2")
                b-form-input(
                    id="input-2",
                    v-model="form.phoneNumber",
                    required,
                    :state="validationPhone",
                    placeholder="0912345678",
                    maxLength = 10
                )
                b-form-invalid-feedback(:state="validationPhone") {{phoneMsg}}
                b-form-valid-feedback(:state="validationPhone") 正確
        b-form-group(
                id="input-group-3" 
                label="*E-mail" 
                label-for="input-3")
          b-form-input(
              id="input-3"
              v-model="form.email"
              required
              placeholder="a123@gmail.com"
              :state="validationEmail"
          )
          b-form-invalid-feedback(:state="validationEmail") {{emailMsg}}
          b-form-valid-feedback(:state="validationEmail") 正確
        b-form-group(
          id="input-group-3" 
          label="地址" 
          label-for="input-3")
          b-form-input(
              id="input-3"
              required
              placeholder="台中市西屯區"
          )

</template>

<script>
export default {
  name: "mainpage",
  data() {
    return {
      form: {
        email: "",
        name: "",
        phoneNumber: ""
      },
      show: true,
      phoneMsg: "",
      emailMsg: "",
      nameMsg: ""
    };
  },
  computed: {
    validationName() {
      if (this.$store.state.isMainpageSubmit) {
        if (this.form.name === "") {
          this.nameMsg = "必填";
          this.$store.commit("setValidMainPageName", { name: this.form.name });
          return false;
        } else {
          this.nameMsg = "";
          this.$store.commit("setValidMainPageName", { name: this.form.name });
          return true;
        }
      } else {
        if (this.form.name === "") {
          return null;
        } else {
          this.nameMsg = "";
          this.$store.commit("setValidMainPageName", { name: this.form.name });
        }
      }
    },
    validationPhone() {
      let vm = this;
      function toCheckNumber(value) {
        if (isNaN(value)) {
          vm.phoneMsg = "請輸入數字";
          return false;
        } else {
          vm.phoneMsg = "";
          if (value.length === 10) {
            vm.$store.commit("setValidMainPagePhone", {
              phone: true
            });
            return true;
          }
        }
      }

      let firstWord = "";
      if (this.$store.state.isMainpageSubmit) {
        if (this.form.phoneNumber === "") {
          this.phoneMsg = "必填";
          this.$store.commit("setValidMainPagePhone", { phone: false });
          return false;
        } else {
          this.phoneMsg = "";
          if (this.form.phoneNumber.length < 10) {
            this.phoneMsg = "請輸入10位數，格式為0912345678";
            this.$store.commit("setValidMainPagePhone", { phone: false });
            return false;
          }
          // return true;
        }
      }

      if (this.form.phoneNumber === "") {
        return null;
      } else if (this.form.phoneNumber.length === 1) {
        firstWord = this.form.phoneNumber.substring(0, 1);
        if (firstWord !== "0") {
          this.phoneMsg = "手機格式錯誤";
          this.$store.commit("setValidMainPagePhone", {
            phone: false
          });
          return false;
        }
      } else if (this.form.phoneNumber.length > 1) {
        firstWord = this.form.phoneNumber.substring(0, 2);
        if (firstWord !== "09") {
          this.phoneMsg = "手機格式錯誤";
          this.$store.commit("setValidMainPagePhone", {
            phone: false
          });
          return false;
        } else {
          return toCheckNumber(this.form.phoneNumber);
        }
      }
    },
    validationEmail() {
      if (this.$store.state.isMainpageSubmit) {
        if (this.form.email === "") {
          this.emailMsg = "必填";
          this.$store.commit("setValidMainPageEmail", { email: false });
          return false;
        } else {
          this.emailMsg = "";
          // return true;
        }
      }
      if (this.form.email === "") {
        return null;
      }
      let valid = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      this.emailMsg = "請輸入含有「＠」信箱格式";
      this.$store.commit("setValidMainPageEmail", {
        email: valid.test(this.form.email)
      });
      return valid.test(this.form.email);
    }
  },
  methods: {
    onSubmit() {},
    onReset() {}
  }
};
</script>


<style lang="scss" scoped>
.mainPage {
  .card-deck {
    .card-body {
      align-items: center;
      border: 2px solid transparent;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;

      .checked {
        border-radius: 50%;
        background-color: #657257;
        color: #ffffff;
        display: flex;
        height: 20px;
        justify-content: center;
        right: -10px;
        position: absolute;
        top: -10px;
        width: 20px;
        i {
          font-size: 12px;
          line-height: 20px;
        }
      }

      &:hover {
        border: 2px solid #657257;
      }

      &:nth-child(1) {
        .imgSize {
          max-width: 50px;
          width: 50px;
        }
      }
    }
    .selected {
      border: 2px solid #657257;
    }
    .payPal {
      .card-body {
        &:nth-child(1) {
          .imgSize {
            margin: 10px 0px 15px;
            max-width: 30px;
            width: 30px;
          }
        }
      }
    }
  }
}
</style>
