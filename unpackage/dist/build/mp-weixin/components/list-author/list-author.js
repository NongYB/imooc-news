(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/list-author/list-author"],{9482:function(t,n,u){"use strict";u.r(n);var e=u("f4d7"),o=u.n(e);for(var a in e)"default"!==a&&function(t){u.d(n,t,(function(){return e[t]}))}(a);n["default"]=o.a},"94fc":function(t,n,u){"use strict";var e;u.d(n,"b",(function(){return o})),u.d(n,"c",(function(){return a})),u.d(n,"a",(function(){return e}));var o=function(){var t=this,n=t.$createElement;t._self._c},a=[]},abe2:function(t,n,u){"use strict";var e=u("c6d1"),o=u.n(e);o.a},b4d5:function(t,n,u){"use strict";u.r(n);var e=u("94fc"),o=u("9482");for(var a in o)"default"!==a&&function(t){u.d(n,t,(function(){return o[t]}))}(a);u("abe2");var r,i=u("f0c5"),c=Object(i["a"])(o["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],r);n["default"]=c.exports},c6d1:function(t,n,u){},f4d7:function(t,n,u){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={name:"list-author",props:{item:{type:Object,default:function(){return{}}}},data:function(){return{}},methods:{follow:function(t){this.setUpdateAuhtor(t)},setUpdateAuhtor:function(n){t.showLoading(),this.$api.update_author({author_id:n}).then((function(n){t.hideLoading(),t.$emit("update_author"),t.showToast({title:"取消关注作者",icon:"none"})}))}}};n.default=u}).call(this,u("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/list-author/list-author-create-component',
    {
        'components/list-author/list-author-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("b4d5"))
        })
    },
    [['components/list-author/list-author-create-component']]
]);
