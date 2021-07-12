(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/tab/tab"],{"1db2":function(n,t,e){"use strict";e.r(t);var a=e("b5d1"),u=e.n(a);for(var c in a)"default"!==c&&function(n){e.d(t,n,(function(){return a[n]}))}(c);t["default"]=u.a},"24be":function(n,t,e){},"3cf9":function(n,t,e){"use strict";e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return c})),e.d(t,"a",(function(){return a}));var a={uniIcons:function(){return Promise.all([e.e("common/vendor"),e.e("components/uni-icons/uni-icons")]).then(e.bind(null,"334c"))}},u=function(){var n=this,t=n.$createElement;n._self._c},c=[]},af14:function(n,t,e){"use strict";var a=e("24be"),u=e.n(a);u.a},b5d1:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={name:"tab",props:{list:{type:Array,default:function(){return[]}},tabIndex:{type:Number,default:0}},watch:{tabIndex:function(n){this.activeIndex=n}},data:function(){return{activeIndex:0}},methods:{clickTab:function(n,t){this.activeIndex=t,this.$emit("tab",{data:n,index:t})},open:function(){n.navigateTo({url:"/pages/home-label/home-label"})}}};t.default=e}).call(this,e("543d")["default"])},ec91:function(n,t,e){"use strict";e.r(t);var a=e("3cf9"),u=e("1db2");for(var c in u)"default"!==c&&function(n){e.d(t,n,(function(){return u[n]}))}(c);e("af14");var i,o=e("f0c5"),r=Object(o["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);t["default"]=r.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/tab/tab-create-component',
    {
        'components/tab/tab-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("ec91"))
        })
    },
    [['components/tab/tab-create-component']]
]);
