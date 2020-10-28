(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["component/uni-popup/uni-popup-message"],{"0876":function(t,e,n){"use strict";n.r(e);var u=n("91cb"),i=n.n(u);for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);e["default"]=i.a},"28df":function(t,e,n){"use strict";n.r(e);var u=n("8acd"),i=n("0876");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("e11d");var r,c=n("f0c5"),a=Object(c["a"])(i["default"],u["b"],u["c"],!1,null,"3d72d07a",null,!1,u["a"],r);e["default"]=a.exports},"514d":function(t,e,n){},"8acd":function(t,e,n){"use strict";var u,i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return u})},"91cb":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"UniPopupMessage",props:{type:{type:String,default:"success"},message:{type:String,default:""},duration:{type:Number,default:3e3}},inject:["popup"],data:function(){return{}},created:function(){this.popup.childrenMsg=this},methods:{open:function(){var t=this;0!==this.duration&&(clearTimeout(this.popuptimer),this.popuptimer=setTimeout(function(){t.popup.close()},this.duration))},close:function(){clearTimeout(this.popuptimer)}}};e.default=u},e11d:function(t,e,n){"use strict";var u=n("514d"),i=n.n(u);i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'component/uni-popup/uni-popup-message-create-component',
    {
        'component/uni-popup/uni-popup-message-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("28df"))
        })
    },
    [['component/uni-popup/uni-popup-message-create-component']]
]);
