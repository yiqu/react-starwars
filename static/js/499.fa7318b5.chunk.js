(self.webpackChunkstarwars=self.webpackChunkstarwars||[]).push([[499],{203:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return ln}});var r=e(1413),i=e(885),a=e(2791),o=e(6227),s=e(799),c=e(6884),l=e(1070),u=e.n(l),d=e(5885),h=function(n){var t=[];n&&Object.keys(n).forEach((function(e){t.push((0,r.Z)({fireId:e},n[e]))}));return t},f=function(n){var t=n.user,e=n.params,o=(0,a.useState)(),l=(0,i.Z)(o,2),f=l[0],p=l[1];(0,c.Z)((function(){var n=u()("https://kq-1-1a499.firebaseio.com/","/swdb/:user/added-films.json",(0,r.Z)({user:"yqu"},e));p(n)}),[t,e]);var x=(0,s.ZP)((function(){return f||null}),(function(n){return(0,d.k)(n,2e3)}),{shouldRetryOnError:!1,revalidateOnFocus:!1,revalidateIfStale:!1}),m=x.data,v=x.isValidating,g=x.error,Z=x.isLoading;return{personalFilms:m?h(m):m,personalFilmsLoading:Z,personalFilmsValidating:v,personalFilmsError:g}},p=e(168),x=e(3366),m=e(7462),v=e(8182),g=e(2554),Z=e(4419);function j(n){return String(n).match(/[\d.\-+]*\s*(.*)/)[1]||""}function w(n){return parseFloat(n)}var b=e(2065),y=e(277),C=e(5513),k=e(5878),S=e(1217);function F(n){return(0,S.Z)("MuiSkeleton",n)}(0,k.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var R,A,M,D,E,P,T,I,N=e(184),L=["animation","className","component","height","style","variant","width"],z=(0,g.F4)(E||(E=R||(R=(0,p.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),B=(0,g.F4)(P||(P=A||(A=(0,p.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),O=(0,y.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(n,t){var e=n.ownerState;return[t.root,t[e.variant],!1!==e.animation&&t[e.animation],e.hasChildren&&t.withChildren,e.hasChildren&&!e.width&&t.fitContent,e.hasChildren&&!e.height&&t.heightAuto]}})((function(n){var t=n.theme,e=n.ownerState,r=j(t.shape.borderRadius)||"px",i=w(t.shape.borderRadius);return(0,m.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,b.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===e.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(i).concat(r,"/").concat(Math.round(i/.6*10)/10).concat(r),"&:empty:before":{content:'"\\00a0"'}},"circular"===e.variant&&{borderRadius:"50%"},"rounded"===e.variant&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})}),(function(n){return"pulse"===n.ownerState.animation&&(0,g.iv)(T||(T=M||(M=(0,p.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),z)}),(function(n){var t=n.ownerState,e=n.theme;return"wave"===t.animation&&(0,g.iv)(I||(I=D||(D=(0,p.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),B,(e.vars||e).palette.action.hover)})),Y=a.forwardRef((function(n,t){var e=(0,C.Z)({props:n,name:"MuiSkeleton"}),r=e.animation,i=void 0===r?"pulse":r,a=e.className,o=e.component,s=void 0===o?"span":o,c=e.height,l=e.style,u=e.variant,d=void 0===u?"text":u,h=e.width,f=(0,x.Z)(e,L),p=(0,m.Z)({},e,{animation:i,component:s,variant:d,hasChildren:Boolean(f.children)}),g=function(n){var t=n.classes,e=n.variant,r=n.animation,i=n.hasChildren,a=n.width,o=n.height,s={root:["root",e,r,i&&"withChildren",i&&!a&&"fitContent",i&&!o&&"heightAuto"]};return(0,Z.Z)(s,F,t)}(p);return(0,N.jsx)(O,(0,m.Z)({as:s,ref:t,className:(0,v.Z)(g.root,a),ownerState:p},f,{style:(0,m.Z)({width:h,height:c},l)}))})),q=e(4162),K=e(763),X=function(n){var t=n.count;return(0,N.jsxs)(o.Z,{direction:"column",padding:2,xs:12,children:[(0,N.jsx)(o.Z,{xs:12,md:6,children:(0,N.jsx)(Y,{variant:"text",sx:{fontSize:"2rem"}})}),(0,N.jsx)(o.Z,{container:!0,spacing:2,children:(0,K.times)(t,(function(n){return(0,N.jsxs)(o.Z,{xs:12,sm:12,md:!0,children:[(0,N.jsxs)(q.Z,{direction:"row",sx:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[(0,N.jsx)(Y,{variant:"text",sx:{fontSize:"2rem",width:"10rem"}}),(0,N.jsx)(Y,{variant:"circular",width:40,height:40})]}),(0,N.jsx)(Y,{variant:"rectangular",height:"30rem"})]},n)}))})]})},V=e(5814),W=e(3811),G=e(5290),H=e(3808),U=e(1372),_=e(4596),$=e(1087),J=e(9841),Q=e(824),nn=e(8928),tn=e(199),en=e(5194),rn=e(4565),an=e(6875),on=e(7205),sn=e(1155);function cn(n){var t=n.title,e=(n.canon,n.characters,n.director),r=n.fireId,i=n.openingCrawl;n.planets,n.species,n.starships,n.vehicles;return(0,N.jsxs)(nn.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"space-between"},elevation:4,children:[(0,N.jsxs)("div",{children:[(0,N.jsx)(tn.Z,{component:"img",alt:"poster",height:"440",image:"".concat("","/assets/film/sw-blk-logo.png"),sx:{backgroundColor:"#000",objectFit:"contain"}}),(0,N.jsxs)(en.Z,{children:[(0,N.jsxs)(q.Z,{direction:{lg:"column",xl:"row"},justifyContent:{xl:"space-between",lg:"flex-start"},marginBottom:{lg:"10px",xl:"0px"},children:[(0,N.jsx)(rn.Z,{gutterBottom:!0,variant:"h5",component:$.rU,to:"./".concat(r),sx:{fontFamily:"Poppins",fontWeight:"500"},children:t}),(0,N.jsx)(rn.Z,{variant:"h5",color:"text.secondary",sx:{fontWeight:"300"}})]}),(0,N.jsxs)(q.Z,{spacing:1,children:[(0,N.jsxs)(rn.Z,{variant:"body2",color:"text.secondary",children:["Released: ",(0,N.jsx)(sn.Z,{date:0,format:"MMM Do YYYY"})]}),(0,N.jsxs)(rn.Z,{variant:"body2",color:"text.secondary",children:["Directed by: ",e]}),(0,N.jsxs)(rn.Z,{variant:"body2",color:"text.secondary",children:["Produced by: ","producer"]}),(0,N.jsx)(rn.Z,{variant:"body2",color:"text.primary",children:i})]})]})]}),(0,N.jsx)(an.Z,{sx:{display:"flex",justifyContent:"space-between"},children:(0,N.jsx)("div",{children:(0,N.jsx)(on.Z,{size:"small",component:$.rU,to:"./".concat(r),children:"Learn More"})})})]})}function ln(){var n=(0,a.useState)(0),t=(0,i.Z)(n,2),e=t[0],s=(t[1],(0,_.Z)().isMobile),c=(0,$.lr)(),l=(0,i.Z)(c,2),u=l[0],d=l[1],h=u.get("moviePageDisplayMode"),p=(0,a.useState)(h),x=(0,i.Z)(p,2),m=x[0],v=(x[1],f({user:"yqu",params:{fetchTime:e}})),g=v.personalFilms,Z=v.personalFilmsLoading,j=v.personalFilmsError;v.personalFilmsValidating;return Z?(0,N.jsx)(X,{count:4}):j?(0,N.jsx)("div",{children:"Error Page"}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(H.Z,{toolbarProps:{position:"sticky",sx:{top:s?"56px":"64px"}},children:(0,N.jsxs)(o.Z,{container:!0,xs:12,flexDirection:{xs:"row",sm:"row"},justifyContent:"space-between",alignItems:"center",children:[(0,N.jsx)(o.Z,{xs:10,sm:4,children:(0,N.jsx)(q.Z,{direction:"row",justifyContent:"start",alignItems:"center",children:Z&&(0,N.jsx)(G.Z,{size:20})})}),(0,N.jsx)(o.Z,{xs:2,sm:8,children:(0,N.jsx)(q.Z,{direction:"row",justifyContent:"flex-end",alignItems:"center",children:(0,N.jsx)(V.Z,{title:"Switch to ".concat(un(m)),children:(0,N.jsx)(W.Z,{onClick:function(){var n={moviePageDisplayMode:un(m)};d(n)},children:m===U.K.CARD?(0,N.jsx)(J.Z,{}):(0,N.jsx)(Q.Z,{})})})})})]})}),(0,N.jsx)(q.Z,{direction:"column",p:2,width:"100%",children:(0,N.jsx)(o.Z,{container:!0,disableEqualOverflow:!0,rowSpacing:4,children:null===g||void 0===g?void 0:g.map((function(n){return(0,N.jsx)(o.Z,{xs:12,sm:4,smOffset:4,children:(0,N.jsx)(cn,(0,r.Z)({},n))},n.fireId)}))})})]})}var un=function(n){return n&&n===U.K.CARD?U.K.TABLE:U.K.CARD}},1155:function(n,t,e){"use strict";var r=e(5814),i=e(6431),a=e.n(i),o=e(2426),s=e.n(o),c=e(184);t.Z=function(n){var t=n.date,e=void 0===t?0:t,i=n.fromNow,o=void 0===i||i,l=n.format,u=void 0===l?"MM/DD/YY HH:mm":l;return(0,c.jsx)(r.Z,{title:e?s()(e).format(u):"No date found",children:(0,c.jsx)("span",{children:e?(0,c.jsx)(a(),{date:e,fromNow:o}):(0,c.jsx)(c.Fragment,{children:"N/A"})})})}},5290:function(n,t,e){"use strict";e.d(t,{Z:function(){return o}});e(2791);var r=e(4162),i=e(6580),a=e(184);function o(n){var t=n.size,e=void 0===t?40:t,o=n.color,s=void 0===o?"grey.500":o;return(0,a.jsx)(r.Z,{sx:{color:s},spacing:1,direction:"row",children:(0,a.jsx)(i.Z,{color:"inherit",size:e})})}},3808:function(n,t,e){"use strict";e.d(t,{Z:function(){return c}});var r=e(1413),i=e(2892),a=e(4666),o=e(3906),s=e(184);function c(n){var t=n.toolbarProps,e=n.children;return(0,s.jsx)(i.Z,(0,r.Z)((0,r.Z)({elevation:0},t),{},{children:(0,s.jsx)(a.Z,{variant:"regular",sx:{bgcolor:function(n){return"light"===n.palette.mode?o.s[100]:null},color:function(n){return"light"===n.palette.mode?"#000":null}},children:e})}))}},5885:function(n,t,e){"use strict";e.d(t,{k:function(){return c},$:function(){return l}});var r=e(4165),i=e(5861),a=e(4569),o=e.n(a);function s(n){return new Promise((function(t,e){setTimeout((function(){t()}),n)}))}var c=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t){var e,i,a=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(e=a.length>1&&void 0!==a[1]?a[1]:0)){n.next=4;break}return n.next=4,s(e);case 4:return n.prev=4,n.next=7,o().get(t,{headers:{"Content-Type":"application/json"},responseType:"json"});case 7:if(200!==(i=n.sent).status){n.next=10;break}return n.abrupt("return",i.data);case 10:return n.abrupt("return",Promise.reject(i));case 13:throw n.prev=13,n.t0=n.catch(4),console.error("App fetcher GET error:",n.t0),n.t0;case 17:case"end":return n.stop()}}),n,null,[[4,13]])})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t,e){var i,a,c=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(i=c.length>2&&void 0!==c[2]?c[2]:0)){n.next=4;break}return n.next=4,s(i);case 4:return n.prev=4,n.next=7,o().get(t,{headers:{"Content-Type":"application/json"},responseType:"json",signal:e.signal});case 7:if(200!==(a=n.sent).status){n.next=10;break}return n.abrupt("return",a.data);case 10:return n.abrupt("return",Promise.reject(a));case 13:throw n.prev=13,n.t0=n.catch(4),"ERR_CANCELED"!==n.t0.code&&console.error("App fetcher GET error:",n.t0),n.t0;case 17:case"end":return n.stop()}}),n,null,[[4,13]])})));return function(t,e){return n.apply(this,arguments)}}()},1372:function(n,t,e){"use strict";var r;e.d(t,{K:function(){return r}}),function(n){n.TABLE="table",n.CARD="card"}(r||(r={}))},4654:function(){}}]);
//# sourceMappingURL=499.fa7318b5.chunk.js.map