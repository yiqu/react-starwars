"use strict";(self.webpackChunkstarwars=self.webpackChunkstarwars||[]).push([[799],{1977:function(n,e,r){r.d(e,{$l:function(){return d},BN:function(){return F},DY:function(){return c},J$:function(){return K},JN:function(){return y},LI:function(){return D},PM:function(){return h},W6:function(){return L},i_:function(){return l},ko:function(){return un},kw:function(){return V},mf:function(){return p},o8:function(){return v},qC:function(){return A},s6:function(){return tn},sj:function(){return W},u3:function(){return P},u_:function(){return H},w6:function(){return C},xD:function(){return on}});var t=r(74165),u=r(15861),i=r(70885),o=r(1413),a=r(72791),c=new WeakMap,f={},s=function(){},l=s(),d=Object,v=function(n){return n===l},p=function(n){return"function"==typeof n},h=function(n,e){return(0,o.Z)((0,o.Z)({},n),e)},w="undefined",g=typeof window!=w,b=typeof document!=w,y=function(n,e){var r=c.get(n);return[function(){return n.get(e)||f},function(t){var u=n.get(e);r[5](e,h(u,t),u||f)},r[6]]},E=new WeakMap,k=0,m=function n(e){var r,t,u=typeof e,i=e&&e.constructor,o=i==Date;if(d(e)!==e||o||i==RegExp)r=o?e.toJSON():"symbol"==u?e.toString():"string"==u?JSON.stringify(e):""+e;else{if(r=E.get(e))return r;if(r=++k+"~",E.set(e,r),i==Array){for(r="@",t=0;t<e.length;t++)r+=n(e[t])+",";E.set(e,r)}if(i==d){r="#";for(var a=d.keys(e).sort();!v(t=a.pop());)v(e[t])||(r+=t+":"+n(e[t])+",");E.set(e,r)}}return r},_=!0,T=g&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[s,s],O=(0,i.Z)(T,2),x=O[0],Z=O[1],R={isOnline:function(){return _},isVisible:function(){var n=b&&document.visibilityState;return v(n)||"hidden"!==n}},S={initFocus:function(n){return b&&document.addEventListener("visibilitychange",n),x("focus",n),function(){b&&document.removeEventListener("visibilitychange",n),Z("focus",n)}},initReconnect:function(n){var e=function(){_=!0,n()},r=function(){_=!1};return x("online",e),x("offline",r),function(){Z("online",e),Z("offline",r)}}},C=!a.useId,L=!g||"Deno"in window,V=function(n){return g&&typeof window.requestAnimationFrame!=w?window.requestAnimationFrame(n):setTimeout(n,1)},D=L?a.useEffect:a.useLayoutEffect,N="undefined"!==typeof navigator&&navigator.connection,I=!L&&N&&(["slow-2g","2g"].includes(N.effectiveType)||N.saveData),A=function(n){if(p(n))try{n=n()}catch(r){n=""}var e=n;return[n="string"==typeof n?n:(Array.isArray(n)?n.length:n)?m(n):"",e]},M=0,P=function(){return++M},W={__proto__:null,FOCUS_EVENT:0,RECONNECT_EVENT:1,MUTATE_EVENT:2};function F(){return J.apply(this,arguments)}function J(){return J=(0,u.Z)((0,t.Z)().mark((function n(){var e,r,o,a,f,s,d,w,g,b,E,k,m,_,T,O,x,Z,R,S,C,L=arguments;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(C=function(){return C=(0,u.Z)((0,t.Z)().mark((function n(e){var u,o,f,d,h,w,b,T,O,x,Z,R,S,C,L,V,D,N,I,M,W,F,J;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(u=A(e),o=(0,i.Z)(u,1),f=o[0]){n.next=3;break}return n.abrupt("return");case 3:if(d=y(a,f),h=(0,i.Z)(d,2),w=h[0],b=h[1],T=c.get(a),O=(0,i.Z)(T,3),x=O[0],Z=O[1],R=O[2],S=x[f],C=function(){return k&&(delete R[f],S&&S[0])?S[0](2).then((function(){return w().data})):w().data},!(r.length<3)){n.next=9;break}return n.abrupt("return",C());case 9:if(L=s,D=P(),Z[f]=[D,0],N=!v(E),I=w(),M=I.data,W=I._c,F=v(W)?M:W,N&&(E=p(E)?E(F):E,b({data:E,_c:F})),p(L))try{L=L(F)}catch(t){V=t}if(!L||!p(L.then)){n.next=30;break}return n.next=22,L.catch((function(n){V=n}));case 22:if(L=n.sent,D===Z[f][0]){n.next=29;break}if(!V){n.next=26;break}throw V;case 26:return n.abrupt("return",L);case 29:V&&N&&m(V)&&(g=!0,b({data:L=F,_c:l}));case 30:return g&&(V||(p(g)&&(L=g(L,F)),b({data:L,_c:l}))),Z[f][1]=P(),n.next=34,C();case 34:if(J=n.sent,b({_c:l}),!V){n.next=40;break}if(!_){n.next=39;break}throw V;case 39:return n.abrupt("return");case 40:return n.abrupt("return",g?J:L);case 41:case"end":return n.stop()}}),n)}))),C.apply(this,arguments)},S=function(n){return C.apply(this,arguments)},e=L.length,r=new Array(e),o=0;o<e;o++)r[o]=L[o];if(a=r[0],f=r[1],s=r[2],d=r[3],w=h({populateCache:!0,throwOnError:!0},"boolean"===typeof d?{revalidate:d}:d||{}),g=w.populateCache,b=w.rollbackOnError,E=w.optimisticData,k=!1!==w.revalidate,m=function(n){return"function"===typeof b?b(n):!1!==b},_=w.throwOnError,!p(f)){n.next=17;break}for(T=f,O=[],x=a.keys(),Z=x.next();!Z.done;Z=x.next())!(R=Z.value).startsWith("$inf$")&&T(a.get(R)._k)&&O.push(R);return n.abrupt("return",Promise.all(O.map(S)));case 17:return n.abrupt("return",S(f));case 18:case"end":return n.stop()}}),n)}))),J.apply(this,arguments)}var U=function(n,e){for(var r in n)n[r][0]&&n[r][0](e)},$=function(n,e){if(!c.has(n)){var r=h(S,e),t={},u=F.bind(l,n),i=s,o={},a=function(n,e){var r=o[n]||[];return o[n]=r,r.push(e),function(){return r.splice(r.indexOf(e),1)}},f=function(e,r,t){n.set(e,r);var u=o[e];if(u)for(var i=u.length;i--;)u[i](t,r)},d=function(){if(!c.has(n)&&(c.set(n,[t,{},{},{},u,f,a]),!L)){var e=r.initFocus(setTimeout.bind(l,U.bind(l,t,0))),o=r.initReconnect(setTimeout.bind(l,U.bind(l,t,1)));i=function(){e&&e(),o&&o(),c.delete(n)}}};return d(),[n,u,d,i]}return[n,c.get(n)[4]]},j=$(new Map),q=(0,i.Z)(j,2),B=q[0],Y=q[1],H=h({onLoadingSlow:s,onSuccess:s,onError:s,onErrorRetry:function(n,e,r,t,u){var i=r.errorRetryCount,o=u.retryCount,a=~~((Math.random()+.5)*(1<<(o<8?o:8)))*r.errorRetryInterval;!v(i)&&o>i||setTimeout(t,a,u)},onDiscarded:s,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:I?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:I?5e3:3e3,compare:function(n,e){return m(n)==m(e)},isPaused:function(){return!1},cache:B,mutate:Y,fallback:{}},R),z=function(n,e){var r=h(n,e);if(e){var t=n.use,u=n.fallback,i=e.use,o=e.fallback;t&&i&&(r.use=t.concat(i)),u&&o&&(r.fallback=h(u,o))}return r},G=(0,a.createContext)({}),K=function(n){var e=n.value,r=(0,a.useContext)(G),t=p(e),u=(0,a.useMemo)((function(){return t?e(r):e}),[t,r,e]),o=(0,a.useMemo)((function(){return t?u:z(r,u)}),[t,r,u]),c=u&&u.provider,f=(0,a.useState)((function(){return c?$(c(o.cache||B),u):l})),s=(0,i.Z)(f,1)[0];return s&&(o.cache=s[0],o.mutate=s[1]),D((function(){if(s)return s[2]&&s[2](),s[3]}),[]),(0,a.createElement)(G.Provider,h(n,{value:o}))},Q=g&&window.__SWR_DEVTOOLS_USE__,X=Q?window.__SWR_DEVTOOLS_USE__:[],nn=function(n){return p(n[1])?[n[0],n[1],n[2]||{}]:[n[0],null,(null===n[1]?n[2]:n[1])||{}]},en=function(){return h(H,(0,a.useContext)(G))},rn=X.concat((function(n){return function(e,r,t){var u=r&&function(){var n=A(e)[0],t=c.get(B),u=(0,i.Z)(t,4),o=u[3],a=o[n];return a?(delete o[n],a):r.apply(void 0,arguments)};return n(e,u,t)}})),tn=function(n){return function(){for(var e=en(),r=arguments.length,t=new Array(r),u=0;u<r;u++)t[u]=arguments[u];for(var o=nn(t),a=(0,i.Z)(o,3),c=a[0],f=a[1],s=a[2],l=z(e,s),d=n,v=l.use,p=(v||[]).concat(rn),h=p.length;h--;)d=p[h](d);return d(c,f||l.fetcher||null,l)}},un=function(n,e,r){var t=e[n]||(e[n]=[]);return t.push(r),function(){var n=t.indexOf(r);n>=0&&(t[n]=t[t.length-1],t.pop())}},on=function(n,e){return function(){for(var r=arguments.length,t=new Array(r),u=0;u<r;u++)t[u]=arguments[u];var a=nn(t),c=(0,i.Z)(a,3),f=c[0],s=c[1],l=c[2],d=(l.use||[]).concat(e);return n(f,s,(0,o.Z)((0,o.Z)({},l),{},{use:d}))}};Q&&(window.__SWR_DEVTOOLS_REACT__=a)},799:function(n,e,r){r.d(e,{ZP:function(){return l}});var t=r(74165),u=r(15861),i=r(1413),o=r(70885),a=r(72791),c=r(37248),f=r(1977),s={dedupe:!0},l=(f.$l.defineProperty(f.J$,"defaultValue",{value:f.u_}),(0,f.s6)((function(n,e,r){var l=r.cache,d=r.compare,v=r.suspense,p=r.fallbackData,h=r.revalidateOnMount,w=r.refreshInterval,g=r.refreshWhenHidden,b=r.refreshWhenOffline,y=r.keepPreviousData,E=f.DY.get(l),k=(0,o.Z)(E,3),m=k[0],_=k[1],T=k[2],O=(0,f.qC)(n),x=(0,o.Z)(O,2),Z=x[0],R=x[1],S=(0,a.useRef)(!1),C=(0,a.useRef)(!1),L=(0,a.useRef)(Z),V=(0,a.useRef)(e),D=(0,a.useRef)(r),N=function(){return D.current},I=function(){return N().isVisible()&&N().isOnline()},A=(0,f.JN)(l,Z),M=(0,o.Z)(A,3),P=M[0],W=M[1],F=M[2],J=(0,a.useRef)({}).current,U=(0,f.o8)(p)?r.fallback[Z]:p,$=function(n,e){var r=!0;for(var t in J){var u=t;d(e[u],n[u])||"data"===u&&(0,f.o8)(n[u])&&d(e[u],K)||(r=!1)}return r},j=(0,a.useMemo)((function(){var n=!!Z&&!!e&&((0,f.o8)(h)?!N().isPaused()&&!v:h),r=function(){var e=P(),r=(0,f.PM)(e);return delete r._k,n?(0,i.Z)({isValidating:!0,isLoading:!0},r):r},t=r();return function(){var n=r();return $(n,t)?t:t=n}}),[l,Z]),q=(0,c.useSyncExternalStore)((0,a.useCallback)((function(n){return F(Z,(function(e,r){$(e,r)||n()}))}),[l,Z]),j,j),B=!S.current,Y=q.data,H=(0,f.o8)(Y)?U:Y,z=q.error,G=(0,a.useRef)(H),K=y?(0,f.o8)(Y)?G.current:Y:H,Q=B&&!(0,f.o8)(h)?h:!N().isPaused()&&(v?!(0,f.o8)(H)&&r.revalidateIfStale:(0,f.o8)(H)||r.revalidateIfStale),X=!!(Z&&e&&B&&Q),nn=(0,f.o8)(q.isValidating)?X:q.isValidating,en=(0,f.o8)(q.isLoading)?X:q.isLoading,rn=(0,a.useCallback)(function(){var n=(0,u.Z)((0,t.Z)().mark((function n(e){var u,i,a,c,s,l,v,p,h,w,g,b,y,E,k,m;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(u=V.current,Z&&u&&!C.current&&!N().isPaused()){n.next=3;break}return n.abrupt("return",!1);case 3:return c=!0,s=e||{},l=!T[Z]||!s.dedupe,v=function(){return f.w6?!C.current&&Z===L.current&&S.current:Z===L.current},p={isValidating:!1,isLoading:!1},h=function(){W(p)},w=function(){var n=T[Z];n&&n[1]===a&&delete T[Z]},g={isValidating:!0},(0,f.o8)(P().data)&&(g.isLoading=!0),n.prev=12,l&&(W(g),r.loadingTimeout&&(0,f.o8)(P().data)&&setTimeout((function(){c&&v()&&N().onLoadingSlow(Z,r)}),r.loadingTimeout),T[Z]=[u(R),(0,f.u3)()]),b=(0,o.Z)(T[Z],2),i=b[0],a=b[1],n.next=19,i;case 19:if(i=n.sent,l&&setTimeout(w,r.dedupingInterval),T[Z]&&T[Z][1]===a){n.next=24;break}return l&&v()&&N().onDiscarded(Z),n.abrupt("return",!1);case 24:if(p.error=f.i_,y=_[Z],(0,f.o8)(y)||!(a<=y[0]||a<=y[1]||0===y[1])){n.next=30;break}return h(),l&&v()&&N().onDiscarded(Z),n.abrupt("return",!1);case 30:E=P().data,p.data=d(E,i)?E:i,l&&v()&&N().onSuccess(i,Z,r),n.next=41;break;case 35:n.prev=35,n.t0=n.catch(12),w(),k=N(),m=k.shouldRetryOnError,k.isPaused()||(p.error=n.t0,l&&v()&&(k.onError(n.t0,Z,k),(!0===m||(0,f.mf)(m)&&m(n.t0))&&I()&&k.onErrorRetry(n.t0,Z,k,rn,{retryCount:(s.retryCount||0)+1,dedupe:!0})));case 41:return c=!1,h(),n.abrupt("return",!0);case 44:case"end":return n.stop()}}),n,null,[[12,35]])})));return function(e){return n.apply(this,arguments)}}(),[Z,l]),tn=(0,a.useCallback)((function(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];return f.BN.apply(void 0,[l,L.current].concat(e))}),[]);if((0,f.LI)((function(){V.current=e,D.current=r,(0,f.o8)(Y)||(G.current=Y)})),(0,f.LI)((function(){if(Z){var n=rn.bind(f.i_,s),e=0,r=(0,f.ko)(Z,m,(function(r){if(r==f.sj.FOCUS_EVENT){var t=Date.now();N().revalidateOnFocus&&t>e&&I()&&(e=t+N().focusThrottleInterval,n())}else if(r==f.sj.RECONNECT_EVENT)N().revalidateOnReconnect&&I()&&n();else if(r==f.sj.MUTATE_EVENT)return rn()}));return C.current=!1,L.current=Z,S.current=!0,W({_k:R}),Q&&((0,f.o8)(H)||f.W6?n():(0,f.kw)(n)),function(){C.current=!0,r()}}}),[Z]),(0,f.LI)((function(){var n;function e(){var e=(0,f.mf)(w)?w(H):w;e&&-1!==n&&(n=setTimeout(r,e))}function r(){P().error||!g&&!N().isVisible()||!b&&!N().isOnline()?e():rn(s).then(e)}return e(),function(){n&&(clearTimeout(n),n=-1)}}),[w,g,b,Z]),(0,a.useDebugValue)(K),v&&(0,f.o8)(H)&&Z){if(!f.w6&&f.W6)throw new Error("Fallback data is required when using suspense in SSR.");throw V.current=e,D.current=r,C.current=!1,(0,f.o8)(z)?rn(s):z}return{mutate:tn,get data(){return J.data=!0,K},get error(){return J.error=!0,z},get isValidating(){return J.isValidating=!0,nn},get isLoading(){return J.isLoading=!0,en}}})))}}]);
//# sourceMappingURL=799.81dc8e53.chunk.js.map