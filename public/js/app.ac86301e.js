(function(t){function e(e){for(var r,i,s=e[0],l=e[1],c=e[2],p=0,f=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},o=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"2a12":function(t,e,a){"use strict";a("3d5a")},"353c":function(t,e,a){},"3d5a":function(t,e,a){},"54d9":function(t,e,a){t.exports=a.p+"img/head.f28e00ce.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("app-header"),a("router-view")],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container text-left pt-5 text-right col-sm-7 col-md-9"},[a("img",{attrs:{src:t.image,alt:"İmage",width:"200"}})])},s=[],l={data:function(){return{image:a("54d9")}}},c=l,u=(a("d942"),a("2877")),p=Object(u["a"])(c,i,s,!1,null,"2d14d64b",null),f=p.exports,m={name:"App",components:{appHeader:f},beforeCreate:function(){document.body.className="image"}},d=m,g=(a("034f"),Object(u["a"])(d,n,o,!1,null,null,null)),v=g.exports,h=a("8c4f"),_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container pt-5 pb-3 mt-5 text-center "},[a("h2",[t._v("Track Player Stats")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("div",{staticClass:"form-group pb-2 "},[a("label",{attrs:{for:"platform"}},[t._v("Platform")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.platform,expression:"platform"}],staticClass:"form-control-sm",attrs:{name:"platform",id:"platform"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.platform=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"psn"}},[t._v("Playstation")]),a("option",{attrs:{value:"xbl"}},[t._v("Xbox")]),a("option",{attrs:{value:"origin"}},[t._v("Origin")]),a("option",{attrs:{value:"steam"}},[t._v("Steam")])])]),a("div",{staticClass:"form-group pb-2"},[a("label",{attrs:{for:"gamertag"}},[t._v("Gamertag")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.gamertag,expression:"gamertag"}],staticClass:"form-control-sm",attrs:{type:"text",name:"text",id:"gamertag",placeholder:"GamerTag,OriginID,PSN Id,etc.."},domProps:{value:t.gamertag},on:{input:function(e){e.target.composing||(t.gamertag=e.target.value)}}})]),t._m(0)])])},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group text-center"},[a("input",{staticClass:"btn btn-outline-warning ",attrs:{type:"submit",value:"submit"}})])}],x=(a("99af"),{name:"Search",data:function(){return{platform:"psn",gamertag:""}},methods:{onSubmit:function(){this.gamertag?this.$router.push("/profile/".concat(this.platform,"/").concat(this.gamertag)):this.$toasted.info("Please Enter A Gamertag",{duration:3e3,icon:"exclamation-circle"})}}}),w=x,y=(a("2a12"),Object(u["a"])(w,_,b,!1,null,"f27b616e",null)),C=y.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mt-5 text-center"},[t.loading?a("div",{staticClass:"text-warning"},[t._v("Loading ...")]):t._e(),t.error?a("div",{staticClass:"text-white"},[a("h1",[t._v(t._s(t.error))]),a("router-link",{staticClass:"text-warning",attrs:{to:"/"}},[t._v("Go Back")])],1):t._e(),t.profileData?a("div",{staticClass:"container gamer"},[a("div",{staticClass:"gamertag"},[a("img",{staticClass:"img-fluid",attrs:{src:t.profileData.platformInfo.avatarUrl,width:"100",alt:""}}),a("span",[t._v(t._s(t.profileData.platformInfo.platformUserId))]),a("div",{staticClass:"grid"},[t.profileData.segments[0]?a("div",[a("img",{attrs:{src:t.profileData.segments[0].metadata.imageUrl,alt:""}})]):t._e(),a("div",[a("ul",[a("li",[a("h4",[t._v("UserHandle")]),a("p",[t._v(t._s(t.profileData.platformInfo.platformUserHandle))])]),t.profileData.metadata.activeLegendName?a("li",[a("h4",[t._v("Selected Legend")]),a("p",[t._v(t._s(t.profileData.metadata.activeLegendName))])]):t._e(),t.profileData.segments[0].stats.damage?a("li",[a("h4",[t._v("Total Damages")]),a("p",[t._v(t._s(t.profileData.segments[0].stats.damage.displayValue))])]):t._e(),t.profileData.segments[0].stats.damage?a("li",[a("h4",[t._v("Percentile")]),a("p",[t._v("%"+t._s(t.profileData.segments[0].stats.damage.percentile))])]):t._e()])])]),a("router-link",{staticClass:"go-back",attrs:{to:"/"}},[t._v("Go Back")])],1)]):t._e()])},D=[],P=(a("96cf"),a("1da1")),j=a("bc3a"),S=a.n(j);S.a.defaults.withCredentials=!0;var k=function(){var t=S.a.create({baseURL:"/api/v2"});return r["a"].use(t),t},$={data:function(){return{loading:!1,profileData:null,error:null}},beforeCreate:function(){console.log(document.body)},created:function(){var t=this;return Object(P["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,k().get("/profile/".concat(t.$route.params.platform,"/").concat(t.$route.params.gamertag));case 4:a=e.sent,console.log(a.data.data),t.profileData=a.data.data.data,t.loading=!1,e.next=15;break;case 10:return e.prev=10,e.t0=e["catch"](1),t.loading=!1,t.error=e.t0.response.data.message,e.abrupt("return",e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,10]])})))()}},E=$,I=(a("7f62"),Object(u["a"])(E,O,D,!1,null,"5f836f5a",null)),N=I.exports;r["a"].use(h["a"]);var T=[{path:"/",component:C,name:"Search"},{path:"/profile/:platform/:gamertag",component:N,name:"Profile"}],U=new h["a"]({routes:T,mode:"hash"}),G=U,L=a("a65d"),M=a.n(L);r["a"].use(M.a,{iconPack:"fontawesome"}),r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(v)},router:G}).$mount("#app")},"7f62":function(t,e,a){"use strict";a("d51d")},"85ec":function(t,e,a){},d51d:function(t,e,a){},d942:function(t,e,a){"use strict";a("353c")}});
//# sourceMappingURL=app.ac86301e.js.map