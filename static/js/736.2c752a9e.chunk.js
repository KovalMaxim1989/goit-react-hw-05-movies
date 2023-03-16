"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{9736:function(n,r,e){e.r(r),e.d(r,{default:function(){return h}});var t,a,o=e(9439),i=e(2791),c=e(7689),s=e(4390),u=e(168),p=e(6444),l=p.ZP.ul(t||(t=(0,u.Z)(["\n  padding-bottom: 20px;\n  margin-top: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-evenly;\n  gap: 15px;\n  border-bottom: 1px solid black;\n"]))),f=p.ZP.li(a||(a=(0,u.Z)(["\n  &:hover,\n  &:focus {\n    cursor: pointer;\n    box-shadow: 2px 2px 6px 2px rgba(254, 60, 1, 0.9);\n    transform: scale(1.05);\n  }\n"]))),d=e(9926),v=e(184);var h=function(){var n=(0,i.useState)([]),r=(0,o.Z)(n,2),e=r[0],t=r[1],a=(0,c.UO)().movieId;return(0,i.useEffect)((function(){var n=new AbortController;return s.M1(a,n).then(t),function(){n.abort()}}),[a]),(0,v.jsx)("div",{children:(0,v.jsx)(l,{children:e.map((function(n){return(0,v.jsx)(f,{children:(0,v.jsxs)("a",{href:"https://www.google.com/search?q="+n.original_name,rel:"noreferrer noopener",target:"_blank",children:[(0,v.jsx)("img",{width:250,src:n.profile_path?"https://image.tmdb.org/t/p/w500"+n.profile_path:d,alt:n.original_name}),(0,v.jsx)("p",{children:n.original_name})]})},n.cast_id)}))})})}},4390:function(n,r,e){e.d(r,{Df:function(){return l},M1:function(){return h},MI:function(){return d},Wf:function(){return u},tx:function(){return m}});var t=e(5861),a=e(4687),o=e.n(a),i=e(1243),c=e(9014),s=i.Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"d03712107dcdd723f1173c5ee2c0d8c1"}});function u(n,r){return p.apply(this,arguments)}function p(){return(p=(0,t.Z)(o().mark((function n(r,e){var t,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.get("search/movie",{params:{query:r,signal:e.signal}});case 3:return a=n.sent,n.abrupt("return",null===a||void 0===a||null===(t=a.data)||void 0===t?void 0:t.results);case 7:n.prev=7,n.t0=n.catch(0),c.ZP.error("Something went wrong \ud83d\ude25!"),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function l(){return f.apply(this,arguments)}function f(){return(f=(0,t.Z)(o().mark((function n(){var r,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.get("trending/movie/day",{params:{language:"en-US"}});case 3:return e=n.sent,n.abrupt("return",null===e||void 0===e||null===(r=e.data)||void 0===r?void 0:r.results);case 7:n.prev=7,n.t0=n.catch(0),c.ZP.error("Something went wrong \ud83d\ude25!"),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function d(n,r){return v.apply(this,arguments)}function v(){return(v=(0,t.Z)(o().mark((function n(r,e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.get("movie/".concat(r),{params:{signal:e.signal}});case 3:return t=n.sent,n.abrupt("return",null===t||void 0===t?void 0:t.data);case 7:n.prev=7,n.t0=n.catch(0),c.ZP.error("Something went wrong \ud83d\ude25!"),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function h(n,r){return g.apply(this,arguments)}function g(){return(g=(0,t.Z)(o().mark((function n(r,e){var t,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.get("movie/".concat(r,"/credits"),{params:{signal:e.signal}});case 3:return a=n.sent,n.abrupt("return",null===a||void 0===a||null===(t=a.data)||void 0===t?void 0:t.cast);case 7:n.prev=7,n.t0=n.catch(0),c.ZP.error("Something went wrong \ud83d\ude25!"),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function m(n,r){return w.apply(this,arguments)}function w(){return(w=(0,t.Z)(o().mark((function n(r,e){var t,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.get("movie/".concat(r,"/reviews"),{params:{signal:e.signal}});case 3:return a=n.sent,n.abrupt("return",null===a||void 0===a||null===(t=a.data)||void 0===t?void 0:t.results);case 7:n.prev=7,n.t0=n.catch(0),c.ZP.error("Something went wrong \ud83d\ude25!"),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}},9926:function(n,r,e){n.exports=e.p+"static/media/anon.ffe896656138b2ef1115.jpg"}}]);
//# sourceMappingURL=736.2c752a9e.chunk.js.map