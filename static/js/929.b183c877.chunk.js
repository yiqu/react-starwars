(self.webpackChunkstarwars=self.webpackChunkstarwars||[]).push([[929],{428:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ge}});var r,i=t(885),o=t(2791),a=t(4162),s=t(5814),c=t(3811),l=t(6227),d=(0,t(2795).ZP)("https://kq-1-1a499.firebaseio.com/"),u="swdb/",f=function(e,n){var t,r,i="".concat(u).concat(e,"/favorites");return t=i,r=n,d.post(t+".json",r).then((function(e){return e.data})).catch((function(e){throw console.log("App error POST: ",e),e}))},p=function(e,n){var t,r,i="".concat(u).concat(e,"/favorites/").concat(n.fireId);return t=i,r=n,d.put(t+".json",r)},v=t(1413),h=t(2068),x=t(6884),m=t(1070),Z=t.n(m),j=t(1582),g=t(773),b=function(e){var n=e.userId,t=e.params,r=void 0===t?{}:t,a=(0,o.useState)(),s=(0,i.Z)(a,2),c=s[0],l=s[1],d=(0,o.useState)({}),u=(0,i.Z)(d,2),f=u[0],p=u[1];(0,x.Z)((function(){var e=Z()(g.K,"/swdb/:user/favorites.json",(0,v.Z)({user:"yqu"},r));l(e)}),[n,r]);var m=(0,h.Z)((function(){return c||null}),(function(e){return(0,j.k)(e)})),b=m.data,y=(m.isValidating,m.error),C=m.isLoading;return(0,o.useEffect)((function(){var e={};b&&(Object.keys(null!==b&&void 0!==b?b:{}).forEach((function(n){e[b[n].episodeId]=(0,v.Z)({fireId:n},b[n])})),p(e))}),[b]),{data:f,loading:C,error:y}},y=t(799),C=t(3607);!function(e){e.ERR_CANCELED="ERR_CANCELED"}(r||(r={}));var w=function(e){var n=e.params,t=void 0===n?{refetch:0}:n,a=(0,o.useState)(),s=(0,i.Z)(a,2),c=s[0],l=s[1],d=(0,o.useState)(),u=(0,i.Z)(d,2),f=u[0],p=u[1],h=(0,o.useRef)(new AbortController),m=(0,o.useContext)(C.Z).showSnackbar;(0,x.Z)((function(){var e=Z()(g.H,"/films",(0,v.Z)({},t));h.current.abort(),h.current=new AbortController,l(e)}),[t]);var b=(0,y.ZP)((function(){return c||null}),(function(e){return(0,j.$)(e,h.current)}),{revalidateOnFocus:!1,revalidateIfStale:!0,keepPreviousData:!0,shouldRetryOnError:!0}),w=b.data,E=b.isValidating,k=b.error,S=b.isLoading;return(0,o.useEffect)((function(){k&&k.code!==r.ERR_CANCELED&&(m("error",k),p(k))}),[k,m]),{allFilms:null===w||void 0===w?void 0:w.result,allFilmsLoading:S,allFilmsValidating:E,allFilmsError:f}},E=t(5290),k=t(9911),S=t(4942),F=t(3366),A=t(7462),P=t(8182),L=t(4419),T=t(9853),I=t(4565),R=t(1211),D=t(529),_=t(277),M=t(5878),N=t(1217);function z(e){return(0,N.Z)("MuiInputAdornment",e)}var U,O=(0,M.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),K=t(5513),Y=t(184),B=["children","className","component","disablePointerEvents","disableTypography","position","variant"],q=(0,_.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["position".concat((0,T.Z)(t.position))],!0===t.disablePointerEvents&&n.disablePointerEvents,n[t.variant]]}})((function(e){var n=e.theme,t=e.ownerState;return(0,A.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active},"filled"===t.variant&&(0,S.Z)({},"&.".concat(O.positionStart,"&:not(.").concat(O.hiddenLabel,")"),{marginTop:16}),"start"===t.position&&{marginRight:8},"end"===t.position&&{marginLeft:8},!0===t.disablePointerEvents&&{pointerEvents:"none"})})),H=o.forwardRef((function(e,n){var t=(0,K.Z)({props:e,name:"MuiInputAdornment"}),r=t.children,i=t.className,a=t.component,s=void 0===a?"div":a,c=t.disablePointerEvents,l=void 0!==c&&c,d=t.disableTypography,u=void 0!==d&&d,f=t.position,p=t.variant,v=(0,F.Z)(t,B),h=(0,D.Z)()||{},x=p;p&&h.variant,h&&!x&&(x=h.variant);var m=(0,A.Z)({},t,{hiddenLabel:h.hiddenLabel,size:h.size,disablePointerEvents:l,position:f,variant:x}),Z=function(e){var n=e.classes,t=e.disablePointerEvents,r=e.hiddenLabel,i=e.position,o=e.size,a=e.variant,s={root:["root",t&&"disablePointerEvents",i&&"position".concat((0,T.Z)(i)),a,r&&"hiddenLabel",o&&"size".concat((0,T.Z)(o))]};return(0,L.Z)(s,z,n)}(m);return(0,Y.jsx)(R.Z.Provider,{value:null,children:(0,Y.jsx)(q,(0,A.Z)({as:s,ownerState:m,className:(0,P.Z)(Z.root,i),ref:n},v,{children:"string"!==typeof r||u?(0,Y.jsxs)(o.Fragment,{children:["start"===f?U||(U=(0,Y.jsx)("span",{className:"notranslate",children:"\u200b"})):null,r]}):(0,Y.jsx)(I.Z,{color:"text.secondary",children:r})}))})})),W=t(1245),V=(0,W.Z)((0,Y.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),G=(0,W.Z)((0,Y.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search"),$=t(763);function J(e){var n=e.filterChange,t=(0,o.useState)(""),r=(0,i.Z)(t,2),a=r[0],s=r[1],l=function(e,n){var t=(0,o.useState)(e),r=(0,i.Z)(t,2),a=r[0],s=r[1];return(0,o.useEffect)((function(){var t=setTimeout((function(){s(e)}),n);return function(){clearTimeout(t)}}),[e,n]),a}(a,600);return(0,o.useEffect)((function(){n(l)}),[n,l]),(0,Y.jsx)(k.Z,{name:"movieName",type:"text",fullWidth:!0,value:a,onChange:function(e){return s(e.target.value)},placeholder:"Filter by name",variant:"standard",InputProps:{endAdornment:(0,Y.jsx)(H,{position:"end",children:!(0,$.isEmpty)(a)&&(0,Y.jsx)(c.Z,{onClick:function(){return s("")},size:"small",children:(0,Y.jsx)(V,{})})}),startAdornment:(0,Y.jsx)(H,{position:"start",children:(0,Y.jsx)(G,{})})}})}var Q=t(8928),X=t(6875),ee=t(5194),ne=t(199),te=t(7205),re=t(1087),ie=t(7237),oe=t(2426),ae=t.n(oe),se=function(e){var n="",t=null!==e&&void 0!==e&&e.lastUpdated?ae()(null===e||void 0===e?void 0:e.lastUpdated).fromNow():"";return n=null!==e&&void 0!==e&&e.isCurrentFavorite?"Remove from favorites":"Add to favorites",null!==e&&void 0!==e&&e.lastUpdated&&(n=n+". "+(e.isCurrentFavorite?"Favorited ":"Unfavorited ")+t),n},ce=t(1155);function le(e){var n=e.film,t=e.favorited,r=e.onFavoriteToggle,i=e.uid;return(0,Y.jsxs)(Q.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"space-between"},elevation:4,children:[(0,Y.jsxs)("div",{children:[(0,Y.jsx)(ne.Z,{component:"img",alt:"poster",height:"440",image:"".concat("","/assets/poster-img/").concat(n.episode_id,".png"),sx:{backgroundColor:"#000",objectFit:"contain"}}),(0,Y.jsxs)(ee.Z,{children:[(0,Y.jsxs)(a.Z,{direction:{lg:"column",xl:"row"},justifyContent:{xl:"space-between",lg:"flex-start"},marginBottom:{lg:"10px",xl:"0px"},children:[(0,Y.jsx)(I.Z,{gutterBottom:!0,variant:"h5",component:re.rU,to:"./".concat(i),sx:{fontFamily:"Poppins",fontWeight:"500"},children:n.title}),(0,Y.jsxs)(I.Z,{variant:"h5",color:"text.secondary",sx:{fontWeight:"300"},children:["EP ",n.episode_id]})]}),(0,Y.jsxs)(a.Z,{spacing:1,children:[(0,Y.jsxs)(I.Z,{variant:"body2",color:"text.secondary",children:["Released: ",(0,Y.jsx)(ce.Z,{date:n.release_date,format:"MMM Do YYYY"})]}),(0,Y.jsxs)(I.Z,{variant:"body2",color:"text.secondary",children:["Directed by: ",n.director]}),(0,Y.jsxs)(I.Z,{variant:"body2",color:"text.secondary",children:["Produced by: ",n.producer]}),(0,Y.jsx)(I.Z,{variant:"body2",color:"text.primary",children:n.opening_crawl})]})]})]}),(0,Y.jsxs)(X.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,Y.jsx)("div",{children:(0,Y.jsx)(te.Z,{size:"small",component:re.rU,to:"./".concat(i),children:"See More"})}),(0,Y.jsx)("div",{children:(0,Y.jsx)(c.Z,{"aria-label":"favorite",onClick:function(){r(n,t)},title:se(t),children:(0,Y.jsx)(ie.Z,{color:n.userFavorited?"error":"disabled"})})})]})]})}var de=t(3808),ue=t(4596),fe=t(1372),pe=t(9841),ve=t(824),he=t(6015),xe="LoadingBackdrop_loadingbackdrop__fzQLF";var me=function(e){var n=e.isLoading,t=e.children;return(0,Y.jsx)(he.Z,{className:n?"".concat(xe):"",width:"100%",children:t})};function Ze(e){var n=e.reason,t=e.debug;return(0,Y.jsx)(he.Z,{marginY:5,children:(0,Y.jsxs)(a.Z,{direction:"column",spacing:5,justifyContent:"center",alignItems:"center",children:[(0,Y.jsx)(I.Z,{variant:"h5",sx:{textTransform:"uppercase"},children:"An error has occurred!"}),(0,Y.jsxs)(a.Z,{direction:"column",spacing:1,justifyContent:"center",alignItems:"center",children:[(0,Y.jsx)(I.Z,{variant:"body1",fontWeight:700,children:"REASON"}),(0,Y.jsx)(I.Z,{variant:"body2",children:n})]}),(0,Y.jsxs)(a.Z,{direction:"column",spacing:1,justifyContent:"center",alignItems:"center",children:[(0,Y.jsx)(I.Z,{variant:"body1",fontWeight:700,children:"DEBUG"}),(0,Y.jsx)(I.Z,{variant:"body2",component:"div",children:(0,Y.jsx)("pre",{children:(0,Y.jsx)("code",{style:{display:"flex",textAlign:"center"},children:JSON.stringify(t)})})})]})]})})}var je="yqu",ge=function(){Array.from(Array(3).keys());var e=(0,o.useState)(!1),n=(0,i.Z)(e,2),t=(n[0],n[1]),r=(0,o.useState)(0),d=(0,i.Z)(r,2),u=d[0],v=d[1],h=(0,o.useState)({}),m=(0,i.Z)(h,2),Z=m[0],j=m[1],g=(0,ue.Z)().isMobile,y=(0,re.lr)(),k=(0,i.Z)(y,2),S=k[0],F=k[1],A=S.get("moviePageDisplayMode"),P=(0,o.useState)(A),L=(0,i.Z)(P,2),T=L[0],I=(L[1],(0,o.useState)([])),R=(0,i.Z)(I,2),D=R[0],_=R[1],M=(0,o.useContext)(C.Z).showSnackbar,N=b({userId:je,params:{fetchTime:u}}),z=N.data,U=(N.error,N.loading,w({params:Z})),O=U.allFilms,K=U.allFilmsError,B=U.allFilmsLoading,q=U.allFilmsValidating;(0,x.Z)((function(){_(function(e,n){var t=null!==e&&void 0!==e?e:[];return t&&t.sort((function(e,n){return e.properties.episode_id>n.properties.episode_id?1:-1})),t.forEach((function(e){var t;e.properties.userFavorited=null===(t=n[e.properties.episode_id])||void 0===t?void 0:t.isCurrentFavorite})),t}(O,z))}),[O,z]);var H=(0,o.useCallback)((function(){M("info",void 0)}),[M]);(0,o.useEffect)((function(){return H}),[H]);var W=function(e,n){var r=e.url,i=r.split("/")[r.split("/").length-1],o={filmUrl:r,filmId:i,lastUpdated:(new Date).getTime(),episodeId:e.episode_id,isCurrentFavorite:!0};t(!0),n?(o.isCurrentFavorite=!n.isCurrentFavorite,o.fireId=n.fireId,p(je,o).then((function(e){})).catch((function(e){})).finally((function(){t(!1),v((new Date).getTime())}))):f(je,o).then((function(e){})).catch((function(e){})).finally((function(){t(!1),v((new Date).getTime())}))},V=(0,o.useCallback)((function(e){j(e?{title:e}:{})}),[]);return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(de.Z,{toolbarProps:{position:"sticky",sx:{top:g?"56px":"64px"}},children:(0,Y.jsxs)(l.Z,{container:!0,xs:12,flexDirection:{xs:"row",sm:"row"},justifyContent:"space-between",alignItems:"center",children:[(0,Y.jsx)(l.Z,{xs:10,sm:4,children:(0,Y.jsx)(a.Z,{direction:"row",justifyContent:"start",alignItems:"center",children:(0,Y.jsxs)(l.Z,{container:!0,xs:12,children:[(0,Y.jsx)(l.Z,{xs:10,children:(0,Y.jsx)(J,{filterChange:V})}),(0,Y.jsx)(l.Z,{xs:2,sx:{display:"flex"},justifyContent:"center",alignItems:"center",children:q&&(0,Y.jsx)(E.Z,{size:20})})]})})}),(0,Y.jsx)(l.Z,{xs:2,sm:8,children:(0,Y.jsx)(a.Z,{direction:"row",justifyContent:"flex-end",alignItems:"center",children:(0,Y.jsx)(s.Z,{title:"Switch to ".concat(be(T)),children:(0,Y.jsx)(c.Z,{onClick:function(){var e={moviePageDisplayMode:be(T)};F(e)},children:T===fe.K.CARD?(0,Y.jsx)(pe.Z,{}):(0,Y.jsx)(ve.Z,{})})})})})]})}),(0,Y.jsx)(me,{isLoading:B,children:K?(0,Y.jsx)(Ze,{reason:"Failed loading all films.",debug:K}):(0,Y.jsx)(a.Z,{direction:"column",p:2,width:"100%",children:(0,Y.jsx)(l.Z,{container:!0,disableEqualOverflow:!0,rowSpacing:4,children:null===D||void 0===D?void 0:D.map((function(e){return(0,Y.jsx)(l.Z,{xs:12,sm:4,smOffset:4,children:(0,Y.jsx)(le,{film:e.properties,onFavoriteToggle:W,favorited:z[e.properties.episode_id],uid:e.uid})},e.properties.episode_id)}))})})})]})},be=function(e){return e&&e===fe.K.CARD?fe.K.TABLE:fe.K.CARD}},773:function(e,n,t){"use strict";t.d(n,{H:function(){return i},K:function(){return r}});var r="https://kq-1-1a499.firebaseio.com/",i="https://swapi.tech/api/"},1155:function(e,n,t){"use strict";var r=t(5814),i=t(6431),o=t.n(i),a=t(2426),s=t.n(a),c=t(184);n.Z=function(e){var n=e.date,t=void 0===n?0:n,i=e.fromNow,a=void 0===i||i,l=e.format,d=void 0===l?"MM/DD/YY HH:mm":l;return(0,c.jsx)(r.Z,{title:t?s()(t).format(d):"No date found",children:(0,c.jsx)("span",{children:t?(0,c.jsx)(o(),{date:t,fromNow:a}):(0,c.jsx)(c.Fragment,{children:"N/A"})})})}},5290:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});t(2791);var r=t(4162),i=t(6580),o=t(184);function a(e){var n=e.size,t=void 0===n?40:n,a=e.color,s=void 0===a?"grey.500":a;return(0,o.jsx)(r.Z,{sx:{color:s},spacing:1,direction:"row",children:(0,o.jsx)(i.Z,{color:"inherit",size:t})})}},3808:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(1413),i=t(2892),o=t(4666),a=t(3906),s=t(184);function c(e){var n=e.toolbarProps,t=e.children;return(0,s.jsx)(i.Z,(0,r.Z)((0,r.Z)({elevation:0},n),{},{children:(0,s.jsx)(o.Z,{variant:"regular",sx:{bgcolor:function(e){return"light"===e.palette.mode?a.s[100]:null},color:function(e){return"light"===e.palette.mode?"#000":null}},children:t})}))}},1582:function(e,n,t){"use strict";t.d(n,{$:function(){return l},k:function(){return c}});var r=t(4165),i=t(5861),o=t(4569),a=t.n(o),s=t(5316),c=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t,i,o=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=o.length>1&&void 0!==o[1]?o[1]:0)){e.next=4;break}return e.next=4,(0,s._)(t);case 4:return e.prev=4,e.next=7,a().get(n,{headers:{"Content-Type":"application/json"},responseType:"json"});case 7:if(200!==(i=e.sent).status){e.next=10;break}return e.abrupt("return",i.data);case 10:return e.abrupt("return",Promise.reject(i));case 13:throw e.prev=13,e.t0=e.catch(4),console.error("App fetcher GET error:",e.t0),e.t0;case 17:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t){var i,o,c=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i=c.length>2&&void 0!==c[2]?c[2]:0)){e.next=4;break}return e.next=4,(0,s._)(i);case 4:return e.prev=4,e.next=7,a().get(n,{headers:{"Content-Type":"application/json"},responseType:"json",signal:t.signal});case 7:if(200!==(o=e.sent).status){e.next=10;break}return e.abrupt("return",o.data);case 10:return e.abrupt("return",Promise.reject(o));case 13:throw e.prev=13,e.t0=e.catch(4),"ERR_CANCELED"!==e.t0.code&&console.error("App fetcher GET error:",e.t0),e.t0;case 17:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(n,t){return e.apply(this,arguments)}}()},4596:function(e,n,t){"use strict";var r=t(2797),i=t(4142);n.Z=function(){var e=(0,i.Z)();return{isMobile:(0,r.Z)(e.breakpoints.down("sm")),isMed:(0,r.Z)(e.breakpoints.down("md")),isLg:(0,r.Z)(e.breakpoints.down("lg")),isXl:(0,r.Z)(e.breakpoints.down("xl"))}}},1372:function(e,n,t){"use strict";var r;t.d(n,{K:function(){return r}}),function(e){e.TABLE="table",e.CARD="card"}(r||(r={}))},2795:function(e,n,t){"use strict";t.d(n,{e$:function(){return o}});var r=t(4569),i=t.n(r),o=function(e){var n=e.url,t=e.body,r=e.onSuccess,o=e.onFailure,a=e.onFinally;e.abortController;i().post(n,t).then((function(e){r&&r(e.data)})).catch((function(e){console.log("App error POST: ",e),o&&o(e)})).finally((function(){a&&a()}))};n.ZP=function(e){return i().create({baseURL:e,timeout:5e3,headers:{"Content-Type":"application/json"},responseType:"json"})}},5316:function(e,n,t){"use strict";function r(e){return new Promise((function(n,t){setTimeout((function(){n()}),e)}))}t.d(n,{_:function(){return r}})},7237:function(e,n,t){"use strict";var r=t(4836);n.Z=void 0;var i=r(t(5649)),o=t(184),a=(0,i.default)((0,o.jsx)("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");n.Z=a},4654:function(){}}]);
//# sourceMappingURL=929.b183c877.chunk.js.map