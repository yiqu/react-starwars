"use strict";(self.webpackChunkstarwars=self.webpackChunkstarwars||[]).push([[2912],{758:function(n,e,r){r.d(e,{Z:function(){return a}});var i=r(96015),t=r(94162),s=r(4565),o=r(80184);function a(n){var e=n.reason,r=n.debug;return(0,o.jsx)(i.Z,{marginY:5,width:"100%",children:(0,o.jsxs)(t.Z,{direction:"column",spacing:5,justifyContent:"center",alignItems:"center",children:[(0,o.jsx)(s.Z,{variant:"h5",sx:{textTransform:"uppercase"},children:"An error has occurred!"}),(0,o.jsxs)(t.Z,{direction:"column",spacing:1,justifyContent:"center",alignItems:"center",children:[(0,o.jsx)(s.Z,{variant:"body1",fontWeight:700,children:"REASON"}),(0,o.jsx)(s.Z,{variant:"body2",children:e})]}),(0,o.jsxs)(t.Z,{direction:"column",spacing:1,justifyContent:"center",alignItems:"center",children:[(0,o.jsx)(s.Z,{variant:"body1",fontWeight:700,children:"DEBUG"}),(0,o.jsx)(s.Z,{variant:"body2",component:"div",children:(0,o.jsx)("pre",{children:(0,o.jsx)("code",{style:{display:"flex",textAlign:"center"},children:JSON.stringify(r)})})})]})]})})}},2912:function(n,e,r){r.r(e),r.d(e,{default:function(){return I}});var i=r(70885),t=r(57689),s=r(79729),o=r(40255),a=r(94162),c=r(17205),d=r(81872),l=r(96015),u=r(4565),x=r(65209),h=r(31651),g=r(758),f=r(73808),j=r(54596),Z=r(36227),v=r(15290),m=r(43950),p=r(45173),b=r(763),w=r(25777),L=r(65218),k=r(81245),y=r(80184),C=(0,k.Z)((0,y.jsx)("path",{d:"M19 13H5v-2h14v2z"}),"Remove"),_=r(68087);function I(){var n=(0,t.UO)().favoriteId,e=(0,s.U3)(null!==n&&void 0!==n?n:o.skipToken),r=e.data,k=e.isLoading,I=e.isFetching,F=e.error,z=e.refetch,N=e.isError,M=(e.fulfilledTimeStamp,e.startedTimeStamp,(0,s.eE)()),R=(0,i.Z)(M,2),A=R[0],P=(R[1],(0,j.Z)().isMobile);return k?(0,y.jsx)(a.Z,{direction:"column",width:"100%",justifyContent:"center",alignItems:"center",height:"100vh",children:(0,y.jsx)(h.Z,{message:"Favorite"})}):N?(0,y.jsx)(g.Z,{reason:F.status,debug:F.error}):r?(0,y.jsxs)(a.Z,{direction:"column",width:"100%",children:[(0,y.jsx)(f.Z,{toolbarProps:{position:"sticky",sx:{top:P?"56px":"64px"}},children:(0,y.jsxs)(Z.Z,{container:!0,xs:12,flexDirection:{xs:"row",sm:"row"},justifyContent:"space-between",alignItems:"center",children:[(0,y.jsx)(Z.Z,{xs:10,sm:4,children:(0,y.jsxs)(a.Z,{direction:"row",justifyContent:"start",alignItems:"center",children:[(0,y.jsx)(c.Z,{startIcon:(0,y.jsx)(m.Z,{}),variant:"text",onClick:function(){var n=z();L.ZP.promise(n,{loading:"Refreshing...",success:"Successfully refreshed!",error:"Error refreshing favorites"})},children:"Refresh"}),(0,y.jsx)(d.Z,{orientation:"vertical",variant:"middle",flexItem:!0,sx:{mr:1,ml:1}}),(0,y.jsx)(c.Z,{startIcon:r.isCurrentFavorite?(0,y.jsx)(C,{}):(0,y.jsx)(_.Z,{}),variant:"text",onClick:function(){var n=(0,b.cloneDeep)(r);n&&(n.isCurrentFavorite=!n.isCurrentFavorite,n.lastUpdated=(new Date).getTime(),A(n))},children:r.isCurrentFavorite?"Remove from Favorite":"Add to Favorite"})]})}),(0,y.jsx)(Z.Z,{xs:2,sm:8,children:(0,y.jsx)(a.Z,{direction:"row",justifyContent:"flex-end",alignItems:"center",children:I&&(0,y.jsx)(v.Z,{size:20})})})]})}),(0,y.jsx)(l.Z,{mt:2,m:P?2:0,children:(0,y.jsx)(p.Z,{size:"med",children:(0,y.jsxs)(Z.Z,{xs:12,sx:{border:"1px solid #ddd",borderRadius:"10px",p:2},children:[(0,y.jsxs)(a.Z,{direction:P?"column":"row",justifyContent:"start",alignItems:"center",children:[(0,y.jsxs)(u.Z,{variant:"h4",sx:{fontWeight:500},mr:2,children:["Ep. ",r.episodeId]}),(0,y.jsxs)(u.Z,{variant:"body1",children:["Last updated: ",(0,y.jsx)(w.Z,{dateInMilli:r.lastUpdated})," ago"]}),(0,y.jsx)(l.Z,{ml:2,children:"Updating"===r.filmId?(0,y.jsx)(x.Z,{label:"working...",color:"warning",size:"small"}):null})]}),(0,y.jsx)(d.Z,{sx:{my:2}}),(0,y.jsx)(a.Z,{direction:"column",children:(0,b.keys)(r).map((function(n){return(0,y.jsx)(l.Z,{mb:1,children:(0,y.jsxs)(a.Z,{direction:P?"column":"row",justifyContent:"start",alignItems:P?"start":"center",children:[(0,y.jsx)(u.Z,{variant:"h6",fontWeight:300,children:(0,b.startCase)(n)}),!P&&(0,y.jsx)(u.Z,{mr:1.5,children:":"}),(0,y.jsx)(u.Z,{variant:"h5",children:"".concat(r[n])})]})},n)}))})]})})})]}):(0,y.jsx)(y.Fragment,{})}},25777:function(n,e,r){var i=r(55763),t=r(80184);e.Z=function(n){var e=n.dateInMilli;return(0,t.jsx)(t.Fragment,{children:void 0!==e&&(0,i.Z)(e,{includeSeconds:!0})})}},45173:function(n,e,r){var i=r(36227),t=r(80184);e.Z=function(n){var e=n.size,r=void 0===e?"med":e,s=n.children;return(0,t.jsx)(i.Z,{container:!0,spacing:0,xs:12,xsOffset:0,sm:"full"===r?12:"med"===r?7:4,smOffset:"full"===r?0:"med"===r?2.5:4,children:s})}},15290:function(n,e,r){r.d(e,{Z:function(){return a}});var i=r(1413),t=(r(72791),r(94162)),s=r(96580),o=r(80184);function a(n){var e=n.size,r=void 0===e?40:e,a=n.color,c=void 0===a?"grey.500":a,d=n.styleProps;return(0,o.jsx)(t.Z,{sx:(0,i.Z)({color:c},d),spacing:1,direction:"row",children:(0,o.jsx)(s.Z,{color:"inherit",size:r})})}},73808:function(n,e,r){r.d(e,{Z:function(){return c}});var i=r(1413),t=r(22892),s=r(44666),o=r(43906),a=r(80184);function c(n){var e=n.toolbarProps,r=n.children;return(0,a.jsx)(t.Z,(0,i.Z)((0,i.Z)({elevation:0},e),{},{children:(0,a.jsx)(s.Z,{variant:"regular",sx:{bgcolor:function(n){return"light"===n.palette.mode?o.s[50]:null},color:function(n){return"light"===n.palette.mode?"#000":null},pr:0},children:r})}))}},54596:function(n,e,r){var i=r(52797),t=r(74142);e.Z=function(){var n=(0,t.Z)();return{isMobile:(0,i.Z)(n.breakpoints.down("sm")),isMed:(0,i.Z)(n.breakpoints.between("sm","md")),isLg:(0,i.Z)(n.breakpoints.between("md","lg")),isXl:(0,i.Z)(n.breakpoints.between("lg","xl")),isAboveXl:(0,i.Z)(n.breakpoints.up("xl"))}}},31651:function(n,e,r){r.d(e,{Z:function(){return o}});r(72791);var i={parentClass:"LoadingLogo_parentClass__NFHXT",loadingLogo:"LoadingLogo_loadingLogo__BqUtz",loadingParent:"LoadingLogo_loadingParent__VASnq","loading-container":"LoadingLogo_loading-container__cjLsJ","whole-page":"LoadingLogo_whole-page__DkCG7",ldsFacebook:"LoadingLogo_ldsFacebook__pRdY2","lds-facebook":"LoadingLogo_lds-facebook__JLntj"},t=r(77783),s=r(80184);function o(n){return(0,s.jsxs)("div",{className:"".concat(i.parentClass," w-100"),children:[(0,s.jsx)("div",{children:(0,s.jsx)("div",{className:i.loadingLogo,children:(0,s.jsx)("img",{src:t,className:"".concat(i.logoImg," d-inline-block"),alt:"logo"})})}),(0,s.jsx)("div",{className:i.loadingParent,children:(0,s.jsxs)("div",{className:i.ldsFacebook,children:[(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{})]})}),(0,s.jsxs)("div",{className:i.secfont,children:["Loading ",n.message," ..."]})]})}},43950:function(n,e,r){var i=r(64836);e.Z=void 0;var t=i(r(45649)),s=r(80184),o=(0,t.default)((0,s.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}),"Refresh");e.Z=o},68087:function(n,e,r){var i=r(81245),t=r(80184);e.Z=(0,i.Z)((0,t.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add")},55763:function(n,e,r){r.d(e,{Z:function(){return s}});var i=r(51943),t=r(4522);function s(n,e){return(0,t.Z)(1,arguments),(0,i.Z)(n,Date.now(),e)}}}]);
//# sourceMappingURL=2912.df5d82b2.chunk.js.map