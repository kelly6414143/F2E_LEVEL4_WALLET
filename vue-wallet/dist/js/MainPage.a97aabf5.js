(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["MainPage"],{4385:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mainPage"},[a("h4",[e._v("請選擇付款方式")]),a("b-card-group",{attrs:{deck:""}},[a("b-card",{staticClass:"selected"},[a("div",{staticClass:"checked"},[a("i",{staticClass:"material-icons"},[e._v("check")])]),a("div",{staticClass:"imgSize"},[a("img",{attrs:{src:i("8b87")}})]),a("p",[e._v("線上刷卡")])]),a("b-card",{staticClass:"payPal"},[a("div",{staticClass:"imgSize"},[a("img",{attrs:{src:i("5d01")}})]),a("p",[e._v("使用PayPal付款")])])],1),a("h4",[e._v("請填寫購買明細")]),a("b-card",[a("b-form",{on:{submit:e.onSubmit,reset:e.onReset}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("b-form-group",{attrs:{id:"input-group-1",label:"*姓名","label-for":"input-1"}},[a("b-form-input",{attrs:{id:"input-1",type:"email",required:"",placeholder:"葉大雄",state:e.validationName},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),a("b-form-invalid-feedback",{attrs:{state:e.validationName}},[e._v(e._s(e.nameMsg))]),a("b-form-valid-feedback",{attrs:{state:e.validationName}},[e._v("正確")])],1)],1),a("b-col",{attrs:{md:"6"}},[a("b-form-group",{attrs:{id:"input-group-2",label:"*手機電話","label-for":"input-2"}},[a("b-form-input",{attrs:{id:"input-2",required:"",state:e.validationPhone,placeholder:"0912345678",maxLength:"10"},model:{value:e.form.phoneNumber,callback:function(t){e.$set(e.form,"phoneNumber",t)},expression:"form.phoneNumber"}}),a("b-form-invalid-feedback",{attrs:{state:e.validationPhone}},[e._v(e._s(e.phoneMsg))]),a("b-form-valid-feedback",{attrs:{state:e.validationPhone}},[e._v("正確")])],1)],1)],1)],1),a("b-form-group",{attrs:{id:"input-group-3",label:"*E-mail","label-for":"input-3"}},[a("b-form-input",{attrs:{id:"input-3",required:"",placeholder:"a123@gmail.com",state:e.validationEmail},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),a("b-form-invalid-feedback",{attrs:{state:e.validationEmail}},[e._v(e._s(e.emailMsg))]),a("b-form-valid-feedback",{attrs:{state:e.validationEmail}},[e._v("正確")])],1),a("b-form-group",{attrs:{id:"input-group-3",label:"地址","label-for":"input-3"}},[a("b-form-input",{attrs:{id:"input-3",required:"",placeholder:"台中市西屯區"}})],1)],1)],1)},s=[],o={name:"mainpage",data:function(){return{form:{email:"jie@gmail.com",name:"dd",phoneNumber:"0988888888"},show:!0,phoneMsg:"",emailMsg:"",nameMsg:""}},computed:{validationName:function(){return this.$store.state.isMainpageSubmit?""===this.form.name?(this.nameMsg="必填",this.$store.commit("setValidMainPageName",{name:this.form.name}),!1):(this.nameMsg="",this.$store.commit("setValidMainPageName",{name:this.form.name}),!0):""===this.form.name?null:(this.nameMsg="",void this.$store.commit("setValidMainPageName",{name:this.form.name}))},validationPhone:function(){var e=this;function t(t){return isNaN(t)?(e.phoneMsg="請輸入數字",!1):(e.phoneMsg="",10===t.length?(e.$store.commit("setValidMainPagePhone",{phone:!0}),!0):void 0)}var i="";if(this.$store.state.isMainpageSubmit){if(""===this.form.phoneNumber)return this.phoneMsg="必填",this.$store.commit("setValidMainPagePhone",{phone:!1}),!1;if(this.phoneMsg="",this.form.phoneNumber.length<10)return this.phoneMsg="請輸入10位數，格式為0912345678",this.$store.commit("setValidMainPagePhone",{phone:!1}),!1}if(""===this.form.phoneNumber)return null;if(1===this.form.phoneNumber.length){if(i=this.form.phoneNumber.substring(0,1),"0"!==i)return this.phoneMsg="手機格式錯誤",this.$store.commit("setValidMainPagePhone",{phone:!1}),!1}else if(this.form.phoneNumber.length>1)return i=this.form.phoneNumber.substring(0,2),"09"!==i?(this.phoneMsg="手機格式錯誤",this.$store.commit("setValidMainPagePhone",{phone:!1}),!1):t(this.form.phoneNumber)},validationEmail:function(){if(this.$store.state.isMainpageSubmit){if(""===this.form.email)return this.emailMsg="必填",this.$store.commit("setValidMainPageEmail",{email:!1}),!1;this.emailMsg=""}if(""===this.form.email)return null;var e=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;return this.emailMsg="請輸入含有「＠」信箱格式",this.$store.commit("setValidMainPageEmail",{email:e.test(this.form.email)}),e.test(this.form.email)}},methods:{onSubmit:function(){},onReset:function(){}}},n=o,r=(i("7829"),i("2877")),m=Object(r["a"])(n,a,s,!1,null,"335b706a",null);t["default"]=m.exports},"5d01":function(e,t,i){e.exports=i.p+"img/PayPal.c2350938.svg"},7829:function(e,t,i){"use strict";var a=i("cf91"),s=i.n(a);s.a},"8b87":function(e,t,i){e.exports=i.p+"img/baseline-credit_card.ac9cd6e9.svg"},cf91:function(e,t,i){}}]);
//# sourceMappingURL=MainPage.a97aabf5.js.map