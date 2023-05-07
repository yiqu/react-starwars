"use strict";(self.webpackChunkstarwars=self.webpackChunkstarwars||[]).push([[546],{14546:function(n,t,e){e.r(t),e.d(t,{default:function(){return X}});var o=e(64317),r=e(5826),a=e(36227),i=e(94162),s=e(91441),c=e(80184);function l(n){return n.loading?(0,c.jsxs)(a.Z,{xs:12,sm:12,children:[(0,c.jsxs)(i.Z,{direction:"row",sx:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[(0,c.jsx)(s.Z,{variant:"text",sx:{fontSize:"2rem",width:"10rem"}}),(0,c.jsx)(s.Z,{variant:"circular",width:40,height:40})]}),(0,c.jsx)(s.Z,{variant:"rectangular",height:"30rem"})]}):(0,c.jsx)(c.Fragment,{children:n.children})}var d=e(1413),u=e(70885),h=e(48928),v=e(55194),p=e(96015),f=e(38943),m=e(4565),x=e(96875),g=e(17205),Z=e(36976),b=e(11155),S=e(11878),w=e(70773),y=e(51070),C=e.n(y),z=e(5130),j=e(11087),k=e(60788),I=e(40464),R=e(8440),F=e(63366),M=e(87462),N=e(72791),P=e(28182),W=e(94419),T=e(60277),E=e(85513),L=e(75878),B=e(21217);function V(n){return(0,B.Z)("MuiDialogContentText",n)}(0,L.Z)("MuiDialogContentText",["root"]);var A=["children","className"],O=(0,T.ZP)(m.Z,{shouldForwardProp:function(n){return(0,T.FO)(n)||"classes"===n},name:"MuiDialogContentText",slot:"Root",overridesResolver:function(n,t){return t.root}})({}),U=N.forwardRef((function(n,t){var e=(0,E.Z)({props:n,name:"MuiDialogContentText"}),o=e.className,r=(0,F.Z)(e,A),a=function(n){var t=n.classes,e=(0,W.Z)({root:["root"]},V,t);return(0,M.Z)({},t,e)}(r);return(0,c.jsx)(O,(0,M.Z)({component:"p",variant:"body1",color:"text.secondary",ref:t,ownerState:r,className:(0,P.Z)(a.root,o)},e,{classes:a}))})),q=e(77248);function D(n){var t=n.open,e=n.handleClose,o=n.title,r=n.message,a=function(n){return function(t){e(n)}};return(0,c.jsxs)(k.Z,{open:!!t,onClose:function(n,t){e(!1)},children:[(0,c.jsx)(I.Z,{id:"confirm-dialog",mb:2,sx:{bgcolor:function(n){return"light"===n.palette.mode?"primary.light":null},color:function(n){return"light"===n.palette.mode?"#fff":null}},children:null!==o&&void 0!==o?o:"Confirmation"}),(0,c.jsx)(R.Z,{children:(0,c.jsx)(U,{id:"confirm-dialog-description",children:null!==r&&void 0!==r?r:"Are you sure?"})}),(0,c.jsxs)(q.Z,{children:[(0,c.jsx)(g.Z,{onClick:a(!1),sx:{color:"gray"},children:"Cancel"}),(0,c.jsx)(g.Z,{onClick:a(!0),autoFocus:!0,children:"Confirm"})]})]})}function H(n){var t=n.fav,e=(0,o.T)(),r=(0,N.useState)(!1),a=(0,u.Z)(r,2),s=a[0],l=a[1];return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(h.Z,{children:[(0,c.jsx)(v.Z,{children:(0,c.jsxs)(i.Z,{direction:"row",spacing:2,children:[(0,c.jsx)(p.Z,{children:(0,c.jsx)(f.Z,{component:"img",alt:"poster",height:"100",image:"".concat("","/assets/poster-img/").concat(t.episodeId,".png"),sx:{backgroundColor:"#000",objectFit:"contain",borderRadius:"20px"}})}),(0,c.jsxs)(i.Z,{direction:"column",spacing:.3,children:[(0,c.jsxs)(m.Z,{variant:"h5",sx:{fontWeight:"500",fontFamily:"Poppins"},component:j.rU,to:"/movies/".concat(t.filmId),children:["EP ",t.episodeId]}),(0,c.jsx)(p.Z,{color:"text.secondary",children:(0,c.jsxs)(i.Z,{direction:"row",spacing:.3,children:[(0,c.jsx)(p.Z,{children:"Favorited"}),(0,c.jsx)(b.Z,{date:t.lastUpdated,fromNow:!0})]})})]})]})}),(0,c.jsx)(x.Z,{children:(0,c.jsx)(g.Z,{variant:"text",startIcon:t.apiWorking?(0,c.jsx)(Z.Z,{}):(0,c.jsx)(z.Z,{}),onClick:function(){l(!0)},title:t.isCurrentFavorite?"Unfavorite this film":"",disabled:t.apiWorking,fullWidth:!0,color:"error",children:"Remove"})})]}),(0,c.jsx)(D,{handleClose:function(n){l(!1),n&&function(){if(t.isCurrentFavorite){var n=(0,d.Z)({},t),o=C()(w.K,"swdb/:user/favorites/".concat(t.fireId,".json"),{user:"yqu"});e((0,S._6)({fav:n,favStatus:!1,url:o})).unwrap().then((function(n){}))}}()},open:s,message:"Are you sure you want to remove EP ".concat(t.episodeId," from favorites?")})]})}function X(){var n=(0,o.C)(r.h3),t=(0,o.C)(r.RK);return!(0,o.C)(r.xU)&&n.length<1?(0,c.jsx)(a.Z,{container:!0,children:(0,c.jsx)(a.Z,{md:4,xs:12,children:(0,c.jsx)(m.Z,{children:"No favorites found."})})}):(0,c.jsx)(l,{loading:t,children:(0,c.jsx)(a.Z,{container:!0,spacing:2,children:n.map((function(n){return(0,c.jsx)(a.Z,{md:2,xs:12,children:(0,c.jsx)(H,{fav:n})},n.fireId)}))})})}},5826:function(n,t,e){e.d(t,{JJ:function(){return u},RK:function(){return h},Wc:function(){return f},_d:function(){return v},f3:function(){return p},h3:function(){return m},xU:function(){return d}});var o=e(1413),r=e(50873),a=e(92546),i=e(18581),s=function(n){return n.favoriteFilms},c=i.VL.getSelectors((function(n){return n.favoriteFilms})),l=c.selectAll,d=(c.selectById,c.selectEntities,c.selectIds,c.selectTotal,function(n){return s(n).loading}),u=function(n){return s(n).favoriteToggleLoading},h=function(n){return s(n).firstTimeLoading},v=(0,r.P1)(l,(function(n){var t={};return n.forEach((function(n){t[n.episodeId]=(0,o.Z)({},n)})),t})),p=(0,r.P1)(l,(function(n){return(0,a.ZP)(n,(function(n){return n.filter((function(n){return!!n.isCurrentFavorite})).sort((function(n,t){return n.lastUpdated<t.lastUpdated?1:-1}))}))})),f=(0,r.P1)(s,(function(n){return n.extraFetchParams})),m=(0,r.P1)(l,s,(function(n,t){var e,o,r=null!==(e=t.extraFetchParams)&&void 0!==e&&e.equalTo?null!==(o=t.filteredFavorites)&&void 0!==o?o:[]:n;return(0,a.ZP)(r,(function(n){return n.filter((function(n){return!!n.isCurrentFavorite})).sort((function(n,t){return n.lastUpdated<t.lastUpdated?1:-1}))}))}))},11155:function(n,t,e){var o=e(75814),r=e(4565),a=e(46431),i=e.n(a),s=e(72426),c=e.n(s),l=e(80184);t.Z=function(n){var t=n.date,e=void 0===t?0:t,a=n.fromNow,s=void 0===a||a,d=n.format,u=void 0===d?"MM/DD/YY HH:mm":d;return(0,l.jsx)(o.Z,{title:e?c()(e).format(u):"No date found",children:(0,l.jsx)(r.Z,{component:"span",display:"flex",alignItems:"center",justifyContent:"center",children:e?(0,l.jsx)(i(),{date:e,fromNow:s,format:s?void 0:u,interval:6e4}):(0,l.jsx)(l.Fragment,{children:"N/A"})})})}},5130:function(n,t,e){var o=e(64836);t.Z=void 0;var r=o(e(45649)),a=e(80184),i=(0,r.default)((0,a.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");t.Z=i},36976:function(n,t,e){var o=e(64836);t.Z=void 0;var r=o(e(45649)),a=e(80184),i=(0,r.default)((0,a.jsx)("path",{d:"m18 22-.01-6L14 12l3.99-4.01L18 2H6v6l4 4-4 3.99V22h12zM8 7.5V4h8v3.5l-4 4-4-4z"}),"HourglassBottom");t.Z=i},17205:function(n,t,e){e.d(t,{Z:function(){return j}});var o=e(4942),r=e(63366),a=e(87462),i=e(72791),s=e(28182),c=e(35735),l=e(94419),d=e(12065),u=e(60277),h=e(85513),v=e(60753),p=e(49853),f=e(75878),m=e(21217);function x(n){return(0,m.Z)("MuiButton",n)}var g=(0,f.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var Z=i.createContext({}),b=e(80184),S=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],w=function(n){return(0,a.Z)({},"small"===n.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===n.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===n.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},y=(0,u.ZP)(v.Z,{shouldForwardProp:function(n){return(0,u.FO)(n)||"classes"===n},name:"MuiButton",slot:"Root",overridesResolver:function(n,t){var e=n.ownerState;return[t.root,t[e.variant],t["".concat(e.variant).concat((0,p.Z)(e.color))],t["size".concat((0,p.Z)(e.size))],t["".concat(e.variant,"Size").concat((0,p.Z)(e.size))],"inherit"===e.color&&t.colorInherit,e.disableElevation&&t.disableElevation,e.fullWidth&&t.fullWidth]}})((function(n){var t,e,r,i=n.theme,s=n.ownerState;return(0,a.Z)({},i.typography.button,(t={minWidth:64,padding:"6px 16px",borderRadius:(i.vars||i).shape.borderRadius,transition:i.transitions.create(["background-color","box-shadow","border-color","color"],{duration:i.transitions.duration.short}),"&:hover":(0,a.Z)({textDecoration:"none",backgroundColor:i.vars?"rgba(".concat(i.vars.palette.text.primaryChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(i.palette.text.primary,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===s.variant&&"inherit"!==s.color&&{backgroundColor:i.vars?"rgba(".concat(i.vars.palette[s.color].mainChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(i.palette[s.color].main,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===s.variant&&"inherit"!==s.color&&{border:"1px solid ".concat((i.vars||i).palette[s.color].main),backgroundColor:i.vars?"rgba(".concat(i.vars.palette[s.color].mainChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(i.palette[s.color].main,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===s.variant&&{backgroundColor:(i.vars||i).palette.grey.A100,boxShadow:(i.vars||i).shadows[4],"@media (hover: none)":{boxShadow:(i.vars||i).shadows[2],backgroundColor:(i.vars||i).palette.grey[300]}},"contained"===s.variant&&"inherit"!==s.color&&{backgroundColor:(i.vars||i).palette[s.color].dark,"@media (hover: none)":{backgroundColor:(i.vars||i).palette[s.color].main}}),"&:active":(0,a.Z)({},"contained"===s.variant&&{boxShadow:(i.vars||i).shadows[8]})},(0,o.Z)(t,"&.".concat(g.focusVisible),(0,a.Z)({},"contained"===s.variant&&{boxShadow:(i.vars||i).shadows[6]})),(0,o.Z)(t,"&.".concat(g.disabled),(0,a.Z)({color:(i.vars||i).palette.action.disabled},"outlined"===s.variant&&{border:"1px solid ".concat((i.vars||i).palette.action.disabledBackground)},"outlined"===s.variant&&"secondary"===s.color&&{border:"1px solid ".concat((i.vars||i).palette.action.disabled)},"contained"===s.variant&&{color:(i.vars||i).palette.action.disabled,boxShadow:(i.vars||i).shadows[0],backgroundColor:(i.vars||i).palette.action.disabledBackground})),t),"text"===s.variant&&{padding:"6px 8px"},"text"===s.variant&&"inherit"!==s.color&&{color:(i.vars||i).palette[s.color].main},"outlined"===s.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===s.variant&&"inherit"!==s.color&&{color:(i.vars||i).palette[s.color].main,border:i.vars?"1px solid rgba(".concat(i.vars.palette[s.color].mainChannel," / 0.5)"):"1px solid ".concat((0,d.Fq)(i.palette[s.color].main,.5))},"contained"===s.variant&&{color:i.vars?i.vars.palette.text.primary:null==(e=(r=i.palette).getContrastText)?void 0:e.call(r,i.palette.grey[300]),backgroundColor:(i.vars||i).palette.grey[300],boxShadow:(i.vars||i).shadows[2]},"contained"===s.variant&&"inherit"!==s.color&&{color:(i.vars||i).palette[s.color].contrastText,backgroundColor:(i.vars||i).palette[s.color].main},"inherit"===s.color&&{color:"inherit",borderColor:"currentColor"},"small"===s.size&&"text"===s.variant&&{padding:"4px 5px",fontSize:i.typography.pxToRem(13)},"large"===s.size&&"text"===s.variant&&{padding:"8px 11px",fontSize:i.typography.pxToRem(15)},"small"===s.size&&"outlined"===s.variant&&{padding:"3px 9px",fontSize:i.typography.pxToRem(13)},"large"===s.size&&"outlined"===s.variant&&{padding:"7px 21px",fontSize:i.typography.pxToRem(15)},"small"===s.size&&"contained"===s.variant&&{padding:"4px 10px",fontSize:i.typography.pxToRem(13)},"large"===s.size&&"contained"===s.variant&&{padding:"8px 22px",fontSize:i.typography.pxToRem(15)},s.fullWidth&&{width:"100%"})}),(function(n){var t;return n.ownerState.disableElevation&&(t={boxShadow:"none","&:hover":{boxShadow:"none"}},(0,o.Z)(t,"&.".concat(g.focusVisible),{boxShadow:"none"}),(0,o.Z)(t,"&:active",{boxShadow:"none"}),(0,o.Z)(t,"&.".concat(g.disabled),{boxShadow:"none"}),t)})),C=(0,u.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(n,t){var e=n.ownerState;return[t.startIcon,t["iconSize".concat((0,p.Z)(e.size))]]}})((function(n){var t=n.ownerState;return(0,a.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2},w(t))})),z=(0,u.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(n,t){var e=n.ownerState;return[t.endIcon,t["iconSize".concat((0,p.Z)(e.size))]]}})((function(n){var t=n.ownerState;return(0,a.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2},w(t))})),j=i.forwardRef((function(n,t){var e=i.useContext(Z),o=(0,c.Z)(e,n),d=(0,h.Z)({props:o,name:"MuiButton"}),u=d.children,v=d.color,f=void 0===v?"primary":v,m=d.component,g=void 0===m?"button":m,w=d.className,j=d.disabled,k=void 0!==j&&j,I=d.disableElevation,R=void 0!==I&&I,F=d.disableFocusRipple,M=void 0!==F&&F,N=d.endIcon,P=d.focusVisibleClassName,W=d.fullWidth,T=void 0!==W&&W,E=d.size,L=void 0===E?"medium":E,B=d.startIcon,V=d.type,A=d.variant,O=void 0===A?"text":A,U=(0,r.Z)(d,S),q=(0,a.Z)({},d,{color:f,component:g,disabled:k,disableElevation:R,disableFocusRipple:M,fullWidth:T,size:L,type:V,variant:O}),D=function(n){var t=n.color,e=n.disableElevation,o=n.fullWidth,r=n.size,i=n.variant,s=n.classes,c={root:["root",i,"".concat(i).concat((0,p.Z)(t)),"size".concat((0,p.Z)(r)),"".concat(i,"Size").concat((0,p.Z)(r)),"inherit"===t&&"colorInherit",e&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat((0,p.Z)(r))],endIcon:["endIcon","iconSize".concat((0,p.Z)(r))]},d=(0,l.Z)(c,x,s);return(0,a.Z)({},s,d)}(q),H=B&&(0,b.jsx)(C,{className:D.startIcon,ownerState:q,children:B}),X=N&&(0,b.jsx)(z,{className:D.endIcon,ownerState:q,children:N});return(0,b.jsxs)(y,(0,a.Z)({ownerState:q,className:(0,s.Z)(e.className,D.root,w),component:g,disabled:k,focusRipple:!M,focusVisibleClassName:(0,s.Z)(D.focusVisible,P),ref:t,type:V},U,{classes:D,children:[H,u,X]}))}))},91441:function(n,t,e){e.d(t,{Z:function(){return M}});var o=e(30168),r=e(63366),a=e(87462),i=e(72791),s=e(28182),c=e(52554),l=e(94419);function d(n){return String(n).match(/[\d.\-+]*\s*(.*)/)[1]||""}function u(n){return parseFloat(n)}var h=e(12065),v=e(60277),p=e(85513),f=e(75878),m=e(21217);function x(n){return(0,m.Z)("MuiSkeleton",n)}(0,f.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var g,Z,b,S,w,y,C,z,j=e(80184),k=["animation","className","component","height","style","variant","width"],I=(0,c.F4)(w||(w=g||(g=(0,o.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),R=(0,c.F4)(y||(y=Z||(Z=(0,o.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),F=(0,v.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(n,t){var e=n.ownerState;return[t.root,t[e.variant],!1!==e.animation&&t[e.animation],e.hasChildren&&t.withChildren,e.hasChildren&&!e.width&&t.fitContent,e.hasChildren&&!e.height&&t.heightAuto]}})((function(n){var t=n.theme,e=n.ownerState,o=d(t.shape.borderRadius)||"px",r=u(t.shape.borderRadius);return(0,a.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,h.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===e.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(r).concat(o,"/").concat(Math.round(r/.6*10)/10).concat(o),"&:empty:before":{content:'"\\00a0"'}},"circular"===e.variant&&{borderRadius:"50%"},"rounded"===e.variant&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})}),(function(n){return"pulse"===n.ownerState.animation&&(0,c.iv)(C||(C=b||(b=(0,o.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),I)}),(function(n){var t=n.ownerState,e=n.theme;return"wave"===t.animation&&(0,c.iv)(z||(z=S||(S=(0,o.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),R,(e.vars||e).palette.action.hover)})),M=i.forwardRef((function(n,t){var e=(0,p.Z)({props:n,name:"MuiSkeleton"}),o=e.animation,i=void 0===o?"pulse":o,c=e.className,d=e.component,u=void 0===d?"span":d,h=e.height,v=e.style,f=e.variant,m=void 0===f?"text":f,g=e.width,Z=(0,r.Z)(e,k),b=(0,a.Z)({},e,{animation:i,component:u,variant:m,hasChildren:Boolean(Z.children)}),S=function(n){var t=n.classes,e=n.variant,o=n.animation,r=n.hasChildren,a=n.width,i=n.height,s={root:["root",e,o,r&&"withChildren",r&&!a&&"fitContent",r&&!i&&"heightAuto"]};return(0,l.Z)(s,x,t)}(b);return(0,j.jsx)(F,(0,a.Z)({as:u,ref:t,className:(0,s.Z)(S.root,c),ownerState:b},Z,{style:(0,a.Z)({width:g,height:h},v)}))}))}}]);
//# sourceMappingURL=546.ea4e7ce9.chunk.js.map