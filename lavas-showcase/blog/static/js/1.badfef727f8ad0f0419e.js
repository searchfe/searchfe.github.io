webpackJsonp([1],{167:function(t,e,a){function i(t){a(182)}var s=a(4)(a(173),a(190),i,"data-v-1df5dc8c",null);t.exports=s.exports},173:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(59),s=a.n(i),o=a(20),n=a.n(o),r=a(58),c=a.n(r),l=a(9),u=a.n(l),v=a(10);a(29);e.default={name:"user",data:function(){return{items:[{title:"Photos",icon:"photo_library",subtitle:"Jan 9, 2014"},{title:"Favorites",icon:"favorite",subtitle:"Feb 9, 2016"},{title:"Work",icon:"work",subtitle:"Nov 9, 2017"}]}},methods:u()({},a.i(v.a)("appShell/appHeader",["setAppHeader"]),a.i(v.a)("appShell/appBottomNavigator",["showBottomNav","activateBottomNav"])),activated:function(){this.setAppHeader({show:!0,title:"Lavas",showMenu:!0,showBack:!1,showLogo:!0,actions:[{icon:"search",route:"/lavas-showcase/blog/search"}]}),this.activateBottomNav("user"),this.showBottomNav()},asyncData:function(t){var e=this;t.store,t.route;return c()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new n.a(function(t){setTimeout(t,1e3)});case 2:case"end":return t.stop()}},t,e)}))()}}},176:function(t,e,a){e=t.exports=a(161)(!1),e.push([t.i,".user-avatar[data-v-1df5dc8c]{color:#333;margin:50px auto 20px;display:flex;justify-content:center;flex-direction:column}.user-avatar-icon[data-v-1df5dc8c]{width:100px;height:100px;border-radius:100px;background:#666;font-size:80px}.user-item-count[data-v-1df5dc8c]{height:24px;width:24px;border-radius:24px;background:#ccc;font-size:14px;line-height:24px;color:#fff;font-weight:700;vertical-align:middle}",""])},182:function(t,e,a){var i=a(176);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(162)("5a77e056",i,!0)},190:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-user-page"},[a("div",{staticClass:"app-user-title text-xs-center"},[a("div",{staticClass:"user-avatar"},[a("p",[a("v-icon",{staticClass:"user-avatar-icon",attrs:{light:""}},[t._v("face")])],1),t._v(" "),a("p",[t._v("User Name")])]),t._v(" "),a("v-list",{attrs:{"two-line":""}},t._l(t.items,function(e){return a("v-list-item",{key:e.title},[a("v-list-tile",{attrs:{avatar:""}},[a("v-list-tile-avatar",[a("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.title))]),t._v(" "),a("v-list-tile-sub-title",[t._v(t._s(e.subtitle))])],1),t._v(" "),a("v-list-tile-action",[e.count?a("span",{staticClass:"user-item-count"},[t._v(t._s(e.count))]):t._e()])],1)],1)}))],1)])},staticRenderFns:[]}}});