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
                    id="input-1"
                    required
                    placeholder="業大雄"
                )

            b-form-group(
                    id="input-group-2" 
                    label="信用卡號" 
                    label-for="input-2")
                
                b-input-group
                    b-form-input(
                        id="input-2",
                        required,
                        placeholder="0000-0000-0000-0000",
                        :state="false"
                        ) 
                    b-input-group-append(is-text)                      
                        img(src="@/assets/images/baseline-credit_card.svg")
                b-form-invalid-feedback(id="input-live-feedback") 格式錯誤
                //- b-col(md="6")
            b-form-group(
                id="input-group-3"
                label="信用卡期限"
                label-for="input-3")
                b-row
                    b-col(md="6")
                        b-form-select(
                            id="input-3"
                            v-model="form.food"
                            :options="foods"
                            required,
                            :state="false")
                            option(:value="null") 選擇年份
                    b-col(md="6")
                        b-form-select(
                            id="input-3"
                            v-model="form.food"
                            :options="foods"
                            required,
                            :state="false")
                            option(:value="null") 選擇月份
                
        b-form-group(
                id="input-group-4" 
                label="背面安全碼" 
                label-for="input-4")
          b-form-input(
              id="input-4"
              required
              placeholder="123"
          )
</template>

<script>
export default {
  name: "paymentdetail",
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: []
      },
      foods: [
        // { text: "Select One", value: null },
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
</style>
