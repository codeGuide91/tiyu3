(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/saishijijin/add-or-update"],{"2a0f":function(n,e,i){},4237:function(n,e,i){"use strict";i.r(e);var t=i("e34c"),a=i("bc81");for(var r in a)"default"!==r&&function(n){i.d(e,n,(function(){return a[n]}))}(r);i("512a");var u,s=i("f0c5"),o=Object(s["a"])(a["default"],t["b"],t["c"],!1,null,"42d8a278",null,!1,t["a"],u);e["default"]=o.exports},"512a":function(n,e,i){"use strict";var t=i("2a0f"),a=i.n(t);a.a},6255:function(n,e,i){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=a(i("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function r(n,e,i,t,a,r,u){try{var s=n[r](u),o=s.value}catch(c){return void i(c)}s.done?e(o):Promise.resolve(o).then(t,a)}function u(n){return function(){var e=this,i=arguments;return new Promise((function(t,a){var u=n.apply(e,i);function s(n){r(u,t,a,s,o,"next",n)}function o(n){r(u,t,a,s,o,"throw",n)}s(void 0)}))}}var s=function(){Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(function(){return resolve(i("1167"))}.bind(null,i)).catch(i.oe)},o={data:function(){return{ruleForm:{biaoti:"",bisaimingcheng:"",shipin:"",neirong:"",fabushijian:"",fengmian:""},bisaimingchengOptions:[],bisaimingchengIndex:0,user:{},ro:{biaoti:!1,bisaimingcheng:!1,shipin:!1,neirong:!1,fabushijian:!1,fengmian:!1}}},components:{wPicker:s},computed:{},onLoad:function(){var e=u(t.default.mark((function e(i){var a,r,u,s;return t.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.ruleForm.fabushijian=this.$utils.getCurDate(),a=n.getStorageSync("nowTable"),e.next=4,this.$api.session(a);case 4:return r=e.sent,this.user=r.data,e.next=8,this.$api.option("bisaixinxi","bisaimingcheng",{});case 8:if(r=e.sent,this.bisaimingchengOptions=r.data,this.ruleForm.userid=n.getStorageSync("userid"),i.refid&&(this.ruleForm.refid=i.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!i.id){e.next=18;break}return this.ruleForm.id=i.id,e.next=16,this.$api.info("saishijijin",this.ruleForm.id);case 16:r=e.sent,this.ruleForm=r.data;case 18:if(!i.cross){e.next=49;break}u=n.getStorageSync("crossObj"),e.t0=t.default.keys(u);case 21:if((e.t1=e.t0()).done){e.next=49;break}if(s=e.t1.value,"biaoti"!=s){e.next=27;break}return this.ruleForm.biaoti=u[s],this.ro.biaoti=!0,e.abrupt("continue",21);case 27:if("bisaimingcheng"!=s){e.next=31;break}return this.ruleForm.bisaimingcheng=u[s],this.ro.bisaimingcheng=!0,e.abrupt("continue",21);case 31:if("shipin"!=s){e.next=35;break}return this.ruleForm.shipin=u[s],this.ro.shipin=!0,e.abrupt("continue",21);case 35:if("neirong"!=s){e.next=39;break}return this.ruleForm.neirong=u[s],this.ro.neirong=!0,e.abrupt("continue",21);case 39:if("fabushijian"!=s){e.next=43;break}return this.ruleForm.fabushijian=u[s],this.ro.fabushijian=!0,e.abrupt("continue",21);case 43:if("fengmian"!=s){e.next=47;break}return this.ruleForm.fengmian=u[s],this.ro.fengmian=!0,e.abrupt("continue",21);case 47:e.next=21;break;case 49:this.styleChange();case 50:case"end":return e.stop()}}),e,this)})));function i(n){return e.apply(this,arguments)}return i}(),methods:{styleChange:function(){this.$nextTick((function(){}))},fabushijianChange:function(n){this.ruleForm.fabushijian=n.target.value,this.$forceUpdate()},bisaimingchengChange:function(n){this.bisaimingchengIndex=n.target.value,this.ruleForm.bisaimingcheng=this.bisaimingchengOptions[this.bisaimingchengIndex]},shipinTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.shipin=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},fengmianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.fengmian=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=u(t.default.mark((function n(){return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!this.ruleForm.id){n.next=5;break}return n.next=3,this.$api.update("saishijijin",this.ruleForm);case 3:n.next=7;break;case 5:return n.next=7,this.$api.add("saishijijin",this.ruleForm);case 7:this.$utils.msgBack("提交成功");case 8:case"end":return n.stop()}}),n,this)})));function e(){return n.apply(this,arguments)}return e}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,i=e.getFullYear(),t=e.getMonth()+1,a=e.getDate();return"start"===n?i-=60:"end"===n&&(i+=2),t=t>9?t:"0"+t,a=a>9?a:"0"+a,"".concat(i,"-").concat(t,"-").concat(a)},toggleTab:function(n){this.$refs[n].show()}}};e.default=o}).call(this,i("543d")["default"])},"82d2":function(n,e,i){"use strict";(function(n){i("5e35"),i("921b");t(i("66fd"));var e=t(i("4237"));function t(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,i("543d")["createPage"])},bc81:function(n,e,i){"use strict";i.r(e);var t=i("6255"),a=i.n(t);for(var r in t)"default"!==r&&function(n){i.d(e,n,(function(){return t[n]}))}(r);e["default"]=a.a},e34c:function(n,e,i){"use strict";var t,a=function(){var n=this,e=n.$createElement;n._self._c},r=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return t}))}},[["82d2","common/runtime","common/vendor"]]]);