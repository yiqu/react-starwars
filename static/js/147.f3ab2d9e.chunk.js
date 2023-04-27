"use strict";(self.webpackChunkstarwars=self.webpackChunkstarwars||[]).push([[147],{758:function(n,e,t){t.d(e,{Z:function(){return a}});var i=t(96015),o=t(94162),r=t(4565),s=t(80184);function a(n){var e=n.reason,t=n.debug;return(0,s.jsx)(i.Z,{marginY:5,width:"100%",children:(0,s.jsxs)(o.Z,{direction:"column",spacing:5,justifyContent:"center",alignItems:"center",children:[(0,s.jsx)(r.Z,{variant:"h5",sx:{textTransform:"uppercase"},children:"An error has occurred!"}),(0,s.jsxs)(o.Z,{direction:"column",spacing:1,justifyContent:"center",alignItems:"center",children:[(0,s.jsx)(r.Z,{variant:"body1",fontWeight:700,children:"REASON"}),(0,s.jsx)(r.Z,{variant:"body2",children:e})]}),(0,s.jsxs)(o.Z,{direction:"column",spacing:1,justifyContent:"center",alignItems:"center",children:[(0,s.jsx)(r.Z,{variant:"body1",fontWeight:700,children:"DEBUG"}),(0,s.jsx)(r.Z,{variant:"body2",component:"div",children:(0,s.jsx)("pre",{children:(0,s.jsx)("code",{style:{display:"flex",textAlign:"center"},children:JSON.stringify(t)})})})]})]})})}},27147:function(n,e,t){t.r(e);var i=t(73808),o=t(54596),r=t(94162),s=t(96015),a=t(758),c=t(72791),l=t(36227),d=t(51597),u=t(64317),f=t(31651),g=t(69797),h=t(41266),x=t(64849),Z=t(90146),v=t(26758),p=t(57689),j=t(80184),m="planets";e.default=function(){var n=(0,o.Z)().isMobile,e=(0,u.T)(),t=(0,u.C)((0,h.Zp)(m)),b=(0,u.C)((0,h.eA)(m)),w=(0,g.Eg)({entity:m,pagination:{page:t}}),y=w.data,L=w.isFetching,_=w.isLoading,C=w.error,k=w.isSuccess,P=w.isError,S=(w.refetch,(0,p.s0)());return(0,c.useEffect)((function(){(0,Z.H5)("top-pagination",300,"end")}),[k]),_?(0,j.jsx)(r.Z,{direction:"column",width:"100%",justifyContent:"center",alignItems:"center",height:"100vh",children:(0,j.jsx)(f.Z,{message:m})}):P?(0,j.jsx)(a.Z,{reason:C.status,debug:C.error}):y?(0,j.jsxs)(r.Z,{direction:"column",width:"100%",children:[(0,j.jsx)(i.Z,{toolbarProps:{position:"sticky",sx:{top:n?"56px":"64px"}},children:(0,j.jsx)(l.Z,{container:!0,xs:12,children:(0,j.jsx)(l.Z,{xs:10,sm:4,children:(0,j.jsx)(r.Z,{direction:"row",justifyContent:"start",alignItems:"center",children:(0,j.jsx)(v.Z,{entity:m,onResultSelect:function(n){S("./".concat(null===n||void 0===n?void 0:n.uid))}})})})})}),(0,j.jsx)(s.Z,{mt:2,mx:n?2:0,children:(0,j.jsx)(d.Z,{data:y.results,itemUrlPath:m,totalPages:b,page:t,onPaged:function(n,t){e((0,x.g)({entityId:m,pagination:{page:t}}))},totalRecords:y.total_records,isFetching:L})})]}):(0,j.jsx)(j.Fragment,{})}},51597:function(n,e,t){var i=t(70885),o=t(1413),r=t(72791),s=t(36227),a=t(11087),c=t(94162),l=t(96015),d=t(4565),u=t(54585),f=(t(35932),t(29794),t(45894)),g=t(45173),h=t(79365),x=t(35702),Z=t(81898),v=t(72851),p=t(763),j=t(65060),m=t(80184);function b(n){var e=n.name,t=n.id,s=(0,r.useState)(""),a=(0,i.Z)(s,2),l=a[0],u=(a[1],(0,r.useState)(!1)),g=(0,i.Z)(u,2);g[0],g[1];return(0,m.jsx)(c.Z,{direction:"row",sx:(0,o.Z)((0,o.Z)({fontWeight:"500",p:1},f._),{},{border:"1px solid #ddd",borderRadius:"10px"}),title:"#".concat(t," ").concat(e),className:l,children:(0,m.jsx)(d.Z,{variant:"h6",sx:(0,o.Z)({},f.L),children:e})})}e.Z=function(n){var e=n.data,t=n.itemUrlPath,i=n.gutterSize,r=void 0===i?"med":i,w=n.totalPages,y=void 0===w?0:w,L=n.page,_=void 0===L?0:L,C=n.totalRecords,k=void 0===C?0:C,P=n.isFetching,S=n.onPaged;return(0,m.jsxs)(g.Z,{size:r,children:[y>0&&(0,m.jsx)(s.Z,{xs:12,mb:2,id:"top-pagination",children:(0,m.jsxs)(c.Z,{direction:"row",sx:{justifyContent:"space-between",alignItems:"center"},width:"100%",children:[(0,m.jsx)(l.Z,{sx:{minWidth:120},children:(0,m.jsxs)(Z.Z,{fullWidth:!0,size:"small",variant:"standard",children:[(0,m.jsx)(h.Z,{id:"page-selection",children:"Page"}),(0,m.jsx)(v.Z,{labelId:"page-selection",id:"demo-simple-select",value:"".concat(_),label:"Age",onChange:function(n){S&&S(null,+n.target.value)},children:(0,p.range)(1,y+1,1).map((function(n){return(0,m.jsx)(x.Z,{value:n,children:n},n)}))})]})}),(0,m.jsx)(l.Z,{children:(0,m.jsxs)(d.Z,{color:"text.secondary",sx:{lineHeight:1},children:[(_-1)*j.JY+1," - ",_===y?k:_*j.JY," of ",k]})})]})}),e.map((function(n){return(0,m.jsx)(s.Z,{xs:12,sm:6,md:4,xl:2.4,children:(0,m.jsx)(l.Z,{sx:{p:1},children:(0,m.jsx)(a.rU,{to:"/".concat(t,"/").concat(n.uid),children:(0,m.jsx)(b,{name:n.name,id:n.uid})})})},n.uid)})),S&&y>0&&(0,m.jsx)(s.Z,{xs:12,mt:2,children:(0,m.jsx)(c.Z,{direction:"row",sx:(0,o.Z)({},f._),width:"100%",children:(0,m.jsx)(u.Z,{count:y,shape:"rounded",page:_,showFirstButton:!0,showLastButton:!0,onChange:S,disabled:P})})})]})}},26758:function(n,e,t){var i=t(1413),o=t(70885),r=t(94162),s=t(22262),a=t(96015),c=t(59911),l=t(40255),d=t(72791),u=t(88163),f=t(69797),g=t(15290),h=t(79723),x=t(80184);function Z(n){var e=n.params,t=n.entity;return(0,x.jsx)(c.Z,(0,i.Z)((0,i.Z)({},e),{},{label:"Filter ".concat(t),variant:"standard"}))}e.Z=function(n){var e=n.entity,t=n.onResultSelect,i=(0,d.useState)([]),c=(0,o.Z)(i,2),v=c[0],p=c[1],j=(0,d.useState)(null),m=(0,o.Z)(j,2),b=m[0],w=m[1],y=(0,d.useState)(null),L=(0,o.Z)(y,2),_=L[0],C=L[1],k=(0,h.N)(_,600),P=(0,f.rw)(k?{entity:e,name:k}:l.CN),S=P.data,I=P.isFetching;return P.error,P.isError,P.refetch,(0,d.useEffect)((function(){p(null!==S&&void 0!==S?S:[])}),[S]),(0,u.Z)((function(){}),[k]),(0,x.jsxs)(r.Z,{direction:"row",justifyContent:"start",alignItems:"center",width:"100%",children:[(0,x.jsx)(s.Z,{disablePortal:!0,id:"search-entity-autocomplete",options:v,fullWidth:!0,autoHighlight:!0,blurOnSelect:!0,filterOptions:function(n){return n},value:b,getOptionLabel:function(n){return n.properties.name},noOptionsText:"Search for ".concat(e),loading:I,renderInput:function(n){return(0,x.jsx)(Z,{params:n,entity:e})},onChange:function(n,e){var i;p((i=e)?[i]:v),w(i),t(i)},onInputChange:function(n,e){return function(n,e){C(e)}(0,e)},isOptionEqualToValue:function(n,e){return n.uid===e.uid}}),(0,x.jsx)(a.Z,{ml:2,children:I&&(0,x.jsx)(g.Z,{size:20})})]})}},41266:function(n,e,t){t.d(e,{Zp:function(){return r},eA:function(){return s}});var i=t(50873),o=function(n){return n.swapiConfig},r=function(n){return(0,i.P1)(o,(function(e){var t,i,o;return null!==(t=null===(i=e.pagination[n])||void 0===i||null===(o=i.pagination)||void 0===o?void 0:o.page)&&void 0!==t?t:1}))},s=function(n){return(0,i.P1)(o,(function(e){var t,i,o;return null!==(t=null===(i=e.pagination[n])||void 0===i||null===(o=i.pagination)||void 0===o?void 0:o.total_pages)&&void 0!==t?t:0}))}},45173:function(n,e,t){var i=t(70885),o=t(36227),r=t(72791),s=t(80184);e.Z=function(n){var e=n.size,t=void 0===e?"med":e,a=n.children,c=(0,r.useState)({width:7,offset:2.5}),l=(0,i.Z)(c,2),d=l[0],u=l[1];return(0,r.useEffect)((function(){switch(t){case"full":u({width:12,offset:0});break;case"med":u({width:7,offset:2.5});break;case"skinny":u({width:4,offset:4})}}),[t]),(0,s.jsx)(o.Z,{container:!0,spacing:0,xs:12,xsOffset:0,sm:d.width,smOffset:d.offset,children:a})}},15290:function(n,e,t){t.d(e,{Z:function(){return a}});var i=t(1413),o=(t(72791),t(94162)),r=t(96580),s=t(80184);function a(n){var e=n.size,t=void 0===e?40:e,a=n.color,c=void 0===a?"grey.500":a,l=n.styleProps;return(0,s.jsx)(o.Z,{sx:(0,i.Z)({color:c},l),spacing:1,direction:"row",children:(0,s.jsx)(r.Z,{color:"inherit",size:t})})}},73808:function(n,e,t){t.d(e,{Z:function(){return c}});var i=t(1413),o=t(22892),r=t(44666),s=t(43906),a=t(80184);function c(n){var e=n.toolbarProps,t=n.children;return(0,a.jsx)(o.Z,(0,i.Z)((0,i.Z)({elevation:0},e),{},{children:(0,a.jsx)(r.Z,{variant:"regular",sx:{bgcolor:function(n){return"light"===n.palette.mode?s.s[100]:null},color:function(n){return"light"===n.palette.mode?"#000":null},pr:0},children:t})}))}},79723:function(n,e,t){t.d(e,{N:function(){return r}});var i=t(70885),o=t(72791),r=function(n,e){var t=(0,o.useState)(n),r=(0,i.Z)(t,2),s=r[0],a=r[1];return(0,o.useEffect)((function(){var t=setTimeout((function(){a(n)}),e);return function(){clearTimeout(t)}}),[n,e]),s}},54596:function(n,e,t){var i=t(52797),o=t(74142);e.Z=function(){var n=(0,o.Z)();return{isMobile:(0,i.Z)(n.breakpoints.down("sm")),isMed:(0,i.Z)(n.breakpoints.down("md")),isLg:(0,i.Z)(n.breakpoints.down("lg")),isXl:(0,i.Z)(n.breakpoints.down("xl"))}}},31651:function(n,e,t){t.d(e,{Z:function(){return s}});t(72791);var i={parentClass:"LoadingLogo_parentClass__NFHXT",loadingLogo:"LoadingLogo_loadingLogo__BqUtz",loadingParent:"LoadingLogo_loadingParent__VASnq","loading-container":"LoadingLogo_loading-container__cjLsJ","whole-page":"LoadingLogo_whole-page__DkCG7",ldsFacebook:"LoadingLogo_ldsFacebook__pRdY2","lds-facebook":"LoadingLogo_lds-facebook__JLntj"},o=t(77783),r=t(80184);function s(n){return(0,r.jsxs)("div",{className:"".concat(i.parentClass," w-100"),children:[(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:i.loadingLogo,children:(0,r.jsx)("img",{src:o,className:"".concat(i.logoImg," d-inline-block"),alt:"logo"})})}),(0,r.jsx)("div",{className:i.loadingParent,children:(0,r.jsxs)("div",{className:i.ldsFacebook,children:[(0,r.jsx)("div",{}),(0,r.jsx)("div",{}),(0,r.jsx)("div",{})]})}),(0,r.jsxs)("div",{className:i.secfont,children:["Loading ",n.message," ..."]})]})}},90146:function(n,e,t){function i(n,e,t){var i=document.getElementById(n);i&&setTimeout((function(){var n,e;null===(n=i)||void 0===n||n.scrollIntoView({block:null!==(e=t)&&void 0!==e?e:"end"}),i=null}),null!==e&&void 0!==e?e:0)}t.d(e,{H5:function(){return i}})},88163:function(n,e,t){t.d(e,{Z:function(){return o}});var i=t(72791);var o=function(n,e){var t=function(){var n=(0,i.useRef)(!0);return n.current?(n.current=!1,!0):n.current}();(0,i.useEffect)((function(){if(!t)return n()}),e)}}}]);
//# sourceMappingURL=147.f3ab2d9e.chunk.js.map