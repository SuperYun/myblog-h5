(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(t,e,n){"use strict";n.d(e,"i",(function(){return m})),n.d(e,"j",(function(){return v})),n.d(e,"a",(function(){return x})),n.d(e,"o",(function(){return y})),n.d(e,"e",(function(){return w})),n.d(e,"f",(function(){return _})),n.d(e,"c",(function(){return O})),n.d(e,"n",(function(){return $})),n.d(e,"h",(function(){return C})),n.d(e,"p",(function(){return k})),n.d(e,"k",(function(){return E})),n.d(e,"m",(function(){return S})),n.d(e,"d",(function(){return P})),n.d(e,"b",(function(){return T})),n.d(e,"g",(function(){return N})),n.d(e,"l",(function(){return A}));n(142),n(47);var r=n(51),o=(n(143),n(210),n(211),n(38)),c=(n(213),n(215),n(216),n(219),n(93),n(58),n(5)),f=(n(79),n(33),n(23),n(90),n(91),n(77)),l=n(0);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(source,!0).forEach((function(e){Object(f.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function m(t){l.default.config.errorHandler&&l.default.config.errorHandler(t)}function v(t){return t.then((function(t){return t.default||t}))}function x(t,e){if(e||!t.options.__hasNuxtData){var n=t.options._originDataFn||t.options.data||function(){return{}};t.options._originDataFn=n,t.options.data=function(){var data=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),d({},data,{},e)},t.options.__hasNuxtData=!0,t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)}}function y(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=l.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function w(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map((function(t,n){return Object.keys(t.components).map((function(r){return e&&e.push(n),t.components[r]}))})))}function _(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map((function(t,n){return Object.keys(t.instances).map((function(r){return e&&e.push(n),t.instances[r]}))})))}function O(t,e){return Array.prototype.concat.apply([],t.matched.map((function(t,n){return Object.keys(t.components).reduce((function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r}),[])})))}function $(t,e){return Promise.all(O(t,function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(n,r,o,c){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof n||n.options){t.next=4;break}return t.next=3,n();case 3:n=t.sent;case 4:return o.components[c]=n=y(n),t.abrupt("return","function"==typeof e?e(n,r,o,c):n);case 6:case"end":return t.stop()}}),t)})));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function C(t){return j.apply(this,arguments)}function j(){return(j=Object(c.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,$(e);case 4:return t.abrupt("return",d({},e,{meta:w(e).map((function(t,n){return d({},t.options.meta,{},(e.matched[n]||{}).meta)}))}));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(t,e){return R.apply(this,arguments)}function R(){return(R=Object(c.a)(regeneratorRuntime.mark((function t(e,n){var c,f,l,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.context||(e.context={isStatic:!1,isDev:!1,isHMR:!1,app:e,store:e.store,payload:n.payload,error:n.error,base:"/",env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),n.ssrContext&&(e.context.ssrContext=n.ssrContext),e.context.redirect=function(t,path,n){if(t){e.context._redirected=!0;var r=Object(o.a)(path);if("number"==typeof t||"undefined"!==r&&"object"!==r||(n=path||{},path=t,r=Object(o.a)(path),t=302),"object"===r&&(path=e.router.resolve(path).route.fullPath),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))throw path=I(path,n),window.location.replace(path),new Error("ERR_REDIRECT");e.context.next({path:path,query:n,status:t})}},e.context.nuxtState=window.__NUXT__),t.next=3,Promise.all([C(n.route),C(n.from)]);case 3:c=t.sent,f=Object(r.a)(c,2),l=f[0],h=f[1],n.route&&(e.context.route=l),n.from&&(e.context.from=h),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=Boolean(n.isHMR),e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{};case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function E(t,e){return!t.length||e._redirected||e._errored?Promise.resolve():S(t[0],e).then((function(){return E(t.slice(1),e)}))}function S(t,e){var n;return(n=2===t.length?new Promise((function(n){t(e,(function(t,data){t&&e.error(t),n(data=data||{})}))})):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function P(base,t){var path=decodeURI(window.location.pathname);return"hash"===t?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),(path||"/")+window.location.search+window.location.hash)}function T(t,e){return function(t){for(var e=new Array(t.length),i=0;i<t.length;i++)"object"===Object(o.a)(t[i])&&(e[i]=new RegExp("^(?:"+t[i].pattern+")$"));return function(n,r){for(var path="",data=n||{},o=(r||{}).pretty?L:encodeURIComponent,c=0;c<t.length;c++){var f=t[c];if("string"!=typeof f){var l=data[f.name||"pathMatch"],h=void 0;if(null==l){if(f.optional){f.partial&&(path+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(Array.isArray(l)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(h=o(l[d]),!e[c].test(h))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(h)+"`");path+=(0===d?f.prefix:f.delimiter)+h}}else{if(h=f.asterisk?encodeURI(l).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):o(l),!e[c].test(h))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+h+'"');path+=f.prefix+h}}else path+=f}return path}}(function(t,e){var n,r=[],o=0,c=0,path="",f=e&&e.delimiter||"/";for(;null!=(n=D.exec(t));){var l=n[0],h=n[1],d=n.index;if(path+=t.slice(c,d),c=d+l.length,h)path+=h[1];else{var m=t[c],v=n[2],x=n[3],y=n[4],w=n[5],_=n[6],O=n[7];path&&(r.push(path),path="");var $=null!=v&&null!=m&&m!==v,C="+"===_||"*"===_,j="?"===_||"*"===_,k=n[2]||f,pattern=y||w;r.push({name:x||o++,prefix:v||"",delimiter:k,optional:j,repeat:C,partial:$,asterisk:Boolean(O),pattern:pattern?U(pattern):O?".*":"[^"+M(k)+"]+?"})}}c<t.length&&(path+=t.substr(c));path&&r.push(path);return r}(t,e))}function N(t,e){var n={},r=d({},t,{},e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}function A(t){var e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e="[".concat(t.constructor.name,"]")}return d({},t,{message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500})}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var D=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function L(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function M(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function U(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function I(t,e){var n,o=t.indexOf("://");-1!==o?(n=t.substring(0,o),t=t.substring(o+3)):t.startsWith("//")&&(t=t.substring(2));var c,f=t.split("/"),l=(n?n+"://":"//")+f.shift(),path=f.filter(Boolean).join("/");if(2===(f=path.split("#")).length){var h=f,d=Object(r.a)(h,2);path=d[0],c=d[1]}return l+=path?"/"+path:"",e&&"{}"!==JSON.stringify(e)&&(l+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map((function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map((function(t){return[e,"=",t].join("")})).join("&"):e+"="+n})).filter(Boolean).join("&")}(e)),l+=c?"#"+c:""}},117:function(t,e,n){"use strict";e.a={}},121:function(t,e,n){"use strict";(function(t){var e={data:function(){return{ossUri:t.env.ossUri||"/"}}};n(0).default.mixin(e)}).call(this,n(63))},122:function(t,e,n){(function(t){window.NTKF_PARAM={siteid:"kf_9082",sellerid:t.env.xiaoneng,settingid:t.env.xiaoneng,uid:"",uname:"",isvip:"0",userlevel:"0",itemid:""}}).call(this,n(63))},178:function(t,e,n){t.exports=n(179)},179:function(t,e,n){"use strict";n.r(e),function(t){n(79),n(84),n(47);var e=n(38),r=(n(58),n(189),n(5)),o=(n(88),n(134),n(33),n(23),n(90),n(91),n(137),n(193),n(205),n(207),n(0)),c=n(170),f=n(117),l=n(1),h=n(28),d=n(78);o.default.component(d.a.name,d.a),o.default.component("NLink",d.a),t.fetch||(t.fetch=c.a);var m,v,x=[],y=window.__NUXT__||{};Object.assign(o.default.config,{silent:!0,performance:!1});var w=o.default.config.errorHandler||console.error;function _(t,e,n){var r=function(component){var t=function(component,t){if(!component||!component.options||!component.options[t])return{};var option=component.options[t];if("function"==typeof option){for(var e=arguments.length,n=new Array(e>2?e-2:0),r=2;r<e;r++)n[r-2]=arguments[r];return option.apply(void 0,n)}return option}(component,"transition",e,n)||{};return"string"==typeof t?{name:t}:t};return t.map((function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter((function(t){return o[t]&&t.toLowerCase().includes("leave")})).forEach((function(t){e[t]=o[t]}))}return e}))}function O(t,e,n){return $.apply(this,arguments)}function $(){return($=Object(r.a)(regeneratorRuntime.mark((function t(e,n,r){var o,c,f,h,d=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=Boolean(m.nuxt.err)||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?Object(l.g)(e.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,t.next=7,Object(l.n)(e,(function(t,e){return{Component:t,instance:e}}));case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some((function(t){var r=t.Component,o=t.instance,c=r.options.watchQuery;return!0===c||(Array.isArray(c)?c.some((function(t){return d._diffQuery[t]})):"function"==typeof c&&c.apply(o,[e.query,n.query]))}))&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),r(),t.next=23;break;case 12:if(t.prev=12,t.t0=t.catch(4),c=t.t0||{},f=c.statusCode||c.status||c.response&&c.response.status||500,h=c.message||"",!/^Loading( CSS)? chunk (\d)+ failed\./.test(h)){t.next=20;break}return window.location.reload(!0),t.abrupt("return");case 20:this.error({statusCode:f,message:h}),this.$nuxt.$emit("routeChanged",e,n,c),r();case 23:case"end":return t.stop()}}),t,this,[[4,12]])})))).apply(this,arguments)}function C(t,e){return y.serverRendered&&e&&Object(l.a)(t,e),t._Ctor=t,t}function j(t){var path=Object(l.d)(t.options.base,t.options.mode);return Object(l.c)(t.match(path),function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,n,r,o,c){var f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return f=C(Object(l.o)(e),y.data?y.data[c]:null),r.components[o]=f,t.abrupt("return",f);case 7:case"end":return t.stop()}}),t)})));return function(e,n,r,o,c){return t.apply(this,arguments)}}())}function k(t,e,n){var r=this,o=[],c=!1;if(void 0!==n&&(o=[],(n=Object(l.o)(n)).options.middleware&&(o=o.concat(n.options.middleware)),t.forEach((function(t){t.options.middleware&&(o=o.concat(t.options.middleware))}))),o=o.map((function(t){return"function"==typeof t?t:("function"!=typeof f.a[t]&&(c=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),f.a[t])})),!c)return Object(l.k)(o,e)}function R(t,e,n){return E.apply(this,arguments)}function E(){return(E=Object(r.a)(regeneratorRuntime.mark((function t(e,n,r){var o,c,f,d,v,y,w,O,$,C,j,R,E,S,P,T,N=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return e===n?x=[]:(o=[],x=Object(l.e)(n,o).map((function(t,i){return Object(l.b)(n.matched[o[i]].path)(n.params)}))),c=!1,f=function(path){n.path===path.path&&N.$loading.finish&&N.$loading.finish(),n.path!==path.path&&N.$loading.pause&&N.$loading.pause(),c||(c=!0,r(path))},t.next=7,Object(l.p)(m,{route:e,from:n,next:f.bind(this)});case 7:if(this._dateLastError=m.nuxt.dateErr,this._hadError=Boolean(m.nuxt.err),d=[],(v=Object(l.e)(e,d)).length){t.next=25;break}return t.next=14,k.call(this,v,m.context);case 14:if(!c){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof h.a.layout?h.a.layout(m.context):h.a.layout);case 18:return y=t.sent,t.next=21,k.call(this,v,m.context,y);case 21:if(!c){t.next=23;break}return t.abrupt("return");case 23:return m.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return v.forEach((function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)})),this.setTransitions(_(v,e,n)),t.prev=27,t.next=30,k.call(this,v,m.context);case 30:if(!c){t.next=32;break}return t.abrupt("return");case 32:if(!m.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(w=v[0].options.layout)&&(w=w(m.context)),t.next=38,this.loadLayout(w);case 38:return w=t.sent,t.next=41,k.call(this,v,m.context,w);case 41:if(!c){t.next=43;break}return t.abrupt("return");case 43:if(!m.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:O=!0,t.prev=46,$=!0,C=!1,j=void 0,t.prev=50,R=v[Symbol.iterator]();case 52:if($=(E=R.next()).done){t.next=64;break}if("function"==typeof(S=E.value).options.validate){t.next=56;break}return t.abrupt("continue",61);case 56:return t.next=58,S.options.validate(m.context);case 58:if(O=t.sent){t.next=61;break}return t.abrupt("break",64);case 61:$=!0,t.next=52;break;case 64:t.next=70;break;case 66:t.prev=66,t.t0=t.catch(50),C=!0,j=t.t0;case 70:t.prev=70,t.prev=71,$||null==R.return||R.return();case 73:if(t.prev=73,!C){t.next=76;break}throw j;case 76:return t.finish(73);case 77:return t.finish(70);case 78:t.next=84;break;case 80:return t.prev=80,t.t1=t.catch(46),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 84:if(O){t.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 87:return t.next=89,Promise.all(v.map((function(t,i){if(t._path=Object(l.b)(e.matched[d[i]].path)(e.params),t._dataRefresh=!1,N._pathChanged&&N._queryChanged||t._path!==x[i])t._dataRefresh=!0;else if(!N._pathChanged&&N._queryChanged){var n=t.options.watchQuery;!0===n?t._dataRefresh=!0:Array.isArray(n)&&(t._dataRefresh=n.some((function(t){return N._diffQuery[t]})))}if(!N._hadError&&N._isMounted&&!t._dataRefresh)return Promise.resolve();var r=[],o=t.options.asyncData&&"function"==typeof t.options.asyncData,c=Boolean(t.options.fetch),f=o&&c?30:45;if(o){var h=Object(l.m)(t.options.asyncData,m.context).then((function(e){Object(l.a)(t,e),N.$loading.increase&&N.$loading.increase(f)}));r.push(h)}if(N.$loading.manual=!1===t.options.loading,c){var p=t.options.fetch(m.context);p&&(p instanceof Promise||"function"==typeof p.then)||(p=Promise.resolve(p)),p.then((function(t){N.$loading.increase&&N.$loading.increase(f)})),r.push(p)}return Promise.all(r)})));case 89:c||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),t.next=106;break;case 92:if(t.prev=92,t.t2=t.catch(27),"ERR_REDIRECT"!==(P=t.t2||{}).message){t.next=97;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,P));case 97:return x=[],Object(l.i)(P),"function"==typeof(T=h.a.layout)&&(T=T(m.context)),t.next=103,this.loadLayout(T);case 103:this.error(P),this.$nuxt.$emit("routeChanged",e,n,P),r();case 106:case"end":return t.stop()}}),t,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])})))).apply(this,arguments)}function S(t,n){Object(l.c)(t,(function(t,n,r,c){return"object"!==Object(e.a)(t)||t.options||((t=o.default.extend(t))._Ctor=t,r.components[c]=t),t}))}function P(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?h.a.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(m.context)),this.setLayout(e)}function T(t,e){var n=this;if(!1!==this._pathChanged||!1!==this._queryChanged){var r=[],c=Object(l.f)(t,r),f=Object(l.e)(t,r);o.default.nextTick((function(){c.forEach((function(t,i){if(t&&!t._isDestroyed&&t.constructor._dataRefresh&&f[i]===t.constructor&&!0!==t.$vnode.data.keepAlive&&"function"==typeof t.constructor.options.data){var e=t.constructor.options.data.call(t);for(var n in e)o.default.set(t.$data,n,e[n]);window.$nuxt.$nextTick((function(){window.$nuxt.$emit("triggerScroll")}))}})),P.call(n,t)}))}}function N(t){window.onNuxtReadyCbs.forEach((function(e){"function"==typeof e&&e(t)})),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),v.afterEach((function(e,n){o.default.nextTick((function(){return t.$nuxt.$emit("routeChanged",e,n)}))}))}function A(){return(A=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,c,f,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m=e.app,v=e.router,e.store,t.next=5,Promise.all(j(v));case 5:return n=t.sent,r=new o.default(m),c=y.layout||"default",t.next=10,r.loadLayout(c);case 10:if(r.setLayout(c),f=function(){r.$mount("#__nuxt"),v.afterEach(S),v.afterEach(T.bind(r)),o.default.nextTick((function(){N(r)}))},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(_(n,v.currentRoute)),x=v.currentRoute.matched.map((function(t){return Object(l.b)(t.path)(v.currentRoute.params)}))),r.$loading={},y.error&&r.error(y.error),v.beforeEach(O.bind(r)),v.beforeEach(R.bind(r)),!y.serverRendered){t.next=21;break}return f(),t.abrupt("return");case 21:h=function(){S(v.currentRoute,v.currentRoute),P.call(r,v.currentRoute),f()},R.call(r,v.currentRoute,v.currentRoute,(function(path){if(path){var t=v.afterEach((function(e,n){t(),h()}));v.push(path,void 0,(function(t){t&&w(t)}))}else h()}));case 23:case"end":return t.stop()}}),t)})))).apply(this,arguments)}Object(h.b)().then((function(t){return A.apply(this,arguments)})).catch(w)}.call(this,n(20))},223:function(t,e,n){"use strict";var r=n(74);n.n(r).a},224:function(t,e,n){"use strict";var r=n(75);n.n(r).a},226:function(t,e,n){},228:function(t,e,n){"use strict";var r=n(76);n.n(r).a},229:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return o})),n.d(e,"actions",(function(){return c})),n.d(e,"getters",(function(){return f}));var r=function(){return{routeHistory:[],routeSt:"forward",QRSt:!1}},o={handelRoute:function(t,path){var e=t.routeHistory.length;e>1&&t.routeHistory[e-2].fullPath===path.fullPath?(t.routeHistory.pop(),t.routeSt="back"):(t.routeHistory.push(path),t.routeSt="forward")},changeQRSt:function(t,e){t.QRSt=e}},c={nuxtServerInit:function(t,e){t.commit,e.req}},f={GETER_RouteHistory:function(t){return t.routeHistory}}},28:function(t,e,n){"use strict";n(58),n(142),n(47),n(33),n(23),n(90);var r=n(5),o=n(77),c=(n(91),n(0)),f=n(171),l=n(118),h=n.n(l),d=n(39),m=n.n(d),v=n(119),x=n(1);"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual",window.addEventListener("beforeunload",(function(){window.history.scrollRestoration="auto"})),window.addEventListener("load",(function(){window.history.scrollRestoration="manual"})));c.default.use(v.a);var y={mode:"history",base:decodeURI("/"),linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:function(t,e,n){var r=!1,o=Object(x.e)(t);o.length<2&&o.every((function(t){return!1!==t.options.scrollToTop}))?r={x:0,y:0}:o.some((function(t){return t.options.scrollToTop}))&&(r={x:0,y:0}),n&&(r=n);var c=window.$nuxt;return t.path===e.path&&t.hash!==e.hash&&c.$nextTick((function(){return c.$emit("triggerScroll")})),new Promise((function(e){c.$once("triggerScroll",(function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)}))}))},routes:[{path:"/",component:function(){return Object(x.j)(n.e(2).then(n.bind(null,311)))},name:"index"}],fallback:!1};var w,_={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render:function(t,e){var n=e.parent,data=e.data,r=e.props;data.nuxtChild=!0;for(var o=n,c=n.$nuxt.nuxt.transitions,f=n.$nuxt.nuxt.defaultTransition,l=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&l++,n=n.$parent;data.nuxtChildDepth=l;var h=c[l]||f,d={};O.forEach((function(t){void 0!==h[t]&&(d[t]=h[t])}));var m={};$.forEach((function(t){"function"==typeof h[t]&&(m[t]=h[t].bind(o))}));var v=m.beforeEnter;if(m.beforeEnter=function(t){if(window.$nuxt.$nextTick((function(){window.$nuxt.$emit("triggerScroll")})),v)return v.call(o,t)},!1===h.css){var x=m.leave;(!x||x.length<2)&&(m.leave=function(t,e){x&&x.call(o,t),o.$nextTick(e)})}var y=t("routerView",data);return r.keepAlive&&(y=t("keep-alive",{props:r.keepAliveProps},[y])),t("transition",{props:d,on:m},[y])}},O=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],$=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],C={name:"NuxtError",props:{error:{type:Object,default:null}},head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}},j=(n(223),n(19)),k=Object(j.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?n("p",{staticClass:"description"},[n("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null).exports,R=(n(93),n(51)),E={name:"Nuxt",components:{NuxtChild:_,NuxtError:k},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||Object(x.b)(this.$route.matched[0].path)(this.$route.params);var t=Object(R.a)(this.$route.matched,1)[0];if(!t)return this.$route.path;var e=t.components.default;if(e&&e.options){var n=e.options;if(n.key)return"function"==typeof n.key?n.key(this.$route):n.key}return/\/$/.test(t.path)?this.$route.path:this.$route.path.replace(/\/$/,"")}},beforeCreate:function(){c.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render:function(t){return this.nuxt.err?t("NuxtError",{props:{error:this.nuxt.err}}):t("NuxtChild",{key:this.routerViewKey,props:this.$props})}},S=(n(79),{name:"NuxtLoading",data:function(){return{percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}},computed:{left:function(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start:function(){var t=this;return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout((function(){return t.startTimer()}),this.throttle):this.startTimer(),this},set:function(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get:function(){return this.percent},increase:function(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease:function(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause:function(){return clearInterval(this._timer),this},resume:function(){return this.startTimer(),this},finish:function(){return this.percent=this.reversed?0:100,this.hide(),this},hide:function(){var t=this;return this.clear(),setTimeout((function(){t.show=!1,t.$nextTick((function(){t.percent=0,t.reversed=!1}))}),500),this},fail:function(){return this.canSucceed=!1,this},startTimer:function(){var t=this;this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval((function(){t.skipTimerCount>0?t.skipTimerCount--:(t.reversed?t.decrease(t._cut):t.increase(t._cut),t.continuous&&(t.percent>=100?(t.skipTimerCount=1,t.reversed=!t.reversed):t.percent<=0&&(t.skipTimerCount=1,t.reversed=!t.reversed)))}),100)}},render:function(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}}),P=(n(224),Object(j.a)(S,void 0,void 0,!1,null,null,null).exports),T=(n(225),n(226),n(227),n(228),{_default:Object(j.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("默认布局")]),this._v(" "),e("nuxt")],1)}),[],!1,null,null,null).exports,_self:Object(j.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nuxt")],1)}),[],!1,null,null,null).exports}),N={head:{title:"myblog-h5",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"My wondrous Nuxt.js project"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],style:[],script:[]},render:function(t,e){var n=t("NuxtLoading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),c=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter:function(t){window.$nuxt.$nextTick((function(){window.$nuxt.$emit("triggerScroll")}))}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,c])},data:function(){return{isOnline:!0,layout:null,layoutName:""}},beforeCreate:function(){c.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){c.default.prototype.$nuxt=this,window.$nuxt=this,this.refreshOnlineStatus(),window.addEventListener("online",this.refreshOnlineStatus),window.addEventListener("offline",this.refreshOnlineStatus),this.error=this.nuxt.error,this.context=this.$options.context},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline:function(){return!this.isOnline}},methods:{refreshOnlineStatus:function(){void 0===window.navigator.onLine?this.isOnline=!0:this.isOnline=window.navigator.onLine},refresh:(w=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,o=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((e=Object(x.f)(this.$route)).length){t.next=3;break}return t.abrupt("return");case 3:return this.$loading.start(),n=e.map(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var p;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p=[],e.$options.fetch&&p.push(Object(x.m)(e.$options.fetch,o.context)),e.$options.asyncData&&p.push(Object(x.m)(e.$options.asyncData,o.context).then((function(t){for(var n in t)c.default.set(e.$data,n,t[n])}))),t.abrupt("return",Promise.all(p));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.prev=5,t.next=8,Promise.all(n);case 8:t.next=15;break;case 10:t.prev=10,t.t0=t.catch(5),this.$loading.fail(),Object(x.i)(t.t0),this.error(t.t0);case 15:this.$loading.finish();case 16:case"end":return t.stop()}}),t,this,[[5,10]])}))),function(){return w.apply(this,arguments)}),errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&T["_"+t]||(t="default"),this.layoutName=t,this.layout=T["_"+t],this.layout},loadLayout:function(t){return t&&T["_"+t]||(t="default"),Promise.resolve(T["_"+t])}},components:{NuxtLoading:P}},A=(n(88),n(143),n(120));c.default.use(A.a);var D={};(D=function(t,e){if((t=t.default||t).commit)throw new Error("[nuxt] ".concat(e," should export a method that returns a Vuex instance."));return"function"!=typeof t&&(t=Object.assign({},t)),M(t,e)}(n(229),"store/index.js")).modules=D.modules||{};var L=D instanceof Function?D:function(){return new A.a.Store(Object.assign({strict:!1},D))};function M(t,e){if(t.state&&"function"!=typeof t.state){console.warn("'state' should be a method that returns an object in ".concat(e));var n=Object.assign({},t.state);t=Object.assign({},t,{state:function(){return n}})}return t}n(84);for(var U=n(173),I=n.n(U),B={setHeader:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"common",r=!0,o=!1,c=void 0;try{for(var f,l=(Array.isArray(n)?n:[n])[Symbol.iterator]();!(r=(f=l.next()).done);r=!0){var h=f.value;if(!e)return void delete this.defaults.headers[h][t];this.defaults.headers[h][t]=e}}catch(t){o=!0,c=t}finally{try{r||null==l.return||l.return()}finally{if(o)throw c}}},setToken:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"common",r=t?(e?e+" ":"")+t:null;this.setHeader("Authorization",r,n)},onRequest:function(t){this.interceptors.request.use((function(e){return t(e)||e}))},onResponse:function(t){this.interceptors.response.use((function(e){return t(e)||e}))},onRequestError:function(t){this.interceptors.request.use(void 0,(function(e){return t(e)||Promise.reject(e)}))},onResponseError:function(t){this.interceptors.response.use(void 0,(function(e){return t(e)||Promise.reject(e)}))},onError:function(t){this.onRequestError(t),this.onResponseError(t)}},H=function(){var t=K[J];B["$"+t]=function(){return this[t].apply(this,arguments).then((function(t){return t&&t.data}))}},J=0,K=["request","delete","get","head","options","post","put","patch"];J<K.length;J++)H();var Q=function(t,e){var n={baseURL:"http://0.0.0.0:3003",headers:{common:{Accept:"application/json, text/plain, */*"},delete:{},get:{},head:{},post:{},put:{},patch:{}}};n.headers.common=t.req&&t.req.headers?Object.assign({},t.req.headers):{},delete n.headers.common.accept,delete n.headers.common.host,delete n.headers.common["cf-ray"],delete n.headers.common["cf-connecting-ip"],delete n.headers.common["content-length"];var r=I.a.create(n);!function(t){for(var e in B)t[e]=B[e].bind(t)}(r),function(t,e){var n={finish:function(){},start:function(){},fail:function(){},set:function(){}},r=function(){return window.$nuxt&&window.$nuxt.$loading&&window.$nuxt.$loading.set?window.$nuxt.$loading:n},o=0;t.onRequest((function(t){t&&!1===t.progress||o++})),t.onResponse((function(t){t&&t.config&&!1===t.config.progress||--o<=0&&(o=0,r().finish())})),t.onError((function(t){t&&t.config&&!1===t.config.progress||(o--,r().fail(),r().finish())}));var c=function(t){if(o){var progress=100*t.loaded/(t.total*o);r().set(Math.min(100,progress))}};t.defaults.onUploadProgress=c,t.defaults.onDownloadProgress=c}(r),t.$axios=r,e("axios",r)},F=function(t){var e=t.$axios,n=t.redirect;t.isDev;e.onRequest((function(t){})),e.onResponse((function(t){return t.data})),e.onError((function(t){void 0===t.response&&(console.log(t),console.log("server no response")),404===parseInt(t.response&&t.response.status)&&n("/404")}))},z=n(121),X=n(174);c.default.use(X.a,{attempt:1});var V=n(175),G=n.n(V);c.default.use(G.a);var W=function(t){var e=t.app,n=e.router;e.store,t.route,t.redirect;n.beforeEach((function(t,e,n){/\/news\/\d+\.html$/.test(t.path),/\/news\/\d+$/.test(t.path),n()}))},Y=function(t){var e=t.app,n=e.router,r=e.store;t.route;n.beforeEach((function(t,e,n){n()})),n.afterEach((function(t,e){r.commit("handelRoute",t)}))};var Z=n(176),tt=n.n(Z),et=n(177),nt=n.n(et);c.default.use(tt.a,{locale:nt.a});var ot=n(122),it=n.n(ot);function at(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function st(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?at(source,!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):at(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}n.d(e,"b",(function(){return ct})),n.d(e,"a",(function(){return k})),c.default.component(h.a.name,h.a),c.default.component(m.a.name,st({},m.a,{render:function(t,e){return m.a._warned||(m.a._warned=!0,console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")),m.a.render(t,e)}})),c.default.component(_.name,_),c.default.component("NChild",_),c.default.component(E.name,E),c.default.use(f.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var ut={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function ct(t){return ft.apply(this,arguments)}function ft(){return(ft=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,o,f,l,h,path,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new v.a(y);case 2:return n=t.sent,(r=L(e)).$router=n,o=r.registerModule,r.registerModule=function(path,t,e){return o.call(r,path,t,Object.assign({preserveState:!0},e))},f=st({router:n,store:r,nuxt:{defaultTransition:ut,transitions:[ut],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map((function(t){return t=t?"string"==typeof t?Object.assign({},ut,{name:t}):Object.assign({},ut,t):ut})),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,f.context._errored=Boolean(t),t=t?Object(x.l)(t):null;var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},N),r.app=f,l=e?e.next:function(t){return f.router.push(t)},e?h=n.resolve(e.url).route:(path=Object(x.d)(n.options.base),h=n.resolve(path).route),t.next=13,Object(x.p)(f,{route:h,next:l,error:f.nuxt.error.bind(f),store:r,payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0,ssrContext:e});case 13:if(d=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject(key, value) has no value provided");f[t="$"+t]=e,r[t]=f[t];var n="__nuxt_"+t+"_installed__";c.default[n]||(c.default[n]=!0,c.default.use((function(){c.default.prototype.hasOwnProperty(t)||Object.defineProperty(c.default.prototype,t,{get:function(){return this.$root.$options[t]}})})))},window.__NUXT__&&window.__NUXT__.state&&r.replaceState(window.__NUXT__.state),"function"!=typeof Q){t.next=18;break}return t.next=18,Q(f.context,d);case 18:if("function"!=typeof F){t.next=21;break}return t.next=21,F(f.context,d);case 21:if("function"!=typeof z.default){t.next=24;break}return t.next=24,Object(z.default)(f.context,d);case 24:t.next=27;break;case 27:t.next=30;break;case 30:if("function"!=typeof W){t.next=33;break}return t.next=33,W(f.context,d);case 33:if("function"!=typeof Y){t.next=36;break}return t.next=36,Y(f.context,d);case 36:t.next=39;break;case 39:if("function"!=typeof it.a){t.next=42;break}return t.next=42,it()(f.context,d);case 42:t.next=45;break;case 45:return t.abrupt("return",{app:f,store:r,router:n});case 46:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},74:function(t,e,n){},75:function(t,e,n){},76:function(t,e,n){},78:function(t,e,n){"use strict";n(23),n(84),n(47),n(33),n(88),n(134);var r=n(0),o=window.requestIdleCallback||function(t){var e=Date.now();return setTimeout((function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})}),1)},c=window.IntersectionObserver&&new window.IntersectionObserver((function(t){t.forEach((function(t){var e=t.intersectionRatio,link=t.target;e<=0||link.__prefetch()}))}));e.a={name:"NuxtLink",extends:r.default.component("RouterLink"),props:{noPrefetch:{type:Boolean,default:!1}},mounted:function(){this.noPrefetch||o(this.observe,{timeout:2e3})},beforeDestroy:function(){this.__observed&&(c.unobserve(this.$el),delete this.$el.__prefetch)},methods:{observe:function(){c&&this.shouldPrefetch()&&(this.$el.__prefetch=this.prefetch.bind(this),c.observe(this.$el),this.__observed=!0)},shouldPrefetch:function(){return this.getPrefetchComponents().length>0},canPrefetch:function(){var t=navigator.connection;return!(this.$nuxt.isOffline||t&&((t.effectiveType||"").includes("2g")||t.saveData))},getPrefetchComponents:function(){return this.$router.resolve(this.to,this.$route,this.append).resolved.matched.map((function(t){return t.components.default})).filter((function(t){return"function"==typeof t&&!t.options&&!t.__prefetched}))},prefetch:function(){if(this.canPrefetch()){c.unobserve(this.$el);var t=this.getPrefetchComponents(),e=!0,n=!1,r=void 0;try{for(var o,f=t[Symbol.iterator]();!(e=(o=f.next()).done);e=!0){var l=o.value,h=l();h instanceof Promise&&h.catch((function(){})),l.__prefetched=!0}}catch(t){n=!0,r=t}finally{try{e||null==f.return||f.return()}finally{if(n)throw r}}}}}}}},[[178,3,1,4]]]);