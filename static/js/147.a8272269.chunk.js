"use strict";(self.webpackChunkstarwars=self.webpackChunkstarwars||[]).push([[147],{758:function(n,e,t){t.d(e,{Z:function(){return s}});var i=t(96015),o=t(94162),r=t(4565),a=t(80184);function s(n){var e=n.reason,t=n.debug;return(0,a.jsx)(i.Z,{marginY:5,width:"100%",children:(0,a.jsxs)(o.Z,{direction:"column",spacing:5,justifyContent:"center",alignItems:"center",children:[(0,a.jsx)(r.Z,{variant:"h5",sx:{textTransform:"uppercase"},children:"An error has occurred!"}),(0,a.jsxs)(o.Z,{direction:"column",spacing:1,justifyContent:"center",alignItems:"center",children:[(0,a.jsx)(r.Z,{variant:"body1",fontWeight:700,children:"REASON"}),(0,a.jsx)(r.Z,{variant:"body2",children:e})]}),(0,a.jsxs)(o.Z,{direction:"column",spacing:1,justifyContent:"center",alignItems:"center",children:[(0,a.jsx)(r.Z,{variant:"body1",fontWeight:700,children:"DEBUG"}),(0,a.jsx)(r.Z,{variant:"body2",component:"div",children:(0,a.jsx)("pre",{children:(0,a.jsx)("code",{style:{display:"flex",textAlign:"center"},children:JSON.stringify(t)})})})]})]})})}},27147:function(n,e,t){t.r(e);var i=t(73808),o=t(54596),r=t(94162),a=t(96580),s=t(4565),c=t(17205),l=t(96015),d=t(758),u=t(72791),p=t(36227),f=t(12312),v=t(64317),g=t(31651),m=t(25329),Z=t(70562),h=t(79417),x=t(90146),j=t(26758),b=t(57689),y=t(47194),w=t(32619),C=t(23176),k=(t(65218),t(80184)),L="planets";e.default=function(){var n=(0,o.Z)().isMobile,e=(0,v.T)(),t=(0,v.C)((0,Z.Zp)(L)),I=(0,v.C)((0,Z.eA)(L)),S=(0,m.Eg)({entity:L,pagination:{page:t}}),_=S.data,O=S.isFetching,P=S.isLoading,F=S.error,N=S.isSuccess,T=S.isError,M=(S.refetch,S.fulfilledTimeStamp),R=S.startedTimeStamp,z=(null!==M&&void 0!==M?M:0)-(null!==R&&void 0!==R?R:0),E=(0,b.s0)();return(0,u.useEffect)((function(){(0,x.H5)("top-pagination",300,"end")}),[N]),P?(0,k.jsx)(r.Z,{direction:"column",width:"100%",justifyContent:"center",alignItems:"center",height:"100vh",children:(0,k.jsx)(g.Z,{message:L})}):T?(0,k.jsx)(d.Z,{reason:F.status,debug:F.error}):_?(0,k.jsxs)(r.Z,{direction:"column",width:"100%",children:[(0,k.jsx)(i.Z,{toolbarProps:{position:"sticky",sx:{top:n?"56px":"64px"}},children:(0,k.jsxs)(p.Z,{container:!0,xs:12,children:[(0,k.jsx)(p.Z,{xs:4,sm:4,children:(0,k.jsx)(r.Z,{direction:"row",justifyContent:"start",alignItems:"center",children:(0,k.jsx)(j.Z,{entity:L,onResultSelect:function(n){E("./".concat(null===n||void 0===n?void 0:n.uid))}})})}),(0,k.jsx)(p.Z,{xs:8,xsOffset:"auto",display:"flex",children:(0,k.jsxs)(r.Z,{direction:"row",justifyContent:"end",alignItems:"center",width:"100%",spacing:2,"data-tooltip-id":"fetch-information",children:[O&&(0,k.jsx)(a.Z,{size:20}),!O&&(0,k.jsxs)(s.Z,{fontSize:11,component:"div",children:["Last fetched ",(0,k.jsx)(y.Z,{dateInMilli:null!==M&&void 0!==M?M:0}),", took: ",(0,k.jsx)(w.Z,{durationInMilli:z})]}),(0,k.jsx)(c.Z,{variant:"outlined",startIcon:(0,k.jsx)(C.Z,{}),onClick:function(){e(m.aY.util.invalidateTags([{type:m.qN,id:"PARTIAL-LIST"}]))},children:"Refresh"})]})})]})}),(0,k.jsx)(l.Z,{mt:2,mx:n?2:0,children:(0,k.jsx)(f.Z,{data:_.results,itemUrlPath:L,totalPages:I,page:t,onPaged:function(n,t){e((0,h.gg)({entityId:L,pagination:{page:t}}))},totalRecords:_.total_records,isFetching:O})})]}):(0,k.jsx)(k.Fragment,{})}},12312:function(n,e,t){t.d(e,{Z:function(){return b}});var i=t(70885),o=t(1413),r=t(72791),a=t(36227),s=t(11087),c=t(94162),l=t(96015),d=t(4565),u=t(54585);t(60940),t(34956);t(29794);var p=t(45894),f=t(45173),v=t(79365),g=t(35702),m=t(81898),Z=t(72851),h=t(763),x=t(65060),j=t(80184);var b=function(n){var e=n.data,t=n.itemUrlPath,i=n.gutterSize,r=void 0===i?"med":i,b=n.totalPages,w=void 0===b?0:b,C=n.page,k=void 0===C?0:C,L=n.totalRecords,I=void 0===L?0:L,S=n.isFetching,_=n.onPaged;return(0,j.jsxs)(f.Z,{size:r,children:[w>0&&(0,j.jsx)(a.Z,{xs:12,mb:2,id:"top-pagination",children:(0,j.jsxs)(c.Z,{direction:"row",sx:{justifyContent:"space-between",alignItems:"center"},width:"100%",children:[(0,j.jsx)(l.Z,{sx:{minWidth:120},children:(0,j.jsxs)(m.Z,{fullWidth:!0,size:"small",variant:"standard",children:[(0,j.jsx)(v.Z,{id:"page-selection",children:"Page"}),(0,j.jsx)(Z.Z,{labelId:"page-selection",value:"".concat(k),label:"Age",onChange:function(n){_&&_(null,+n.target.value)},children:(0,h.range)(1,w+1,1).map((function(n){return(0,j.jsx)(g.Z,{value:n,children:n},n)}))})]})}),(0,j.jsx)(l.Z,{children:(0,j.jsxs)(d.Z,{color:"text.secondary",sx:{lineHeight:1},children:[(k-1)*x.JY+1," - ",k===w?I:k*x.JY," of ",I]})})]})}),e.map((function(n){return(0,j.jsx)(a.Z,{xs:12,sm:6,md:4,xl:2.4,children:(0,j.jsx)(l.Z,{sx:{p:1},children:(0,j.jsx)(s.rU,{to:"/".concat(t,"/").concat(n.uid),children:(0,j.jsx)(y,{name:n.name,id:n.uid})})})},n.uid)})),_&&w>0&&(0,j.jsx)(a.Z,{xs:12,mt:2,children:(0,j.jsx)(c.Z,{direction:"row",sx:(0,o.Z)({},p._),width:"100%",children:(0,j.jsx)(u.Z,{count:w,shape:"rounded",page:k,showFirstButton:!0,showLastButton:!0,onChange:_,disabled:S})})})]})};function y(n){var e=n.name,t=n.id,a=(0,r.useState)(""),s=(0,i.Z)(a,2),l=s[0],u=(s[1],(0,r.useState)(!1)),f=(0,i.Z)(u,2);f[0],f[1];return(0,j.jsx)(c.Z,{direction:"row",sx:(0,o.Z)((0,o.Z)({fontWeight:"500",p:1},p._),{},{border:"1px solid #ddd",borderRadius:"10px"}),title:"#".concat(t," ").concat(e),className:l,children:(0,j.jsx)(d.Z,{variant:"h6",sx:(0,o.Z)({},p.L),children:e})})}},26758:function(n,e,t){var i=t(1413),o=t(70885),r=t(94162),a=t(4218),s=t(96015),c=t(59911),l=t(40255),d=t(72791),u=t(88163),p=t(25329),f=t(15290),v=t(79723),g=t(80184);function m(n){var e=n.params,t=n.entity;return(0,g.jsx)(c.Z,(0,i.Z)((0,i.Z)({},e),{},{label:"Filter ".concat(t),variant:"standard"}))}e.Z=function(n){var e=n.entity,t=n.onResultSelect,i=(0,d.useState)([]),c=(0,o.Z)(i,2),Z=c[0],h=c[1],x=(0,d.useState)(null),j=(0,o.Z)(x,2),b=j[0],y=j[1],w=(0,d.useState)(null),C=(0,o.Z)(w,2),k=C[0],L=C[1],I=(0,v.N)(k,600),S=(0,p.rw)(I?{entity:e,name:I}:l.skipToken),_=S.data,O=S.isFetching;return S.error,S.isError,S.refetch,(0,d.useEffect)((function(){h(null!==_&&void 0!==_?_:[])}),[_]),(0,u.Z)((function(){}),[I]),(0,g.jsxs)(r.Z,{direction:"row",justifyContent:"start",alignItems:"center",width:"100%",children:[(0,g.jsx)(a.Z,{disablePortal:!0,id:"search-entity-autocomplete",options:Z,fullWidth:!0,autoHighlight:!0,blurOnSelect:!0,filterOptions:function(n){return n},value:b,getOptionLabel:function(n){var e;return null!==(e=n.properties.name)&&void 0!==e?e:n.properties.title},noOptionsText:"Search for ".concat(e),loading:O,renderInput:function(n){return(0,g.jsx)(m,{params:n,entity:e})},onChange:function(n,e){var i;h((i=e)?[i]:Z),y(i),t(i)},onInputChange:function(n,e){return function(n,e){L(e)}(0,e)},isOptionEqualToValue:function(n,e){return n.uid===e.uid}}),(0,g.jsx)(s.Z,{ml:2,children:O&&(0,g.jsx)(f.Z,{size:20})})]})}},70562:function(n,e,t){t.d(e,{$w:function(){return d},H8:function(){return c},Zp:function(){return a},eA:function(){return s},jU:function(){return l}});var i=t(50873),o=t(70773),r=function(n){return n["sw-entities-config"]},a=function(n){return(0,i.P1)(r,(function(e){var t,i,o;return null!==(t=null===(i=e.pagination[n])||void 0===i||null===(o=i.pagination)||void 0===o?void 0:o.page)&&void 0!==t?t:1}))},s=function(n){return(0,i.P1)(r,(function(e){var t,i,o;return null!==(t=null===(i=e.pagination[n])||void 0===i||null===(o=i.pagination)||void 0===o?void 0:o.total_pages)&&void 0!==t?t:0}))},c=function(n){return(0,i.P1)(r,(function(e){var t,i,o;return null!==(t=null===(i=e.pagination[n])||void 0===i||null===(o=i.pagination)||void 0===o?void 0:o.total_records)&&void 0!==t?t:0}))},l=function(n){return(0,i.P1)(r,(function(e){var t;return null===(t=e.pagination[n])||void 0===t?void 0:t.pagination.next}))},d=function(n){return(0,i.P1)(r,(function(e){var t,i;return null!==(t=null===(i=e.pagination[n])||void 0===i?void 0:i.pagination.fetchUrl)&&void 0!==t?t:"".concat(o.H8).concat(n,"?page=1&limit=30")}))}},47194:function(n,e,t){var i=t(29158),o=t(80184);e.Z=function(n){var e=n.dateInMilli;return(0,o.jsx)(o.Fragment,{children:void 0!==e&&(0,i.Z)(e,"MM/dd/yyyy p")})}},32619:function(n,e,t){var i=t(51943),o=t(80184);e.Z=function(n){var e=n.durationInMilli;return(0,o.jsx)(o.Fragment,{children:e>1e3?(0,i.Z)(0,e,{includeSeconds:!0}):e+" ms"})}},45173:function(n,e,t){var i=t(36227),o=t(80184);e.Z=function(n){var e=n.size,t=void 0===e?"med":e,r=n.children;return(0,o.jsx)(i.Z,{container:!0,spacing:0,xs:12,xsOffset:0,sm:"full"===t?12:"med"===t?7:4,smOffset:"full"===t?0:"med"===t?2.5:4,children:r})}},15290:function(n,e,t){t.d(e,{Z:function(){return s}});var i=t(1413),o=(t(72791),t(94162)),r=t(96580),a=t(80184);function s(n){var e=n.size,t=void 0===e?40:e,s=n.color,c=void 0===s?"grey.500":s,l=n.styleProps;return(0,a.jsx)(o.Z,{sx:(0,i.Z)({color:c},l),spacing:1,direction:"row",children:(0,a.jsx)(r.Z,{color:"inherit",size:t})})}},73808:function(n,e,t){t.d(e,{Z:function(){return c}});var i=t(1413),o=t(22892),r=t(44666),a=t(43906),s=t(80184);function c(n){var e=n.toolbarProps,t=n.children;return(0,s.jsx)(o.Z,(0,i.Z)((0,i.Z)({elevation:0},e),{},{children:(0,s.jsx)(r.Z,{variant:"regular",sx:{bgcolor:function(n){return"light"===n.palette.mode?a.s[100]:null},color:function(n){return"light"===n.palette.mode?"#000":null},pr:0},children:t})}))}},79723:function(n,e,t){t.d(e,{N:function(){return r}});var i=t(70885),o=t(72791),r=function(n,e){var t=(0,o.useState)(n),r=(0,i.Z)(t,2),a=r[0],s=r[1];return(0,o.useEffect)((function(){var t=setTimeout((function(){s(n)}),e);return function(){clearTimeout(t)}}),[n,e]),a}},54596:function(n,e,t){var i=t(52797),o=t(74142);e.Z=function(){var n=(0,o.Z)();return{isMobile:(0,i.Z)(n.breakpoints.down("sm")),isMed:(0,i.Z)(n.breakpoints.between("sm","md")),isLg:(0,i.Z)(n.breakpoints.between("md","lg")),isXl:(0,i.Z)(n.breakpoints.between("lg","xl")),isAboveXl:(0,i.Z)(n.breakpoints.up("xl"))}}},31651:function(n,e,t){t.d(e,{Z:function(){return a}});t(72791);var i={parentClass:"LoadingLogo_parentClass__NFHXT",loadingLogo:"LoadingLogo_loadingLogo__BqUtz",loadingParent:"LoadingLogo_loadingParent__VASnq","loading-container":"LoadingLogo_loading-container__cjLsJ","whole-page":"LoadingLogo_whole-page__DkCG7",ldsFacebook:"LoadingLogo_ldsFacebook__pRdY2","lds-facebook":"LoadingLogo_lds-facebook__JLntj"},o=t(77783),r=t(80184);function a(n){return(0,r.jsxs)("div",{className:"".concat(i.parentClass," w-100"),children:[(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:i.loadingLogo,children:(0,r.jsx)("img",{src:o,className:"".concat(i.logoImg," d-inline-block"),alt:"logo"})})}),(0,r.jsx)("div",{className:i.loadingParent,children:(0,r.jsxs)("div",{className:i.ldsFacebook,children:[(0,r.jsx)("div",{}),(0,r.jsx)("div",{}),(0,r.jsx)("div",{})]})}),(0,r.jsxs)("div",{className:i.secfont,children:["Loading ",n.message," ..."]})]})}},90146:function(n,e,t){function i(n,e,t){var i=document.getElementById(n);i&&setTimeout((function(){var n,e;null===(n=i)||void 0===n||n.scrollIntoView({block:null!==(e=t)&&void 0!==e?e:"end"}),i=null}),null!==e&&void 0!==e?e:0)}t.d(e,{H5:function(){return i}})},64317:function(n,e,t){t.d(e,{C:function(){return r},T:function(){return o}});var i=t(78687),o=i.useDispatch,r=i.useSelector},35702:function(n,e,t){t.d(e,{Z:function(){return L}});var i=t(4942),o=t(63366),r=t(87462),a=t(72791),s=t(28182),c=t(94419),l=t(12065),d=t(60277),u=t(85513),p=t(98826),f=t(60753),v=t(93026),g=t(57933),m=t(87164),Z=t(39343),h=t(29282),x=t(75878),j=t(21217);function b(n){return(0,j.Z)("MuiMenuItem",n)}var y=(0,x.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),w=t(80184),C=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],k=(0,d.ZP)(f.Z,{shouldForwardProp:function(n){return(0,d.FO)(n)||"classes"===n},name:"MuiMenuItem",slot:"Root",overridesResolver:function(n,e){var t=n.ownerState;return[e.root,t.dense&&e.dense,t.divider&&e.divider,!t.disableGutters&&e.gutters]}})((function(n){var e,t=n.theme,o=n.ownerState;return(0,r.Z)({},t.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!o.disableGutters&&{paddingLeft:16,paddingRight:16},o.divider&&{borderBottom:"1px solid ".concat((t.vars||t).palette.divider),backgroundClip:"padding-box"},(e={"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,i.Z)(e,"&.".concat(y.selected),(0,i.Z)({backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,l.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity)},"&.".concat(y.focusVisible),{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.focusOpacity,"))"):(0,l.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)})),(0,i.Z)(e,"&.".concat(y.selected,":hover"),{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.hoverOpacity,"))"):(0,l.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,l.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity)}}),(0,i.Z)(e,"&.".concat(y.focusVisible),{backgroundColor:(t.vars||t).palette.action.focus}),(0,i.Z)(e,"&.".concat(y.disabled),{opacity:(t.vars||t).palette.action.disabledOpacity}),(0,i.Z)(e,"& + .".concat(m.Z.root),{marginTop:t.spacing(1),marginBottom:t.spacing(1)}),(0,i.Z)(e,"& + .".concat(m.Z.inset),{marginLeft:52}),(0,i.Z)(e,"& .".concat(h.Z.root),{marginTop:0,marginBottom:0}),(0,i.Z)(e,"& .".concat(h.Z.inset),{paddingLeft:36}),(0,i.Z)(e,"& .".concat(Z.Z.root),{minWidth:36}),e),!o.dense&&(0,i.Z)({},t.breakpoints.up("sm"),{minHeight:"auto"}),o.dense&&(0,r.Z)({minHeight:32,paddingTop:4,paddingBottom:4},t.typography.body2,(0,i.Z)({},"& .".concat(Z.Z.root," svg"),{fontSize:"1.25rem"})))})),L=a.forwardRef((function(n,e){var t=(0,u.Z)({props:n,name:"MuiMenuItem"}),i=t.autoFocus,l=void 0!==i&&i,d=t.component,f=void 0===d?"li":d,m=t.dense,Z=void 0!==m&&m,h=t.divider,x=void 0!==h&&h,j=t.disableGutters,y=void 0!==j&&j,L=t.focusVisibleClassName,I=t.role,S=void 0===I?"menuitem":I,_=t.tabIndex,O=t.className,P=(0,o.Z)(t,C),F=a.useContext(p.Z),N=a.useMemo((function(){return{dense:Z||F.dense||!1,disableGutters:y}}),[F.dense,Z,y]),T=a.useRef(null);(0,v.Z)((function(){l&&T.current&&T.current.focus()}),[l]);var M,R=(0,r.Z)({},t,{dense:N.dense,divider:x,disableGutters:y}),z=function(n){var e=n.disabled,t=n.dense,i=n.divider,o=n.disableGutters,a=n.selected,s=n.classes,l={root:["root",t&&"dense",e&&"disabled",!o&&"gutters",i&&"divider",a&&"selected"]},d=(0,c.Z)(l,b,s);return(0,r.Z)({},s,d)}(t),E=(0,g.Z)(T,e);return t.disabled||(M=void 0!==_?_:-1),(0,w.jsx)(p.Z.Provider,{value:N,children:(0,w.jsx)(k,(0,r.Z)({ref:E,role:S,tabIndex:M,component:f,focusVisibleClassName:(0,s.Z)(z.focusVisible,L),className:(0,s.Z)(z.root,O)},P,{ownerState:R,classes:z}))})}))},88163:function(n,e,t){t.d(e,{Z:function(){return o}});var i=t(72791);var o=function(n,e){var t=function(){var n=(0,i.useRef)(!0);return n.current?(n.current=!1,!0):n.current}();(0,i.useEffect)((function(){if(!t)return n()}),e)}}}]);
//# sourceMappingURL=147.a8272269.chunk.js.map