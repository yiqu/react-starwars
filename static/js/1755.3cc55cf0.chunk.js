"use strict";(self.webpackChunkstarwars=self.webpackChunkstarwars||[]).push([[1755],{758:function(n,e,t){t.d(e,{Z:function(){return s}});var r=t(96015),i=t(94162),o=t(4565),a=t(80184);function s(n){var e=n.reason,t=n.debug;return(0,a.jsx)(r.Z,{marginY:5,width:"100%",children:(0,a.jsxs)(i.Z,{direction:"column",spacing:5,justifyContent:"center",alignItems:"center",children:[(0,a.jsx)(o.Z,{variant:"h5",sx:{textTransform:"uppercase"},children:"An error has occurred!"}),(0,a.jsxs)(i.Z,{direction:"column",spacing:1,justifyContent:"center",alignItems:"center",children:[(0,a.jsx)(o.Z,{variant:"body1",fontWeight:700,children:"REASON"}),(0,a.jsx)(o.Z,{variant:"body2",children:e})]}),(0,a.jsxs)(i.Z,{direction:"column",spacing:1,justifyContent:"center",alignItems:"center",children:[(0,a.jsx)(o.Z,{variant:"body1",fontWeight:700,children:"DEBUG"}),(0,a.jsx)(o.Z,{variant:"body2",component:"div",children:(0,a.jsx)("pre",{children:(0,a.jsx)("code",{style:{display:"flex",textAlign:"center"},children:JSON.stringify(t)})})})]})]})})}},12312:function(n,e,t){t.d(e,{Z:function(){return b}});var r=t(70885),i=t(1413),o=t(72791),a=t(36227),s=t(11087),c=t(94162),l=t(96015),u=t(4565),d=t(54585);t(60940),t(34956);t(29794);var f=t(45894),v=t(45173),g=t(79365),h=t(35702),x=t(81898),p=t(81346),Z=t(763),m=t(65060),j=t(80184);var b=function(n){var e=n.data,t=n.itemUrlPath,r=n.gutterSize,o=void 0===r?"med":r,b=n.totalPages,w=void 0===b?0:b,y=n.page,S=void 0===y?0:y,P=n.totalRecords,C=void 0===P?0:P,_=n.isFetching,L=n.onPaged;return(0,j.jsxs)(v.Z,{size:o,children:[w>0&&(0,j.jsx)(a.Z,{xs:12,mb:2,id:"top-pagination",children:(0,j.jsxs)(c.Z,{direction:"row",sx:{justifyContent:"space-between",alignItems:"center"},width:"100%",children:[(0,j.jsx)(l.Z,{sx:{minWidth:120},children:(0,j.jsxs)(x.Z,{fullWidth:!0,size:"small",variant:"standard",children:[(0,j.jsx)(g.Z,{id:"page-selection",children:"Page"}),(0,j.jsx)(p.Z,{labelId:"page-selection",value:"".concat(S),label:"Age",onChange:function(n){L&&L(null,+n.target.value)},children:(0,Z.range)(1,w+1,1).map((function(n){return(0,j.jsx)(h.Z,{value:n,children:n},n)}))})]})}),(0,j.jsx)(l.Z,{children:(0,j.jsxs)(u.Z,{color:"text.secondary",sx:{lineHeight:1},children:[(S-1)*m.JY+1," - ",S===w?C:S*m.JY," of ",C]})})]})}),e.map((function(n){return(0,j.jsx)(a.Z,{xs:12,sm:6,md:4,xl:2.4,children:(0,j.jsx)(l.Z,{sx:{p:1},children:(0,j.jsx)(s.rU,{to:"/".concat(t,"/").concat(n.uid),children:(0,j.jsx)(k,{name:n.name,id:n.uid})})})},n.uid)})),L&&w>0&&(0,j.jsx)(a.Z,{xs:12,mt:2,children:(0,j.jsx)(c.Z,{direction:"row",sx:(0,i.Z)({},f._),width:"100%",children:(0,j.jsx)(d.Z,{count:w,shape:"rounded",page:S,showFirstButton:!0,showLastButton:!0,onChange:L,disabled:_})})})]})};function k(n){var e=n.name,t=n.id,a=(0,o.useState)(""),s=(0,r.Z)(a,2),l=s[0],d=(s[1],(0,o.useState)(!1)),v=(0,r.Z)(d,2);v[0],v[1];return(0,j.jsx)(c.Z,{direction:"row",sx:(0,i.Z)((0,i.Z)({fontWeight:"500",p:1},f._),{},{border:"1px solid #ddd",borderRadius:"10px"}),title:"#".concat(t," ").concat(e),className:l,children:(0,j.jsx)(u.Z,{variant:"h6",sx:(0,i.Z)({},f.L),children:e})})}},26758:function(n,e,t){var r=t(1413),i=t(70885),o=t(94162),a=t(4218),s=t(96015),c=t(59911),l=t(40255),u=t(72791),d=t(88163),f=t(25329),v=t(15290),g=t(79723),h=t(80184);function x(n){var e=n.params,t=n.entity;return(0,h.jsx)(c.Z,(0,r.Z)((0,r.Z)({},e),{},{label:"Filter ".concat(t),variant:"standard"}))}e.Z=function(n){var e=n.entity,t=n.onResultSelect,r=(0,u.useState)([]),c=(0,i.Z)(r,2),p=c[0],Z=c[1],m=(0,u.useState)(null),j=(0,i.Z)(m,2),b=j[0],k=j[1],w=(0,u.useState)(null),y=(0,i.Z)(w,2),S=y[0],P=y[1],C=(0,g.N)(S,600),_=(0,f.rw)(C?{entity:e,name:C}:l.skipToken),L=_.data,N=_.isFetching;return _.error,_.isError,_.refetch,(0,u.useEffect)((function(){Z(null!==L&&void 0!==L?L:[])}),[L]),(0,d.Z)((function(){}),[C]),(0,h.jsxs)(o.Z,{direction:"row",justifyContent:"start",alignItems:"center",width:"100%",children:[(0,h.jsx)(a.Z,{disablePortal:!0,id:"search-entity-autocomplete",options:p,fullWidth:!0,autoHighlight:!0,blurOnSelect:!0,filterOptions:function(n){return n},value:b,getOptionLabel:function(n){var e;return null!==(e=n.properties.name)&&void 0!==e?e:n.properties.title},noOptionsText:"Search for ".concat(e),loading:N,renderInput:function(n){return(0,h.jsx)(x,{params:n,entity:e})},onChange:function(n,e){var r;Z((r=e)?[r]:p),k(r),t(r)},onInputChange:function(n,e){return function(n,e){P(e)}(0,e)},isOptionEqualToValue:function(n,e){return n.uid===e.uid}}),(0,h.jsx)(s.Z,{ml:2,children:N&&(0,h.jsx)(v.Z,{size:20})})]})}},71755:function(n,e,t){t.r(e);var r=t(73808),i=t(54596),o=t(94162),a=t(96015),s=t(758),c=t(72791),l=t(36227),u=t(12312),d=t(64317),f=t(31651),v=t(25329),g=t(70562),h=t(79417),x=t(90146),p=t(26758),Z=t(57689),m=t(80184),j="starships";e.default=function(){var n=(0,i.Z)().isMobile,e=(0,d.T)(),t=(0,d.C)((0,g.Zp)(j)),b=(0,d.C)((0,g.eA)(j)),k=(0,v.vY)({entity:j,pagination:{page:t}}),w=k.data,y=k.isFetching,S=k.isLoading,P=k.error,C=k.isSuccess,_=k.isError,L=(k.refetch,(0,Z.s0)());return(0,c.useEffect)((function(){(0,x.H5)("top-pagination",300,"end")}),[C]),S?(0,m.jsx)(o.Z,{direction:"column",width:"100%",justifyContent:"center",alignItems:"center",height:"100vh",children:(0,m.jsx)(f.Z,{message:j})}):_?(0,m.jsx)(s.Z,{reason:P.status,debug:P.error}):w?(0,m.jsxs)(o.Z,{direction:"column",width:"100%",children:[(0,m.jsx)(r.Z,{toolbarProps:{position:"sticky",sx:{top:n?"56px":"64px"}},children:(0,m.jsx)(l.Z,{container:!0,xs:12,children:(0,m.jsx)(l.Z,{xs:10,sm:4,children:(0,m.jsx)(o.Z,{direction:"row",justifyContent:"start",alignItems:"center",children:(0,m.jsx)(p.Z,{entity:j,onResultSelect:function(n){L("./".concat(null===n||void 0===n?void 0:n.uid))}})})})})}),(0,m.jsx)(a.Z,{mt:2,mx:n?2:0,children:(0,m.jsx)(u.Z,{data:w.results,itemUrlPath:j,totalPages:b,page:t,onPaged:function(n,t){e((0,h.gg)({entityId:j,pagination:{page:t}}))},totalRecords:w.total_records,isFetching:y})})]}):(0,m.jsx)(m.Fragment,{})}},70562:function(n,e,t){t.d(e,{$w:function(){return u},H8:function(){return c},Zp:function(){return a},eA:function(){return s},jU:function(){return l}});var r=t(50873),i=t(70773),o=function(n){return n["sw-entities-config"]},a=function(n){return(0,r.P1)(o,(function(e){var t,r,i;return null!==(t=null===(r=e.pagination[n])||void 0===r||null===(i=r.pagination)||void 0===i?void 0:i.page)&&void 0!==t?t:1}))},s=function(n){return(0,r.P1)(o,(function(e){var t,r,i;return null!==(t=null===(r=e.pagination[n])||void 0===r||null===(i=r.pagination)||void 0===i?void 0:i.total_pages)&&void 0!==t?t:0}))},c=function(n){return(0,r.P1)(o,(function(e){var t,r,i;return null!==(t=null===(r=e.pagination[n])||void 0===r||null===(i=r.pagination)||void 0===i?void 0:i.total_records)&&void 0!==t?t:0}))},l=function(n){return(0,r.P1)(o,(function(e){var t;return null===(t=e.pagination[n])||void 0===t?void 0:t.pagination.next}))},u=function(n){return(0,r.P1)(o,(function(e){var t,r;return null!==(t=null===(r=e.pagination[n])||void 0===r?void 0:r.pagination.fetchUrl)&&void 0!==t?t:"".concat(i.H8).concat(n,"?page=1&limit=30")}))}},45173:function(n,e,t){var r=t(36227),i=t(80184);e.Z=function(n){var e=n.size,t=void 0===e?"med":e,o=n.children;return(0,i.jsx)(r.Z,{container:!0,spacing:0,xs:12,xsOffset:0,sm:"full"===t?12:"med"===t?7:4,smOffset:"full"===t?0:"med"===t?2.5:4,children:o})}},15290:function(n,e,t){t.d(e,{Z:function(){return s}});var r=t(1413),i=(t(72791),t(94162)),o=t(96580),a=t(80184);function s(n){var e=n.size,t=void 0===e?40:e,s=n.color,c=void 0===s?"grey.500":s,l=n.styleProps;return(0,a.jsx)(i.Z,{sx:(0,r.Z)({color:c},l),spacing:1,direction:"row",children:(0,a.jsx)(o.Z,{color:"inherit",size:t})})}},73808:function(n,e,t){t.d(e,{Z:function(){return c}});var r=t(1413),i=t(22892),o=t(44666),a=t(43906),s=t(80184);function c(n){var e=n.toolbarProps,t=n.children;return(0,s.jsx)(i.Z,(0,r.Z)((0,r.Z)({elevation:0},e),{},{children:(0,s.jsx)(o.Z,{variant:"regular",sx:{bgcolor:function(n){return"light"===n.palette.mode?a.s[50]:null},color:function(n){return"light"===n.palette.mode?"#000":null},pr:0},children:t})}))}},79723:function(n,e,t){t.d(e,{N:function(){return o}});var r=t(70885),i=t(72791),o=function(n,e){var t=(0,i.useState)(n),o=(0,r.Z)(t,2),a=o[0],s=o[1];return(0,i.useEffect)((function(){var t=setTimeout((function(){s(n)}),e);return function(){clearTimeout(t)}}),[n,e]),a}},54596:function(n,e,t){var r=t(52797),i=t(74142);e.Z=function(){var n=(0,i.Z)();return{isMobile:(0,r.Z)(n.breakpoints.down("sm")),isMed:(0,r.Z)(n.breakpoints.between("sm","md")),isLg:(0,r.Z)(n.breakpoints.between("md","lg")),isXl:(0,r.Z)(n.breakpoints.between("lg","xl")),isAboveXl:(0,r.Z)(n.breakpoints.up("xl"))}}},31651:function(n,e,t){t.d(e,{Z:function(){return a}});t(72791);var r={parentClass:"LoadingLogo_parentClass__NFHXT",loadingLogo:"LoadingLogo_loadingLogo__BqUtz",loadingParent:"LoadingLogo_loadingParent__VASnq","loading-container":"LoadingLogo_loading-container__cjLsJ","whole-page":"LoadingLogo_whole-page__DkCG7",ldsFacebook:"LoadingLogo_ldsFacebook__pRdY2","lds-facebook":"LoadingLogo_lds-facebook__JLntj"},i=t(77783),o=t(80184);function a(n){return(0,o.jsxs)("div",{className:"".concat(r.parentClass," w-100"),children:[(0,o.jsx)("div",{children:(0,o.jsx)("div",{className:r.loadingLogo,children:(0,o.jsx)("img",{src:i,className:"".concat(r.logoImg," d-inline-block"),alt:"logo"})})}),(0,o.jsx)("div",{className:r.loadingParent,children:(0,o.jsxs)("div",{className:r.ldsFacebook,children:[(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{})]})}),(0,o.jsxs)("div",{className:r.secfont,children:["Loading ",n.message," ..."]})]})}},90146:function(n,e,t){function r(n,e,t){var r=document.getElementById(n);r&&setTimeout((function(){var n,e;null===(n=r)||void 0===n||n.scrollIntoView({block:null!==(e=t)&&void 0!==e?e:"end"}),r=null}),null!==e&&void 0!==e?e:0)}t.d(e,{H5:function(){return r}})},64317:function(n,e,t){t.d(e,{C:function(){return o},T:function(){return i}});var r=t(78687),i=r.useDispatch,o=r.useSelector},96580:function(n,e,t){t.d(e,{Z:function(){return F}});var r=t(30168),i=t(63366),o=t(87462),a=t(72791),s=t(28182),c=t(94419),l=t(52554),u=t(49853),d=t(85513),f=t(60277),v=t(75878),g=t(21217);function h(n){return(0,g.Z)("MuiCircularProgress",n)}(0,v.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var x,p,Z,m,j,b,k,w,y=t(80184),S=["className","color","disableShrink","size","style","thickness","value","variant"],P=44,C=(0,l.F4)(j||(j=x||(x=(0,r.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),_=(0,l.F4)(b||(b=p||(p=(0,r.Z)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),L=(0,f.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(n,e){var t=n.ownerState;return[e.root,e[t.variant],e["color".concat((0,u.Z)(t.color))]]}})((function(n){var e=n.ownerState,t=n.theme;return(0,o.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:t.transitions.create("transform")},"inherit"!==e.color&&{color:(t.vars||t).palette[e.color].main})}),(function(n){return"indeterminate"===n.ownerState.variant&&(0,l.iv)(k||(k=Z||(Z=(0,r.Z)(["\n      animation: "," 1.4s linear infinite;\n    "]))),C)})),N=(0,f.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(n,e){return e.svg}})({display:"block"}),I=(0,f.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(n,e){var t=n.ownerState;return[e.circle,e["circle".concat((0,u.Z)(t.variant))],t.disableShrink&&e.circleDisableShrink]}})((function(n){var e=n.ownerState,t=n.theme;return(0,o.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(n){var e=n.ownerState;return"indeterminate"===e.variant&&!e.disableShrink&&(0,l.iv)(w||(w=m||(m=(0,r.Z)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),_)})),F=a.forwardRef((function(n,e){var t=(0,d.Z)({props:n,name:"MuiCircularProgress"}),r=t.className,a=t.color,l=void 0===a?"primary":a,f=t.disableShrink,v=void 0!==f&&f,g=t.size,x=void 0===g?40:g,p=t.style,Z=t.thickness,m=void 0===Z?3.6:Z,j=t.value,b=void 0===j?0:j,k=t.variant,w=void 0===k?"indeterminate":k,C=(0,i.Z)(t,S),_=(0,o.Z)({},t,{color:l,disableShrink:v,size:x,thickness:m,value:b,variant:w}),F=function(n){var e=n.classes,t=n.variant,r=n.color,i=n.disableShrink,o={root:["root",t,"color".concat((0,u.Z)(r))],svg:["svg"],circle:["circle","circle".concat((0,u.Z)(t)),i&&"circleDisableShrink"]};return(0,c.Z)(o,h,e)}(_),R={},z={},D={};if("determinate"===w){var M=2*Math.PI*((P-m)/2);R.strokeDasharray=M.toFixed(3),D["aria-valuenow"]=Math.round(b),R.strokeDashoffset="".concat(((100-b)/100*M).toFixed(3),"px"),z.transform="rotate(-90deg)"}return(0,y.jsx)(L,(0,o.Z)({className:(0,s.Z)(F.root,r),style:(0,o.Z)({width:x,height:x},z,p),ownerState:_,ref:e,role:"progressbar"},D,C,{children:(0,y.jsx)(N,{className:F.svg,ownerState:_,viewBox:"".concat(22," ").concat(22," ").concat(P," ").concat(P),children:(0,y.jsx)(I,{className:F.circle,style:R,ownerState:_,cx:P,cy:P,r:(P-m)/2,fill:"none",strokeWidth:m})})}))}))},88163:function(n,e,t){t.d(e,{Z:function(){return i}});var r=t(72791);var i=function(n,e){var t=function(){var n=(0,r.useRef)(!0);return n.current?(n.current=!1,!0):n.current}();(0,r.useEffect)((function(){if(!t)return n()}),e)}}}]);
//# sourceMappingURL=1755.3cc55cf0.chunk.js.map