"use strict";(self.webpackChunkstarwars=self.webpackChunkstarwars||[]).push([[940],{758:function(n,t,e){e.d(t,{Z:function(){return a}});var i=e(96015),r=e(94162),o=e(4565),s=e(80184);function a(n){var t=n.reason,e=n.debug;return(0,s.jsx)(i.Z,{marginY:5,width:"100%",children:(0,s.jsxs)(r.Z,{direction:"column",spacing:5,justifyContent:"center",alignItems:"center",children:[(0,s.jsx)(o.Z,{variant:"h5",sx:{textTransform:"uppercase"},children:"An error has occurred!"}),(0,s.jsxs)(r.Z,{direction:"column",spacing:1,justifyContent:"center",alignItems:"center",children:[(0,s.jsx)(o.Z,{variant:"body1",fontWeight:700,children:"REASON"}),(0,s.jsx)(o.Z,{variant:"body2",children:t})]}),(0,s.jsxs)(r.Z,{direction:"column",spacing:1,justifyContent:"center",alignItems:"center",children:[(0,s.jsx)(o.Z,{variant:"body1",fontWeight:700,children:"DEBUG"}),(0,s.jsx)(o.Z,{variant:"body2",component:"div",children:(0,s.jsx)("pre",{children:(0,s.jsx)("code",{style:{display:"flex",textAlign:"center"},children:JSON.stringify(e)})})})]})]})})}},83940:function(n,t,e){e.r(t),e.d(t,{default:function(){return A},loader:function(){return M}});var i=e(1413),r=e(57689),o=e(11087),s=e(28223),a=e(85153),c=e(14224),l=e(11904),u=e(70773),d=e(65060),f=e(51070),g=e.n(f),h=e(54596),p=e(94162),v=e(96015),x=e(4565),j=e(17205),Z=e(758),m=e(72791),b=e(64317),y=e(31651),w=e(41266),_=e(73054),L=e(26758),k=e(90146),C=e(64849),P=e(19071),I=e(45173),N=e(14771),S=e(91441),F=e(36227),T=e(45894),E=e(80184);function O(n){var t=n.count,e=void 0===t?1:t,r=n.sxProps,o=void 0===r?{}:r;return(0,E.jsx)(E.Fragment,{children:Array.from(Array(e).keys()).map((function(n){return(0,E.jsx)(F.Z,{xs:12,sx:(0,i.Z)((0,i.Z)({},o),T._),children:(0,E.jsx)(S.Z,{variant:"text",width:"100%"})},n)}))})}var H=e(73808);var U=function(n){var t=n.children,e=(0,h.Z)().isMobile;return(0,E.jsx)(H.Z,{toolbarProps:{position:"sticky",sx:{top:e?"56px":"64px"}},children:(0,E.jsx)(F.Z,{container:!0,xs:12,children:(0,E.jsx)(p.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",width:"100%",children:t})})})},z="people",A=function(){var n=(0,h.Z)().isMobile,t=(0,b.T)(),e=(0,b.C)((0,w.$w)(z)),s=(0,b.C)((0,w.jU)(z)),a=(0,b.C)((0,w.H8)(z)),c=(0,_.si)(null!==e&&void 0!==e?e:P.skipToken),l=c.data,u=(c.isFetching,c.isLoading),d=c.error,f=c.isSuccess,g=c.isError,S=(c.refetch,(0,r.s0)());(0,m.useEffect)((function(){(0,k.H5)("top-pagination",300,"end")}),[f]);return u?(0,E.jsx)(p.Z,{direction:"column",width:"100%",justifyContent:"center",alignItems:"center",height:"100vh",children:(0,E.jsx)(y.Z,{message:z})}):g?(0,E.jsx)(Z.Z,{reason:d.status,debug:d.error}):l?(0,E.jsxs)(p.Z,{direction:"column",width:"100%",children:[(0,E.jsxs)(U,{children:[(0,E.jsx)(v.Z,{flexBasis:"35%",children:(0,E.jsx)(L.Z,{entity:z,onResultSelect:function(n){S("./".concat(null===n||void 0===n?void 0:n.uid))}})}),(0,E.jsx)(v.Z,{flexBasis:"15%",sx:{display:"flex"},justifyContent:"end",alignItems:"center",children:(0,E.jsxs)(x.Z,{children:["1 - ",l.results.length," of ",a]})})]}),(0,E.jsx)(v.Z,{mt:2,mx:n?2:0,children:(0,E.jsx)(I.Z,{size:"skinny",children:(0,E.jsx)(N.Z,{dataLength:l.results.length,next:function(){t((0,C.g)({entityId:z,pagination:{page:-1,fetchUrl:s}}))},hasMore:!!s,loader:(0,E.jsx)(O,{count:3,sxProps:{height:"4rem"}}),endMessage:(0,E.jsx)(E.Fragment,{}),className:"scroller-parent",children:l.results.map((function(n){return(0,E.jsx)(p.Z,{direction:"column",children:(0,E.jsx)(v.Z,{sx:(0,i.Z)((0,i.Z)({},T._),{},{width:"100%"}),children:(0,E.jsxs)(j.Z,{fullWidth:!0,component:o.rU,to:"./".concat(n.uid),state:{someData:"some-cool-data"},sx:{height:"3rem"},children:[" ",n.name," "]})})},n.uid)}))})})})]}):(0,E.jsx)(E.Fragment,{})};function M(n){n.params;var t=g()(u.H8,"people",{limit:d.pg,page:d.tC}),e=(0,l.h)(t).pipe((0,s.g)(0),(0,a.U)((function(n){return n.response.results})));return(0,c.z)(e)}},26758:function(n,t,e){var i=e(1413),r=e(70885),o=e(94162),s=e(22262),a=e(96015),c=e(59911),l=e(40255),u=e(72791),d=e(88163),f=e(73054),g=e(15290),h=e(79723),p=e(80184);function v(n){var t=n.params,e=n.entity;return(0,p.jsx)(c.Z,(0,i.Z)((0,i.Z)({},t),{},{label:"Filter ".concat(e),variant:"standard"}))}t.Z=function(n){var t=n.entity,e=n.onResultSelect,i=(0,u.useState)([]),c=(0,r.Z)(i,2),x=c[0],j=c[1],Z=(0,u.useState)(null),m=(0,r.Z)(Z,2),b=m[0],y=m[1],w=(0,u.useState)(null),_=(0,r.Z)(w,2),L=_[0],k=_[1],C=(0,h.N)(L,600),P=(0,f.rw)(C?{entity:t,name:C}:l.skipToken),I=P.data,N=P.isFetching;return P.error,P.isError,P.refetch,(0,u.useEffect)((function(){j(null!==I&&void 0!==I?I:[])}),[I]),(0,d.Z)((function(){}),[C]),(0,p.jsxs)(o.Z,{direction:"row",justifyContent:"start",alignItems:"center",width:"100%",children:[(0,p.jsx)(s.Z,{disablePortal:!0,id:"search-entity-autocomplete",options:x,fullWidth:!0,autoHighlight:!0,blurOnSelect:!0,filterOptions:function(n){return n},value:b,getOptionLabel:function(n){var t;return null!==(t=n.properties.name)&&void 0!==t?t:n.properties.title},noOptionsText:"Search for ".concat(t),loading:N,renderInput:function(n){return(0,p.jsx)(v,{params:n,entity:t})},onChange:function(n,t){var i;j((i=t)?[i]:x),y(i),e(i)},onInputChange:function(n,t){return function(n,t){k(t)}(0,t)},isOptionEqualToValue:function(n,t){return n.uid===t.uid}}),(0,p.jsx)(a.Z,{ml:2,children:N&&(0,p.jsx)(g.Z,{size:20})})]})}},41266:function(n,t,e){e.d(t,{$w:function(){return u},H8:function(){return c},Zp:function(){return s},eA:function(){return a},jU:function(){return l}});var i=e(50873),r=e(70773),o=function(n){return n.swapiConfig},s=function(n){return(0,i.P1)(o,(function(t){var e,i,r;return null!==(e=null===(i=t.pagination[n])||void 0===i||null===(r=i.pagination)||void 0===r?void 0:r.page)&&void 0!==e?e:1}))},a=function(n){return(0,i.P1)(o,(function(t){var e,i,r;return null!==(e=null===(i=t.pagination[n])||void 0===i||null===(r=i.pagination)||void 0===r?void 0:r.total_pages)&&void 0!==e?e:0}))},c=function(n){return(0,i.P1)(o,(function(t){var e,i,r;return null!==(e=null===(i=t.pagination[n])||void 0===i||null===(r=i.pagination)||void 0===r?void 0:r.total_records)&&void 0!==e?e:0}))},l=function(n){return(0,i.P1)(o,(function(t){var e;return null===(e=t.pagination[n])||void 0===e?void 0:e.pagination.next}))},u=function(n){return(0,i.P1)(o,(function(t){var e,i;return null!==(e=null===(i=t.pagination[n])||void 0===i?void 0:i.pagination.fetchUrl)&&void 0!==e?e:"".concat(r.H8).concat(n,"?page=1&limit=30")}))}},45173:function(n,t,e){var i=e(36227),r=e(80184);t.Z=function(n){var t=n.size,e=void 0===t?"med":t,o=n.children;return(0,r.jsx)(i.Z,{container:!0,spacing:0,xs:12,xsOffset:0,sm:"full"===e?12:"med"===e?7:4,smOffset:"full"===e?0:"med"===e?2.5:4,children:o})}},15290:function(n,t,e){e.d(t,{Z:function(){return a}});var i=e(1413),r=(e(72791),e(94162)),o=e(96580),s=e(80184);function a(n){var t=n.size,e=void 0===t?40:t,a=n.color,c=void 0===a?"grey.500":a,l=n.styleProps;return(0,s.jsx)(r.Z,{sx:(0,i.Z)({color:c},l),spacing:1,direction:"row",children:(0,s.jsx)(o.Z,{color:"inherit",size:e})})}},73808:function(n,t,e){e.d(t,{Z:function(){return c}});var i=e(1413),r=e(22892),o=e(44666),s=e(43906),a=e(80184);function c(n){var t=n.toolbarProps,e=n.children;return(0,a.jsx)(r.Z,(0,i.Z)((0,i.Z)({elevation:0},t),{},{children:(0,a.jsx)(o.Z,{variant:"regular",sx:{bgcolor:function(n){return"light"===n.palette.mode?s.s[100]:null},color:function(n){return"light"===n.palette.mode?"#000":null},pr:0},children:e})}))}},79723:function(n,t,e){e.d(t,{N:function(){return o}});var i=e(70885),r=e(72791),o=function(n,t){var e=(0,r.useState)(n),o=(0,i.Z)(e,2),s=o[0],a=o[1];return(0,r.useEffect)((function(){var e=setTimeout((function(){a(n)}),t);return function(){clearTimeout(e)}}),[n,t]),s}},54596:function(n,t,e){var i=e(52797),r=e(74142);t.Z=function(){var n=(0,r.Z)();return{isMobile:(0,i.Z)(n.breakpoints.down("sm")),isMed:(0,i.Z)(n.breakpoints.down("md")),isLg:(0,i.Z)(n.breakpoints.down("lg")),isXl:(0,i.Z)(n.breakpoints.down("xl"))}}},31651:function(n,t,e){e.d(t,{Z:function(){return s}});e(72791);var i={parentClass:"LoadingLogo_parentClass__NFHXT",loadingLogo:"LoadingLogo_loadingLogo__BqUtz",loadingParent:"LoadingLogo_loadingParent__VASnq","loading-container":"LoadingLogo_loading-container__cjLsJ","whole-page":"LoadingLogo_whole-page__DkCG7",ldsFacebook:"LoadingLogo_ldsFacebook__pRdY2","lds-facebook":"LoadingLogo_lds-facebook__JLntj"},r=e(77783),o=e(80184);function s(n){return(0,o.jsxs)("div",{className:"".concat(i.parentClass," w-100"),children:[(0,o.jsx)("div",{children:(0,o.jsx)("div",{className:i.loadingLogo,children:(0,o.jsx)("img",{src:r,className:"".concat(i.logoImg," d-inline-block"),alt:"logo"})})}),(0,o.jsx)("div",{className:i.loadingParent,children:(0,o.jsxs)("div",{className:i.ldsFacebook,children:[(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{})]})}),(0,o.jsxs)("div",{className:i.secfont,children:["Loading ",n.message," ..."]})]})}},90146:function(n,t,e){function i(n,t,e){var i=document.getElementById(n);i&&setTimeout((function(){var n,t;null===(n=i)||void 0===n||n.scrollIntoView({block:null!==(t=e)&&void 0!==t?t:"end"}),i=null}),null!==t&&void 0!==t?t:0)}e.d(t,{H5:function(){return i}})}}]);
//# sourceMappingURL=940.563e6849.chunk.js.map