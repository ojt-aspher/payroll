(function(e){function n(n){for(var r,a,o=n[0],i=n[1],s=n[2],p=0,f=[];p<o.length;p++)a=o[p],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);h&&h(n);while(f.length)f.shift()();return u.push.apply(u,s||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,a=1;a<t.length;a++){var o=t[a];0!==c[o]&&(r=!1)}r&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={app:0},c={app:0},u=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0d13c902":"e9120073","chunk-00c7168f":"05552c1f","chunk-1745eef0":"36104fa1","chunk-6aeb5b9a":"07f4b8be","chunk-215be59a":"9f98e028","chunk-28d0ff5b":"7638dd50","chunk-4782e2ec":"48cca0a6","chunk-5452392a":"a1b58eb2","chunk-aeec4c5c":"73135dc8","chunk-5704d3a0":"b9a6c965","chunk-00971b5a":"78c2bd7e","chunk-040ad427":"26cf8353","chunk-055e5473":"dd079536","chunk-0e73c4e6":"39189ef4","chunk-4bfb7fca":"cbeadade","chunk-56acb4bb":"fb7d9d05","chunk-7dd95fb4":"3c3c0aae","chunk-9002daec":"cddeccab","chunk-a094274c":"6e07df0d","chunk-ad3ca006":"12808641","chunk-bed47ea8":"2a164880","chunk-59be10ca":"f832ac85"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-0d13c902":1,"chunk-00c7168f":1,"chunk-1745eef0":1,"chunk-6aeb5b9a":1,"chunk-215be59a":1,"chunk-28d0ff5b":1,"chunk-4782e2ec":1,"chunk-5452392a":1,"chunk-aeec4c5c":1,"chunk-5704d3a0":1,"chunk-00971b5a":1,"chunk-040ad427":1,"chunk-055e5473":1,"chunk-0e73c4e6":1,"chunk-4bfb7fca":1,"chunk-56acb4bb":1,"chunk-7dd95fb4":1,"chunk-9002daec":1,"chunk-a094274c":1,"chunk-ad3ca006":1,"chunk-bed47ea8":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-0d13c902":"25d17e53","chunk-00c7168f":"8f3a14e2","chunk-1745eef0":"35575488","chunk-6aeb5b9a":"eaadbe11","chunk-215be59a":"da6a4395","chunk-28d0ff5b":"da6a4395","chunk-4782e2ec":"da6a4395","chunk-5452392a":"da6a4395","chunk-aeec4c5c":"0ff62275","chunk-5704d3a0":"6460abdf","chunk-00971b5a":"2a5e22f5","chunk-040ad427":"5a26539f","chunk-055e5473":"43ccb5bf","chunk-0e73c4e6":"2a5e22f5","chunk-4bfb7fca":"2a5e22f5","chunk-56acb4bb":"72d76c65","chunk-7dd95fb4":"2a5e22f5","chunk-9002daec":"11c7dcf3","chunk-a094274c":"5a26539f","chunk-ad3ca006":"5a26539f","chunk-bed47ea8":"72d76c65","chunk-59be10ca":"31d6cfe0"}[e]+".css",c=i.p+r,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var s=u[o],p=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(p===r||p===c))return n()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){s=f[o],p=s.getAttribute("data-href");if(p===r||p===c)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var r=n&&n.target&&n.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],h.parentNode.removeChild(h),t(u)},h.href=c;var m=document.getElementsByTagName("head")[0];m.appendChild(h)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)n.push(r[2]);else{var u=new Promise((function(n,t){r=c[e]=[n,t]}));n.push(r[2]=u);var s,p=document.createElement("script");p.charset="utf-8",p.timeout=120,i.nc&&p.setAttribute("nonce",i.nc),p.src=o(e);var f=new Error;s=function(n){p.onerror=p.onload=null,clearTimeout(h);var t=c[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,t[1](f)}c[e]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:p})}),12e4);p.onerror=p.onload=s,document.head.appendChild(p)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],p=s.push.bind(s);s.push=n,s=s.slice();for(var f=0;f<s.length;f++)n(s[f]);var h=p;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"0044":function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return a}));var r="PROCESS_PAYROLL",a="PAYROLL_GENERATE_PAYSLIPS"},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r,a,c,u,o,i,s,p,f,h=t("2b0e"),m=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("router-view")},d=[],l={name:"App"},b=l,v=t("2877"),w=Object(v["a"])(b,m,d,!1,null,null,null),g=w.exports,k=(t("45fc"),t("b0c0"),t("d3b7"),t("96cf"),t("1da1")),R=t("8c4f"),O=t("2f62"),y=t("ade3"),E=t("ef09"),x=t("bc3a"),j=t.n(x),A=t("a7fe"),T=t.n(A),I=t("04e1"),S=t.n(I),_="id_token",N={save:function(e){window.localStorage.setItem(_,e)},get:function(){return window.localStorage.getItem(_)?window.localStorage.getItem(_):null},remove:function(){window.localStorage.removeItem(_)},getDecodedToken:function(){var e=N.get();return e?S()(e):{}}},P=N,D={init:function(){h["a"].use(T.a,j.a),h["a"].axios.defaults.baseURL="/api"},setHeader:function(){h["a"].axios.defaults.headers.common["Authorization"]=P.get()},get:function(e,n){return h["a"].axios.get(e,n)},post:function(e,n){return h["a"].axios.post(e,n)},put:function(e,n){return h["a"].axios.put(e,n)},delete:function(e,n){return h["a"].axios.delete(e,n)}},C=D,V={save:function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n){var t,r,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=n.name,r=n.username,a=n.password,c=n.type,e.abrupt("return",C.post("/account",{name:t,username:r,password:a,type:c}));case 2:case"end":return e.stop()}}),e)})));function n(n){return e.apply(this,arguments)}return n}(),fetch:function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",C.get("/account"));case 1:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),getInformation:function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",C.get("/account/".concat(n)));case 1:case"end":return e.stop()}}),e)})));function n(n){return e.apply(this,arguments)}return n}(),update:function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n){var t,r,a,c,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=n.accountID,r=n.name,a=n.username,c=n.password,u=n.type,e.abrupt("return",C.put("/account",{accountID:t,name:r,username:a,password:c,type:u}));case 2:case"end":return e.stop()}}),e)})));function n(n){return e.apply(this,arguments)}return n}(),remove:function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",C.delete("/account/".concat(n)));case 1:case"end":return e.stop()}}),e)})));function n(n){return e.apply(this,arguments)}return n}()},M=V,L={username:""},W={state:{error:Object.assign({},L)},mutations:(r={},Object(y["a"])(r,E["f"],(function(e,n){return e.error=Object.assign({},n)})),Object(y["a"])(r,E["a"],(function(e){return e.error=Object.assign({},L)})),r),actions:(a={},Object(y["a"])(a,E["e"],function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n,t){var r,a,c,u,o,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=n.commit,a=t.name,c=t.username,u=t.password,o=t.type,e.prev=2,e.next=5,M.save({name:a,username:c,password:u,type:o});case 5:return i=e.sent,s=i.data.message,e.abrupt("return",s);case 10:e.prev=10,e.t0=e["catch"](2),r(E["f"],e.t0.response.data);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(n,t){return e.apply(this,arguments)}}()),Object(y["a"])(a,E["b"],function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.fetch();case 3:return t=e.sent,r=t.data.accounts,e.abrupt("return",{accounts:r});case 8:throw e.prev=8,e.t0=e["catch"](0),new Error("[RWV] ApiService ".concat(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}()),Object(y["a"])(a,E["c"],function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n,t){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.getInformation(t);case 3:return r=e.sent,a=r.data.information,e.abrupt("return",a);case 8:throw e.prev=8,e.t0=e["catch"](0),new Error("[RWV] ApiService ".concat(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n,t){return e.apply(this,arguments)}}()),Object(y["a"])(a,E["g"],function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n,t){var r,a,c,u,o,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.accountID,a=t.name,c=t.username,u=t.password,o=t.type,e.prev=1,e.next=4,M.update({accountID:r,name:a,username:c,password:u,type:o});case 4:return i=e.sent,s=i.data.message,e.abrupt("return",s);case 9:throw e.prev=9,e.t0=e["catch"](1),new Error("[RWV] ApiService ".concat(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(n,t){return e.apply(this,arguments)}}()),Object(y["a"])(a,E["d"],function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n,t){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.remove(t);case 3:return r=e.sent,a=r.data.message,e.abrupt("return",a);case 8:throw e.prev=8,e.t0=e["catch"](0),new Error("[RWV] ApiService ".concat(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n,t){return e.apply(this,arguments)}}()),a)},U=W,G=t("9e96"),F={state:{isNotificationShow:!1,notificationMessage:""},mutations:(c={},Object(y["a"])(c,G["b"],(function(e,n){e.isNotificationShow=!0,e.notificationMessage=n})),Object(y["a"])(c,G["a"],(function(e){e.isNotificationShow=!1,e.notificationMessage=""})),c)},H=F,Y=(t("a4d3"),t("e01a"),t("8d5e")),B={save:function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=n.name,r=n.description,e.abrupt("return",C.post("/department",{name:t,description:r}));case 2:case"end":return e.stop()}}),e)})));function n(n){return e.apply(this,arguments)}return n}(),fetch:function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",C.get("/department"));case 1:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),getInformation:function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",C.get("/department/".concat(n)));case 1:case"end":return e.stop()}}),e)})));function n(n){return e.apply(this,arguments)}return n}(),update:function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n){var t,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=n.departmentID,r=n.name,a=n.description,e.abrupt("return",C.put("/department",{departmentID:t,name:r,description:a}));case 2:case"end":return e.stop()}}),e)})));function n(n){return e.apply(this,arguments)}return n}(),remove:function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",C.delete("/department/".concat(n)));case 1:case"end":return e.stop()}}),e)})));function n(n){return e.apply(this,arguments)}return n}()},q=B,J={actions:(u={},Object(y["a"])(u,Y["d"],function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n,t){var r,a,c,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.name,a=t.description,e.prev=1,e.next=4,q.save({name:r,description:a});case 4:return c=e.sent,u=c.data.message,e.abrupt("return",u);case 9:throw e.prev=9,e.t0=e["catch"](1),new Error("[RWV] ApiService ".concat(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(n,t){return e.apply(this,arguments)}}()),Object(y["a"])(u,Y["a"],function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q.fetch();case 3:return t=e.sent,r=t.data.departments,e.abrupt("return",{departments:r});case 8:throw e.prev=8,e.t0=e["catch"](0),new Error("[RWV] ApiService ".concat(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}()),Object(y["a"])(u,Y["b"],function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n,t){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q.getInformation(t);case 3:return r=e.sent,a=r.data.information,e.abrupt("return",a);case 8:throw e.prev=8,e.t0=e["catch"](0),new Error("[RWV] ApiService ".concat(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n,t){return e.apply(this,arguments)}}()),Object(y["a"])(u,Y["e"],function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n,t){var r,a,c,u,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.departmentID,a=t.name,c=t.description,e.prev=1,e.next=4,q.update({departmentID:r,name:a,description:c});case 4:return u=e.sent,o=u.data.message,e.abrupt("return",o);case 9:throw e.prev=9,e.t0=e["catch"](1),new Error("[RWV] ApiService ".concat(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(n,t){return e.apply(this,arguments)}}()),Object(y["a"])(u,Y["c"],function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n,t){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q.remove(t);case 3:return r=e.sent,a=r.data.message,e.abrupt("return",a);case 8:throw e.prev=8,e.t0=e["catch"](0),new Error("[RWV] ApiService ".concat(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n,t){return e.apply(this,arguments)}}()),u)},K=J,$=t("f2f6"),z={save:function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n){var t,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=n.name,r=n.description,a=n.dailySalary,e.abrupt("return",C.post("/designation",{name:t,description:r,dailySalary:a}));case 2:case"end":return e.stop()}}),e)})));function n(n){return e.apply(this,arguments)}return n}(),fetch:function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",C.get("/designation"));case 1:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),getInformation:function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",C.get("/designation/".concat(n)));case 1:case"end":return e.stop()}}),e)})));function n(n){return e.apply(this,arguments)}return n}(),update:function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n){var t,r,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=n.designationID,r=n.name,a=n.description,c=n.dailySalary,e.abrupt("return",C.put("/designation",{designationID:t,name:r,description:a,dailySalary:c}));case 2:case"end":return e.stop()}}),e)})));function n(n){return e.apply(this,arguments)}return n}(),remove:function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",C.delete("/designation/".concat(n)));case 1:case"end":return e.stop()}}),e)})));function n(n){return e.apply(this,arguments)}return n}()},Q=z,X={actions:(o={},Object(y["a"])(o,$["d"],function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n,t){var r,a,c,u,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.name,a=t.description,c=t.dailySalary,e.prev=1,e.next=4,Q.save({name:r,description:a,dailySalary:c});case 4:return u=e.sent,o=u.data.message,e.abrupt("return",o);case 9:throw e.prev=9,e.t0=e["catch"](1),new Error("[RWV] ApiService ".concat(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(n,t){return e.apply(this,arguments)}}()),Object(y["a"])(o,$["a"],function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Q.fetch();case 3:return t=e.sent,r=t.data.designations,e.abrupt("return",{designations:r});case 8:throw e.prev=8,e.t0=e["catch"](0),new Error("[RWV] ApiService ".concat(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}()),Object(y["a"])(o,$["b"],function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n,t){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Q.getInformation(t);case 3:return r=e.sent,a=r.data.information,e.abrupt("return",a);case 8:throw e.prev=8,e.t0=e["catch"](0),new Error("[RWV] ApiService ".concat(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n,t){return e.apply(this,arguments)}}()),Object(y["a"])(o,$["e"],function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n,t){var r,a,c,u,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.designationID,a=t.name,c=t.description,u=t.dailySalary,e.prev=1,e.next=4,Q.update({designationID:r,name:a,description:c,dailySalary:u});case 4:return o=e.sent,i=o.data.message,e.abrupt("return",i);case 9:throw e.prev=9,e.t0=e["catch"](1),new Error("[RWV] ApiService ".concat(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(n,t){return e.apply(this,arguments)}}()),Object(y["a"])(o,$["c"],function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n,t){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Q.remove(t);case 3:return r=e.sent,a=r.data.message,e.abrupt("return",a);case 8:throw e.prev=8,e.t0=e["catch"](0),new Error("[RWV] ApiService ".concat(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n,t){return e.apply(this,arguments)}}()),o)},Z=X,ee=t("f650"),ne={generateCustomID:function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",C.get("/employee/custom/employee-id"));case 1:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),save:function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",C.post("/employee",n));case 1:case"end":return e.stop()}}),e)})));function n(n){return e.apply(this,arguments)}return n}(),fetch:function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",C.get("/employee"));case 1:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),getInformation:function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",C.get("/employee/".concat(n)));case 1:case"end":return e.stop()}}),e)})));function n(n){return e.apply(this,arguments)}return n}(),update:function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",C.put("/employee",n));case 1:case"end":return e.stop()}}),e)})));function n(n){return e.apply(this,arguments)}return n}(),remove:function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",C.delete("/employee/".concat(n)));case 1:case"end":return e.stop()}}),e)})));function n(n){return e.apply(this,arguments)}return n}()},te=ne,re={actions:(i={},Object(y["a"])(i,ee["b"],function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te.generateCustomID();case 3:return t=e.sent,r=t.data.customID,e.abrupt("return",{customID:r});case 8:throw e.prev=8,e.t0=e["catch"](0),new Error("[RWV] ApiService ".concat(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}()),Object(y["a"])(i,ee["e"],function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n,t){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te.save(t);case 3:return r=e.sent,a=r.data.message,e.abrupt("return",a);case 8:throw e.prev=8,e.t0=e["catch"](0),new Error("[RWV] ApiService ".concat(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n,t){return e.apply(this,arguments)}}()),Object(y["a"])(i,ee["a"],function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te.fetch();case 3:return t=e.sent,r=t.data.employees,e.abrupt("return",{employees:r});case 8:throw e.prev=8,e.t0=e["catch"](0),new Error("[RWV] ApiService ".concat(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}()),Object(y["a"])(i,ee["c"],function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n,t){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te.getInformation(t);case 3:return r=e.sent,a=r.data.information,e.abrupt("return",a);case 8:throw e.prev=8,e.t0=e["catch"](0),new Error("[RWV] ApiService ".concat(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n,t){return e.apply(this,arguments)}}()),Object(y["a"])(i,ee["f"],function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n,t){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te.update(t);case 3:return r=e.sent,a=r.data.message,e.abrupt("return",a);case 8:throw e.prev=8,e.t0=e["catch"](0),new Error("[RWV] ApiService ".concat(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n,t){return e.apply(this,arguments)}}()),Object(y["a"])(i,ee["d"],function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n,t){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te.remove(t);case 3:return r=e.sent,a=r.data.message,e.abrupt("return",a);case 8:throw e.prev=8,e.t0=e["catch"](0),new Error("[RWV] ApiService ".concat(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n,t){return e.apply(this,arguments)}}()),i)},ae=re,ce=t("0044"),ue=(t("99af"),{process:function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",C.post("/payroll",n));case 1:case"end":return e.stop()}}),e)})));function n(n){return e.apply(this,arguments)}return n}(),generatePayslips:function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n,t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",C.get("/payroll/".concat(n,"/").concat(t)));case 1:case"end":return e.stop()}}),e)})));function n(n,t){return e.apply(this,arguments)}return n}()}),oe=ue,ie={actions:(s={},Object(y["a"])(s,ce["b"],function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n,t){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,oe.process(t);case 3:return r=e.sent,a=r.data.message,e.abrupt("return",a);case 8:throw e.prev=8,e.t0=e["catch"](0),new Error("[RWV] ApiService ".concat(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n,t){return e.apply(this,arguments)}}()),Object(y["a"])(s,ce["a"],function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n,t){var r,a,c,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.startPeriodDate,a=t.endPeriodDate,e.prev=1,e.next=4,oe.generatePayslips(r,a);case 4:return c=e.sent,u=c.data.payslips,e.abrupt("return",u);case 9:throw e.prev=9,e.t0=e["catch"](1),new Error("[RWV] ApiService ".concat(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(n,t){return e.apply(this,arguments)}}()),s)},se=ie,pe={login:function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=n.username,r=n.password,e.abrupt("return",C.post("/authentication",{username:t,password:r}));case 2:case"end":return e.stop()}}),e)})));function n(n){return e.apply(this,arguments)}return n}(),getAuthenticatedCredentials:function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",C.get("/authentication"));case 1:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()},fe=pe,he=t("9392"),me={username:"",password:""},de={account:{id:null,username:"",name:""},actions:[]},le={state:{error:Object.assign({},me),isAuthenticated:!!P.get(),credentials:Object.assign({},de)},mutations:(p={},Object(y["a"])(p,he["e"],(function(e,n){return e.error=Object.assign({},n)})),Object(y["a"])(p,he["f"],(function(e,n){e.isAuthenticated=!0,P.save(n),e.credentials=P.getDecodedToken(),C.setHeader()})),Object(y["a"])(p,he["d"],(function(e){e.isAuthenticated=!1,e.credentials=Object.assign({},de),P.remove()})),Object(y["a"])(p,he["b"],(function(e){return e.error=Object.assign({},me)})),p),actions:(f={},Object(y["a"])(f,he["a"],function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n,t){var r,a,c,u,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=n.commit,a=t.username,c=t.password,e.prev=2,e.next=5,fe.login({username:a,password:c});case 5:u=e.sent,o=u.data.token,r(he["f"],o),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](2),r(he["e"],e.t0.response.data);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(n,t){return e.apply(this,arguments)}}()),Object(y["a"])(f,he["c"],function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n){var t,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=n.commit,!P.get()){e.next=16;break}return C.setHeader(),e.prev=3,e.next=6,fe.getAuthenticatedCredentials();case 6:r=e.sent,a=r.data.token,t(he["f"],a),e.next=14;break;case 11:throw e.prev=11,e.t0=e["catch"](3),new Error("[RWV] ApiService ".concat(e.t0));case 14:e.next=17;break;case 16:t(he["d"]);case 17:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(n){return e.apply(this,arguments)}}()),f)},be=le;h["a"].use(O["a"]);var ve=new O["a"].Store({modules:{account:U,global:H,department:K,designation:Z,employee:ae,payroll:se,authentication:be}});h["a"].use(R["a"]);var we=[{path:"",component:function(){return Promise.all([t.e("chunk-0d13c902"),t.e("chunk-aeec4c5c"),t.e("chunk-00c7168f"),t.e("chunk-59be10ca")]).then(t.bind(null,"a74f"))},children:[{path:"",name:"login",component:function(){return Promise.all([t.e("chunk-0d13c902"),t.e("chunk-6aeb5b9a"),t.e("chunk-aeec4c5c"),t.e("chunk-5704d3a0"),t.e("chunk-ad3ca006")]).then(t.bind(null,"013f"))}}]},{path:"/admin",component:function(){return Promise.all([t.e("chunk-0d13c902"),t.e("chunk-00c7168f"),t.e("chunk-1745eef0")]).then(t.bind(null,"c74f"))},meta:{requiresAuth:!0},children:[{path:"employee-management",component:function(){return Promise.all([t.e("chunk-0d13c902"),t.e("chunk-6aeb5b9a"),t.e("chunk-4782e2ec")]).then(t.bind(null,"f80d"))},children:[{path:"",name:"employee-table",component:function(){return Promise.all([t.e("chunk-0d13c902"),t.e("chunk-6aeb5b9a"),t.e("chunk-aeec4c5c"),t.e("chunk-5704d3a0"),t.e("chunk-4bfb7fca")]).then(t.bind(null,"669b"))},meta:{breadcrumbs:[{text:"Employee Table",icon:"mdi-table",to:{name:"employee-table"}}]}},{path:":operation/:employeeID?",name:"employee-form",component:function(){return Promise.all([t.e("chunk-0d13c902"),t.e("chunk-6aeb5b9a"),t.e("chunk-aeec4c5c"),t.e("chunk-5704d3a0"),t.e("chunk-bed47ea8")]).then(t.bind(null,"5aa4"))},meta:{breadcrumbs:[{text:"Employee Table",icon:"mdi-table",to:{name:"employee-table"}},{text:"Employee Form",icon:"mdi-form-select",to:{name:"employee-form"}}]}}]},{path:"department-management",component:function(){return Promise.all([t.e("chunk-0d13c902"),t.e("chunk-6aeb5b9a"),t.e("chunk-5452392a")]).then(t.bind(null,"a97d"))},children:[{path:"",name:"department-table",component:function(){return Promise.all([t.e("chunk-0d13c902"),t.e("chunk-6aeb5b9a"),t.e("chunk-aeec4c5c"),t.e("chunk-5704d3a0"),t.e("chunk-00971b5a")]).then(t.bind(null,"a850"))},meta:{breadcrumbs:[{text:"Department Table",icon:"mdi-table",to:{name:"department-table"}}]}},{path:":operation/:departmentID?",name:"department-form",component:function(){return Promise.all([t.e("chunk-0d13c902"),t.e("chunk-6aeb5b9a"),t.e("chunk-aeec4c5c"),t.e("chunk-5704d3a0"),t.e("chunk-040ad427")]).then(t.bind(null,"e53a"))},meta:{breadcrumbs:[{text:"Department Table",icon:"mdi-table",to:{name:"department-table"}},{text:"Department Form",icon:"mdi-form-select",to:{name:"department-form"}}]}}]},{path:"designation-management",component:function(){return Promise.all([t.e("chunk-0d13c902"),t.e("chunk-6aeb5b9a"),t.e("chunk-28d0ff5b")]).then(t.bind(null,"78e9"))},children:[{path:"",name:"designation-table",component:function(){return Promise.all([t.e("chunk-0d13c902"),t.e("chunk-6aeb5b9a"),t.e("chunk-aeec4c5c"),t.e("chunk-5704d3a0"),t.e("chunk-7dd95fb4")]).then(t.bind(null,"6c44"))},meta:{breadcrumbs:[{text:"Designation Table",icon:"mdi-table",to:{name:"designation-table"}}]}},{path:":operation/:designationID?",name:"designation-form",component:function(){return Promise.all([t.e("chunk-0d13c902"),t.e("chunk-6aeb5b9a"),t.e("chunk-aeec4c5c"),t.e("chunk-5704d3a0"),t.e("chunk-a094274c")]).then(t.bind(null,"2f41"))},meta:{breadcrumbs:[{text:"Designation Table",icon:"mdi-table",to:{name:"designation-table"}},{text:"Designation Form",icon:"mdi-form-select",to:{name:"designation-form"}}]}}]},{path:"payroll",name:"payroll",component:function(){return Promise.all([t.e("chunk-0d13c902"),t.e("chunk-6aeb5b9a"),t.e("chunk-aeec4c5c"),t.e("chunk-5704d3a0"),t.e("chunk-56acb4bb")]).then(t.bind(null,"1989"))}},{path:"report",name:"report",component:function(){return Promise.all([t.e("chunk-0d13c902"),t.e("chunk-6aeb5b9a"),t.e("chunk-aeec4c5c"),t.e("chunk-5704d3a0"),t.e("chunk-9002daec")]).then(t.bind(null,"7240"))}},{path:"account-management",component:function(){return Promise.all([t.e("chunk-0d13c902"),t.e("chunk-6aeb5b9a"),t.e("chunk-215be59a")]).then(t.bind(null,"eb77"))},children:[{path:"",name:"account-table",component:function(){return Promise.all([t.e("chunk-0d13c902"),t.e("chunk-6aeb5b9a"),t.e("chunk-aeec4c5c"),t.e("chunk-5704d3a0"),t.e("chunk-0e73c4e6")]).then(t.bind(null,"3e82"))},meta:{breadcrumbs:[{text:"Account Table",icon:"mdi-table",to:{name:"account-table"}}]}},{path:":operation/:accountID?",name:"account-form",component:function(){return Promise.all([t.e("chunk-0d13c902"),t.e("chunk-6aeb5b9a"),t.e("chunk-aeec4c5c"),t.e("chunk-5704d3a0"),t.e("chunk-055e5473")]).then(t.bind(null,"0b0a"))},meta:{breadcrumbs:[{text:"Account Table",icon:"mdi-table",to:{name:"account-table"}},{text:"Account Form",icon:"mdi-form-select",to:{name:"account-form"}}]}}]}]}],ge=new R["a"]({mode:"history",base:"/",routes:we});ge.beforeEach(function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(n,t,r){var a,c,u,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ve.dispatch(he["c"]);case 2:if(a=ve.state.authentication,c=a.credentials,u=a.isAuthenticated,o=c.actions.length>0?c.actions[0].to:{name:"login"},i=n.matched.some((function(e){return e.meta.requiresAuth})),!i||u){e.next=9;break}return e.abrupt("return",r({name:"login"}));case 9:if("login"!==n.name||!u){e.next=11;break}return e.abrupt("return",r(o));case 11:r();case 12:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}());var ke=ge,Re=t("f309");t("bf40");h["a"].use(Re["a"]);var Oe=new Re["a"]({theme:{themes:{light:{primary:"#383e56",secondary:"#f69e7b",error:"#b71c1c"}}}});h["a"].config.productionTip=!1,C.init(),new h["a"]({router:ke,store:ve,vuetify:Oe,render:function(e){return e(g)}}).$mount("#app")},"8d5e":function(e,n,t){"use strict";t.d(n,"d",(function(){return r})),t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return c})),t.d(n,"e",(function(){return u})),t.d(n,"c",(function(){return o}));var r="SAVE_DEPARTMENT",a="FETCH_DEPARTMENTS",c="GET_DEPARTMENT_INFORMATION",u="UPDATE_DEPARTMENT",o="REMOVE_DEPARTMENT"},9392:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"e",(function(){return a})),t.d(n,"f",(function(){return c})),t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return o})),t.d(n,"d",(function(){return i}));var r="AUTHENTICATION_LOGIN",a="SET_AUTHENTICATION_ERROR",c="SET_AUTHENTICATION_TOKEN",u="CLEAR_AUTHENTICATION_ERROR",o="GET_AUTHENTICATED_CREDENTIALS",i="PURGE_AUTHENTICATION"},"9e96":function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return a}));var r="SHOW_GLOBAL_NOTIFICATION",a="CLEAR_GLOBAL_NOTIFICATION"},ef09:function(e,n,t){"use strict";t.d(n,"e",(function(){return r})),t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return c})),t.d(n,"g",(function(){return u})),t.d(n,"d",(function(){return o})),t.d(n,"a",(function(){return i})),t.d(n,"f",(function(){return s}));var r="SAVE_ACCOUNT",a="FETCH_ACCOUNTS",c="GET_ACCOUNT_INFORMATION",u="UPDATE_ACCOUNT",o="REMOVE_ACCOUNT",i="CLEAR_ACCOUNT_ERROR",s="SET_ACCOUNT_ERROR"},f2f6:function(e,n,t){"use strict";t.d(n,"d",(function(){return r})),t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return c})),t.d(n,"e",(function(){return u})),t.d(n,"c",(function(){return o}));var r="SAVE_DESIGNATION",a="FETCH_DESIGNATIONS",c="GET_DESIGNATION_INFORMATION",u="UPDATE_DESIGNATION",o="REMOVE_DESIGNATION"},f650:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"e",(function(){return a})),t.d(n,"a",(function(){return c})),t.d(n,"c",(function(){return u})),t.d(n,"f",(function(){return o})),t.d(n,"d",(function(){return i}));var r="GENERATE_EMPLOYEE_CUSTOM_ID",a="SAVE_EMPLOYEE",c="FETCH_EMPLOYEES",u="GET_EMPLOYEE_INFORMATION",o="UPDATE_EMPLOYEE",i="REMOVE_EMPLOYEE"}});
//# sourceMappingURL=app.6d88d53a.js.map