"use strict";(self.webpackChunkstarwars=self.webpackChunkstarwars||[]).push([[315],{758:function(n,e,i){i.d(e,{Z:function(){return a}});var r=i(96015),t=i(94162),s=i(4565),o=i(80184);function a(n){var e=n.reason,i=n.debug;return(0,o.jsx)(r.Z,{marginY:5,width:"100%",children:(0,o.jsxs)(t.Z,{direction:"column",spacing:5,justifyContent:"center",alignItems:"center",children:[(0,o.jsx)(s.Z,{variant:"h5",sx:{textTransform:"uppercase"},children:"An error has occurred!"}),(0,o.jsxs)(t.Z,{direction:"column",spacing:1,justifyContent:"center",alignItems:"center",children:[(0,o.jsx)(s.Z,{variant:"body1",fontWeight:700,children:"REASON"}),(0,o.jsx)(s.Z,{variant:"body2",children:e})]}),(0,o.jsxs)(t.Z,{direction:"column",spacing:1,justifyContent:"center",alignItems:"center",children:[(0,o.jsx)(s.Z,{variant:"body1",fontWeight:700,children:"DEBUG"}),(0,o.jsx)(s.Z,{variant:"body2",component:"div",children:(0,o.jsx)("pre",{children:(0,o.jsx)("code",{style:{display:"flex",textAlign:"center"},children:JSON.stringify(i)})})})]})]})})}},1315:function(n,e,i){i.r(e),i.d(e,{default:function(){return _}});var r=i(70885),t=i(57689),s=i(79729),o=i(40255),a=i(94162),c=i(17205),l=i(81872),d=i(96015),u=i(4565),x=i(65209),g=i(31651),h=i(758),f=i(73808),j=i(54596),Z=i(36227),m=i(15290),v=i(43950),p=i(41286),b=i(45173),w=i(763),y=i(25777),L=i(65218),k=i(80184);function _(){var n=(0,t.UO)().favoriteId,e=(0,s.U3)(null!==n&&void 0!==n?n:o.skipToken),i=e.data,_=e.isLoading,C=e.isFetching,I=e.error,F=e.refetch,N=e.isError,z=(e.fulfilledTimeStamp,e.startedTimeStamp,(0,s.eE)()),E=(0,r.Z)(z,2),P=E[0],S=(E[1],(0,j.Z)().isMobile);return _?(0,k.jsx)(a.Z,{direction:"column",width:"100%",justifyContent:"center",alignItems:"center",height:"100vh",children:(0,k.jsx)(g.Z,{message:"Favorite"})}):N?(0,k.jsx)(h.Z,{reason:I.status,debug:I.error}):i?(0,k.jsxs)(a.Z,{direction:"column",width:"100%",children:[(0,k.jsx)(f.Z,{toolbarProps:{position:"sticky",sx:{top:S?"56px":"64px"}},children:(0,k.jsxs)(Z.Z,{container:!0,xs:12,flexDirection:{xs:"row",sm:"row"},justifyContent:"space-between",alignItems:"center",children:[(0,k.jsx)(Z.Z,{xs:10,sm:4,children:(0,k.jsxs)(a.Z,{direction:"row",justifyContent:"start",alignItems:"center",children:[(0,k.jsx)(c.Z,{startIcon:(0,k.jsx)(v.Z,{}),variant:"text",onClick:function(){var n=F();L.ZP.promise(n,{loading:"Refreshing...",success:"Successfully refreshed!",error:"Error refreshing favorites"})},children:"Refresh"}),(0,k.jsx)(l.Z,{orientation:"vertical",variant:"middle",flexItem:!0,sx:{mr:1,ml:1}}),(0,k.jsx)(c.Z,{startIcon:(0,k.jsx)(p.Z,{}),variant:"text",onClick:function(){var n=(0,w.cloneDeep)(i);n&&(n.isCurrentFavorite=!n.isCurrentFavorite,n.lastUpdated=(new Date).getTime(),P(n))},children:"Edit"})]})}),(0,k.jsx)(Z.Z,{xs:2,sm:8,children:(0,k.jsx)(a.Z,{direction:"row",justifyContent:"flex-end",alignItems:"center",children:C&&(0,k.jsx)(m.Z,{size:20})})})]})}),(0,k.jsx)(d.Z,{mt:2,m:S?2:0,children:(0,k.jsx)(b.Z,{size:"med",children:(0,k.jsxs)(Z.Z,{xs:12,sx:{border:"1px solid #ddd",borderRadius:"10px",p:2},children:[(0,k.jsxs)(a.Z,{direction:S?"column":"row",justifyContent:"start",alignItems:"center",children:[(0,k.jsxs)(u.Z,{variant:"h4",sx:{fontWeight:500},mr:2,children:["Ep. ",i.episodeId]}),(0,k.jsxs)(u.Z,{variant:"body1",children:["Last updated: ",(0,k.jsx)(y.Z,{dateInMilli:i.lastUpdated})," ago"]}),(0,k.jsx)(d.Z,{ml:2,children:"Updating"===i.filmId?(0,k.jsx)(x.Z,{label:"working...",color:"warning",size:"small"}):null})]}),(0,k.jsx)(l.Z,{sx:{my:2}}),(0,k.jsx)(a.Z,{direction:"column",children:(0,w.keys)(i).map((function(n){return(0,k.jsx)(d.Z,{mb:1,children:(0,k.jsxs)(a.Z,{direction:S?"column":"row",justifyContent:"start",alignItems:S?"start":"center",children:[(0,k.jsx)(u.Z,{variant:"h6",fontWeight:300,children:(0,w.startCase)(n)}),!S&&(0,k.jsx)(u.Z,{mr:1.5,children:":"}),(0,k.jsx)(u.Z,{variant:"h5",children:"".concat(i[n])})]})},n)}))})]})})})]}):(0,k.jsx)(k.Fragment,{})}},25777:function(n,e,i){var r=i(55763),t=i(80184);e.Z=function(n){var e=n.dateInMilli;return(0,t.jsx)(t.Fragment,{children:void 0!==e&&(0,r.Z)(e,{includeSeconds:!0})})}},45173:function(n,e,i){var r=i(36227),t=i(80184);e.Z=function(n){var e=n.size,i=void 0===e?"med":e,s=n.children;return(0,t.jsx)(r.Z,{container:!0,spacing:0,xs:12,xsOffset:0,sm:"full"===i?12:"med"===i?7:4,smOffset:"full"===i?0:"med"===i?2.5:4,children:s})}},15290:function(n,e,i){i.d(e,{Z:function(){return a}});var r=i(1413),t=(i(72791),i(94162)),s=i(96580),o=i(80184);function a(n){var e=n.size,i=void 0===e?40:e,a=n.color,c=void 0===a?"grey.500":a,l=n.styleProps;return(0,o.jsx)(t.Z,{sx:(0,r.Z)({color:c},l),spacing:1,direction:"row",children:(0,o.jsx)(s.Z,{color:"inherit",size:i})})}},73808:function(n,e,i){i.d(e,{Z:function(){return c}});var r=i(1413),t=i(22892),s=i(44666),o=i(43906),a=i(80184);function c(n){var e=n.toolbarProps,i=n.children;return(0,a.jsx)(t.Z,(0,r.Z)((0,r.Z)({elevation:0},e),{},{children:(0,a.jsx)(s.Z,{variant:"regular",sx:{bgcolor:function(n){return"light"===n.palette.mode?o.s[100]:null},color:function(n){return"light"===n.palette.mode?"#000":null},pr:0},children:i})}))}},54596:function(n,e,i){var r=i(52797),t=i(74142);e.Z=function(){var n=(0,t.Z)();return{isMobile:(0,r.Z)(n.breakpoints.down("sm")),isMed:(0,r.Z)(n.breakpoints.down("md")),isLg:(0,r.Z)(n.breakpoints.down("lg")),isXl:(0,r.Z)(n.breakpoints.down("xl"))}}},31651:function(n,e,i){i.d(e,{Z:function(){return o}});i(72791);var r={parentClass:"LoadingLogo_parentClass__NFHXT",loadingLogo:"LoadingLogo_loadingLogo__BqUtz",loadingParent:"LoadingLogo_loadingParent__VASnq","loading-container":"LoadingLogo_loading-container__cjLsJ","whole-page":"LoadingLogo_whole-page__DkCG7",ldsFacebook:"LoadingLogo_ldsFacebook__pRdY2","lds-facebook":"LoadingLogo_lds-facebook__JLntj"},t=i(77783),s=i(80184);function o(n){return(0,s.jsxs)("div",{className:"".concat(r.parentClass," w-100"),children:[(0,s.jsx)("div",{children:(0,s.jsx)("div",{className:r.loadingLogo,children:(0,s.jsx)("img",{src:t,className:"".concat(r.logoImg," d-inline-block"),alt:"logo"})})}),(0,s.jsx)("div",{className:r.loadingParent,children:(0,s.jsxs)("div",{className:r.ldsFacebook,children:[(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{})]})}),(0,s.jsxs)("div",{className:r.secfont,children:["Loading ",n.message," ..."]})]})}},55763:function(n,e,i){i.d(e,{Z:function(){return s}});var r=i(51943),t=i(4522);function s(n,e){return(0,t.Z)(1,arguments),(0,r.Z)(n,Date.now(),e)}}}]);
//# sourceMappingURL=315.aba7a6fd.chunk.js.map