(self.webpackChunkstarwars=self.webpackChunkstarwars||[]).push([[340],{758:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(6015),i=t(4162),o=t(4565),a=t(184);function s(e){var n=e.reason,t=e.debug;return(0,a.jsx)(r.Z,{marginY:5,children:(0,a.jsxs)(i.Z,{direction:"column",spacing:5,justifyContent:"center",alignItems:"center",children:[(0,a.jsx)(o.Z,{variant:"h5",sx:{textTransform:"uppercase"},children:"An error has occurred!"}),(0,a.jsxs)(i.Z,{direction:"column",spacing:1,justifyContent:"center",alignItems:"center",children:[(0,a.jsx)(o.Z,{variant:"body1",fontWeight:700,children:"REASON"}),(0,a.jsx)(o.Z,{variant:"body2",children:n})]}),(0,a.jsxs)(i.Z,{direction:"column",spacing:1,justifyContent:"center",alignItems:"center",children:[(0,a.jsx)(o.Z,{variant:"body1",fontWeight:700,children:"DEBUG"}),(0,a.jsx)(o.Z,{variant:"body2",component:"div",children:(0,a.jsx)("pre",{children:(0,a.jsx)("code",{style:{display:"flex",textAlign:"center"},children:JSON.stringify(t)})})})]})]})})}},6050:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return me}});var r=t(885),i=t(2791),o=t(4162),a=t(5814),s=t(3811),c=t(6227),l=t(1413),u=t(799),d=t(6884),f=t(1070),v=t.n(f),p=t(5885),h=t(773),x=function(e){var n=e.userId,t=e.params,o=void 0===t?{}:t,a=(0,i.useState)(),s=(0,r.Z)(a,2),c=s[0],f=s[1],x=(0,i.useState)({}),m=(0,r.Z)(x,2),Z=m[0],j=m[1];(0,d.Z)((function(){var e=v()(h.K,"/swdb/:user/favorites.json",(0,l.Z)({user:"yqu"},o));f(e)}),[n,o]);var g=(0,u.ZP)((function(){return c||null}),(function(e){return(0,p.k)(e)}),{revalidateIfStale:!0,revalidateOnFocus:!1,revalidateOnReconnect:!1}),b=g.data,y=(g.isValidating,g.error),C=g.isLoading;return(0,i.useEffect)((function(){var e={};b&&(Object.keys(null!==b&&void 0!==b?b:{}).forEach((function(n){e[b[n].episodeId]=(0,l.Z)({fireId:n},b[n])})),j(e))}),[b]),{data:Z,loading:C,error:y}},m=function(e){var n=e.params,t=void 0===n?{refetch:0}:n,o=(0,i.useState)(),a=(0,r.Z)(o,2),s=a[0],c=a[1],f=(0,i.useRef)(new AbortController);(0,d.Z)((function(){var e=v()(h.H,"/films",(0,l.Z)({},t));f.current.abort(),f.current=new AbortController,c(e)}),[t]);var x=(0,u.ZP)((function(){return s||null}),(function(e){return(0,p.$)(e,f.current)}),{revalidateOnFocus:!1,revalidateIfStale:!0,keepPreviousData:!0,shouldRetryOnError:!0}),m=x.data,Z=x.isValidating,j=x.error,g=x.isLoading;return{allFilms:null===m||void 0===m?void 0:m.result,allFilmsLoading:g,allFilmsValidating:Z,allFilmsError:j}},Z=t(5290),j=t(9911),g=t(4942),b=t(3366),y=t(7462),C=t(8182),w=t(4419),E=t(9853),F=t(4565),S=t(1211),k=t(529),L=t(277),P=t(5878),A=t(1217);function I(e){return(0,A.Z)("MuiInputAdornment",e)}var R,D=(0,P.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),M=t(5513),T=t(184),z=["children","className","component","disablePointerEvents","disableTypography","position","variant"],N=(0,L.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["position".concat((0,E.Z)(t.position))],!0===t.disablePointerEvents&&n.disablePointerEvents,n[t.variant]]}})((function(e){var n=e.theme,t=e.ownerState;return(0,y.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active},"filled"===t.variant&&(0,g.Z)({},"&.".concat(D.positionStart,"&:not(.").concat(D.hiddenLabel,")"),{marginTop:16}),"start"===t.position&&{marginRight:8},"end"===t.position&&{marginLeft:8},!0===t.disablePointerEvents&&{pointerEvents:"none"})})),_=i.forwardRef((function(e,n){var t=(0,M.Z)({props:e,name:"MuiInputAdornment"}),r=t.children,o=t.className,a=t.component,s=void 0===a?"div":a,c=t.disablePointerEvents,l=void 0!==c&&c,u=t.disableTypography,d=void 0!==u&&u,f=t.position,v=t.variant,p=(0,b.Z)(t,z),h=(0,k.Z)()||{},x=v;v&&h.variant,h&&!x&&(x=h.variant);var m=(0,y.Z)({},t,{hiddenLabel:h.hiddenLabel,size:h.size,disablePointerEvents:l,position:f,variant:x}),Z=function(e){var n=e.classes,t=e.disablePointerEvents,r=e.hiddenLabel,i=e.position,o=e.size,a=e.variant,s={root:["root",t&&"disablePointerEvents",i&&"position".concat((0,E.Z)(i)),a,r&&"hiddenLabel",o&&"size".concat((0,E.Z)(o))]};return(0,w.Z)(s,I,n)}(m);return(0,T.jsx)(S.Z.Provider,{value:null,children:(0,T.jsx)(N,(0,y.Z)({as:s,ownerState:m,className:(0,C.Z)(Z.root,o),ref:n},p,{children:"string"!==typeof r||d?(0,T.jsxs)(i.Fragment,{children:["start"===f?R||(R=(0,T.jsx)("span",{className:"notranslate",children:"\u200b"})):null,r]}):(0,T.jsx)(F.Z,{color:"text.secondary",children:r})}))})})),O=t(1245),U=(0,O.Z)((0,T.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),K=(0,O.Z)((0,T.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search"),B=t(763);function H(e){var n=e.filterChange,t=(0,i.useState)(""),o=(0,r.Z)(t,2),a=o[0],c=o[1],l=function(e,n){var t=(0,i.useState)(e),o=(0,r.Z)(t,2),a=o[0],s=o[1];return(0,i.useEffect)((function(){var t=setTimeout((function(){s(e)}),n);return function(){clearTimeout(t)}}),[e,n]),a}(a,600);return(0,i.useEffect)((function(){n(l)}),[n,l]),(0,T.jsx)(j.Z,{name:"movieName",type:"text",fullWidth:!0,value:a,onChange:function(e){return c(e.target.value)},placeholder:"Filter by name",variant:"standard",InputProps:{endAdornment:(0,T.jsx)(_,{position:"end",children:!(0,B.isEmpty)(a)&&(0,T.jsx)(s.Z,{onClick:function(){return c("")},size:"small",children:(0,T.jsx)(U,{})})}),startAdornment:(0,T.jsx)(_,{position:"start",children:(0,T.jsx)(K,{})})}})}var Y=t(8928),V=t(6875),q=t(5194),W=t(199),$=t(7205),G=t(1087),J=t(7237),Q=t(6976),X=t(2426),ee=t.n(X),ne=t(2546),te=function(e){var n="",t=null!==e&&void 0!==e&&e.lastUpdated?ee()(null===e||void 0===e?void 0:e.lastUpdated).fromNow():"";return n=null!==e&&void 0!==e&&e.isCurrentFavorite?"Remove from favorites":"Add to favorites",null!==e&&void 0!==e&&e.lastUpdated&&(n=n+". "+(e.isCurrentFavorite?"Favorited ":"Unfavorited ")+t),n},re=t(1155),ie=t(2795);function oe(e){var n,t=e.film,a=e.uid,c=e.userId,l=e.allFavoritesLoading,u=e.reloadMovies,d=(0,i.useState)(!1),f=(0,r.Z)(d,2),p=f[0],x=f[1],m=(0,i.useState)(!1),Z=(0,r.Z)(m,2),j=Z[0],g=Z[1];(0,i.useEffect)((function(){l||g(!1)}),[l]);return(0,T.jsxs)(Y.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"space-between"},elevation:2,children:[(0,T.jsxs)("div",{children:[(0,T.jsx)(W.Z,{component:"img",alt:"poster",height:"440",image:"".concat("","/assets/poster-img/").concat(t.episode_id,".png"),sx:{backgroundColor:"#000",objectFit:"contain"}}),(0,T.jsxs)(q.Z,{children:[(0,T.jsxs)(o.Z,{direction:{lg:"column",xl:"row"},justifyContent:{xl:"space-between",lg:"flex-start"},marginBottom:{lg:"10px",xl:"0px"},children:[(0,T.jsx)(F.Z,{gutterBottom:!0,variant:"h5",component:G.rU,to:"./".concat(a),sx:{fontFamily:"Poppins",fontWeight:"500"},children:t.title}),(0,T.jsxs)(F.Z,{variant:"h5",color:"text.secondary",sx:{fontWeight:"300"},children:["EP ",t.episode_id]})]}),(0,T.jsxs)(o.Z,{spacing:1,children:[(0,T.jsxs)(F.Z,{variant:"body2",color:"text.secondary",children:["Released: ",(0,T.jsx)(re.Z,{date:t.release_date,format:"MMM Do YYYY"})]}),(0,T.jsxs)(F.Z,{variant:"body2",color:"text.secondary",children:["Directed by: ",t.director]}),(0,T.jsxs)(F.Z,{variant:"body2",color:"text.secondary",children:["Produced by: ",t.producer]}),(0,T.jsx)(F.Z,{variant:"body2",color:"text.primary",children:t.opening_crawl})]})]})]}),(0,T.jsxs)(V.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,T.jsx)("div",{children:(0,T.jsx)($.Z,{size:"small",component:G.rU,to:"./".concat(a),children:"See More"})}),(0,T.jsx)("div",{children:(0,T.jsx)(s.Z,{"aria-label":"favorite",onClick:function(){var e,n,r=t.url,i=r.split("/")[r.split("/").length-1],o=v()(h.K,"swdb/:user/favorites".concat(null!==(e=t.favorite)&&void 0!==e&&e.fireId?"/"+(null===(n=t.favorite)||void 0===n?void 0:n.fireId):"",".json"),{user:c}),a={filmUrl:r,filmId:i,lastUpdated:(new Date).getTime(),episodeId:t.episode_id,isCurrentFavorite:!0};x(!0),g(!0),t.favorite?(a.isCurrentFavorite=!t.favorite.isCurrentFavorite,a.fireId=t.favorite.fireId,(0,ie.R3)({url:o,body:a,onSuccess:function(e){u()},onFailure:function(e){},onFinally:function(){x(!1)}})):(0,ie.e$)({url:o,body:a,onSuccess:function(e){u()},onFailure:function(e){},onFinally:function(){x(!1)}})},title:te(t.favorite),disabled:!(!p&&!j),children:p||j?(0,T.jsx)(Q.Z,{}):(0,T.jsx)(J.Z,{color:null!==(n=t.favorite)&&void 0!==n&&n.isCurrentFavorite?"error":"disabled"})})})]})]})}var ae=t(3808),se=t(4596),ce=t(1372),le=t(9841),ue=t(824),de=t(6015),fe="LoadingBackdrop_loadingbackdrop__fzQLF";var ve=function(e){var n=e.isLoading,t=e.children;return(0,T.jsx)(de.Z,{className:n?"".concat(fe):"",width:"100%",children:t})},pe=t(3607),he=t(758),xe=t(9919),me=function(){var e=(0,i.useContext)(pe.Z).showSnackbar,n=(0,G.lr)(),t=(0,r.Z)(n,2),l=t[0],u=t[1],f=l.get("moviePageDisplayMode"),v=(0,se.Z)().isMobile,p=(0,i.useState)(f),h=(0,r.Z)(p,2),j=h[0],g=(h[1],(0,i.useState)(0)),b=(0,r.Z)(g,2),y=b[0],C=b[1],w=(0,i.useState)({}),E=(0,r.Z)(w,2),F=E[0],S=E[1],k=(0,i.useState)([]),L=(0,r.Z)(k,2),P=L[0],A=L[1],I=x({userId:"yqu",params:{fetchTime:y}}),R=I.data,D=(I.error,I.loading),M=m({params:F}),z=M.allFilms,N=M.allFilmsError,_=M.allFilmsLoading,O=M.allFilmsValidating;(0,d.Z)((function(){A(function(e,n){return(0,ne.ZP)(null!==e&&void 0!==e?e:[],(function(e){e.sort((function(e,n){return e.properties.episode_id>n.properties.episode_id?1:-1})),e.forEach((function(e){e.properties.favorite=n[e.properties.episode_id]}))}))}(z,R))}),[z,R]),(0,i.useEffect)((function(){N&&N.code!==xe.u.ERR_CANCELED&&e("error",N)}),[N,e]),(0,i.useEffect)((function(){return function(){e("info",void 0)}}),[e]);var U=function(){C((new Date).getTime())},K=(0,i.useCallback)((function(e){S(e?{title:e}:{})}),[]);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(ae.Z,{toolbarProps:{position:"sticky",sx:{top:v?"56px":"64px"}},children:(0,T.jsxs)(c.Z,{container:!0,xs:12,flexDirection:{xs:"row",sm:"row"},justifyContent:"space-between",alignItems:"center",children:[(0,T.jsx)(c.Z,{xs:10,sm:4,children:(0,T.jsx)(o.Z,{direction:"row",justifyContent:"start",alignItems:"center",children:(0,T.jsxs)(c.Z,{container:!0,xs:12,children:[(0,T.jsx)(c.Z,{xs:8,children:(0,T.jsx)(H,{filterChange:K})}),(0,T.jsx)(c.Z,{xs:2,sx:{display:"flex"},justifyContent:"center",alignItems:"center",children:O&&(0,T.jsx)(Z.Z,{size:20})})]})})}),(0,T.jsx)(c.Z,{xs:2,sm:8,children:(0,T.jsx)(o.Z,{direction:"row",justifyContent:"flex-end",alignItems:"center",children:(0,T.jsx)(a.Z,{title:"Switch to ".concat(Ze(j)),children:(0,T.jsx)(s.Z,{onClick:function(){var e={moviePageDisplayMode:Ze(j)};u(e)},children:j===ce.K.CARD?(0,T.jsx)(le.Z,{}):(0,T.jsx)(ue.Z,{})})})})})]})}),(0,T.jsx)(ve,{isLoading:_,children:N?(0,T.jsx)(he.Z,{reason:"Failed loading all films.",debug:N}):(0,T.jsx)(o.Z,{direction:"column",p:2,width:"100%",children:(0,T.jsx)(c.Z,{container:!0,disableEqualOverflow:!0,rowSpacing:4,children:null===P||void 0===P?void 0:P.map((function(e){return(0,T.jsx)(c.Z,{xs:12,sm:4,smOffset:4,children:(0,T.jsx)(oe,{userId:"yqu",reloadMovies:U,film:e.properties,uid:e.uid,allFavoritesLoading:D})},e.properties.episode_id)}))})})})]})},Ze=function(e){return e&&e===ce.K.CARD?ce.K.TABLE:ce.K.CARD}},773:function(e,n,t){"use strict";t.d(n,{H:function(){return i},K:function(){return r}});var r="https://kq-1-1a499.firebaseio.com/",i="https://swapi.tech/api/"},1155:function(e,n,t){"use strict";var r=t(5814),i=t(6431),o=t.n(i),a=t(2426),s=t.n(a),c=t(184);n.Z=function(e){var n=e.date,t=void 0===n?0:n,i=e.fromNow,a=void 0===i||i,l=e.format,u=void 0===l?"MM/DD/YY HH:mm":l;return(0,c.jsx)(r.Z,{title:t?s()(t).format(u):"No date found",children:(0,c.jsx)("span",{children:t?(0,c.jsx)(o(),{date:t,fromNow:a}):(0,c.jsx)(c.Fragment,{children:"N/A"})})})}},5290:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});t(2791);var r=t(4162),i=t(6580),o=t(184);function a(e){var n=e.size,t=void 0===n?40:n,a=e.color,s=void 0===a?"grey.500":a;return(0,o.jsx)(r.Z,{sx:{color:s},spacing:1,direction:"row",children:(0,o.jsx)(i.Z,{color:"inherit",size:t})})}},3808:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(1413),i=t(2892),o=t(4666),a=t(3906),s=t(184);function c(e){var n=e.toolbarProps,t=e.children;return(0,s.jsx)(i.Z,(0,r.Z)((0,r.Z)({elevation:0},n),{},{children:(0,s.jsx)(o.Z,{variant:"regular",sx:{bgcolor:function(e){return"light"===e.palette.mode?a.s[100]:null},color:function(e){return"light"===e.palette.mode?"#000":null}},children:t})}))}},5885:function(e,n,t){"use strict";t.d(n,{k:function(){return c},$:function(){return l}});var r=t(4165),i=t(5861),o=t(4569),a=t.n(o);function s(e){return new Promise((function(n,t){setTimeout((function(){n()}),e)}))}var c=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t,i,o=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=o.length>1&&void 0!==o[1]?o[1]:0)){e.next=4;break}return e.next=4,s(t);case 4:return e.prev=4,e.next=7,a().get(n,{headers:{"Content-Type":"application/json"},responseType:"json"});case 7:if(200!==(i=e.sent).status){e.next=10;break}return e.abrupt("return",i.data);case 10:return e.abrupt("return",Promise.reject(i));case 13:throw e.prev=13,e.t0=e.catch(4),console.error("App fetcher GET error:",e.t0),e.t0;case 17:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t){var i,o,c=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i=c.length>2&&void 0!==c[2]?c[2]:0)){e.next=4;break}return e.next=4,s(i);case 4:return e.prev=4,e.next=7,a().get(n,{headers:{"Content-Type":"application/json"},responseType:"json",signal:t.signal});case 7:if(200!==(o=e.sent).status){e.next=10;break}return e.abrupt("return",o.data);case 10:return e.abrupt("return",Promise.reject(o));case 13:throw e.prev=13,e.t0=e.catch(4),"ERR_CANCELED"!==e.t0.code&&console.error("App fetcher GET error:",e.t0),e.t0;case 17:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(n,t){return e.apply(this,arguments)}}()},4596:function(e,n,t){"use strict";var r=t(2797),i=t(4142);n.Z=function(){var e=(0,i.Z)();return{isMobile:(0,r.Z)(e.breakpoints.down("sm")),isMed:(0,r.Z)(e.breakpoints.down("md")),isLg:(0,r.Z)(e.breakpoints.down("lg")),isXl:(0,r.Z)(e.breakpoints.down("xl"))}}},9919:function(e,n,t){"use strict";var r;t.d(n,{u:function(){return r}}),function(e){e.ERR_CANCELED="ERR_CANCELED"}(r||(r={}))},1372:function(e,n,t){"use strict";var r;t.d(n,{K:function(){return r}}),function(e){e.TABLE="table",e.CARD="card"}(r||(r={}))},2795:function(e,n,t){"use strict";t.d(n,{R3:function(){return a},e$:function(){return o}});var r=t(4569),i=t.n(r),o=function(e){var n=e.url,t=e.body,r=e.onSuccess,o=e.onFailure,a=e.onFinally;e.abortController;i().post(n,t).then((function(e){r&&r(e.data)})).catch((function(e){console.log("App error POST: ",e),o&&o(e)})).finally((function(){a&&a()}))},a=function(e){var n=e.url,t=e.body,r=e.onSuccess,o=e.onFailure,a=e.onFinally;e.abortController;i().put(n,t).then((function(e){r&&r(e.data)})).catch((function(e){console.log("App error PUT: ",e),o&&o(e)})).finally((function(){a&&a()}))}},7237:function(e,n,t){"use strict";var r=t(4836);n.Z=void 0;var i=r(t(5649)),o=t(184),a=(0,i.default)((0,o.jsx)("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");n.Z=a},6976:function(e,n,t){"use strict";var r=t(4836);n.Z=void 0;var i=r(t(5649)),o=t(184),a=(0,i.default)((0,o.jsx)("path",{d:"m18 22-.01-6L14 12l3.99-4.01L18 2H6v6l4 4-4 3.99V22h12zM8 7.5V4h8v3.5l-4 4-4-4z"}),"HourglassBottom");n.Z=a},4654:function(){}}]);
//# sourceMappingURL=340.0a60bd4e.chunk.js.map