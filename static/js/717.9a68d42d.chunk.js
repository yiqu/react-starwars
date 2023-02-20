"use strict";(self.webpackChunkstarwars=self.webpackChunkstarwars||[]).push([[717],{5717:function(n,t,e){e.r(t),e.d(t,{default:function(){return P}});var r=e(1413),i=e(70885),a=e(72791),o=e(36227),s=e(799),c=e(96884),l=e(51070),d=e.n(l),u=e(95885),h=function(n){var t=[];n&&Object.keys(n).forEach((function(e){t.push((0,r.Z)({fireId:e},n[e]))}));return t},f=function(n){var t=n.user,e=n.params,o=(0,a.useState)(),l=(0,i.Z)(o,2),f=l[0],p=l[1];(0,c.Z)((function(){var n=d()("https://kq-1-1a499.firebaseio.com/","/swdb/:user/added-films.json",(0,r.Z)({user:"yqu"},e));p(n)}),[t,e]);var m=(0,s.ZP)((function(){return f||null}),(function(n){return(0,u.k)(n,2e3)}),{shouldRetryOnError:!1,revalidateOnFocus:!1,revalidateIfStale:!1}),x=m.data,v=m.isValidating,g=m.error,Z=m.isLoading;return{personalFilms:x?h(x):x,personalFilmsLoading:Z,personalFilmsValidating:v,personalFilmsError:g}},p=e(91441),m=e(94162),x=e(763),v=e(80184),g=function(n){var t=n.count;return(0,v.jsxs)(o.Z,{direction:"column",padding:2,xs:12,children:[(0,v.jsx)(o.Z,{xs:12,md:6,children:(0,v.jsx)(p.Z,{variant:"text",sx:{fontSize:"2rem"}})}),(0,v.jsx)(o.Z,{container:!0,spacing:2,children:(0,x.times)(t,(function(n){return(0,v.jsxs)(o.Z,{xs:12,sm:12,md:!0,children:[(0,v.jsxs)(m.Z,{direction:"row",sx:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[(0,v.jsx)(p.Z,{variant:"text",sx:{fontSize:"2rem",width:"10rem"}}),(0,v.jsx)(p.Z,{variant:"circular",width:40,height:40})]}),(0,v.jsx)(p.Z,{variant:"rectangular",height:"30rem"})]},n)}))})]})},Z=e(75814),j=e(13811),w=e(7150),b=e(73808),y=e(51372),C=e(54596),k=e(11087),S=e(39841),M=e(40824),F=e(48928),R=e(30199),z=e(55194),A=e(4565),D=e(96875),E=e(17205),V=e(11155);function T(n){var t=n.title,e=(n.canon,n.characters,n.director),r=n.fireId,i=n.openingCrawl;n.planets,n.species,n.starships,n.vehicles;return(0,v.jsxs)(F.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"space-between"},elevation:4,children:[(0,v.jsxs)("div",{children:[(0,v.jsx)(R.Z,{component:"img",alt:"poster",height:"440",image:"".concat("","/assets/film/sw-blk-logo.png"),sx:{backgroundColor:"#000",objectFit:"contain"}}),(0,v.jsxs)(z.Z,{children:[(0,v.jsxs)(m.Z,{direction:{lg:"column",xl:"row"},justifyContent:{xl:"space-between",lg:"flex-start"},marginBottom:{lg:"10px",xl:"0px"},children:[(0,v.jsx)(A.Z,{gutterBottom:!0,variant:"h5",component:k.rU,to:"./".concat(r),sx:{fontFamily:"Poppins",fontWeight:"500"},children:t}),(0,v.jsx)(A.Z,{variant:"h5",color:"text.secondary",sx:{fontWeight:"300"}})]}),(0,v.jsxs)(m.Z,{spacing:1,children:[(0,v.jsxs)(A.Z,{variant:"body2",color:"text.secondary",children:["Released: ",(0,v.jsx)(V.Z,{date:0,format:"MMM Do YYYY"})]}),(0,v.jsxs)(A.Z,{variant:"body2",color:"text.secondary",children:["Directed by: ",e]}),(0,v.jsxs)(A.Z,{variant:"body2",color:"text.secondary",children:["Produced by: ","producer"]}),(0,v.jsx)(A.Z,{variant:"body2",color:"text.primary",children:i})]})]})]}),(0,v.jsx)(D.Z,{sx:{display:"flex",justifyContent:"space-between"},children:(0,v.jsx)("div",{children:(0,v.jsx)(E.Z,{size:"small",component:k.rU,to:"./".concat(r),children:"Learn More"})})})]})}function P(){var n=(0,a.useState)(0),t=(0,i.Z)(n,2),e=t[0],s=(t[1],(0,C.Z)().isMobile),c=(0,k.lr)(),l=(0,i.Z)(c,2),d=l[0],u=l[1],h=d.get("moviePageDisplayMode"),p=(0,a.useState)(h),x=(0,i.Z)(p,2),F=x[0],R=(x[1],f({user:"yqu",params:{fetchTime:e}})),z=R.personalFilms,A=R.personalFilmsLoading,D=R.personalFilmsError;R.personalFilmsValidating;return A?(0,v.jsx)(g,{count:4}):D?(0,v.jsx)("div",{children:"Error Page"}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(b.Z,{toolbarProps:{position:"sticky",sx:{top:s?"56px":"64px"}},children:(0,v.jsxs)(o.Z,{container:!0,xs:12,flexDirection:{xs:"row",sm:"row"},justifyContent:"space-between",alignItems:"center",children:[(0,v.jsx)(o.Z,{xs:10,sm:4,children:(0,v.jsx)(m.Z,{direction:"row",justifyContent:"start",alignItems:"center",children:A&&(0,v.jsx)(w.Z,{size:20})})}),(0,v.jsx)(o.Z,{xs:2,sm:8,children:(0,v.jsx)(m.Z,{direction:"row",justifyContent:"flex-end",alignItems:"center",children:(0,v.jsx)(Z.Z,{title:"Switch to ".concat(H(F)),children:(0,v.jsx)(j.Z,{onClick:function(){var n={moviePageDisplayMode:H(F)};u(n)},children:F===y.K.CARD?(0,v.jsx)(S.Z,{}):(0,v.jsx)(M.Z,{})})})})})]})}),(0,v.jsx)(m.Z,{direction:"column",p:2,width:"100%",children:(0,v.jsx)(o.Z,{container:!0,disableEqualOverflow:!0,rowSpacing:4,children:null===z||void 0===z?void 0:z.map((function(n){return(0,v.jsx)(o.Z,{xs:12,sm:4,smOffset:4,children:(0,v.jsx)(T,(0,r.Z)({},n))},n.fireId)}))})})]})}var H=function(n){return n&&n===y.K.CARD?y.K.TABLE:y.K.CARD}},11155:function(n,t,e){var r=e(75814),i=e(46431),a=e.n(i),o=e(72426),s=e.n(o),c=e(80184);t.Z=function(n){var t=n.date,e=void 0===t?0:t,i=n.fromNow,o=void 0===i||i,l=n.format,d=void 0===l?"MM/DD/YY HH:mm":l;return(0,c.jsx)(r.Z,{title:e?s()(e).format(d):"No date found",children:(0,c.jsx)("span",{children:e?(0,c.jsx)(a(),{date:e,fromNow:o,format:o?void 0:d}):(0,c.jsx)(c.Fragment,{children:"N/A"})})})}},95885:function(n,t,e){e.d(t,{k:function(){return c},$:function(){return l}});var r=e(74165),i=e(15861),a=e(74569),o=e.n(a);function s(n){return new Promise((function(t,e){setTimeout((function(){t()}),n)}))}var c=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t){var e,i,a=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(e=a.length>1&&void 0!==a[1]?a[1]:0)){n.next=4;break}return n.next=4,s(e);case 4:return n.prev=4,n.next=7,o().get(t,{headers:{"Content-Type":"application/json"},responseType:"json"});case 7:if(200!==(i=n.sent).status){n.next=10;break}return n.abrupt("return",i.data);case 10:return n.abrupt("return",Promise.reject(i));case 13:throw n.prev=13,n.t0=n.catch(4),console.error("App fetcher GET error:",n.t0),n.t0;case 17:case"end":return n.stop()}}),n,null,[[4,13]])})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t,e){var i,a,c=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(i=c.length>2&&void 0!==c[2]?c[2]:0)){n.next=4;break}return n.next=4,s(i);case 4:return n.prev=4,n.next=7,o().get(t,{headers:{"Content-Type":"application/json"},responseType:"json",signal:e.signal});case 7:if(200!==(a=n.sent).status){n.next=10;break}return n.abrupt("return",a.data);case 10:return n.abrupt("return",Promise.reject(a));case 13:throw n.prev=13,n.t0=n.catch(4),"ERR_CANCELED"!==n.t0.code&&console.error("App fetcher GET error:",n.t0),n.t0;case 17:case"end":return n.stop()}}),n,null,[[4,13]])})));return function(t,e){return n.apply(this,arguments)}}()},51372:function(n,t,e){var r;e.d(t,{K:function(){return r}}),function(n){n.TABLE="table",n.CARD="card"}(r||(r={}))},39841:function(n,t,e){var r=e(64836);t.Z=void 0;var i=r(e(45649)),a=e(80184),o=(0,i.default)((0,a.jsx)("path",{d:"M10 10.02h5V21h-5zM17 21h3c1.1 0 2-.9 2-2v-9h-5v11zm3-18H5c-1.1 0-2 .9-2 2v3h19V5c0-1.1-.9-2-2-2zM3 19c0 1.1.9 2 2 2h3V10H3v9z"}),"TableChart");t.Z=o},40824:function(n,t,e){var r=e(64836);t.Z=void 0;var i=r(e(45649)),a=e(80184),o=(0,i.default)((0,a.jsx)("path",{d:"M14.67 5v6.5H9.33V5h5.34zm1 6.5H21V5h-5.33v6.5zm-1 7.5v-6.5H9.33V19h5.34zm1-6.5V19H21v-6.5h-5.33zm-7.34 0H3V19h5.33v-6.5zm0-1V5H3v6.5h5.33z"}),"ViewModule");t.Z=o},91441:function(n,t,e){e.d(t,{Z:function(){return A}});var r=e(30168),i=e(63366),a=e(87462),o=e(72791),s=e(28182),c=e(52554),l=e(94419);function d(n){return String(n).match(/[\d.\-+]*\s*(.*)/)[1]||""}function u(n){return parseFloat(n)}var h=e(12065),f=e(60277),p=e(85513),m=e(75878),x=e(21217);function v(n){return(0,x.Z)("MuiSkeleton",n)}(0,m.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var g,Z,j,w,b,y,C,k,S=e(80184),M=["animation","className","component","height","style","variant","width"],F=(0,c.F4)(b||(b=g||(g=(0,r.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),R=(0,c.F4)(y||(y=Z||(Z=(0,r.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),z=(0,f.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(n,t){var e=n.ownerState;return[t.root,t[e.variant],!1!==e.animation&&t[e.animation],e.hasChildren&&t.withChildren,e.hasChildren&&!e.width&&t.fitContent,e.hasChildren&&!e.height&&t.heightAuto]}})((function(n){var t=n.theme,e=n.ownerState,r=d(t.shape.borderRadius)||"px",i=u(t.shape.borderRadius);return(0,a.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,h.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===e.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(i).concat(r,"/").concat(Math.round(i/.6*10)/10).concat(r),"&:empty:before":{content:'"\\00a0"'}},"circular"===e.variant&&{borderRadius:"50%"},"rounded"===e.variant&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})}),(function(n){return"pulse"===n.ownerState.animation&&(0,c.iv)(C||(C=j||(j=(0,r.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),F)}),(function(n){var t=n.ownerState,e=n.theme;return"wave"===t.animation&&(0,c.iv)(k||(k=w||(w=(0,r.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),R,(e.vars||e).palette.action.hover)})),A=o.forwardRef((function(n,t){var e=(0,p.Z)({props:n,name:"MuiSkeleton"}),r=e.animation,o=void 0===r?"pulse":r,c=e.className,d=e.component,u=void 0===d?"span":d,h=e.height,f=e.style,m=e.variant,x=void 0===m?"text":m,g=e.width,Z=(0,i.Z)(e,M),j=(0,a.Z)({},e,{animation:o,component:u,variant:x,hasChildren:Boolean(Z.children)}),w=function(n){var t=n.classes,e=n.variant,r=n.animation,i=n.hasChildren,a=n.width,o=n.height,s={root:["root",e,r,i&&"withChildren",i&&!a&&"fitContent",i&&!o&&"heightAuto"]};return(0,l.Z)(s,v,t)}(j);return(0,S.jsx)(z,(0,a.Z)({as:u,ref:t,className:(0,s.Z)(w.root,c),ownerState:j},Z,{style:(0,a.Z)({width:g,height:h},f)}))}))}}]);
//# sourceMappingURL=717.9a68d42d.chunk.js.map