"use strict";(self.webpackChunkstarwars=self.webpackChunkstarwars||[]).push([[516],{9516:function(t,e,n){n.r(e),n.d(e,{default:function(){return F}});var r,a=n(2791),u=n(7689),i=n(1413),o=n(885),s=n(799),c=n(6884),l=n(1070),f=n.n(l),p=n(5885),d=n(773),v=function(t){var e=t.params,n=void 0===e?{refetch:0}:e,r=(0,a.useState)(),u=(0,o.Z)(r,2),l=u[0],v=u[1],m=(0,a.useRef)(new AbortController);(0,c.Z)((function(){var t=f()(d.H,"/films",(0,i.Z)({},n));m.current.abort(),m.current=new AbortController,v(t)}),[n]);var h=(0,s.ZP)((function(){return l||null}),(function(t){return(0,p.$)(t,m.current)}),{revalidateOnFocus:!1,revalidateIfStale:!0,keepPreviousData:!0,shouldRetryOnError:!0}),E=h.data,g=h.isValidating,C=h.error,w=h.isLoading;return{allFilms:null===E||void 0===E?void 0:E.result,allFilmsLoading:w,allFilmsValidating:g,allFilmsError:C}},m=n(4317),h=n(1917),E=n(1352),g=n(9422).rT.actions,C=g.fetchFailure,w=g.fetchPayloadSuccess,b=g.setValidating,T=g.setLoading,k=(g.setUrl,g.setParams2);(0,E.PH)("setApiParams",(function(t){return{payload:{params:t}}}));!function(t){t.ERR_CANCELED="ERR_CANCELED"}(r||(r={}));var x=n(184);function F(){var t=(0,m.T)(),e=((0,m.C)(h.e),v({params:void 0})),n=e.allFilms,i=e.allFilmsError,o=e.allFilmsLoading,s=e.allFilmsValidating;return(0,a.useEffect)((function(){t(w(null!==n&&void 0!==n?n:[]))}),[n,t]),(0,a.useEffect)((function(){t(T(o))}),[o,t]),(0,a.useEffect)((function(){t(b(s))}),[s,t]),(0,a.useEffect)((function(){i&&i.code!==r.ERR_CANCELED&&t(C(i))}),[i,t]),(0,a.useEffect)((function(){t(k({fetchTime:(new Date).getTime()}))}),[t]),(0,x.jsx)(u.j3,{})}},1917:function(t,e,n){n.d(e,{Qi:function(){return s},e:function(){return c},td:function(){return i},xU:function(){return o},zh:function(){return l}});var r=n(9422),a=function(t){return t.allFilms},u=r.VL.getSelectors((function(t){return t.allFilms})),i=u.selectAll,o=(u.selectById,u.selectEntities,u.selectIds,u.selectTotal,function(t){return a(t).isLoading}),s=function(t){return a(t).isValidating},c=function(t){return a(t).apiParams},l=function(t){return a(t).errMsg}},5885:function(t,e,n){n.d(e,{k:function(){return s},$:function(){return c}});var r=n(4165),a=n(5861),u=n(4569),i=n.n(u);function o(t){return new Promise((function(e,n){setTimeout((function(){e()}),t)}))}var s=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n,a,u=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n=u.length>1&&void 0!==u[1]?u[1]:0)){t.next=4;break}return t.next=4,o(n);case 4:return t.prev=4,t.next=7,i().get(e,{headers:{"Content-Type":"application/json"},responseType:"json"});case 7:if(200!==(a=t.sent).status){t.next=10;break}return t.abrupt("return",a.data);case 10:return t.abrupt("return",Promise.reject(a));case 13:throw t.prev=13,t.t0=t.catch(4),console.error("App fetcher GET error:",t.t0),t.t0;case 17:case"end":return t.stop()}}),t,null,[[4,13]])})));return function(e){return t.apply(this,arguments)}}(),c=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e,n){var a,u,s=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(a=s.length>2&&void 0!==s[2]?s[2]:0)){t.next=4;break}return t.next=4,o(a);case 4:return t.prev=4,t.next=7,i().get(e,{headers:{"Content-Type":"application/json"},responseType:"json",signal:n.signal});case 7:if(200!==(u=t.sent).status){t.next=10;break}return t.abrupt("return",u.data);case 10:return t.abrupt("return",Promise.reject(u));case 13:throw t.prev=13,t.t0=t.catch(4),"ERR_CANCELED"!==t.t0.code&&console.error("App fetcher GET error:",t.t0),t.t0;case 17:case"end":return t.stop()}}),t,null,[[4,13]])})));return function(e,n){return t.apply(this,arguments)}}()},4317:function(t,e,n){n.d(e,{C:function(){return u},T:function(){return a}});var r=n(9434),a=r.I0,u=r.v9}}]);
//# sourceMappingURL=516.4cda3619.chunk.js.map