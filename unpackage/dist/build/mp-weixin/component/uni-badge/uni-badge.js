(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["component/uni-badge/uni-badge"],{3204:function(t,e,n){"use strict";n.r(e);var u=n("67b7"),i=n("8095");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("6f07");var c,r=n("f0c5"),o=Object(r["a"])(i["default"],u["b"],u["c"],!1,null,"c3e0990a",null,!1,u["a"],c);e["default"]=o.exports},"67b7":function(t,e,n){"use strict";var u,i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return u})},"6f07":function(t,e,n){"use strict";var u=n("8204"),i=n.n(u);i.a},8095:function(t,e,n){"use strict";n.r(e);var u=n("ecd3"),i=n.n(u);for(var a in u)"default"!==a&&function(t){n.d(e,t,function(){return u[t]})}(a);e["default"]=i.a},8204:function(t,e,n){},ecd3:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"UniBadge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:[String,Number],default:""},size:{type:String,default:"normal"}},data:function(){return{badgeStyle:""}},watch:{text:function(){this.setStyle()}},mounted:function(){this.setStyle()},methods:{setStyle:function(){this.badgeStyle="width: ".concat(8*String(this.text).length+12,"px")},onClick:function(){this.$emit("click")}}};e.default=u}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'component/uni-badge/uni-badge-create-component',
    {
        'component/uni-badge/uni-badge-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("3204"))
        })
    },
    [['component/uni-badge/uni-badge-create-component']]
]);
