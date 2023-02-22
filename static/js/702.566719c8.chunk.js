"use strict";(self.webpackChunkstarwars=self.webpackChunkstarwars||[]).push([[702],{99702:function(n,t,e){e.r(t),e.d(t,{default:function(){return R}});var r=e(64317),i=e(5826),a=e(36227),o=e(94162),s=e(91441),c=e(80184);function d(n){return n.loading?(0,c.jsxs)(a.Z,{xs:12,sm:12,children:[(0,c.jsxs)(o.Z,{direction:"row",sx:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[(0,c.jsx)(s.Z,{variant:"text",sx:{fontSize:"2rem",width:"10rem"}}),(0,c.jsx)(s.Z,{variant:"circular",width:40,height:40})]}),(0,c.jsx)(s.Z,{variant:"rectangular",height:"30rem"})]}):(0,c.jsx)(c.Fragment,{children:n.children})}var l=e(1413),u=e(48928),h=e(55194),f=e(96015),v=e(30199),m=e(4565),p=e(96875),g=e(17205),x=e(36976),Z=e(11155),w=e(54596),j=e(61501),b=e(70773),C=e(51070),k=e.n(C),y=e(5130),F=e(11087);function S(n){var t=n.fav,e=((0,w.Z)().isMobile,(0,r.T)());return(0,c.jsxs)(u.Z,{children:[(0,c.jsx)(h.Z,{children:(0,c.jsxs)(o.Z,{direction:"row",spacing:2,children:[(0,c.jsx)(f.Z,{children:(0,c.jsx)(v.Z,{component:"img",alt:"poster",height:"100",image:"".concat("","/assets/poster-img/").concat(t.episodeId,".png"),sx:{backgroundColor:"#000",objectFit:"contain",borderRadius:"20px"}})}),(0,c.jsxs)(o.Z,{direction:"column",spacing:.3,children:[(0,c.jsxs)(m.Z,{variant:"h5",sx:{fontWeight:"500",fontFamily:"Poppins"},component:F.rU,to:"/movies/".concat(t.filmId),children:["EP ",t.episodeId]}),(0,c.jsx)(f.Z,{color:"text.secondary",children:(0,c.jsxs)(o.Z,{direction:"row",spacing:.3,children:[(0,c.jsx)(f.Z,{children:"Favorited"}),(0,c.jsx)(Z.Z,{date:t.lastUpdated,fromNow:!0})]})})]})]})}),(0,c.jsx)(p.Z,{children:(0,c.jsx)(g.Z,{variant:"text",startIcon:t.apiWorking?(0,c.jsx)(x.Z,{}):(0,c.jsx)(y.Z,{}),onClick:function(){if(t.isCurrentFavorite){var n=(0,l.Z)({},t),r=k()(b.K,"swdb/:user/favorites/".concat(t.fireId,".json"),{user:"yqu"});e((0,j._6)({fav:n,favStatus:!1,url:r})).unwrap().then((function(n){}))}},title:t.isCurrentFavorite?"Unfavorite this film":"",disabled:t.apiWorking,fullWidth:!0,color:"error",children:"Remove"})})]})}function R(){var n=(0,r.C)(i.f3),t=(0,r.C)(i.RK);return!(0,r.C)(i.xU)&&n.length<1?(0,c.jsx)(a.Z,{container:!0,children:(0,c.jsx)(a.Z,{md:4,xs:12,children:(0,c.jsx)(m.Z,{children:"No favorites found."})})}):(0,c.jsx)(d,{loading:t,children:(0,c.jsx)(a.Z,{container:!0,spacing:2,children:n.map((function(n){return(0,c.jsx)(a.Z,{md:2,xs:12,children:(0,c.jsx)(S,{fav:n})},n.fireId)}))})})}},5826:function(n,t,e){e.d(t,{JJ:function(){return u},RK:function(){return h},_d:function(){return f},f3:function(){return v},xU:function(){return l}});var r=e(1413),i=e(46916),a=e(92546),o=e(18581),s=function(n){return n.favoriteFilms},c=o.VL.getSelectors((function(n){return n.favoriteFilms})),d=c.selectAll,l=(c.selectById,c.selectEntities,c.selectIds,c.selectTotal,function(n){return s(n).loading}),u=function(n){return s(n).favoriteToggleLoading},h=function(n){return s(n).firstTimeLoading},f=(0,i.P1)(d,(function(n){var t={};return n.forEach((function(n){t[n.episodeId]=(0,r.Z)({},n)})),t})),v=(0,i.P1)(d,(function(n){return(0,a.ZP)(n,(function(n){return n.filter((function(n){return!!n.isCurrentFavorite})).sort((function(n,t){return n.lastUpdated<t.lastUpdated?1:-1}))}))}))},11155:function(n,t,e){var r=e(75814),i=e(4565),a=e(46431),o=e.n(a),s=e(72426),c=e.n(s),d=e(80184);t.Z=function(n){var t=n.date,e=void 0===t?0:t,a=n.fromNow,s=void 0===a||a,l=n.format,u=void 0===l?"MM/DD/YY HH:mm":l;return(0,d.jsx)(r.Z,{title:e?c()(e).format(u):"No date found",children:(0,d.jsx)(i.Z,{component:"span",display:"flex",alignItems:"center",justifyContent:"center",children:e?(0,d.jsx)(o(),{date:e,fromNow:s,format:s?void 0:u,interval:6e4}):(0,d.jsx)(d.Fragment,{children:"N/A"})})})}},64317:function(n,t,e){e.d(t,{C:function(){return a},T:function(){return i}});var r=e(59434),i=r.I0,a=r.v9},5130:function(n,t,e){var r=e(64836);t.Z=void 0;var i=r(e(45649)),a=e(80184),o=(0,i.default)((0,a.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");t.Z=o},36976:function(n,t,e){var r=e(64836);t.Z=void 0;var i=r(e(45649)),a=e(80184),o=(0,i.default)((0,a.jsx)("path",{d:"m18 22-.01-6L14 12l3.99-4.01L18 2H6v6l4 4-4 3.99V22h12zM8 7.5V4h8v3.5l-4 4-4-4z"}),"HourglassBottom");t.Z=o},91441:function(n,t,e){e.d(t,{Z:function(){return N}});var r=e(30168),i=e(63366),a=e(87462),o=e(72791),s=e(28182),c=e(52554),d=e(94419);function l(n){return String(n).match(/[\d.\-+]*\s*(.*)/)[1]||""}function u(n){return parseFloat(n)}var h=e(12065),f=e(60277),v=e(85513),m=e(75878),p=e(21217);function g(n){return(0,p.Z)("MuiSkeleton",n)}(0,m.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var x,Z,w,j,b,C,k,y,F=e(80184),S=["animation","className","component","height","style","variant","width"],R=(0,c.F4)(b||(b=x||(x=(0,r.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),I=(0,c.F4)(C||(C=Z||(Z=(0,r.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),M=(0,f.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(n,t){var e=n.ownerState;return[t.root,t[e.variant],!1!==e.animation&&t[e.animation],e.hasChildren&&t.withChildren,e.hasChildren&&!e.width&&t.fitContent,e.hasChildren&&!e.height&&t.heightAuto]}})((function(n){var t=n.theme,e=n.ownerState,r=l(t.shape.borderRadius)||"px",i=u(t.shape.borderRadius);return(0,a.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,h.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===e.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(i).concat(r,"/").concat(Math.round(i/.6*10)/10).concat(r),"&:empty:before":{content:'"\\00a0"'}},"circular"===e.variant&&{borderRadius:"50%"},"rounded"===e.variant&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})}),(function(n){return"pulse"===n.ownerState.animation&&(0,c.iv)(k||(k=w||(w=(0,r.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),R)}),(function(n){var t=n.ownerState,e=n.theme;return"wave"===t.animation&&(0,c.iv)(y||(y=j||(j=(0,r.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),I,(e.vars||e).palette.action.hover)})),N=o.forwardRef((function(n,t){var e=(0,v.Z)({props:n,name:"MuiSkeleton"}),r=e.animation,o=void 0===r?"pulse":r,c=e.className,l=e.component,u=void 0===l?"span":l,h=e.height,f=e.style,m=e.variant,p=void 0===m?"text":m,x=e.width,Z=(0,i.Z)(e,S),w=(0,a.Z)({},e,{animation:o,component:u,variant:p,hasChildren:Boolean(Z.children)}),j=function(n){var t=n.classes,e=n.variant,r=n.animation,i=n.hasChildren,a=n.width,o=n.height,s={root:["root",e,r,i&&"withChildren",i&&!a&&"fitContent",i&&!o&&"heightAuto"]};return(0,d.Z)(s,g,t)}(w);return(0,F.jsx)(M,(0,a.Z)({as:u,ref:t,className:(0,s.Z)(j.root,c),ownerState:w},Z,{style:(0,a.Z)({width:x,height:h},f)}))}))}}]);
//# sourceMappingURL=702.566719c8.chunk.js.map