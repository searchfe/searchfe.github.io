webpackJsonp([6],[,,,,function(t,e){t.exports=Vue},,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"SET_USER",function(){return a}),n.d(e,"SET_HOT_NEWS",function(){return i}),n.d(e,"SET_NEWS_LIST",function(){return o}),n.d(e,"SET_NEWS_CATEGORY",function(){return r}),n.d(e,"SET_NEWS_DETAIL",function(){return s}),n.d(e,"ADD_QUERY_HISTORY",function(){return c}),n.d(e,"DELETE_QUERY_HISTORY",function(){return u}),n.d(e,"SET_QUERY_RESULT",function(){return l});var a="SET_USER",i="SET_HOT_NEWS",o="SET_NEWS_LIST",r="SET_NEWS_CATEGORY",s="SET_NEWS_DETAIL",c="ADD_QUERY_HISTORY",u="DELETE_QUERY_HISTORY",l="SET_QUERY_RESULT"},,,,,,,,function(t,e,n){"use strict";var a=n(42),i=n.n(a),o=n(10),r=n.n(o),s=n(9),c=n.n(s),u=n(64),l=n.n(u);e.a={getNewsList:function(t){var e=this;return c()(r.a.mark(function n(){var a,i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l()("https://pwa.baidu.com/api/mockup/news/"+t.category,{withCredentials:!0});case 2:return a=e.sent,t.nid&&(i=a.data.data.news||[],a.data.data.news=i.filter(function(e){return e.nid===t.nid})||i[0]||[]),e.abrupt("return",a.data.data);case 5:case"end":return e.stop()}},n,e)}))()},getUserInfo:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return new i.a(function(t){t({userName:"Baidu",messageCount:10})})},getHotNews:function(){return new i.a(function(t){t({news:[{title:"习近平将访哈萨克斯坦并出席系列活动",abs:"本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元...",ts:"1496806231000",url:"http://www.sznews.com/news/content/2016-12/18/content_14606309.htm"},{title:"习近平将访哈萨克斯坦并出席系列活动",abs:"本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元...",ts:"1496806231000",url:"http://www.sznews.com/news/content/2016-12/18/content_14606309.htm"},{title:"习近平将访哈萨克斯坦并出席系列活动",abs:"本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元...",ts:"1496806231000",url:"http://www.sznews.com/news/content/2016-12/18/content_14606309.htm"}]})})},searchNews:function(t){return new i.a(function(t){setTimeout(function(){t({news:[{title:"习近平将访哈萨克斯坦并出席系列活动",abs:"本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元...",ts:"1496806231000",url:"http://www.sznews.com/news/content/2016-12/18/content_14606309.htm"},{title:"习近平将访哈萨克斯坦并出席系列活动",abs:"本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元...",ts:"1496806231000",url:"http://www.sznews.com/news/content/2016-12/18/content_14606309.htm"},{title:"习近平将访哈萨克斯坦并出席系列活动",abs:"本次活动观澜山水国画产业基地以“水墨艺术衍生”为主线，围绕“创意水墨˙艺术生活”主题，通过多元...",ts:"1496806231000",url:"http://www.sznews.com/news/content/2016-12/18/content_14606309.htm"}]})},1500)})}}},function(t,e,n){"use strict";var a=n(92),i=n(93),o=n(41);n.d(e,"a",function(){return a.a}),n.d(e,"b",function(){return i.a}),n.d(e,"c",function(){return o})},,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"ENABLE_PAGE_TRANSITION",function(){return a}),n.d(e,"DISABLE_PAGE_TRANSITION",function(){return i}),n.d(e,"SET_PAGE_SWITCHING",function(){return o}),n.d(e,"SET_PAGE_LOADING",function(){return r}),n.d(e,"SET_PAGE_TRANSITION_NAME",function(){return s}),n.d(e,"SET_APP_HEADER",function(){return c}),n.d(e,"SET_APP_BOTTOM_NAV",function(){return u}),n.d(e,"ACTIVATE_APP_BOTTOM_NAV",function(){return l}),n.d(e,"SET_SIDEBAR_VISIBILITY",function(){return h}),n.d(e,"SET_MENU_TABS_VISIBILITY",function(){return p});var a="ENABLE_PAGE_TRANSITION",i="DISABLE_PAGE_TRANSITION",o="SET_PAGE_SWITCHING",r="SET_PAGE_LOADING",s="SET_PAGE_TRANSITION_NAME",c="SET_APP_HEADER",u="SET_APP_BOTTOM_NAV",l="ACTIVATE_APP_BOTTOM_NAV",h="SET_SIDEBAR_VISIBILITY",p="SET_MENU_TABS_VISIBILITY"},,,,,,,,,,,,,function(t,e,n){n(147);var a=n(5)(n(89),n(162),null,null);t.exports=a.exports},,function(t,e,n){"use strict";function a(){var t=n.i(f.a)();return{app:new u.a(o()({router:t,store:_.a},d.a)),router:t,store:_.a}}e.a=a;var i=n(14),o=n.n(i),r=n(103),s=n.n(r),c=n(4),u=n.n(c),l=n(167),h=n.n(l),p=n(155),d=n.n(p),f=n(82),_=n(97),m=(n(83),n(95));u.a.use(h.a),s()(m).forEach(function(t){u.a.filter(t,m[t])}),u.a.config.productionTip=!1},function(t,e){},function(t,e){},,,,function(t,e,n){"use strict";var a=n(26),i=n.n(a),o=n(25),r=n(16);e.a=i()({},o.c,r)},function(t,e,n){"use strict";var a=n(4),i=n.n(a);e.a=new i.a},,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function a(){var t=new s.a({mode:"history",routes:[{path:"/",name:"home",component:u},{path:"/detail",name:"detail",component:l},{path:"/user",name:"user",component:p},{path:"/search",name:"search",component:d},{path:"*",name:"notFound",component:h}]});return t.beforeEach(function(e,n,a){if(t.app.$store&&t.app.$store.getters.needPageTransition){var o=i(e,n)?"slide-left":"slide-right";t.app.$store.commit(c.a.SET_PAGE_TRANSITION_NAME,{pageTransitionName:o})}a()}),t}function i(t,e){var n=!0;if(t.name&&-1!==f.indexOf(t.name))m.length=0,n=!1;else if(e.name&&-1!==f.indexOf(e.name))m.push(t.fullPath);else if(t.name&&-1!==_.indexOf(t.name))m.push(t.fullPath);else{var a=m.indexOf(t.fullPath);-1!==a?(m.length=a+1,n=!1):m.push(t.fullPath)}return n}e.a=a;var o=n(4),r=n.n(o),s=n(165),c=n(62),u=function(){return n.e(0).then(n.bind(null,171))},l=function(){return n.e(4).then(n.bind(null,170))},h=function(){return n.e(3).then(n.bind(null,172))},p=function(){return n.e(2).then(n.bind(null,174))},d=function(){return n.e(1).then(n.bind(null,173))};r.a.use(s.a);var f=["home"],_=["search"],m=[]},function(t,e,n){"use strict";var a=n(4),i=n.n(a),o=n(54),r=n.n(o);n(154);i.a.component("icon",r.a),r.a.register({"svg-beijing":{width:1024,height:1024,d:"M905.369647 746.593969c-22.125927-9.605775-27.988448-14.340613-27.988448-14.340613s1.103124-14.464433-5.79396-24.068162c-7.108908-9.634428-5.853311-37.184901-5.853311-37.184901s8.095375-2.51324 32.601512-15.731286c24.534789-13.19144 49.015344-24.067138 50.240241-51.708686 1.104147-27.676339-39.678698-55.289234-88.718601-69.687152-48.993854-14.425547-103.859439-26.50977-103.859439-26.50977s-16.324804-13.164834-14.002922-25.186635c2.352581-12.007475 4.683672-22.801309 4.683672-22.801309s83.95511-27.698852 85.225033-85.525885c1.166569-57.55995-54.895261-68.411089-114.362654-88.782046-59.592236-20.484543-82.930781-35.010375-112.121614-56.56018-29.064966-21.554922-47.830355-43.314505-47.830355-43.314505s4.711302-24.107047-1.172709-38.422078c-5.77247-14.402011-19.836791-21.736047-19.836791-21.736047l-1.174756-19.184945c0 0 9.380648-3.492544 5.855358-9.637498-0.38067-0.589424-0.63445-1.147126-0.829901-1.784646 10.703783-7.735172 17.732873-20.584827 17.732873-35.105542 0-23.600511-18.59859-42.852994-41.523719-42.852994-22.965038 0-41.577954 19.25146-41.577954 42.852994 0 11.927657 4.682649 22.687722 12.269441 30.41266-1.186012 2.818185-1.657756 6.2831 1.470491 8.872065 5.716188 4.935406 5.716188 25.281803 5.716188 25.281803s-22.102391 8.481162-23.202445 30.060643c-1.25662 21.674649 1.100054 31.245631 1.100054 31.245631s-57.245795 72.143087-129.535215 98.509594c-72.393797 26.523073-122.596176 32.587186-138.844232 73.379241-16.381086 40.84015 18.603707 66.226331 33.791617 75.81164 15.249309 9.570983 45.470611 30.03199 45.470611 30.03199l-2.317789 34.942837c0 0-12.740162 9.495258-24.458041 14.31196-11.646248 4.787026-120.222105 27.64257-155.236574 57.735959-34.933627 30.146601-18.518772 58.58735 1.166569 72.16253 19.745716 13.563924 65.316611 34.914184 67.75822 39.654138 2.269693 4.897543-2.441609 40.881083-2.441609 40.881083s-64.080457 25.216311-102.58747 39.70428c-38.531572 14.431687-59.520605 25.214265-59.520605 52.757574 0 27.777647 40.816614 38.547944 55.998385 42.259476 15.144932 3.549849 27.980261 3.549849 27.980261 3.549849l0.633427 123.910101 32.601512 0 2.007727-130.108267c0 0 145.755642-95.520517 400.467811-90.705861 231.423767 4.366448 384.143007 90.705861 384.143007 90.705861l0 130.108267 28.52773 0L938.020278 859.617116c0 0 81.72635-8.317433 82.878592-46.832631C1022.04702 774.235516 927.577438 756.37473 905.369647 746.593969zM576.055386 402.12045c74.169233 8.109702 123.882472 30.964222 145.367809 42.762943l0 37.032428c-22.199605-8.448416-73.548086-25.358551-145.367809-32.425504L576.055386 402.12045zM489.834676 61.302181c0-9.556657 7.590885-17.439184 17.049305-17.439184 9.217942 0 16.906042 7.882528 16.906042 17.439184 0 9.689686-7.688099 17.500583-16.906042 17.500583C497.426585 78.802764 489.834676 70.992891 489.834676 61.302181zM301.430702 451.712939c22.378683-14.230096 79.605036-43.843554 174.511569-51.115168l0 46.521546c-80.461543 5.726421-149.139715 31.583323-174.511569 42.292222L301.430702 451.712939zM845.635171 710.185758c-35.803437-16.768919-162.118308-69.14787-340.556303-68.107167-148.773372 0.903579-281.3212 51.623751-314.218448 65.178465l0-46.746674c30.03199-15.871479 148.279115-69.372997 365.556697-65.375963 157.440775 2.936889 257.811764 48.490388 289.218054 65.045435L845.635171 710.185758zM386.309858 999.326041l56.393381 0L442.703239 858.343099l-56.393381 0L386.309858 999.326041zM470.902488 999.326041l84.593654 0L555.496142 858.343099l-84.593654 0L470.902488 999.326041zM583.693344 999.326041l56.393381 0L640.086725 858.343099l-56.393381 0L583.693344 999.326041z"}}),r.a.register({"svg-sentiment-very-satisfied":{width:48,height:48,d:"M23.99 4C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16zm2-20.12L28.12 22l2.12-2.12L32.36 22l2.13-2.12-4.25-4.24zm-8.24 0L19.88 22 22 19.88l-4.24-4.24-4.25 4.24L15.64 22zM24 35c4.66 0 8.62-2.92 10.22-7H13.78c1.6 4.08 5.56 7 10.22 7z"}}),r.a.register({"svg-shanghai":{width:1024,height:1024,d:"M519.972732 147.170856 512.003571 11.673684l-7.971202 135.498192c2.607755-0.360148 5.265503-0.560116 7.971202-0.560116C514.70825 146.610739 517.367018 146.811728 519.972732 147.170856zM526.632915 260.402123c-4.672738 1.218177-9.575033 1.871136-14.629344 1.871136-5.056352 0-9.958646-0.652959-14.632405-1.871136l-4.646212 78.977442 19.278617 0 19.274536 0L526.632915 260.402123zM627.662009 782.751024c0-57.617518-42.133205-105.385555-97.261316-114.200503L530.400693 491.367013c33.694729-8.252791 58.708163-38.639874 58.708163-74.879103 0-42.586195-34.527252-77.109366-77.105285-77.109366-42.586195 0-77.110387 34.523171-77.110387 77.109366 0 35.452617 23.939112 65.298969 56.529933 74.306744l0 178.119076c-54.063992 9.708685-95.086146 56.980882-95.086146 113.836274 0 40.580387 20.902853 76.273783 52.525457 96.916472l-41.962824 115.13403 30.012652 1.441611 38.054251-103.887831c5.322637 1.798698 10.818716 3.218884 16.456609 4.230971l0 127.414762 38.977576 0L530.400693 896.950507c6.387776-1.021269 12.603131-2.559804 18.596071-4.581936l38.052211 103.874567 30.016733-1.441611-41.958743-115.113626C606.743853 859.047252 627.662009 823.344674 627.662009 782.751024zM512.003571 252.63191c26.616245 0 48.189401-21.574176 48.189401-48.190421s-21.574176-48.194502-48.189401-48.194502c-26.620326 0-48.194502 21.577237-48.194502 48.194502S485.383245 252.63191 512.003571 252.63191z"}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(25);e.default={name:"app",components:{AppShell:a.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(14),i=n.n(a),o=n(15),r=n(90),s=n(91);e.default={name:"bottomNavigation",components:{AppHeader:r.a,AppMenuTabs:s.a},data:function(){return{}},computed:i()({},n.i(o.b)(["appHeader","menuTabs","isPageLoading","isPageSwitching","pageTransitionName"])),methods:i()({},n.i(o.a)(["setPageSwitching"]),{handleBeforeEnter:function(){this.setPageSwitching(!0)},handleAfterEnter:function(){this.setPageSwitching(!1)},handleClickHeaderBack:function(){this.$router.go(-1)},handleClickHeaderLogo:function(){this.$router.push("/")}})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(63);e.default={name:"appHeader",props:{show:{type:Boolean,default:!0},showMenu:{type:Boolean,default:!1},showBack:{type:Boolean,default:!1},showLogo:{type:Boolean,default:!1},logoIcon:{type:String},title:{type:String},actions:{type:Array},loading:{type:Boolean}},methods:{handleClick:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.actionIdx,i=e.route;if(!this.loading){var o={};"action"===t&&(o.actionIdx=n),this.$emit("click-"+t,o),a.a.$emit("app-header:click-"+t,o),i&&this.$router.push(i)}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(10),i=n.n(a),o=n(9),r=n.n(o),s=n(14),c=n.n(s),u=n(15);e.default={computed:c()({},n.i(u.b)(["category"])),props:{entrys:{type:Array},show:!0},data:function(){return{open:!0}},created:function(){var t=this,e=this.$route.query.category||"remen";t.entrys.forEach(function(n,a){t.$set(t.entrys[a],"active",t.entrys[a].value===e)})},methods:c()({},n.i(u.a)(["setPageLoading","checkTabCategory"]),{toggleOpen:function(){this.open=!this.open},selectItem:function(t){var e=this;return r()(i.a.mark(function n(){var a;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(a=e,a.entrys.forEach(function(e,n){a.$set(a.entrys[n],"active",n===t)}),a.entrys[t].value!==e.category){n.next=4;break}return n.abrupt("return");case 4:return e.open||e.toggleOpen(),e.setPageLoading(!0),n.next=8,e.checkTabCategory(a.entrys[t].value);case 8:document.getElementsByClassName("home-wrapper")[0].scrollTop=0,e.$router.push("?category="+a.entrys[t].value);case 10:case"end":return n.stop()}},n,e)}))()}})}},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(4),i=n.n(a),o={};e.default={name:"icon",props:{name:{type:String,validator:function(t){return t?t in o||(i.a.util.warn('Invalid prop: prop "icon" is referring to an unregistered icon "'+t+'".\nPlesase make sure you have imported this icon before using it.',this),!1):null}},scale:[Number,String],spin:Boolean,inverse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(i.a.util.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},clazz:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse}},icon:function(){return this.name?o[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var t=this.icon,e=t.width,n=t.height;return Math.max(e,n)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}}},mounted:function(){var t=this;if(!this.icon){this.$children.forEach(function(e){e.outerScale=t.normalizedScale});var e=0,n=0;this.$children.forEach(function(t){e=Math.max(e,t.width),n=Math.max(n,t.height)}),this.childrenWidth=e,this.childrenHeight=n,this.$children.forEach(function(t){t.x=(e-t.width)/2,t.y=(n-t.height)/2})}},register:function(t){for(var e in t){var n=t[e];n.paths||(n.paths=[]),n.d&&n.paths.push({d:n.d}),n.polygons||(n.polygons=[]),n.points&&n.polygons.push({points:n.points}),o[e]=n}},icons:o}},function(t,e,n){"use strict";var a=n(157),i=n.n(a);e.a=i.a},function(t,e,n){"use strict";var a=n(158),i=n.n(a);e.a=i.a},function(t,e,n){"use strict";var a=n(156),i=n.n(a);e.a=i.a},function(t,e,n){"use strict";var a,i=n(17),o=n.n(i),r=n(26),s=n.n(r),c=n(41),u={needPageTransition:!0,isPageSwitching:!1,pageTransitionName:"",isPageLoading:!1,appHeader:{show:!0,title:"VUE-PWA",logoIcon:"",showMenu:!1,showBack:!1,showLogo:!0,actions:[]},appSidebar:{show:!1,slideFrom:"slide-left",title:{imageLeft:"",altLeft:"",svgLeft:"",iconLeft:"home",text:"Home",imageRight:"",altRight:"",svgRight:"",iconRight:""},blocks:[{sublistTitle:"Sublist1",list:[{text:"Detail Page One",icon:"sentiment_satisfied",route:"/detail"},{text:"Detail Page Two",image:"https://github.com/google/material-design-icons/blob/master/social/2x_web/ic_mood_bad_black_48dp.png?raw=true",alt:"mood-bad",route:"/detail"},{text:"Detail Page Three",svg:"svg-sentiment-very-satisfied",route:"/detail"}]},{sublistTitle:"Sublist2",list:[{text:"Detail Page One",svg:"",icon:"sentiment_satisfied",image:"",route:"/detail"},{text:"Detail Page Two",svg:"",icon:"",image:"https://github.com/google/material-design-icons/blob/master/social/2x_web/ic_mood_bad_black_48dp.png?raw=true",alt:"mood-bad",route:"/detail"},{text:"Detail Page Three",svg:"svg-sentiment-very-satisfied",icon:"",image:"",route:"/detail"}]}]},appBottomNavigator:{show:!0,navs:[{name:"home",icon:"home",text:"主页",active:!0,route:{name:"home",path:"/"}},{name:"user",icon:"person",text:"个人中心",route:"/user"}]},menuTabs:{show:!0,tabs:[{text:"热点",value:"remen",active:!0},{text:"娱乐",value:"yule"},{text:"体育",value:"tiyu"},{text:"军事",value:"junshi"},{text:"社会",value:"shehui"},{text:"汽车",value:"qiche"},{text:"国内",value:"guonei"},{text:"国际",value:"guoji"}]}},l={needPageTransition:function(t){return t.needPageTransition},isPageSwitching:function(t){return t.isPageSwitching},isPageLoading:function(t){return t.isPageLoading},pageTransitionName:function(t){return t.pageTransitionName},appHeader:function(t){return t.appHeader},appSidebar:function(t){return t.appSidebar},appBottomNavigator:function(t){return t.appBottomNavigator},menuTabs:function(t){return t.menuTabs}},h={enablePageTransition:function(t){(0,t.commit)(tpes.ENABLE_PAGE_TRANSITION,!0)},disablePageTransition:function(t){(0,t.commit)(c.DISABLE_PAGE_TRANSITION,!1)},setPageSwitching:function(t,e){(0,t.commit)(c.SET_PAGE_SWITCHING,e)},setPageLoading:function(t,e){(0,t.commit)(c.SET_PAGE_LOADING,e)},setAppHeader:function(t,e){(0,t.commit)(c.SET_APP_HEADER,e)},hideBottomNav:function(t){(0,t.commit)(c.SET_APP_BOTTOM_NAV,{show:!1})},showBottomNav:function(t){(0,t.commit)(c.SET_APP_BOTTOM_NAV,{show:!0})},activateBottomNav:function(t,e){(0,t.commit)(c.ACTIVATE_APP_BOTTOM_NAV,e)},showSidebar:function(t){(0,t.commit)(c.SET_SIDEBAR_VISIBILITY,!0)},hideSidebar:function(t){(0,t.commit)(c.SET_SIDEBAR_VISIBILITY,!1)},hideMenuTabs:function(t){(0,t.commit)(c.SET_MENU_TABS_VISIBILITY,!1)},showMenuTabs:function(t){(0,t.commit)(c.SET_MENU_TABS_VISIBILITY,!0)}},p=(a={},o()(a,c.SET_PAGE_SWITCHING,function(t,e){t.isPageSwitching=e}),o()(a,c.SET_PAGE_LOADING,function(t,e){t.isPageLoading=e}),o()(a,c.SET_PAGE_TRANSITION_NAME,function(t,e){var n=e.pageTransitionName;t.pageTransitionName=n}),o()(a,c.SET_APP_HEADER,function(t,e){t.appHeader=s()(t.appHeader,e)}),o()(a,c.ACTIVATE_APP_BOTTOM_NAV,function(t,e){t.appBottomNavigator.navs=t.appBottomNavigator.navs.map(function(t){return t.name===e?t.active=!0:t.active=!1,t})}),o()(a,c.SET_APP_BOTTOM_NAV,function(t,e){t.appBottomNavigator=s()(t.appBottomNavigator,e)}),o()(a,c.SET_SIDEBAR_VISIBILITY,function(t,e){t.appSidebar.show=e}),o()(a,c.SET_MENU_TABS_VISIBILITY,function(t,e){t.menuTabs.show=e}),a);e.a={state:u,getters:l,actions:h,mutations:p}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(59),i=n.n(a),o=n(56),r=n(58),s=(n.n(r),n(57));n.n(s);i.a.attach(document.body);var c=n.i(o.a)(),u=c.app,l=c.router,h=c.store;window.__INITIAL_STATE__&&h.replaceState(window.__INITIAL_STATE__),l.onReady(function(){u.$mount("#app")})},function(t,e,n){"use strict";function a(t,e,n){e||(e=(new Date).getTime()),t=Number(t);var a=e-t;return a<0?null:a<6e4?"刚刚":n&&a<36e5?Math.floor(a/6e4)+"分钟前":a<9e5?Math.round(a/6e4)+"分钟前":a<18e5?"半小时前":a<36e5?"1小时前":a<864e5?n?Math.floor(a/36e5)+"小时前":Math.ceil(a/36e5)+"小时前":a<3456e5?n?Math.floor(a/864e5)+"天前":Math.ceil(a/864e5)+"天前":(t=new Date(t),e=new Date(e),t.getFullYear()===e.getFullYear()?t.getMonth()+1+"月"+t.getDate()+"日":t.getFullYear()+"年"+(t.getMonth()+1)+"月"+t.getDate()+"日")}Object.defineProperty(e,"__esModule",{value:!0}),e.formatDateToNow=a},,function(t,e,n){"use strict";var a=n(4),i=(n.n(a),n(15)),o=n(25),r=n(100),s=n(98),c=n(99);e.a=new i.c.Store({getters:{},modules:{appShell:o.b,user:r.a,news:s.a,newsList:c.a}})},function(t,e,n){"use strict";var a,i=n(17),o=n.n(i),r=n(10),s=n.n(r),c=n(9),u=n.n(c),l=n(16),h=n(24);e.a={state:{hotNews:[],query:{history:[],result:[]}},getters:{hotNews:function(t){return t.hotNews},searchHistory:function(t){return t.query.history},searchResult:function(t){return t.query.result}},actions:{getHotNews:function(t){var e=this,n=t.commit;return u()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.t0=n,t.t1=l.SET_HOT_NEWS,t.next=5,h.a.getHotNews();case 5:t.t2=t.sent,(0,t.t0)(t.t1,t.t2),t.next=11;break;case 9:t.prev=9,t.t3=t.catch(0);case 11:case"end":return t.stop()}},t,e,[[0,9]])}))()},searchNews:function(t,e){var n=this,a=t.commit;return u()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a(l.ADD_QUERY_HISTORY,e),t.t0=a,t.t1=l.SET_QUERY_RESULT,t.next=6,h.a.searchNews(e);case 6:t.t2=t.sent,(0,t.t0)(t.t1,t.t2),t.next=12;break;case 10:t.prev=10,t.t3=t.catch(0);case 12:case"end":return t.stop()}},t,n,[[0,10]])}))()},deleteQueryHistory:function(t,e){(0,t.commit)(l.DELETE_QUERY_HISTORY,e)}},mutations:(a={},o()(a,l.SET_HOT_NEWS,function(t,e){var n=e.news;t.hotNews=n}),o()(a,l.ADD_QUERY_HISTORY,function(t,e){-1===t.query.history.indexOf(e)&&t.query.history.push(e)}),o()(a,l.DELETE_QUERY_HISTORY,function(t,e){var n=t.query.history.indexOf(e);n>-1&&t.query.history.splice(n,1)}),o()(a,l.SET_QUERY_RESULT,function(t,e){var n=e.news;t.query.result=n}),a)}},function(t,e,n){"use strict";var a,i=n(17),o=n.n(i),r=n(10),s=n.n(r),c=n(9),u=n.n(c),l=n(16),h=n(24);e.a={state:{newsList:[],topicList:[],bannerList:[],newsDetail:{},category:"remen",loaded:!1},getters:{newsList:function(t){return t.newsList},newsDetail:function(t){return t.newsDetail},topicList:function(t){return t.topicList},bannerList:function(t){return t.bannerList},category:function(t){return t.category},loaded:function(t){return t.loaded}},actions:{getNewsList:function(t,e){var n=this,a=t.commit;return u()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.t0=a,t.t1=l.SET_NEWS_LIST,t.next=5,h.a.getNewsList(e);case 5:t.t2=t.sent,(0,t.t0)(t.t1,t.t2),t.next=11;break;case 9:t.prev=9,t.t3=t.catch(0);case 11:case"end":return t.stop()}},t,n,[[0,9]])}))()},getNewsDetail:function(t,e){var n=t.commit,a=e.nid,i=e.type;n(l.SET_NEWS_DETAIL,{nid:a,type:i})},checkTabCategory:function(t,e){var n=this,a=t.commit;return u()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:try{a(l.SET_NEWS_CATEGORY,e)}catch(t){}case 1:case"end":return t.stop()}},t,n)}))()}},mutations:(a={},o()(a,l.SET_NEWS_LIST,function(t,e){var n=e.news,a=e.topic,i=e.banner,o=[];n.map(function(t){var e=new Date(Number(t.ts)||Date.now());t.show=e.getFullYear()+"-"+e.getMonth()+"-"+e.getDay()+" "+e.getHours()+":"+e.getMinutes(),!o.length&&t.content.length&&(o=t.content),t.content=t.content.length?t.content:o}),a&&a.map(function(t){var e=new Date(Number(t.ts)||Date.now());t.show=e.getFullYear()+"-"+e.getMonth()+"-"+e.getDay()+" "+e.getHours()+":"+e.getMinutes(),!o.length&&t.content.length&&(o=t.content),t.content=t.content.length?t.content:o}),i.map(function(t){!o.length&&t.content.length&&(o=t.content),t.content=t.content.length?t.content:o}),n&&n.length?(t.newsList=t.newsList.concat(n),t.loaded="loaded"):t.loaded="complete",t.topicList=a,t.bannerList=i}),o()(a,l.SET_NEWS_DETAIL,function(t,e){var n=e.nid,a=e.type;t.newsList.map(function(t){var e=new Date(Number(t.ts)||Date.now());t.show=e.getFullYear()+"-"+e.getMonth()+"-"+e.getDay()+" "+e.getHours()+":"+e.getMinutes()}),"banner"===a?t.bannerList&&t.bannerList.length?(t.bannerList.forEach(function(e){e.nid===n&&(t.newsDetail=e)}),t.newsDetail.nid||(t.newsDetail=t.bannerList[0]),t.loaded="loaded"):t.loaded="complete":t.newsList&&t.newsList.length?(t.newsList.forEach(function(e){e.nid===n&&(t.newsDetail=e)}),t.newsDetail.nid||(t.newsDetail=t.newsList[0]),t.loaded="loaded"):t.loaded="complete"}),o()(a,l.SET_NEWS_CATEGORY,function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];t.category=e,n&&(t.newsList=[])}),a)}},function(t,e,n){"use strict";var a=n(17),i=n.n(a),o=n(10),r=n.n(o),s=n(9),c=n.n(s),u=n(16),l=n(24);e.a={state:{user:{}},getters:{user:function(t){return t.user}},actions:{getUserInfo:function(t,e){var n=this,a=t.commit;return c()(r.a.mark(function t(){var i;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.getUserInfo(e);case 3:i=t.sent,a(u.SET_USER,i),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}},t,n,[[0,7]])}))()}},mutations:i()({},u.SET_USER,function(t,e){t.user=e})}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},,function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,function(t,e,n){n(148);var a=n(5)(n(84),n(163),null,null);t.exports=a.exports},function(t,e,n){n(144);var a=n(5)(n(85),n(159),"data-v-04738ac3",null);t.exports=a.exports},function(t,e,n){n(146);var a=n(5)(n(86),n(161),"data-v-2ac82b38",null);t.exports=a.exports},function(t,e,n){n(149);var a=n(5)(n(87),n(164),"data-v-ba87e910",null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-shell app-shell-bottom-navigation"},[n("app-header",{staticClass:"app-shell-header",attrs:{show:t.appHeader.show,showMenu:t.appHeader.showMenu,showBack:t.appHeader.showBack,showLogo:t.appHeader.showLogo,title:t.appHeader.title,actions:t.appHeader.actions,loading:t.isPageSwitching},on:{"click-logo":t.handleClickHeaderLogo,"click-back":t.handleClickHeaderBack}},[n("template",{slot:"logo"},[n("span",{staticClass:"app-header-logo"},[t._v("新闻 - news")])])],2),t._v(" "),n("app-menu-tabs",{attrs:{entrys:t.menuTabs.tabs,show:t.menuTabs.show}}),t._v(" "),n("div",{staticClass:"app-view-wrapper"},[n("v-progress-circular",{directives:[{name:"show",rawName:"v-show",value:t.isPageLoading,expression:"isPageLoading"}],staticClass:"app-view-loading",attrs:{indeterminate:"",size:50}}),t._v(" "),n("transition",{attrs:{name:t.pageTransitionName},on:{"before-enter":t.handleBeforeEnter,"after-enter":t.handleAfterEnter}},[n("keep-alive",[t.$route.meta.notKeepAlive?t._e():n("router-view",{staticClass:"app-view",class:{"app-view-with-header":t.appHeader.show}})],1)],1),t._v(" "),n("transition",{attrs:{name:t.pageTransitionName},on:{"before-enter":t.handleBeforeEnter,"after-enter":t.handleAfterEnter}},[t.$route.meta.notKeepAlive?n("router-view",{staticClass:"app-view",class:{"app-view-with-header":t.appHeader.show}}):t._e()],1)],1)],1)},staticRenderFns:[]}},,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide-down"}},[n("header",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"app-header-wrapper"},[n("div",{staticClass:"app-header-left"},[t.showMenu?n("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){t.handleClick("menu")}}},[n("v-icon",{staticClass:"app-header-icon"},[t._v("menu")])],1):t._e(),t._v(" "),t.showBack?n("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){t.handleClick("back")}}},[n("v-icon",{staticClass:"app-header-icon"},[t._v("arrow_back")])],1):t._e(),t._v(" "),t.showLogo?n("div",{on:{click:function(e){t.handleClick("logo")}}},[t._t("logo",[n("icon",{staticClass:"app-header-icon",attrs:{name:t.logoIcon}})])],2):t._e()],1),t._v(" "),n("div",{staticClass:"app-header-middle"},[t._t("title",[t._v("\n                "+t._s(t.title)+"\n            ")])],2),t._v(" "),n("div",{staticClass:"app-header-right"},[t._l(t.actions,function(e,a){return t._t("actions",[n("v-btn",{attrs:{icon:"icon"},nativeOn:{click:function(n){t.handleClick("action",{actionIdx:a,route:e.route})}}},[e.svg?n("icon",{staticClass:"app-header-icon",attrs:{name:e.svg}}):e.icon?n("v-icon",{staticClass:"app-header-icon"},[t._v(t._s(e.icon))]):t._e()],1)],{icon:e.icon,route:e.route})})],2)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{class:t.clazz,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon&&t.icon.paths?t._l(t.icon.paths,function(e){return n("path",t._b({},"path",e))}):t._e(),t._v(" "),t.icon&&t.icon.polygons?t._l(t.icon.polygons,function(e){return n("polygon",t._b({},"polygon",e))}):t._e(),t._v("\b\n    "),t.icon&&t.icon.raw?[n("g",{domProps:{innerHTML:t._s(t.icon.raw)}})]:t._e()])],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("app-shell")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide-down"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"app-menu-tabs"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"app-menu-tabs-single"},[n("div",{staticClass:"app-menu-tabs-con"},[n("div",{staticClass:"app-menu-tabs-wrap",style:{width:72*this.entrys.length+"px"}},t._l(t.entrys,function(e,a){return n("div",{staticClass:"app-menu-tabs-item",on:{click:function(e){t.selectItem(a)}}},[n("span",{class:{active:e.active}},[t._v(t._s(e.text))])])}))]),t._v(" "),n("div",{staticClass:"app-menu-tabs-toggle",on:{click:t.toggleOpen}},[n("v-icon",{staticClass:"app-menu-tabs-icon"},[t._v("keyboard_arrow_down")])],1)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.open,expression:"!open"}],staticClass:"app-menu-tabs-all"},[n("div",{staticClass:"app-menu-tabs-con"},[n("label",[t._v("切换频道")])]),t._v(" "),n("div",{staticClass:"app-menu-tabs-toggle",on:{click:t.toggleOpen}},[n("v-icon",{staticClass:"app-menu-tabs-icon"},[t._v("keyboard_arrow_up")])],1),t._v(" "),n("div",{staticClass:"app-menu-tabs-list"},t._l(t.entrys,function(e,a){return n("div",{staticClass:"app-menu-tabs-item",on:{click:function(e){t.selectItem(a)}}},[n("span",{class:{active:e.active}},[t._v(t._s(e.text))])])})),t._v(" "),n("div",{staticClass:"app-menu-tabs-mask",on:{click:t.toggleOpen}})])])])},staticRenderFns:[]}}],[94]);
//# sourceMappingURL=app.6cb547750fa131da5936.js.map