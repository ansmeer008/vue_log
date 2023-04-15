(function(){"use strict";var t={1488:function(t,n,e){var r=e(9242),o=e(3396);const a={class:"navbar navbar-expand-lg bg-body-tertiary"},i={class:"container-fluid"},l=(0,o._)("a",{class:"navbar-brand",href:"#"},"Vue_log",-1),s=(0,o._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,o._)("span",{class:"navbar-toggler-icon"})],-1),u={class:"collapse navbar-collapse",id:"navbarTogglerDemo02"},c={class:"navbar-nav me-auto mb-2 mb-lg-0"},m=(0,o._)("li",{class:"nav-item"},[(0,o._)("a",{class:"nav-link active","aria-current":"page",href:"#"},"Home")],-1),d=(0,o._)("li",{class:"nav-item"},[(0,o._)("a",{class:"nav-link",href:"#"},"List")],-1),p=(0,o._)("li",{class:"nav-item"},[(0,o._)("a",{class:"nav-link disabled"},"준비중...")],-1),v=(0,o._)("form",{class:"d-flex",role:"search"},[(0,o._)("input",{class:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),(0,o._)("button",{class:"btn btn-outline-success",type:"submit"},"Search")],-1);function f(t,n,e,r,f,b){const g=(0,o.up)("router-link"),h=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("nav",a,[(0,o._)("div",i,[(0,o.Wm)(g,{class:"link",to:"/"},{default:(0,o.w5)((()=>[l])),_:1}),s,(0,o._)("div",u,[(0,o._)("ul",c,[(0,o.Wm)(g,{class:"link",to:"/"},{default:(0,o.w5)((()=>[m])),_:1}),(0,o.Wm)(g,{class:"link",to:"/list"},{default:(0,o.w5)((()=>[d])),_:1}),p]),v])])]),(0,o.Wm)(h,{items:f.items},null,8,["items"])],64)}const b=[{title:"vue-router 소개",content:"vue-router 패키지를 이용하면 프로젝트 내부에서 페이지 간 이동을 편리하게 할 수 있습니다",date:"September 24, 2021",number:0},{title:"$route와 $router의 차이",content:"$route는 현재 경로 관련된 데이터를 사용할 수 있게 도와줍니다. 반면 $router는 페이지 이동과 관련된 기능들을 사용할 수 있게 해줍니다.",date:"October 20, 2020",number:1},{title:"nested routes는 무엇일까?",content:"만들어진 경로에 children 경로를 붙여 nested routes를 구현할 수 있습니다. Some applications' UIs are composed of components that are nested multiple levels deep. ",date:"April 24, 2019",number:2},{title:"named routes, named views, redirect ",content:"공식 문서를 참고하면 vue-router의 다양한 기능들을 사용할 수 있습니다 :)",date:"April 24, 2019",number:3}];var g=b,h={name:"App",data(){return{items:g}},components:{}},_=e(89);const w=(0,_.Z)(h,[["render",f]]);var y=w,k=(e(2166),e(2483)),O=(e(7658),e(7139));const D={class:"listContainer"},C=["onClick"],$={class:"title"},S={class:"content"};function j(t,n,e,r,a,i){return(0,o.wg)(),(0,o.iD)("div",D,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.items,((n,e)=>((0,o.wg)(),(0,o.iD)("div",{key:e,onClick:e=>t.$router.push("/detail/"+n.number),class:"itemContainer"},[(0,o._)("h5",$,(0,O.zw)(n.title),1),(0,o._)("p",S,(0,O.zw)(n.date),1)],8,C)))),128))])}var x={name:"ItemList",props:{items:Array}};const T=(0,_.Z)(x,[["render",j]]);var Z=T,A=e.p+"img/ham.34606423.jpeg";const I={class:"introcontainer"},z=(0,o._)("h5",null,"Frontend 개발자 Jade의 블로그입니다!",-1),P=(0,o._)("p",null,"~Vue 공부하는 중!~",-1),W=(0,o._)("img",{class:"blogImg",src:A,alt:"img for introduce this blog"},null,-1),F=[z,P,W];function B(t,n,e,r,a,i){return(0,o.wg)(),(0,o.iD)("div",I,F)}var H={name:"BlogIntro"};const M=(0,_.Z)(H,[["render",B]]);var E=M;const J={class:"container"},L={class:"head"},N={class:"buttonBox"};function V(t,n,e,r,a,i){const l=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",J,[(0,o._)("div",L,[(0,o._)("h4",null,(0,O.zw)(e.items[t.$route.params.id].title),1),(0,o._)("p",null,(0,O.zw)(e.items[t.$route.params.id].date),1)]),(0,o._)("p",null,(0,O.zw)(e.items[t.$route.params.id].content),1),(0,o._)("div",N,[(0,o._)("button",{onClick:n[0]||(n[0]=n=>t.$router.push("/detail/"+t.$route.params.id+"/author")),type:"button",class:"btn btn-outline-info mb-4 w-25"}," who am i? "),(0,o._)("button",{onClick:n[1]||(n[1]=n=>t.$router.push("/detail/"+t.$route.params.id+"/comment")),type:"button",class:"btn btn-outline-success mb-4 w-25"}," Comment ")]),(0,o.Wm)(l)])}var Y={name:"ItemDetail",props:{items:Array}};const K=(0,_.Z)(Y,[["render",V]]);var U=K;const q={class:"notfoundtext"};function G(t,n,e,r,a,i){return(0,o.wg)(),(0,o.iD)("h4",q,"404 Not Found!")}var Q={name:"NotFoundError"};const R=(0,_.Z)(Q,[["render",G]]);var X=R;const tt={class:"authorContainer"},nt=(0,o._)("div",null,"블로그 주인 소개",-1),et=(0,o._)("p",null,"매일 매일 한 걸음씩 더 나아가고자 하는 프론트엔드 개발자 Jade 입니다!",-1),rt=[nt,et];function ot(t,n,e,r,a,i){return(0,o.wg)(),(0,o.iD)("div",tt,rt)}var at={name:"BlogAuthor"};const it=(0,_.Z)(at,[["render",ot]]);var lt=it;const st={class:"commentContainer"},ut=(0,o._)("p",null,"댓글 기능은 준비 중입니다...",-1),ct=[ut];function mt(t,n,e,r,a,i){return(0,o.wg)(),(0,o.iD)("div",st,ct)}var dt={name:"ItemComment"};const pt=(0,_.Z)(dt,[["render",mt]]);var vt=pt;const ft=[{path:"/",component:E},{path:"/list",component:Z},{path:"/detail/:id",component:U,children:[{path:"author",component:lt},{path:"comment",component:vt}]},{path:"/:anything(.*)",component:X}],bt=(0,k.p7)({history:(0,k.PO)(),routes:ft});var gt=bt;(0,r.ri)(y).use(gt).mount("#app")}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={exports:{}};return t[r](a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(n,r,o,a){if(!r){var i=1/0;for(c=0;c<t.length;c++){r=t[c][0],o=t[c][1],a=t[c][2];for(var l=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(e.O).every((function(t){return e.O[t](r[s])}))?r.splice(s--,1):(l=!1,a<i&&(i=a));if(l){t.splice(c--,1);var u=o();void 0!==u&&(n=u)}}return n}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[r,o,a]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p="/vue_log/"}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,r){var o,a,i=r[0],l=r[1],s=r[2],u=0;if(i.some((function(n){return 0!==t[n]}))){for(o in l)e.o(l,o)&&(e.m[o]=l[o]);if(s)var c=s(e)}for(n&&n(r);u<i.length;u++)a=i[u],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(c)},r=self["webpackChunkvue_log"]=self["webpackChunkvue_log"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(1488)}));r=e.O(r)})();
//# sourceMappingURL=app.5dd7e0fc.js.map