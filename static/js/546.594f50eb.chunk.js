"use strict";(self.webpackChunkstarwars=self.webpackChunkstarwars||[]).push([[546],{14546:function(n,t,e){e.r(t),e.d(t,{default:function(){return q}});var r=e(64317),i=e(5826),o=e(36227),a=e(94162),s=e(91441),c=e(80184);function l(n){return n.loading?(0,c.jsxs)(o.Z,{xs:12,sm:12,children:[(0,c.jsxs)(a.Z,{direction:"row",sx:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[(0,c.jsx)(s.Z,{variant:"text",sx:{fontSize:"2rem",width:"10rem"}}),(0,c.jsx)(s.Z,{variant:"circular",width:40,height:40})]}),(0,c.jsx)(s.Z,{variant:"rectangular",height:"30rem"})]}):(0,c.jsx)(c.Fragment,{children:n.children})}var d=e(1413),u=e(70885),h=e(48928),f=e(55194),m=e(96015),v=e(30199),p=e(4565),g=e(96875),x=e(17205),Z=e(36976),j=e(11155),w=e(54596),C=e(61501),b=e(70773),y=e(51070),k=e.n(y),F=e(5130),S=e(11087),R=e(60788),M=e(40464),I=e(8440),N=e(63366),T=e(87462),P=e(72791),A=e(28182),U=e(94419),D=e(60277),L=e(85513),W=e(75878),z=e(21217);function B(n){return(0,z.Z)("MuiDialogContentText",n)}(0,W.Z)("MuiDialogContentText",["root"]);var E=["children","className"],H=(0,D.ZP)(p.Z,{shouldForwardProp:function(n){return(0,D.FO)(n)||"classes"===n},name:"MuiDialogContentText",slot:"Root",overridesResolver:function(n,t){return t.root}})({}),X=P.forwardRef((function(n,t){var e=(0,L.Z)({props:n,name:"MuiDialogContentText"}),r=e.className,i=(0,N.Z)(e,E),o=function(n){var t=n.classes,e=(0,U.Z)({root:["root"]},B,t);return(0,T.Z)({},t,e)}(i);return(0,c.jsx)(H,(0,T.Z)({component:"p",variant:"body1",color:"text.secondary",ref:t,ownerState:i,className:(0,A.Z)(o.root,r)},e,{classes:o}))})),K=e(77248);function V(n){var t=n.open,e=n.handleClose,r=n.title,i=n.message,o=function(n){return function(t){e(n)}};return(0,c.jsxs)(R.Z,{open:!!t,onClose:function(n,t){e(!1)},children:[(0,c.jsx)(M.Z,{id:"confirm-dialog",mb:2,sx:{bgcolor:function(n){return"light"===n.palette.mode?"primary.light":null},color:function(n){return"light"===n.palette.mode?"#fff":null}},children:null!==r&&void 0!==r?r:"Confirmation"}),(0,c.jsx)(I.Z,{children:(0,c.jsx)(X,{id:"confirm-dialog-description",children:null!==i&&void 0!==i?i:"Are you sure?"})}),(0,c.jsxs)(K.Z,{children:[(0,c.jsx)(x.Z,{onClick:o(!1),sx:{color:"gray"},children:"Cancel"}),(0,c.jsx)(x.Z,{onClick:o(!0),autoFocus:!0,children:"Confirm"})]})]})}function _(n){var t=n.fav,e=((0,w.Z)().isMobile,(0,r.T)()),i=(0,P.useState)(!1),o=(0,u.Z)(i,2),s=o[0],l=o[1];return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(h.Z,{children:[(0,c.jsx)(f.Z,{children:(0,c.jsxs)(a.Z,{direction:"row",spacing:2,children:[(0,c.jsx)(m.Z,{children:(0,c.jsx)(v.Z,{component:"img",alt:"poster",height:"100",image:"".concat("","/assets/poster-img/").concat(t.episodeId,".png"),sx:{backgroundColor:"#000",objectFit:"contain",borderRadius:"20px"}})}),(0,c.jsxs)(a.Z,{direction:"column",spacing:.3,children:[(0,c.jsxs)(p.Z,{variant:"h5",sx:{fontWeight:"500",fontFamily:"Poppins"},component:S.rU,to:"/movies/".concat(t.filmId),children:["EP ",t.episodeId]}),(0,c.jsx)(m.Z,{color:"text.secondary",children:(0,c.jsxs)(a.Z,{direction:"row",spacing:.3,children:[(0,c.jsx)(m.Z,{children:"Favorited"}),(0,c.jsx)(j.Z,{date:t.lastUpdated,fromNow:!0})]})})]})]})}),(0,c.jsx)(g.Z,{children:(0,c.jsx)(x.Z,{variant:"text",startIcon:t.apiWorking?(0,c.jsx)(Z.Z,{}):(0,c.jsx)(F.Z,{}),onClick:function(){l(!0)},title:t.isCurrentFavorite?"Unfavorite this film":"",disabled:t.apiWorking,fullWidth:!0,color:"error",children:"Remove"})})]}),(0,c.jsx)(V,{handleClose:function(n){l(!1),n&&function(){if(t.isCurrentFavorite){var n=(0,d.Z)({},t),r=k()(b.K,"swdb/:user/favorites/".concat(t.fireId,".json"),{user:"yqu"});e((0,C._6)({fav:n,favStatus:!1,url:r})).unwrap().then((function(n){}))}}()},open:s,message:"Are you sure you want to remove EP ".concat(t.episodeId," from favorites?")})]})}function q(){var n=(0,r.C)(i.f3),t=(0,r.C)(i.RK);return!(0,r.C)(i.xU)&&n.length<1?(0,c.jsx)(o.Z,{container:!0,children:(0,c.jsx)(o.Z,{md:4,xs:12,children:(0,c.jsx)(p.Z,{children:"No favorites found."})})}):(0,c.jsx)(l,{loading:t,children:(0,c.jsx)(o.Z,{container:!0,spacing:2,children:n.map((function(n){return(0,c.jsx)(o.Z,{md:2,xs:12,children:(0,c.jsx)(_,{fav:n})},n.fireId)}))})})}},5826:function(n,t,e){e.d(t,{JJ:function(){return u},RK:function(){return h},_d:function(){return f},f3:function(){return m},xU:function(){return d}});var r=e(1413),i=e(46916),o=e(92546),a=e(18581),s=function(n){return n.favoriteFilms},c=a.VL.getSelectors((function(n){return n.favoriteFilms})),l=c.selectAll,d=(c.selectById,c.selectEntities,c.selectIds,c.selectTotal,function(n){return s(n).loading}),u=function(n){return s(n).favoriteToggleLoading},h=function(n){return s(n).firstTimeLoading},f=(0,i.P1)(l,(function(n){var t={};return n.forEach((function(n){t[n.episodeId]=(0,r.Z)({},n)})),t})),m=(0,i.P1)(l,(function(n){return(0,o.ZP)(n,(function(n){return n.filter((function(n){return!!n.isCurrentFavorite})).sort((function(n,t){return n.lastUpdated<t.lastUpdated?1:-1}))}))}))},11155:function(n,t,e){var r=e(75814),i=e(4565),o=e(46431),a=e.n(o),s=e(72426),c=e.n(s),l=e(80184);t.Z=function(n){var t=n.date,e=void 0===t?0:t,o=n.fromNow,s=void 0===o||o,d=n.format,u=void 0===d?"MM/DD/YY HH:mm":d;return(0,l.jsx)(r.Z,{title:e?c()(e).format(u):"No date found",children:(0,l.jsx)(i.Z,{component:"span",display:"flex",alignItems:"center",justifyContent:"center",children:e?(0,l.jsx)(a(),{date:e,fromNow:s,format:s?void 0:u,interval:6e4}):(0,l.jsx)(l.Fragment,{children:"N/A"})})})}},64317:function(n,t,e){e.d(t,{C:function(){return o},T:function(){return i}});var r=e(59434),i=r.I0,o=r.v9},5130:function(n,t,e){var r=e(64836);t.Z=void 0;var i=r(e(45649)),o=e(80184),a=(0,i.default)((0,o.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");t.Z=a},36976:function(n,t,e){var r=e(64836);t.Z=void 0;var i=r(e(45649)),o=e(80184),a=(0,i.default)((0,o.jsx)("path",{d:"m18 22-.01-6L14 12l3.99-4.01L18 2H6v6l4 4-4 3.99V22h12zM8 7.5V4h8v3.5l-4 4-4-4z"}),"HourglassBottom");t.Z=a},91441:function(n,t,e){e.d(t,{Z:function(){return N}});var r=e(30168),i=e(63366),o=e(87462),a=e(72791),s=e(28182),c=e(52554),l=e(94419);function d(n){return String(n).match(/[\d.\-+]*\s*(.*)/)[1]||""}function u(n){return parseFloat(n)}var h=e(12065),f=e(60277),m=e(85513),v=e(75878),p=e(21217);function g(n){return(0,p.Z)("MuiSkeleton",n)}(0,v.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var x,Z,j,w,C,b,y,k,F=e(80184),S=["animation","className","component","height","style","variant","width"],R=(0,c.F4)(C||(C=x||(x=(0,r.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),M=(0,c.F4)(b||(b=Z||(Z=(0,r.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),I=(0,f.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(n,t){var e=n.ownerState;return[t.root,t[e.variant],!1!==e.animation&&t[e.animation],e.hasChildren&&t.withChildren,e.hasChildren&&!e.width&&t.fitContent,e.hasChildren&&!e.height&&t.heightAuto]}})((function(n){var t=n.theme,e=n.ownerState,r=d(t.shape.borderRadius)||"px",i=u(t.shape.borderRadius);return(0,o.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,h.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===e.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(i).concat(r,"/").concat(Math.round(i/.6*10)/10).concat(r),"&:empty:before":{content:'"\\00a0"'}},"circular"===e.variant&&{borderRadius:"50%"},"rounded"===e.variant&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})}),(function(n){return"pulse"===n.ownerState.animation&&(0,c.iv)(y||(y=j||(j=(0,r.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),R)}),(function(n){var t=n.ownerState,e=n.theme;return"wave"===t.animation&&(0,c.iv)(k||(k=w||(w=(0,r.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),M,(e.vars||e).palette.action.hover)})),N=a.forwardRef((function(n,t){var e=(0,m.Z)({props:n,name:"MuiSkeleton"}),r=e.animation,a=void 0===r?"pulse":r,c=e.className,d=e.component,u=void 0===d?"span":d,h=e.height,f=e.style,v=e.variant,p=void 0===v?"text":v,x=e.width,Z=(0,i.Z)(e,S),j=(0,o.Z)({},e,{animation:a,component:u,variant:p,hasChildren:Boolean(Z.children)}),w=function(n){var t=n.classes,e=n.variant,r=n.animation,i=n.hasChildren,o=n.width,a=n.height,s={root:["root",e,r,i&&"withChildren",i&&!o&&"fitContent",i&&!a&&"heightAuto"]};return(0,l.Z)(s,g,t)}(j);return(0,F.jsx)(I,(0,o.Z)({as:u,ref:t,className:(0,s.Z)(w.root,c),ownerState:j},Z,{style:(0,o.Z)({width:x,height:h},f)}))}))}}]);
//# sourceMappingURL=546.594f50eb.chunk.js.map