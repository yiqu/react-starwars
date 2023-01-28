"use strict";(self.webpackChunkstarwars=self.webpackChunkstarwars||[]).push([[446],{3446:function(e,n,r){r.r(n),r.d(n,{default:function(){return $}});var t=r(885),i=r(2791),o=r(4162),a=r(5814),s=r(3811),l=r(6227),c=r(1413),u=r(799),d=r(6884),f=r(1070),v=r.n(f),p=r(5885),x=r(773),h=function(e){var n=e.userId,r=e.params,o=void 0===r?{}:r,a=(0,i.useState)(),s=(0,t.Z)(a,2),l=s[0],f=s[1],h=(0,i.useState)({}),m=(0,t.Z)(h,2),Z=m[0],j=m[1];(0,d.Z)((function(){var e=v()(x.K,"/swdb/:user/favorites.json",(0,c.Z)({user:"yqu"},o));f(e)}),[n,o]);var g=(0,u.ZP)((function(){return l||null}),(function(e){return(0,p.k)(e)}),{revalidateIfStale:!0,revalidateOnFocus:!1,revalidateOnReconnect:!1}),y=g.data,b=(g.isValidating,g.error),C=g.isLoading;return(0,i.useEffect)((function(){var e={};y&&(Object.keys(null!==y&&void 0!==y?y:{}).forEach((function(n){e[y[n].episodeId]=(0,c.Z)({fireId:n},y[n])})),j(e))}),[y]),{data:Z,loading:C,error:b}},m=function(e){var n=e.params,r=void 0===n?{refetch:0}:n,o=(0,i.useState)(),a=(0,t.Z)(o,2),s=a[0],l=a[1],f=(0,i.useRef)(new AbortController);(0,d.Z)((function(){var e=v()(x.H,"/films",(0,c.Z)({},r));f.current.abort(),f.current=new AbortController,l(e)}),[r]);var h=(0,u.ZP)((function(){return s||null}),(function(e){return(0,p.$)(e,f.current)}),{revalidateOnFocus:!1,revalidateIfStale:!0,keepPreviousData:!0,shouldRetryOnError:!0}),m=h.data,Z=h.isValidating,j=h.error,g=h.isLoading;return{allFilms:null===m||void 0===m?void 0:m.result,allFilmsLoading:g,allFilmsValidating:Z,allFilmsError:j}},Z=r(7150),j=r(7289),g=r(8928),y=r(6875),b=r(5194),C=r(199),w=r(7205),F=r(4565),E=r(1087),k=r(7237),S=r(6976),D=r(2426),L=r.n(D),R=r(2546),A=function(e){var n="",r=null!==e&&void 0!==e&&e.lastUpdated?L()(null===e||void 0===e?void 0:e.lastUpdated).fromNow():"";return n=null!==e&&void 0!==e&&e.isCurrentFavorite?"Remove from favorites":"Add to favorites",null!==e&&void 0!==e&&e.lastUpdated&&(n=n+". "+(e.isCurrentFavorite?"Favorited ":"Unfavorited ")+r),n},I=r(1155),_=r(2795),P=r(184);function T(e){var n,r=e.film,a=e.uid,l=e.userId,c=e.allFavoritesLoading,u=e.reloadMovies,d=(0,i.useState)(!1),f=(0,t.Z)(d,2),p=f[0],h=f[1],m=(0,i.useState)(!1),Z=(0,t.Z)(m,2),j=Z[0],D=Z[1];(0,i.useEffect)((function(){c||D(!1)}),[c]);return(0,P.jsxs)(g.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"space-between"},elevation:2,children:[(0,P.jsxs)("div",{children:[(0,P.jsx)(C.Z,{component:"img",alt:"poster",height:"440",image:"".concat("","/assets/poster-img/").concat(r.episode_id,".png"),sx:{backgroundColor:"#000",objectFit:"contain"}}),(0,P.jsxs)(b.Z,{children:[(0,P.jsxs)(o.Z,{direction:{lg:"column",xl:"row"},justifyContent:{xl:"space-between",lg:"flex-start"},marginBottom:{lg:"10px",xl:"0px"},children:[(0,P.jsx)(F.Z,{gutterBottom:!0,variant:"h5",component:E.rU,to:"./".concat(a),sx:{fontFamily:"Poppins",fontWeight:"500"},children:r.title}),(0,P.jsxs)(F.Z,{variant:"h5",color:"text.secondary",sx:{fontWeight:"300"},children:["EP ",r.episode_id]})]}),(0,P.jsxs)(o.Z,{spacing:1,children:[(0,P.jsxs)(F.Z,{variant:"body2",color:"text.secondary",children:["Released: ",(0,P.jsx)(I.Z,{date:r.release_date,format:"MMM Do YYYY"})]}),(0,P.jsxs)(F.Z,{variant:"body2",color:"text.secondary",children:["Directed by: ",r.director]}),(0,P.jsxs)(F.Z,{variant:"body2",color:"text.secondary",children:["Produced by: ",r.producer]}),(0,P.jsx)(F.Z,{variant:"body2",color:"text.primary",children:r.opening_crawl})]})]})]}),(0,P.jsxs)(y.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,P.jsx)("div",{children:(0,P.jsx)(w.Z,{size:"small",component:E.rU,to:"./".concat(a),children:"See More"})}),(0,P.jsx)("div",{children:(0,P.jsx)(s.Z,{"aria-label":"favorite",onClick:function(){var e,n,t=r.url,i=t.split("/")[t.split("/").length-1],o=v()(x.K,"swdb/:user/favorites".concat(null!==(e=r.favorite)&&void 0!==e&&e.fireId?"/"+(null===(n=r.favorite)||void 0===n?void 0:n.fireId):"",".json"),{user:l}),a={filmUrl:t,filmId:i,lastUpdated:(new Date).getTime(),episodeId:r.episode_id,isCurrentFavorite:!0};h(!0),D(!0),r.favorite?(a.isCurrentFavorite=!r.favorite.isCurrentFavorite,a.fireId=r.favorite.fireId,(0,_.R3)({url:o,body:a,onSuccess:function(e){u()},onFailure:function(e){},onFinally:function(){h(!1)}})):(0,_.e$)({url:o,body:a,onSuccess:function(e){u()},onFailure:function(e){},onFinally:function(){h(!1)}})},title:A(r.favorite),disabled:!(!p&&!j),children:p||j?(0,P.jsx)(S.Z,{}):(0,P.jsx)(k.Z,{color:null!==(n=r.favorite)&&void 0!==n&&n.isCurrentFavorite?"error":"disabled"})})})]})]})}var M=r(3808),N=r(4596),U=r(1372),O=r(9841),K=r(824),z=r(6015),B="LoadingBackdrop_loadingbackdrop__fzQLF";var V,Y=function(e){var n=e.isLoading,r=e.children;return(0,P.jsx)(z.Z,{className:n?"".concat(B):"",width:"100%",children:r})},H=r(3607),q=r(758);!function(e){e.ERR_CANCELED="ERR_CANCELED"}(V||(V={}));var $=function(){var e=(0,i.useContext)(H.Z).showSnackbar,n=(0,E.lr)(),r=(0,t.Z)(n,2),c=r[0],u=r[1],f=c.get("moviePageDisplayMode"),v=(0,N.Z)().isMobile,p=(0,i.useState)(f),x=(0,t.Z)(p,2),g=x[0],y=(x[1],(0,i.useState)(0)),b=(0,t.Z)(y,2),C=b[0],w=b[1],F=(0,i.useState)({}),k=(0,t.Z)(F,2),S=k[0],D=k[1],L=(0,i.useState)([]),A=(0,t.Z)(L,2),I=A[0],_=A[1],z=h({userId:"yqu",params:{fetchTime:C}}),B=z.data,$=(z.error,z.loading),W=m({params:S}),Q=W.allFilms,J=W.allFilmsError,X=W.allFilmsLoading,ee=W.allFilmsValidating;(0,d.Z)((function(){_(function(e,n){return(0,R.ZP)(null!==e&&void 0!==e?e:[],(function(e){e.sort((function(e,n){return e.properties.episode_id>n.properties.episode_id?1:-1})),e.forEach((function(e){e.properties.favorite=n[e.properties.episode_id]}))}))}(Q,B))}),[Q,B]),(0,i.useEffect)((function(){J&&J.code!==V.ERR_CANCELED&&e("error",J)}),[J,e]),(0,i.useEffect)((function(){return function(){e("info",void 0)}}),[e]);var ne=function(){w((new Date).getTime())},re=(0,i.useCallback)((function(e){D(e?{title:e}:{})}),[]);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(M.Z,{toolbarProps:{position:"sticky",sx:{top:v?"56px":"64px"}},children:(0,P.jsxs)(l.Z,{container:!0,xs:12,flexDirection:{xs:"row",sm:"row"},justifyContent:"space-between",alignItems:"center",children:[(0,P.jsx)(l.Z,{xs:10,sm:4,children:(0,P.jsx)(o.Z,{direction:"row",justifyContent:"start",alignItems:"center",children:(0,P.jsxs)(l.Z,{container:!0,xs:12,children:[(0,P.jsx)(l.Z,{xs:8,children:(0,P.jsx)(j.Z,{filterChange:re})}),(0,P.jsx)(l.Z,{xs:2,sx:{display:"flex"},justifyContent:"center",alignItems:"center",children:ee&&(0,P.jsx)(Z.Z,{size:20})})]})})}),(0,P.jsx)(l.Z,{xs:2,sm:8,children:(0,P.jsx)(o.Z,{direction:"row",justifyContent:"flex-end",alignItems:"center",children:(0,P.jsx)(a.Z,{title:"Switch to ".concat(G(g)),children:(0,P.jsx)(s.Z,{onClick:function(){var e={moviePageDisplayMode:G(g)};u(e)},children:g===U.K.CARD?(0,P.jsx)(O.Z,{}):(0,P.jsx)(K.Z,{})})})})})]})}),(0,P.jsx)(Y,{isLoading:X,children:J?(0,P.jsx)(q.Z,{reason:"Failed loading all films.",debug:J}):(0,P.jsx)(o.Z,{direction:"column",p:2,width:"100%",children:(0,P.jsx)(l.Z,{container:!0,disableEqualOverflow:!0,rowSpacing:4,children:null===I||void 0===I?void 0:I.map((function(e){return(0,P.jsx)(l.Z,{xs:12,sm:4,smOffset:4,children:(0,P.jsx)(T,{userId:"yqu",reloadMovies:ne,film:e.properties,uid:e.uid,allFavoritesLoading:$})},e.properties.episode_id)}))})})})]})},G=function(e){return e&&e===U.K.CARD?U.K.TABLE:U.K.CARD}},1155:function(e,n,r){var t=r(5814),i=r(6431),o=r.n(i),a=r(2426),s=r.n(a),l=r(184);n.Z=function(e){var n=e.date,r=void 0===n?0:n,i=e.fromNow,a=void 0===i||i,c=e.format,u=void 0===c?"MM/DD/YY HH:mm":c;return(0,l.jsx)(t.Z,{title:r?s()(r).format(u):"No date found",children:(0,l.jsx)("span",{children:r?(0,l.jsx)(o(),{date:r,fromNow:a}):(0,l.jsx)(l.Fragment,{children:"N/A"})})})}},5885:function(e,n,r){r.d(n,{k:function(){return l},$:function(){return c}});var t=r(4165),i=r(5861),o=r(4569),a=r.n(o);function s(e){return new Promise((function(n,r){setTimeout((function(){n()}),e)}))}var l=function(){var e=(0,i.Z)((0,t.Z)().mark((function e(n){var r,i,o=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=o.length>1&&void 0!==o[1]?o[1]:0)){e.next=4;break}return e.next=4,s(r);case 4:return e.prev=4,e.next=7,a().get(n,{headers:{"Content-Type":"application/json"},responseType:"json"});case 7:if(200!==(i=e.sent).status){e.next=10;break}return e.abrupt("return",i.data);case 10:return e.abrupt("return",Promise.reject(i));case 13:throw e.prev=13,e.t0=e.catch(4),console.error("App fetcher GET error:",e.t0),e.t0;case 17:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(n){return e.apply(this,arguments)}}(),c=function(){var e=(0,i.Z)((0,t.Z)().mark((function e(n,r){var i,o,l=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i=l.length>2&&void 0!==l[2]?l[2]:0)){e.next=4;break}return e.next=4,s(i);case 4:return e.prev=4,e.next=7,a().get(n,{headers:{"Content-Type":"application/json"},responseType:"json",signal:r.signal});case 7:if(200!==(o=e.sent).status){e.next=10;break}return e.abrupt("return",o.data);case 10:return e.abrupt("return",Promise.reject(o));case 13:throw e.prev=13,e.t0=e.catch(4),"ERR_CANCELED"!==e.t0.code&&console.error("App fetcher GET error:",e.t0),e.t0;case 17:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(n,r){return e.apply(this,arguments)}}()},1372:function(e,n,r){var t;r.d(n,{K:function(){return t}}),function(e){e.TABLE="table",e.CARD="card"}(t||(t={}))},2795:function(e,n,r){r.d(n,{R3:function(){return a},e$:function(){return o}});var t=r(4569),i=r.n(t),o=function(e){var n=e.url,r=e.body,t=e.onSuccess,o=e.onFailure,a=e.onFinally;e.abortController;i().post(n,r).then((function(e){t&&t(e.data)})).catch((function(e){console.log("App error POST: ",e),o&&o(e)})).finally((function(){a&&a()}))},a=function(e){var n=e.url,r=e.body,t=e.onSuccess,o=e.onFailure,a=e.onFinally;e.abortController;i().put(n,r).then((function(e){t&&t(e.data)})).catch((function(e){console.log("App error PUT: ",e),o&&o(e)})).finally((function(){a&&a()}))}},7237:function(e,n,r){var t=r(4836);n.Z=void 0;var i=t(r(5649)),o=r(184),a=(0,i.default)((0,o.jsx)("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");n.Z=a},6976:function(e,n,r){var t=r(4836);n.Z=void 0;var i=t(r(5649)),o=r(184),a=(0,i.default)((0,o.jsx)("path",{d:"m18 22-.01-6L14 12l3.99-4.01L18 2H6v6l4 4-4 3.99V22h12zM8 7.5V4h8v3.5l-4 4-4-4z"}),"HourglassBottom");n.Z=a}}]);
//# sourceMappingURL=446.90245846.chunk.js.map