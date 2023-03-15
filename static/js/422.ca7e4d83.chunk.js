"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[422],{4422:function(n,r,e){e.r(r),e.d(r,{default:function(){return P}});var t,o,a,i,s,c,u=e(9439),l=e(7013),p=e(168),d=e(1087),v=e(6444),f=v.ZP.div(t||(t=(0,p.Z)(["\n  min-width: 400px;\n  border-radius: 10px;\n  overflow: hidden;\n  position: relative;\n  > img {\n    object-fit: cover;\n  }\n"]))),h=v.ZP.div(o||(o=(0,p.Z)(["\n  padding-top: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  overflow: hidden;\n"]))),m=v.ZP.div(a||(a=(0,p.Z)(["\n  padding-bottom: 20px;\n  margin-top: 20px;\n  display: flex;\n  gap: 30px;\n  border-bottom: 1px solid black;\n"]))),x=v.ZP.button(i||(i=(0,p.Z)(["\n  padding: 8px;\n  display: flex;\n  gap: 5px;\n  align-items: center;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: transform 250ms ease-in-out, color 250ms ease-in-out;\n  &:hover,\n  &:focus {\n    transform: scale(1.1);\n    color: orangered;\n  }\n"]))),g=v.ZP.div(s||(s=(0,p.Z)(["\n  padding-bottom: 20px;\n  margin-top: 20px;\n  display: flex;\n  gap: 20px;\n  border-bottom: 1px solid black;\n"]))),w=(0,v.ZP)(d.OL)(c||(c=(0,p.Z)(["\n  padding: 8px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n  transition: all 250ms ease-in-out, color 250ms ease-in-out;\n  &.active {\n    color: white;\n    background-color: orangered;\n  }\n  &:hover,\n  &:focus {\n    transform: scale(1.5);\n    color: #ffffff;\n    cursor: pointer;\n  }\n"]))),b=e(2791),Z=e(7689),j=e(4390),k=e(7692),y=e(9093),_=e(184);var P=function(){var n,r,e,t,o=(0,b.useState)(null),a=(0,u.Z)(o,2),i=a[0],s=a[1],c=(0,Z.TH)(),p=(0,Z.s0)(),d=(0,Z.UO)().movieId;if((0,b.useEffect)((function(){var n=new AbortController;return j.MI(d,n).then(s),function(){n.abort()}}),[d]),!i)return(0,_.jsx)(l.Z,{});var v=i.poster_path,P=i.genres,S=i.title,C=i.original_title,I=i.overview,M=i.release_date,U=i.vote_average,O="https://image.tmdb.org/t/p/w500"+v,G=P.map((function(n){return n.name})).join(", ");return(0,_.jsxs)("div",{children:[(0,_.jsxs)(x,{type:"button",onClick:function(){var n,r;p(null!==(n=null===c||void 0===c||null===(r=c.state)||void 0===r?void 0:r.from)&&void 0!==n?n:"/")},children:[(0,_.jsx)(k.YiX,{size:"1.5em"}),"Go back"]}),(0,_.jsxs)(m,{children:[(0,_.jsx)(f,{children:(0,_.jsx)("img",{src:v?O:y,alt:S})}),(0,_.jsxs)(h,{children:[(0,_.jsxs)("h2",{children:[null!==S&&void 0!==S?S:C," (",Number.parseInt(M),")"]}),(0,_.jsxs)("p",{children:["User score: ",Math.round(10*U),"%"]}),(0,_.jsx)("h3",{children:"Overview"}),(0,_.jsx)("p",{children:I}),(0,_.jsx)("h4",{children:"Genres"}),(0,_.jsxs)("p",{children:[G," "]})]})]}),(0,_.jsxs)(g,{children:[(0,_.jsx)(w,{to:"cast",state:{from:null!==(n=null===c||void 0===c||null===(r=c.state)||void 0===r?void 0:r.from)&&void 0!==n?n:"/"},children:"Cast"}),(0,_.jsx)(w,{to:"reviews",state:{from:null!==(e=null===c||void 0===c||null===(t=c.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/"},children:"Reviews"})]}),(0,_.jsx)(b.Suspense,{fallback:(0,_.jsx)(l.Z,{}),children:(0,_.jsx)(Z.j3,{})})]})}},4390:function(n,r,e){e.d(r,{Df:function(){return p},M1:function(){return h},MI:function(){return v},Wf:function(){return u},tx:function(){return x}});var t=e(5861),o=e(4687),a=e.n(o),i=e(1243),s=e(9014),c=i.Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"d03712107dcdd723f1173c5ee2c0d8c1"}});function u(n,r){return l.apply(this,arguments)}function l(){return(l=(0,t.Z)(a().mark((function n(r,e){var t,o;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.get("search/movie",{params:{query:r,signal:e.signal}});case 3:return o=n.sent,n.abrupt("return",null===o||void 0===o||null===(t=o.data)||void 0===t?void 0:t.results);case 7:n.prev=7,n.t0=n.catch(0),s.ZP.error("Something went wrong \ud83d\ude25!"),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function p(){return d.apply(this,arguments)}function d(){return(d=(0,t.Z)(a().mark((function n(){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.get("trending/movie/day",{params:{language:"en-US"}});case 3:return e=n.sent,n.abrupt("return",null===e||void 0===e||null===(r=e.data)||void 0===r?void 0:r.results);case 7:n.prev=7,n.t0=n.catch(0),s.ZP.error("Something went wrong \ud83d\ude25!"),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function v(n,r){return f.apply(this,arguments)}function f(){return(f=(0,t.Z)(a().mark((function n(r,e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.get("movie/".concat(r),{params:{signal:e.signal}});case 3:return t=n.sent,n.abrupt("return",null===t||void 0===t?void 0:t.data);case 7:n.prev=7,n.t0=n.catch(0),s.ZP.error("Something went wrong \ud83d\ude25!"),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function h(n,r){return m.apply(this,arguments)}function m(){return(m=(0,t.Z)(a().mark((function n(r,e){var t,o;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.get("movie/".concat(r,"/credits"),{params:{signal:e.signal}});case 3:return o=n.sent,n.abrupt("return",null===o||void 0===o||null===(t=o.data)||void 0===t?void 0:t.cast);case 7:n.prev=7,n.t0=n.catch(0),s.ZP.error("Something went wrong \ud83d\ude25!"),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function x(n,r){return g.apply(this,arguments)}function g(){return(g=(0,t.Z)(a().mark((function n(r,e){var t,o;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.get("movie/".concat(r,"/reviews"),{params:{signal:e.signal}});case 3:return o=n.sent,n.abrupt("return",null===o||void 0===o||null===(t=o.data)||void 0===t?void 0:t.results);case 7:n.prev=7,n.t0=n.catch(0),s.ZP.error("Something went wrong \ud83d\ude25!"),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}},9093:function(n,r,e){n.exports=e.p+"static/media/movie-pic.a6cacd9a63a2acf7a0e9.jpg"}}]);
//# sourceMappingURL=422.ca7e4d83.chunk.js.map