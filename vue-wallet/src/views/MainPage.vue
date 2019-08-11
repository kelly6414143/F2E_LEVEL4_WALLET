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
                label="姓名"
                label-for="input-1")
                b-form-input(
                    id="input-1"
                    type="email"
                    required
                    placeholder="業大雄"
                )
            b-col(md="6")
              b-form-group(
                id="input-group-2" 
                label="電話" 
                label-for="input-2")
                b-form-input(
                    id="input-2"
                    required
                    placeholder="0912345678"
                )
        b-form-group(
                id="input-group-3" 
                label="E-mail" 
                label-for="input-3")
          b-form-input(
              id="input-3"
              required
              placeholder="a123@gmail.com"
          )

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
        food: null,
        checked: []
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
      ],
      show: true
    };
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
