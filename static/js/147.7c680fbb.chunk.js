"use strict";(self.webpackChunkstarwars=self.webpackChunkstarwars||[]).push([[147],{758:function(n,t,i){i.d(t,{Z:function(){return s}});var e=i(96015),o=i(94162),r=i(4565),a=i(80184);function s(n){var t=n.reason,i=n.debug;return(0,a.jsx)(e.Z,{marginY:5,width:"100%",children:(0,a.jsxs)(o.Z,{direction:"column",spacing:5,justifyContent:"center",alignItems:"center",children:[(0,a.jsx)(r.Z,{variant:"h5",sx:{textTransform:"uppercase"},children:"An error has occurred!"}),(0,a.jsxs)(o.Z,{direction:"column",spacing:1,justifyContent:"center",alignItems:"center",children:[(0,a.jsx)(r.Z,{variant:"body1",fontWeight:700,children:"REASON"}),(0,a.jsx)(r.Z,{variant:"body2",children:t})]}),(0,a.jsxs)(o.Z,{direction:"column",spacing:1,justifyContent:"center",alignItems:"center",children:[(0,a.jsx)(r.Z,{variant:"body1",fontWeight:700,children:"DEBUG"}),(0,a.jsx)(r.Z,{variant:"body2",component:"div",children:(0,a.jsx)("pre",{children:(0,a.jsx)("code",{style:{display:"flex",textAlign:"center"},children:JSON.stringify(i)})})})]})]})})}},27147:function(n,t,i){i.r(t);var e=i(73808),o=i(54596),r=i(94162),a=i(96580),s=i(4565),c=i(17205),l=i(96015),d=i(758),u=i(72791),f=i(36227),g=i(51597),x=i(64317),h=i(31651),v=i(73054),p=i(41266),Z=i(64849),j=i(90146),m=i(26758),b=i(57689),y=i(47194),w=i(32619),L=i(23176),_=(i(65218),i(80184)),C="planets";t.default=function(){var n=(0,o.Z)().isMobile,t=(0,x.T)(),i=(0,x.C)((0,p.Zp)(C)),I=(0,x.C)((0,p.eA)(C)),k=(0,v.Eg)({entity:C,pagination:{page:i}}),P=k.data,S=k.isFetching,T=k.isLoading,F=k.error,N=k.isSuccess,E=k.isError,z=(k.refetch,k.fulfilledTimeStamp),O=k.startedTimeStamp,R=(null!==z&&void 0!==z?z:0)-(null!==O&&void 0!==O?O:0),A=(0,b.s0)();return(0,u.useEffect)((function(){(0,j.H5)("top-pagination",300,"end")}),[N]),T?(0,_.jsx)(r.Z,{direction:"column",width:"100%",justifyContent:"center",alignItems:"center",height:"100vh",children:(0,_.jsx)(h.Z,{message:C})}):E?(0,_.jsx)(d.Z,{reason:F.status,debug:F.error}):P?(0,_.jsxs)(r.Z,{direction:"column",width:"100%",children:[(0,_.jsx)(e.Z,{toolbarProps:{position:"sticky",sx:{top:n?"56px":"64px"}},children:(0,_.jsxs)(f.Z,{container:!0,xs:12,children:[(0,_.jsx)(f.Z,{xs:4,sm:4,children:(0,_.jsx)(r.Z,{direction:"row",justifyContent:"start",alignItems:"center",children:(0,_.jsx)(m.Z,{entity:C,onResultSelect:function(n){A("./".concat(null===n||void 0===n?void 0:n.uid))}})})}),(0,_.jsx)(f.Z,{xs:8,xsOffset:"auto",display:"flex",children:(0,_.jsxs)(r.Z,{direction:"row",justifyContent:"end",alignItems:"center",width:"100%",spacing:2,"data-tooltip-id":"fetch-information",children:[S&&(0,_.jsx)(a.Z,{size:20}),!S&&(0,_.jsxs)(s.Z,{fontSize:11,component:"div",children:["Last fetched ",(0,_.jsx)(y.Z,{dateInMilli:null!==z&&void 0!==z?z:0}),", took: ",(0,_.jsx)(w.Z,{durationInMilli:R})]}),(0,_.jsx)(c.Z,{variant:"outlined",startIcon:(0,_.jsx)(L.Z,{}),onClick:function(){t(v.aY.util.invalidateTags([{type:v.qN,id:"PARTIAL-LIST"}]))},children:"Refresh"})]})})]})}),(0,_.jsx)(l.Z,{mt:2,mx:n?2:0,children:(0,_.jsx)(g.Z,{data:P.results,itemUrlPath:C,totalPages:I,page:i,onPaged:function(n,i){t((0,Z.g)({entityId:C,pagination:{page:i}}))},totalRecords:P.total_records,isFetching:S})})]}):(0,_.jsx)(_.Fragment,{})}},51597:function(n,t,i){var e=i(70885),o=i(1413),r=i(72791),a=i(36227),s=i(11087),c=i(94162),l=i(96015),d=i(4565),u=i(54585),f=(i(35932),i(29794),i(45894)),g=i(45173),x=i(79365),h=i(35702),v=i(81898),p=i(72851),Z=i(763),j=i(65060),m=i(80184);function b(n){var t=n.name,i=n.id,a=(0,r.useState)(""),s=(0,e.Z)(a,2),l=s[0],u=(s[1],(0,r.useState)(!1)),g=(0,e.Z)(u,2);g[0],g[1];return(0,m.jsx)(c.Z,{direction:"row",sx:(0,o.Z)((0,o.Z)({fontWeight:"500",p:1},f._),{},{border:"1px solid #ddd",borderRadius:"10px"}),title:"#".concat(i," ").concat(t),className:l,children:(0,m.jsx)(d.Z,{variant:"h6",sx:(0,o.Z)({},f.L),children:t})})}t.Z=function(n){var t=n.data,i=n.itemUrlPath,e=n.gutterSize,r=void 0===e?"med":e,y=n.totalPages,w=void 0===y?0:y,L=n.page,_=void 0===L?0:L,C=n.totalRecords,I=void 0===C?0:C,k=n.isFetching,P=n.onPaged;return(0,m.jsxs)(g.Z,{size:r,children:[w>0&&(0,m.jsx)(a.Z,{xs:12,mb:2,id:"top-pagination",children:(0,m.jsxs)(c.Z,{direction:"row",sx:{justifyContent:"space-between",alignItems:"center"},width:"100%",children:[(0,m.jsx)(l.Z,{sx:{minWidth:120},children:(0,m.jsxs)(v.Z,{fullWidth:!0,size:"small",variant:"standard",children:[(0,m.jsx)(x.Z,{id:"page-selection",children:"Page"}),(0,m.jsx)(p.Z,{labelId:"page-selection",value:"".concat(_),label:"Age",onChange:function(n){P&&P(null,+n.target.value)},children:(0,Z.range)(1,w+1,1).map((function(n){return(0,m.jsx)(h.Z,{value:n,children:n},n)}))})]})}),(0,m.jsx)(l.Z,{children:(0,m.jsxs)(d.Z,{color:"text.secondary",sx:{lineHeight:1},children:[(_-1)*j.JY+1," - ",_===w?I:_*j.JY," of ",I]})})]})}),t.map((function(n){return(0,m.jsx)(a.Z,{xs:12,sm:6,md:4,xl:2.4,children:(0,m.jsx)(l.Z,{sx:{p:1},children:(0,m.jsx)(s.rU,{to:"/".concat(i,"/").concat(n.uid),children:(0,m.jsx)(b,{name:n.name,id:n.uid})})})},n.uid)})),P&&w>0&&(0,m.jsx)(a.Z,{xs:12,mt:2,children:(0,m.jsx)(c.Z,{direction:"row",sx:(0,o.Z)({},f._),width:"100%",children:(0,m.jsx)(u.Z,{count:w,shape:"rounded",page:_,showFirstButton:!0,showLastButton:!0,onChange:P,disabled:k})})})]})}},26758:function(n,t,i){var e=i(1413),o=i(70885),r=i(94162),a=i(4218),s=i(96015),c=i(59911),l=i(40255),d=i(72791),u=i(88163),f=i(73054),g=i(15290),x=i(79723),h=i(80184);function v(n){var t=n.params,i=n.entity;return(0,h.jsx)(c.Z,(0,e.Z)((0,e.Z)({},t),{},{label:"Filter ".concat(i),variant:"standard"}))}t.Z=function(n){var t=n.entity,i=n.onResultSelect,e=(0,d.useState)([]),c=(0,o.Z)(e,2),p=c[0],Z=c[1],j=(0,d.useState)(null),m=(0,o.Z)(j,2),b=m[0],y=m[1],w=(0,d.useState)(null),L=(0,o.Z)(w,2),_=L[0],C=L[1],I=(0,x.N)(_,600),k=(0,f.rw)(I?{entity:t,name:I}:l.skipToken),P=k.data,S=k.isFetching;return k.error,k.isError,k.refetch,(0,d.useEffect)((function(){Z(null!==P&&void 0!==P?P:[])}),[P]),(0,u.Z)((function(){}),[I]),(0,h.jsxs)(r.Z,{direction:"row",justifyContent:"start",alignItems:"center",width:"100%",children:[(0,h.jsx)(a.Z,{disablePortal:!0,id:"search-entity-autocomplete",options:p,fullWidth:!0,autoHighlight:!0,blurOnSelect:!0,filterOptions:function(n){return n},value:b,getOptionLabel:function(n){var t;return null!==(t=n.properties.name)&&void 0!==t?t:n.properties.title},noOptionsText:"Search for ".concat(t),loading:S,renderInput:function(n){return(0,h.jsx)(v,{params:n,entity:t})},onChange:function(n,t){var e;Z((e=t)?[e]:p),y(e),i(e)},onInputChange:function(n,t){return function(n,t){C(t)}(0,t)},isOptionEqualToValue:function(n,t){return n.uid===t.uid}}),(0,h.jsx)(s.Z,{ml:2,children:S&&(0,h.jsx)(g.Z,{size:20})})]})}},41266:function(n,t,i){i.d(t,{$w:function(){return d},H8:function(){return c},Zp:function(){return a},eA:function(){return s},jU:function(){return l}});var e=i(50873),o=i(70773),r=function(n){return n.swapiConfig},a=function(n){return(0,e.P1)(r,(function(t){var i,e,o;return null!==(i=null===(e=t.pagination[n])||void 0===e||null===(o=e.pagination)||void 0===o?void 0:o.page)&&void 0!==i?i:1}))},s=function(n){return(0,e.P1)(r,(function(t){var i,e,o;return null!==(i=null===(e=t.pagination[n])||void 0===e||null===(o=e.pagination)||void 0===o?void 0:o.total_pages)&&void 0!==i?i:0}))},c=function(n){return(0,e.P1)(r,(function(t){var i,e,o;return null!==(i=null===(e=t.pagination[n])||void 0===e||null===(o=e.pagination)||void 0===o?void 0:o.total_records)&&void 0!==i?i:0}))},l=function(n){return(0,e.P1)(r,(function(t){var i;return null===(i=t.pagination[n])||void 0===i?void 0:i.pagination.next}))},d=function(n){return(0,e.P1)(r,(function(t){var i,e;return null!==(i=null===(e=t.pagination[n])||void 0===e?void 0:e.pagination.fetchUrl)&&void 0!==i?i:"".concat(o.H8).concat(n,"?page=1&limit=30")}))}},47194:function(n,t,i){var e=i(29158),o=i(80184);t.Z=function(n){var t=n.dateInMilli;return(0,o.jsx)(o.Fragment,{children:void 0!==t&&(0,e.Z)(t,"MM/dd/yyyy p")})}},32619:function(n,t,i){var e=i(51943),o=i(80184);t.Z=function(n){var t=n.durationInMilli;return(0,o.jsx)(o.Fragment,{children:t>1e3?(0,e.Z)(0,t,{includeSeconds:!0}):t+" ms"})}},45173:function(n,t,i){var e=i(36227),o=i(80184);t.Z=function(n){var t=n.size,i=void 0===t?"med":t,r=n.children;return(0,o.jsx)(e.Z,{container:!0,spacing:0,xs:12,xsOffset:0,sm:"full"===i?12:"med"===i?7:4,smOffset:"full"===i?0:"med"===i?2.5:4,children:r})}},15290:function(n,t,i){i.d(t,{Z:function(){return s}});var e=i(1413),o=(i(72791),i(94162)),r=i(96580),a=i(80184);function s(n){var t=n.size,i=void 0===t?40:t,s=n.color,c=void 0===s?"grey.500":s,l=n.styleProps;return(0,a.jsx)(o.Z,{sx:(0,e.Z)({color:c},l),spacing:1,direction:"row",children:(0,a.jsx)(r.Z,{color:"inherit",size:i})})}},73808:function(n,t,i){i.d(t,{Z:function(){return c}});var e=i(1413),o=i(22892),r=i(44666),a=i(43906),s=i(80184);function c(n){var t=n.toolbarProps,i=n.children;return(0,s.jsx)(o.Z,(0,e.Z)((0,e.Z)({elevation:0},t),{},{children:(0,s.jsx)(r.Z,{variant:"regular",sx:{bgcolor:function(n){return"light"===n.palette.mode?a.s[100]:null},color:function(n){return"light"===n.palette.mode?"#000":null},pr:0},children:i})}))}},79723:function(n,t,i){i.d(t,{N:function(){return r}});var e=i(70885),o=i(72791),r=function(n,t){var i=(0,o.useState)(n),r=(0,e.Z)(i,2),a=r[0],s=r[1];return(0,o.useEffect)((function(){var i=setTimeout((function(){s(n)}),t);return function(){clearTimeout(i)}}),[n,t]),a}},54596:function(n,t,i){var e=i(52797),o=i(74142);t.Z=function(){var n=(0,o.Z)();return{isMobile:(0,e.Z)(n.breakpoints.down("sm")),isMed:(0,e.Z)(n.breakpoints.down("md")),isLg:(0,e.Z)(n.breakpoints.down("lg")),isXl:(0,e.Z)(n.breakpoints.down("xl"))}}},31651:function(n,t,i){i.d(t,{Z:function(){return a}});i(72791);var e={parentClass:"LoadingLogo_parentClass__NFHXT",loadingLogo:"LoadingLogo_loadingLogo__BqUtz",loadingParent:"LoadingLogo_loadingParent__VASnq","loading-container":"LoadingLogo_loading-container__cjLsJ","whole-page":"LoadingLogo_whole-page__DkCG7",ldsFacebook:"LoadingLogo_ldsFacebook__pRdY2","lds-facebook":"LoadingLogo_lds-facebook__JLntj"},o=i(77783),r=i(80184);function a(n){return(0,r.jsxs)("div",{className:"".concat(e.parentClass," w-100"),children:[(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:e.loadingLogo,children:(0,r.jsx)("img",{src:o,className:"".concat(e.logoImg," d-inline-block"),alt:"logo"})})}),(0,r.jsx)("div",{className:e.loadingParent,children:(0,r.jsxs)("div",{className:e.ldsFacebook,children:[(0,r.jsx)("div",{}),(0,r.jsx)("div",{}),(0,r.jsx)("div",{})]})}),(0,r.jsxs)("div",{className:e.secfont,children:["Loading ",n.message," ..."]})]})}},90146:function(n,t,i){function e(n,t,i){var e=document.getElementById(n);e&&setTimeout((function(){var n,t;null===(n=e)||void 0===n||n.scrollIntoView({block:null!==(t=i)&&void 0!==t?t:"end"}),e=null}),null!==t&&void 0!==t?t:0)}i.d(t,{H5:function(){return e}})},88163:function(n,t,i){i.d(t,{Z:function(){return o}});var e=i(72791);var o=function(n,t){var i=function(){var n=(0,e.useRef)(!0);return n.current?(n.current=!1,!0):n.current}();(0,e.useEffect)((function(){if(!i)return n()}),t)}}}]);
//# sourceMappingURL=147.7c680fbb.chunk.js.map