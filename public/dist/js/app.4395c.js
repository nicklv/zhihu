webpackJsonp([3],{16:function(t,e,n){"use strict";function a(t,e,n){if(t)this.date=[t.substr(0,4),"-",t.substr(4,2),"-",t.substr(-2)].join("");else{var a=new Date;this.date=[a.getFullYear(),"-",this._cover(a.getMonth()+1),"-",this._cover(a.getDate())].join("")}this.bef=e||0,this.aft=n||0,this.weekDayArr=["Sun","Mon","Tues","Wen","Thur","Fri","Sat"],this.weekDayCNArr=["日","一","二","三","四","五","六"],this.monthArr=["00","01","02","03","04","05","06","07","08","09","10","11","12"],this.monthENArr=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}a.prototype={constructor:a,now:function(t){t&&(this.date=[t.substr(0,4),"-",t.substr(4,2),"-",t.substr(-2)].join(""));var e=this.date?new Date(this.date):new Date;return[e.getFullYear(),this._cover(e.getMonth()+1),this._cover(e.getDate())].join("")},today:function(){var t=new Date;return[t.getFullYear(),this._cover(t.getMonth()+1),this._cover(t.getDate())].join("")},before:function(t){return this._calc(t||1,"before")},beforeCN:function(t){return this.CHN(this._calc(t||1,"before"))},after:function(t){return this._calc(t||1,"after")},afterCN:function(t){return this.CHN(this._calc(t||1,"after"))},month:function(){var t=this.date?new Date(this.date):new Date;return[t.getFullYear(),this._cover(t.getMonth()+1)].join("")},monthEN:function(t){return t=t||this.now(),this.monthENArr[parseInt(t.substr(4,2))]},beforeMonth:function(){var t=parseInt(this.month().substr(0,4),10),e=this.month().substr(4,2),n=this.monthArr.indexOf(e);return 1==n?(e="12",t--):e=this.monthArr[n-1],t+""+e},afterMonth:function(){var t=parseInt(this.month().substr(0,4),10),e=this.month().substr(4,2),n=this.monthArr.indexOf(e);return 12==n?(e="01",t++):e=this.monthArr[n+1],t+""+e},CHN:function(t){return t=t||this.now(),t.substr(0,4)+"年"+t.substr(4,2)+"月"+t.substr(6,2)+"日"},weekDay:function(t){t=t||this.now();var e=new Date([t.substr(0,4),"-",t.substr(4,2),"-",t.substr(-2)].join("")).getDay();return{day:e,en:this.weekDayArr[e],cn:this.weekDayCNArr[e]}},_calc:function(t,e){var n=new Date(this.date),a=0;"before"===e?(a=0-this.bef,t=0-t):a=this.aft;var r=t||a||0,s=new Date(n.getTime()+864e5*r);return[s.getFullYear(),this._cover(s.getMonth()+1),this._cover(s.getDate())].join("")},_cover:function(t){var e=parseInt(t,10);return e<10?"0"+e:e}},t.exports=a},36:function(t,e,n){n(95);var a=n(1)(n(96),n(97),null,null);t.exports=a.exports},38:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.store=e.router=e.app=void 0;var r=n(39),s=a(r),i=n(4),o=a(i),u=n(51),c=n(52),l=a(c),d=n(54),f=a(d),h=n(59),v=a(h),m=n(86),p=a(m),_=n(99),y=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(_);o.default.use(l.default),(0,u.sync)(v.default,p.default),(0,s.default)(y).forEach(function(t){o.default.filter(t,y[t])}),o.default.config.debug=!0;var g=new o.default({el:"#app",name:"zhihu",router:p.default,store:v.default,render:function(t){return t(f.default)}});e.app=g,e.router=p.default,e.store=v.default},54:function(t,e,n){n(55);var a=n(1)(n(57),n(58),null,null);t.exports=a.exports},55:function(t,e){},57:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"zhihu"}},58:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"global-header"},[t._m(0),t._v(" "),n("div",{staticClass:"wrap"},[n("router-link",{attrs:{to:{path:"/"}}},[n("img",{attrs:{src:"data:image/png;base64,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",alt:"logo"}})]),t._v(" "),n("p",{staticClass:"power"},[t._v("Powered By Node.js & Vue.js")])],1)]),t._v(" "),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view",{staticClass:"view"})],1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{target:"_blank",href:"https://github.com/ccforward/zhihu",id:"forkme_banner"}},[n("span",[t._v("View on GitHub")])])}]}},59:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(4),s=a(r),i=n(60),o=a(i),u=n(61),c=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(u),l=n(16),d=a(l),f=n(80),h=a(f),v=new h.default(100);s.default.use(o.default);var m=new o.default.Store({state:{img:"",loadingDay:!1,date:(new d.default).now(),latest:[],day:[],oneday:{},article:{},comments:[]},actions:{FETCH_LATEST:function(t){var e=t.commit;t.state;return c.fetchLatest().then(function(t){var n=t.data;e("SET_LIST",n)})},FETCH_HISTORY:function(t,e){var n=t.commit,a=t.state;if(!a.loadingDay)return a.loadingDay=!0,c.fetchHistory(e).then(function(t){var e=t.data;a.loadingDay=!1,n("SET_HISTORY",e)}).catch(function(t){a.loadingDay=!1})},FETCH_ONEDAY:function(t,e){var n=t.commit;t.state;return c.fetchHistory(e).then(function(t){var e=t.data;n("SET_ONEDAY",e)})},FETCH_ARTICLE:function(t,e){var n=t.commit,a=(t.state,v.get(e));return a?n("SET_ARTICLE",a):c.fetchArticle(e).then(function(t){var a=t.data;v.put(e,a),n("SET_ARTICLE",a)})},FETCH_COMMENTS:function(t,e){var n=t.commit;t.state;return c.fetchComments(e).then(function(t){var e=t.data;n("SET_COMMENTS",e)})},FETCH_APICOMMENTS:function(t,e){var n=t.commit;t.state;return c.fetchAPIComments(e).then(function(t){var e=t.data;n("SET_APICOMMENTS",e)})}},mutations:{SET_LIST:function(t,e){t.latest=e},SET_HISTORY:function(t,e){if(e.length){var n={month:(new d.default).monthEN(e[0].dtime)+e[0].dtime.substr(6,2),date:(new d.default).CHN(e[0].dtime),data:e};t.day.push(n)}},SET_ONEDAY:function(t,e){if(e.length)t.oneday.data=[],t.oneday={month:(new d.default).monthEN(e[0].dtime)+e[0].dtime.substr(6,2),date:(new d.default).CHN(e[0].dtime),data:e};else{var n=t.route.query.dtime;if(n){var a=new d.default(t.route.query.dtime);t.oneday.data=[],t.oneday.month=a.monthEN()+n.substr(6,2),t.oneday.date=a.CHN()}}},SET_ARTICLE:function(t,e){t.article=e},SET_COMMENTS:function(t,e){t.comments=e},SET_APICOMMENTS:function(t,e){t.comments=e}}});e.default=m},61:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.fetchAPIComments=e.fetchComments=e.fetchArticle=e.fetchHistory=e.fetchLatest=void 0;var a=n(34),r=function(t){return t&&t.__esModule?t:{default:t}}(a);e.fetchLatest=function(t){return r.default.get("/latest")},e.fetchHistory=function(t){return r.default.get("/day/"+t)},e.fetchArticle=function(t){return r.default.get("/article/"+t)},e.fetchComments=function(t){return r.default.get("/article/"+t+"/comments")},e.fetchAPIComments=function(t){return r.default.get("/article/"+t+"/comments/api")}},80:function(t,e,n){"use strict";function a(t){this.size=0,this.limit=t,this.head=this.tail=void 0,this._keymap=(0,s.default)(null)}Object.defineProperty(e,"__esModule",{value:!0});var r=n(81),s=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=a;var i=a.prototype;i.put=function(t,e){var n,a=this.get(t,!0);return a||(this.size===this.limit&&(n=this.shift()),a={key:t},this._keymap[t]=a,this.tail?(this.tail.newer=a,a.older=this.tail):this.head=a,this.tail=a,this.size++),a.value=e,n},i.shift=function(){var t=this.head;return t&&(this.head=this.head.newer,this.head.older=void 0,t.newer=t.older=void 0,this._keymap[t.key]=void 0,this.size--),t},i.get=function(t,e){var n=this._keymap[t];if(void 0!==n)return n===this.tail?e?n:n.value:(n.newer&&(n===this.head&&(this.head=n.newer),n.newer.older=n.older),n.older&&(n.older.newer=n.newer),n.newer=void 0,n.older=this.tail,this.tail&&(this.tail.newer=n),this.tail=n,e?n:n.value)}},86:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(4),s=a(r),i=n(87),o=a(i),u=n(88),c=a(u);s.default.use(o.default),e.default=new o.default({routes:[{name:"home",path:"/",component:c.default},{name:"detail",path:"/detail",component:function(t){n.e(0).then(function(e){t(n(37))}.bind(null,n)).catch(n.oe)},meta:{scrollToTop:!0}},{name:"top-detail",path:"/top-detail",component:function(t){n.e(0).then(function(e){t(n(37))}.bind(null,n)).catch(n.oe)},meta:{scrollToTop:!0}},{name:"oneday",path:"/date",component:function(t){n.e(1).then(function(e){t(n(102))}.bind(null,n)).catch(n.oe)},meta:{scrollToTop:!0}},{path:"*",redirect:"/"}]})},88:function(t,e,n){n(89);var a=n(1)(n(90),n(98),null,null);t.exports=a.exports},89:function(t,e){},90:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(4),s=(a(r),n(91)),i=a(s),o=n(36),u=a(o),c=n(16),l=a(c),d={fetchLatest:function(t){return t.dispatch("FETCH_LATEST")},fetchHistory:function(t,e){return t.dispatch("FETCH_HISTORY",e)}},f=function(t,e,n){var a,r,s,i=null,o=0;n||(n={});var u=function(){o=!1===n.leading?0:(new Date).getTime(),i=null,s=t.apply(a,r),i||(a=r=null)};return function(){var c=(new Date).getTime();o||!1!==n.leading||(o=c);var l=e-(c-o);return a=this,r=arguments,l<=0||l>e?(i&&(clearTimeout(i),i=null),o=c,s=t.apply(a,r),i||(a=r=null)):i||!1===n.trailing||(i=setTimeout(u,l)),s}};e.default={name:"home",data:function(){return{}},components:{Latest:i.default,History:u.default},preFetch:d.fetchLatest,computed:{now:function(){var t=(new l.default).now();return t.substr(0,4)+"-"+t.substr(4,2)+"-"+t.substr(6,2)},latest:function(){for(var t={top:[],latest:[],month:""},e=[],n=this.$store.state.latest,a=0,r=n.length;a<r;a++)n[a].title?n[a].top?t.top.push(n[a]):t.latest.push(n[a]):e.push(n[a]);for(var s=0,i=e.length;s<i;s++)for(var o=0,u=t.latest.length;o<u;o++)e[s].id==t.latest[o].id&&(t.latest[o].comments=e[s].comments,t.latest[o].popularity=e[s].popularity);if(t.latest.length){var c=t.latest[0].dtime;t.month=(new l.default).monthEN(c)+c.substr(6,2)}return t},histories:function(){return this.$store.state.day}},created:function(){var t=this;this.scrollEvent=f(function(e){window.innerHeight+document.body.scrollTop+150>=document.body.offsetHeight&&t.previousDay()},200)},beforeMount:function(){0==this.histories.length&&this.previousDay(),0==this.$store.state.latest.length&&d.fetchLatest(this.$store)},mounted:function(){scrollTo(0,sessionStorage.getItem("scrollTop")),window.addEventListener("scroll",this.scrollEvent)},beforeRouteLeave:function(t,e,n){"detail"!=t.name&&"top-detail"!=t.name||(this.$store.state.article={}),window.removeEventListener("scroll",this.scrollEvent),sessionStorage.setItem("scrollTop",document.body.scrollTop),n()},methods:{changeDate:function(t){var e=t.target.value.replace(/-/g,"");e&&this.$router.push("date?dtime="+e)},previousDay:function(){this.$store.state.loadingDay||(this.$store.state.date=new l.default(this.$store.state.date).before(),d.fetchHistory(this.$store,this.$store.state.date))}}}},91:function(t,e,n){n(92);var a=n(1)(n(93),n(94),"data-v-57a81e41",null);t.exports=a.exports},92:function(t,e){},93:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"latest-item",props:["data"]}},94:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"history"},[t.data.month?n("div",{staticClass:"date"},[n("span",[n("i",{staticClass:"m"},[t._v(t._s(t.data.month.substr(0,3)))]),n("i",{staticClass:"d"},[t._v(t._s(t.data.month.substr(3,2)))])])]):t._e(),t._v(" "),n("ul",t._l(t.data.latest,function(e){return n("li",[n("router-link",{attrs:{to:{path:"top-detail",query:{aid:e.id}}}},[n("span",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),n("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.image,expression:"item.image",arg:"background-image"}],staticClass:"img"}),t._v(" "),n("p",{staticClass:"sns"},[n("i",{class:e.popularity>500&&"hot"},[t._v(t._s(e.popularity||0)+" likes")]),t._v(" | \n            "),n("i",[t._v(t._s(e.comments||0)+" comments")])])])],1)}))])},staticRenderFns:[]}},95:function(t,e){},96:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"history-item",props:["day","view"],computed:{dtime:function(){return this.$route.query.dtime}},mounted:function(){"oneday"==this.$route.name&&scrollTo(0,0)}}},97:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"history"},[t.day.month?n("div",{staticClass:"date"},[n("span",[n("i",{staticClass:"m"},[t._v(t._s(t.day.month.substr(0,3)))]),n("i",{staticClass:"d"},[t._v(t._s(t.day.month.substr(3,2)))])]),t._v(" "),t.view?n("router-link",{staticClass:"day-link",attrs:{to:{path:"/date",query:{dtime:t.dtime}}}},[n("small",[t._v(t._s(t.day.date))])]):n("router-link",{staticClass:"day-link",attrs:{to:{path:"/date",query:{dtime:t.day.data[0].dtime}}}},[n("small",[t._v(t._s(t.day.date))])])],1):t._e(),t._v(" "),n("ul",t._l(t.day.data,function(e){return n("li",[n("router-link",{attrs:{to:{path:"detail",query:{aid:e.id}}}},[n("span",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),t.view?n("img",{attrs:{src:e.image}}):n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.image,expression:"item.image"}]}),t._v(" "),n("p",{staticClass:"sns"},[n("i",{class:e.popularity>500&&"hot"},[t._v(t._s(e.popularity)+" likes")]),t._v(" |\n          "),n("i",[t._v(t._s(e.comments)+" comments")])])])],1)}))])},staticRenderFns:[]}},98:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"date-pick"},[n("input",{attrs:{type:"date",min:"2013-05-19"},domProps:{value:t.now},on:{change:t.changeDate}}),t._v(" "),n("p",{staticClass:"date-desc"},[t._v("搜索知乎日报的某一天")])]),t._v(" "),t._m(0),t._v(" "),n("Latest",{attrs:{data:t.latest}}),t._v(" "),t._l(t.histories,function(t){return[n("History",{attrs:{day:t}})]}),t._v(" "),t._m(1)],2)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"statis-link"},[n("a",{attrs:{href:"/statistics"}},[t._v("去看看知乎日报的数据统计")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i",{staticClass:"loading"},[n("span",[t._v("Previous Day")])])}]}},99:function(t,e,n){"use strict";function a(t){var e=new Date(1e3*t);return r(e.getMonth()+1)+"-"+r(e.getDate())+" "+r(e.getHours())+":"+r(e.getMinutes())}Object.defineProperty(e,"__esModule",{value:!0}),e.date=a;var r=function(t){var e=parseInt(t,10);return e<10?"0"+e:e}}},[38]);