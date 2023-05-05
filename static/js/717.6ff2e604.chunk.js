"use strict";(self.webpackChunkstarwars=self.webpackChunkstarwars||[]).push([[717],{5717:function(n,e,r){r.r(e),r.d(e,{default:function(){return I}});var t=r(1413),i=r(70885),a=r(72791),o=r(36227),s=r(799),c=r(96884),l=r(51070),d=r.n(l),u=r(95885),h=function(n){var e=[];n&&Object.keys(n).forEach((function(r){e.push((0,t.Z)({fireId:r},n[r]))}));return e},f=function(n){var e=n.user,r=n.params,o=(0,a.useState)(),l=(0,i.Z)(o,2),f=l[0],v=l[1];(0,c.Z)((function(){var n=d()("https://kq-1-1a499.firebaseio.com/","/swdb/:user/added-films.json",(0,t.Z)({user:"yqu"},r));v(n)}),[e,r]);var m=(0,s.ZP)((function(){return f||null}),(function(n){return(0,u.k)(n,2e3)}),{shouldRetryOnError:!1,revalidateOnFocus:!1,revalidateIfStale:!1}),p=m.data,x=m.isValidating,Z=m.error,g=m.isLoading;return{personalFilms:p?h(p):p,personalFilmsLoading:g,personalFilmsValidating:x,personalFilmsError:Z}},v=r(91441),m=r(94162),p=r(763),x=r(80184),Z=function(n){var e=n.count;return(0,x.jsxs)(o.Z,{direction:"column",padding:2,xs:12,children:[(0,x.jsx)(o.Z,{xs:12,md:6,children:(0,x.jsx)(v.Z,{variant:"text",sx:{fontSize:"2rem"}})}),(0,x.jsx)(o.Z,{container:!0,spacing:2,children:(0,p.times)(e,(function(n){return(0,x.jsxs)(o.Z,{xs:12,sm:12,md:!0,children:[(0,x.jsxs)(m.Z,{direction:"row",sx:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[(0,x.jsx)(v.Z,{variant:"text",sx:{fontSize:"2rem",width:"10rem"}}),(0,x.jsx)(v.Z,{variant:"circular",width:40,height:40})]}),(0,x.jsx)(v.Z,{variant:"rectangular",height:"30rem"})]},n)}))})]})},g=r(75814),w=r(13811),j=r(15290),b=r(73808),y=r(51372),k=r(54596),C=r(11087),S=r(39841),M=r(40824),P=r(48928),F=r(38943),D=r(55194),R=r(4565),z=r(96875),V=r(17205),A=r(11155);function N(n){var e=n.title,r=(n.canon,n.characters,n.director),t=n.fireId,i=n.openingCrawl;n.planets,n.species,n.starships,n.vehicles;return(0,x.jsxs)(P.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"space-between"},elevation:4,children:[(0,x.jsxs)("div",{children:[(0,x.jsx)(F.Z,{component:"img",alt:"poster",height:"440",image:"".concat("","/assets/film/sw-blk-logo.png"),sx:{backgroundColor:"#000",objectFit:"contain"}}),(0,x.jsxs)(D.Z,{children:[(0,x.jsxs)(m.Z,{direction:{lg:"column",xl:"row"},justifyContent:{xl:"space-between",lg:"flex-start"},marginBottom:{lg:"10px",xl:"0px"},children:[(0,x.jsx)(R.Z,{gutterBottom:!0,variant:"h5",component:C.rU,to:"./".concat(t),sx:{fontFamily:"Poppins",fontWeight:"500"},children:e}),(0,x.jsx)(R.Z,{variant:"h5",color:"text.secondary",sx:{fontWeight:"300"}})]}),(0,x.jsxs)(m.Z,{spacing:1,children:[(0,x.jsxs)(R.Z,{variant:"body2",color:"text.secondary",children:["Released: ",(0,x.jsx)(A.Z,{date:0,format:"MMM Do YYYY"})]}),(0,x.jsxs)(R.Z,{variant:"body2",color:"text.secondary",children:["Directed by: ",r]}),(0,x.jsxs)(R.Z,{variant:"body2",color:"text.secondary",children:["Produced by: ","producer"]}),(0,x.jsx)(R.Z,{variant:"body2",color:"text.primary",children:i})]})]})]}),(0,x.jsx)(z.Z,{sx:{display:"flex",justifyContent:"space-between"},children:(0,x.jsx)("div",{children:(0,x.jsx)(V.Z,{size:"small",component:C.rU,to:"./".concat(t),children:"Learn More"})})})]})}function I(){var n=(0,a.useState)(0),e=(0,i.Z)(n,2),r=e[0],s=(e[1],(0,k.Z)().isMobile),c=(0,C.lr)(),l=(0,i.Z)(c,2),d=l[0],u=l[1],h=d.get("moviePageDisplayMode"),v=(0,a.useState)(h),p=(0,i.Z)(v,2),P=p[0],F=(p[1],f({user:"yqu",params:{fetchTime:r}})),D=F.personalFilms,R=F.personalFilmsLoading,z=F.personalFilmsError;F.personalFilmsValidating;return R?(0,x.jsx)(Z,{count:4}):z?(0,x.jsx)("div",{children:"Error Page"}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(b.Z,{toolbarProps:{position:"sticky",sx:{top:s?"56px":"64px"}},children:(0,x.jsxs)(o.Z,{container:!0,xs:12,flexDirection:{xs:"row",sm:"row"},justifyContent:"space-between",alignItems:"center",children:[(0,x.jsx)(o.Z,{xs:10,sm:4,children:(0,x.jsx)(m.Z,{direction:"row",justifyContent:"start",alignItems:"center",children:R&&(0,x.jsx)(j.Z,{size:20})})}),(0,x.jsx)(o.Z,{xs:2,sm:8,children:(0,x.jsx)(m.Z,{direction:"row",justifyContent:"flex-end",alignItems:"center",children:(0,x.jsx)(g.Z,{title:"Switch to ".concat(H(P)),children:(0,x.jsx)(w.Z,{onClick:function(){var n={moviePageDisplayMode:H(P)};u(n)},children:P===y.K.CARD?(0,x.jsx)(S.Z,{}):(0,x.jsx)(M.Z,{})})})})})]})}),(0,x.jsx)(m.Z,{direction:"column",p:2,width:"100%",children:(0,x.jsx)(o.Z,{container:!0,disableEqualOverflow:!0,rowSpacing:4,children:null===D||void 0===D?void 0:D.map((function(n){return(0,x.jsx)(o.Z,{xs:12,sm:4,smOffset:4,children:(0,x.jsx)(N,(0,t.Z)({},n))},n.fireId)}))})})]})}var H=function(n){return n&&n===y.K.CARD?y.K.TABLE:y.K.CARD}},11155:function(n,e,r){var t=r(75814),i=r(4565),a=r(46431),o=r.n(a),s=r(72426),c=r.n(s),l=r(80184);e.Z=function(n){var e=n.date,r=void 0===e?0:e,a=n.fromNow,s=void 0===a||a,d=n.format,u=void 0===d?"MM/DD/YY HH:mm":d;return(0,l.jsx)(t.Z,{title:r?c()(r).format(u):"No date found",children:(0,l.jsx)(i.Z,{component:"span",display:"flex",alignItems:"center",justifyContent:"center",children:r?(0,l.jsx)(o(),{date:r,fromNow:s,format:s?void 0:u,interval:6e4}):(0,l.jsx)(l.Fragment,{children:"N/A"})})})}},15290:function(n,e,r){r.d(e,{Z:function(){return s}});var t=r(1413),i=(r(72791),r(94162)),a=r(96580),o=r(80184);function s(n){var e=n.size,r=void 0===e?40:e,s=n.color,c=void 0===s?"grey.500":s,l=n.styleProps;return(0,o.jsx)(i.Z,{sx:(0,t.Z)({color:c},l),spacing:1,direction:"row",children:(0,o.jsx)(a.Z,{color:"inherit",size:r})})}},73808:function(n,e,r){r.d(e,{Z:function(){return c}});var t=r(1413),i=r(22892),a=r(44666),o=r(43906),s=r(80184);function c(n){var e=n.toolbarProps,r=n.children;return(0,s.jsx)(i.Z,(0,t.Z)((0,t.Z)({elevation:0},e),{},{children:(0,s.jsx)(a.Z,{variant:"regular",sx:{bgcolor:function(n){return"light"===n.palette.mode?o.s[100]:null},color:function(n){return"light"===n.palette.mode?"#000":null},pr:0},children:r})}))}},95885:function(n,e,r){r.d(e,{k:function(){return c}});var t=r(74165),i=r(15861),a=r(74569),o=r.n(a);function s(n){return new Promise((function(e,r){setTimeout((function(){e()}),n)}))}var c=function(){var n=(0,i.Z)((0,t.Z)().mark((function n(e){var r,i,a=arguments;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(r=a.length>1&&void 0!==a[1]?a[1]:0)){n.next=4;break}return n.next=4,s(r);case 4:return n.prev=4,n.next=7,o().get(e,{headers:{"Content-Type":"application/json"},responseType:"json"});case 7:if(200!==(i=n.sent).status){n.next=10;break}return n.abrupt("return",i.data);case 10:return n.abrupt("return",Promise.reject(i));case 13:throw n.prev=13,n.t0=n.catch(4),console.error("App fetcher GET error:",n.t0),n.t0;case 17:case"end":return n.stop()}}),n,null,[[4,13]])})));return function(e){return n.apply(this,arguments)}}()},54596:function(n,e,r){var t=r(52797),i=r(74142);e.Z=function(){var n=(0,i.Z)();return{isMobile:(0,t.Z)(n.breakpoints.down("sm")),isMed:(0,t.Z)(n.breakpoints.down("md")),isLg:(0,t.Z)(n.breakpoints.down("lg")),isXl:(0,t.Z)(n.breakpoints.down("xl"))}}},51372:function(n,e,r){var t;r.d(e,{K:function(){return t}}),function(n){n.TABLE="table",n.CARD="card"}(t||(t={}))},39841:function(n,e,r){var t=r(64836);e.Z=void 0;var i=t(r(45649)),a=r(80184),o=(0,i.default)((0,a.jsx)("path",{d:"M10 10.02h5V21h-5zM17 21h3c1.1 0 2-.9 2-2v-9h-5v11zm3-18H5c-1.1 0-2 .9-2 2v3h19V5c0-1.1-.9-2-2-2zM3 19c0 1.1.9 2 2 2h3V10H3v9z"}),"TableChart");e.Z=o},40824:function(n,e,r){var t=r(64836);e.Z=void 0;var i=t(r(45649)),a=r(80184),o=(0,i.default)((0,a.jsx)("path",{d:"M14.67 5v6.5H9.33V5h5.34zm1 6.5H21V5h-5.33v6.5zm-1 7.5v-6.5H9.33V19h5.34zm1-6.5V19H21v-6.5h-5.33zm-7.34 0H3V19h5.33v-6.5zm0-1V5H3v6.5h5.33z"}),"ViewModule");e.Z=o},96580:function(n,e,r){r.d(e,{Z:function(){return z}});var t=r(30168),i=r(63366),a=r(87462),o=r(72791),s=r(28182),c=r(94419),l=r(52554),d=r(49853),u=r(85513),h=r(60277),f=r(75878),v=r(21217);function m(n){return(0,v.Z)("MuiCircularProgress",n)}(0,f.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var p,x,Z,g,w,j,b,y,k=r(80184),C=["className","color","disableShrink","size","style","thickness","value","variant"],S=44,M=(0,l.F4)(w||(w=p||(p=(0,t.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),P=(0,l.F4)(j||(j=x||(x=(0,t.Z)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),F=(0,h.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(n,e){var r=n.ownerState;return[e.root,e[r.variant],e["color".concat((0,d.Z)(r.color))]]}})((function(n){var e=n.ownerState,r=n.theme;return(0,a.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:r.transitions.create("transform")},"inherit"!==e.color&&{color:(r.vars||r).palette[e.color].main})}),(function(n){return"indeterminate"===n.ownerState.variant&&(0,l.iv)(b||(b=Z||(Z=(0,t.Z)(["\n      animation: "," 1.4s linear infinite;\n    "]))),M)})),D=(0,h.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(n,e){return e.svg}})({display:"block"}),R=(0,h.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(n,e){var r=n.ownerState;return[e.circle,e["circle".concat((0,d.Z)(r.variant))],r.disableShrink&&e.circleDisableShrink]}})((function(n){var e=n.ownerState,r=n.theme;return(0,a.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:r.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(n){var e=n.ownerState;return"indeterminate"===e.variant&&!e.disableShrink&&(0,l.iv)(y||(y=g||(g=(0,t.Z)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),P)})),z=o.forwardRef((function(n,e){var r=(0,u.Z)({props:n,name:"MuiCircularProgress"}),t=r.className,o=r.color,l=void 0===o?"primary":o,h=r.disableShrink,f=void 0!==h&&h,v=r.size,p=void 0===v?40:v,x=r.style,Z=r.thickness,g=void 0===Z?3.6:Z,w=r.value,j=void 0===w?0:w,b=r.variant,y=void 0===b?"indeterminate":b,M=(0,i.Z)(r,C),P=(0,a.Z)({},r,{color:l,disableShrink:f,size:p,thickness:g,value:j,variant:y}),z=function(n){var e=n.classes,r=n.variant,t=n.color,i=n.disableShrink,a={root:["root",r,"color".concat((0,d.Z)(t))],svg:["svg"],circle:["circle","circle".concat((0,d.Z)(r)),i&&"circleDisableShrink"]};return(0,c.Z)(a,m,e)}(P),V={},A={},N={};if("determinate"===y){var I=2*Math.PI*((S-g)/2);V.strokeDasharray=I.toFixed(3),N["aria-valuenow"]=Math.round(j),V.strokeDashoffset="".concat(((100-j)/100*I).toFixed(3),"px"),A.transform="rotate(-90deg)"}return(0,k.jsx)(F,(0,a.Z)({className:(0,s.Z)(z.root,t),style:(0,a.Z)({width:p,height:p},A,x),ownerState:P,ref:e,role:"progressbar"},N,M,{children:(0,k.jsx)(D,{className:z.svg,ownerState:P,viewBox:"".concat(22," ").concat(22," ").concat(S," ").concat(S),children:(0,k.jsx)(R,{className:z.circle,style:V,ownerState:P,cx:S,cy:S,r:(S-g)/2,fill:"none",strokeWidth:g})})}))}))},91441:function(n,e,r){r.d(e,{Z:function(){return R}});var t=r(30168),i=r(63366),a=r(87462),o=r(72791),s=r(28182),c=r(52554),l=r(94419);function d(n){return String(n).match(/[\d.\-+]*\s*(.*)/)[1]||""}function u(n){return parseFloat(n)}var h=r(12065),f=r(60277),v=r(85513),m=r(75878),p=r(21217);function x(n){return(0,p.Z)("MuiSkeleton",n)}(0,m.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var Z,g,w,j,b,y,k,C,S=r(80184),M=["animation","className","component","height","style","variant","width"],P=(0,c.F4)(b||(b=Z||(Z=(0,t.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),F=(0,c.F4)(y||(y=g||(g=(0,t.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),D=(0,f.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(n,e){var r=n.ownerState;return[e.root,e[r.variant],!1!==r.animation&&e[r.animation],r.hasChildren&&e.withChildren,r.hasChildren&&!r.width&&e.fitContent,r.hasChildren&&!r.height&&e.heightAuto]}})((function(n){var e=n.theme,r=n.ownerState,t=d(e.shape.borderRadius)||"px",i=u(e.shape.borderRadius);return(0,a.Z)({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:(0,h.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===r.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(i).concat(t,"/").concat(Math.round(i/.6*10)/10).concat(t),"&:empty:before":{content:'"\\00a0"'}},"circular"===r.variant&&{borderRadius:"50%"},"rounded"===r.variant&&{borderRadius:(e.vars||e).shape.borderRadius},r.hasChildren&&{"& > *":{visibility:"hidden"}},r.hasChildren&&!r.width&&{maxWidth:"fit-content"},r.hasChildren&&!r.height&&{height:"auto"})}),(function(n){return"pulse"===n.ownerState.animation&&(0,c.iv)(k||(k=w||(w=(0,t.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),P)}),(function(n){var e=n.ownerState,r=n.theme;return"wave"===e.animation&&(0,c.iv)(C||(C=j||(j=(0,t.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),F,(r.vars||r).palette.action.hover)})),R=o.forwardRef((function(n,e){var r=(0,v.Z)({props:n,name:"MuiSkeleton"}),t=r.animation,o=void 0===t?"pulse":t,c=r.className,d=r.component,u=void 0===d?"span":d,h=r.height,f=r.style,m=r.variant,p=void 0===m?"text":m,Z=r.width,g=(0,i.Z)(r,M),w=(0,a.Z)({},r,{animation:o,component:u,variant:p,hasChildren:Boolean(g.children)}),j=function(n){var e=n.classes,r=n.variant,t=n.animation,i=n.hasChildren,a=n.width,o=n.height,s={root:["root",r,t,i&&"withChildren",i&&!a&&"fitContent",i&&!o&&"heightAuto"]};return(0,l.Z)(s,x,e)}(w);return(0,S.jsx)(D,(0,a.Z)({as:u,ref:e,className:(0,s.Z)(j.root,c),ownerState:w},g,{style:(0,a.Z)({width:Z,height:h},f)}))}))}}]);
//# sourceMappingURL=717.6ff2e604.chunk.js.map