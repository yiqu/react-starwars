"use strict";(self.webpackChunkstarwars=self.webpackChunkstarwars||[]).push([[455],{758:function(n,e,r){r.d(e,{Z:function(){return c}});var i=r(96015),t=r(94162),s=r(4565),o=r(80184);function c(n){var e=n.reason,r=n.debug;return(0,o.jsx)(i.Z,{marginY:5,width:"100%",children:(0,o.jsxs)(t.Z,{direction:"column",spacing:5,justifyContent:"center",alignItems:"center",children:[(0,o.jsx)(s.Z,{variant:"h5",sx:{textTransform:"uppercase"},children:"An error has occurred!"}),(0,o.jsxs)(t.Z,{direction:"column",spacing:1,justifyContent:"center",alignItems:"center",children:[(0,o.jsx)(s.Z,{variant:"body1",fontWeight:700,children:"REASON"}),(0,o.jsx)(s.Z,{variant:"body2",children:e})]}),(0,o.jsxs)(t.Z,{direction:"column",spacing:1,justifyContent:"center",alignItems:"center",children:[(0,o.jsx)(s.Z,{variant:"body1",fontWeight:700,children:"DEBUG"}),(0,o.jsx)(s.Z,{variant:"body2",component:"div",children:(0,o.jsx)("pre",{children:(0,o.jsx)("code",{style:{display:"flex",textAlign:"center"},children:JSON.stringify(r)})})})]})]})})}},78455:function(n,e,r){r.r(e);var i=r(70885),t=r(94162),s=r(17205),o=r(81872),c=r(96015),a=r(4565),l=r(36227),d=r(15290),u=r(73808),x=r(54596),h=r(64317),g=r(43950),j=r(41286),m=r(57689),f=r(25329),Z=r(31651),p=r(758),v=r(45173),b=r(72791),_=r(763),y=r(60225),k=r(80184);e.default=function(){var n=(0,x.Z)().isMobile,e=((0,h.T)(),(0,m.UO)().vehicleId),r=(0,b.useState)(!1),L=(0,i.Z)(r,2),C=(L[0],L[1]),I=(0,f.DW)(e),N=I.data,z=I.isLoading,P=I.isFetching,S=I.error,A=I.isError,D=I.refetch,E=(0,b.useMemo)((function(){return w.map((function(n){return{key:n,value:"".concat(null===N||void 0===N?void 0:N.result.properties[n])}}))}),[N]);return z?(0,k.jsx)(t.Z,{direction:"column",width:"100%",justifyContent:"center",alignItems:"center",height:"100vh",children:(0,k.jsx)(Z.Z,{message:"starship"})}):A?(0,k.jsx)(p.Z,{reason:S.status,debug:S.error}):N?(0,k.jsxs)(t.Z,{direction:"column",width:"100%",children:[(0,k.jsx)(u.Z,{toolbarProps:{position:"sticky",sx:{top:n?"56px":"64px"}},children:(0,k.jsxs)(l.Z,{container:!0,xs:12,flexDirection:{xs:"row",sm:"row"},justifyContent:"space-between",alignItems:"center",children:[(0,k.jsx)(l.Z,{xs:10,sm:4,children:(0,k.jsxs)(t.Z,{direction:"row",justifyContent:"start",alignItems:"center",children:[(0,k.jsx)(s.Z,{startIcon:(0,k.jsx)(g.Z,{}),variant:"text",onClick:function(){D()},children:"Refresh"}),(0,k.jsx)(o.Z,{orientation:"vertical",variant:"middle",flexItem:!0,sx:{mr:1,ml:1}}),(0,k.jsx)(s.Z,{startIcon:(0,k.jsx)(j.Z,{}),variant:"text",onClick:function(){C(!0)},children:"Edit"})]})}),(0,k.jsx)(l.Z,{xs:2,sm:8,children:(0,k.jsx)(t.Z,{direction:"row",justifyContent:"flex-end",alignItems:"center",children:P&&(0,k.jsx)(d.Z,{size:20})})})]})}),(0,k.jsx)(c.Z,{mt:2,m:n?2:0,children:(0,k.jsx)(v.Z,{size:"med",children:(0,k.jsxs)(l.Z,{xs:12,sx:{border:"1px solid #ddd",borderRadius:"10px",p:2},children:[(0,k.jsxs)(t.Z,{direction:n?"column":"row",justifyContent:"start",alignItems:"center",children:[(0,k.jsx)(a.Z,{variant:"h4",sx:{fontWeight:500},mr:2,children:N.result.properties.name}),(0,k.jsxs)(a.Z,{variant:"body1",children:["(",N.result.properties.manufacturer,")"]})]}),(0,k.jsx)(o.Z,{sx:{my:2}}),(0,k.jsx)(t.Z,{direction:"column",children:E.map((function(e){return(0,k.jsx)(c.Z,{mb:1,children:(0,k.jsxs)(t.Z,{direction:n?"column":"row",justifyContent:"start",alignItems:n?"start":"center",children:[(0,k.jsx)(a.Z,{variant:"h6",fontWeight:300,children:(0,_.startCase)(e.key)}),!n&&(0,k.jsx)(a.Z,{mr:1.5,children:":"}),(0,k.jsx)(a.Z,{variant:"h5",children:(0,y.kE)(e.value)?(+e.value).toLocaleString():e.value})]})},e.key)}))})]})})})]}):null};var w=["model","vehicle_class","manufacturer","cost_in_credits","length","crew","passengers","max_atmosphering_speed","cargo_capacity","consumables"]},45173:function(n,e,r){var i=r(36227),t=r(80184);e.Z=function(n){var e=n.size,r=void 0===e?"med":e,s=n.children;return(0,t.jsx)(i.Z,{container:!0,spacing:0,xs:12,xsOffset:0,sm:"full"===r?12:"med"===r?7:4,smOffset:"full"===r?0:"med"===r?2.5:4,children:s})}},15290:function(n,e,r){r.d(e,{Z:function(){return c}});var i=r(1413),t=(r(72791),r(94162)),s=r(96580),o=r(80184);function c(n){var e=n.size,r=void 0===e?40:e,c=n.color,a=void 0===c?"grey.500":c,l=n.styleProps;return(0,o.jsx)(t.Z,{sx:(0,i.Z)({color:a},l),spacing:1,direction:"row",children:(0,o.jsx)(s.Z,{color:"inherit",size:r})})}},73808:function(n,e,r){r.d(e,{Z:function(){return a}});var i=r(1413),t=r(22892),s=r(44666),o=r(43906),c=r(80184);function a(n){var e=n.toolbarProps,r=n.children;return(0,c.jsx)(t.Z,(0,i.Z)((0,i.Z)({elevation:0},e),{},{children:(0,c.jsx)(s.Z,{variant:"regular",sx:{bgcolor:function(n){return"light"===n.palette.mode?o.s[100]:null},color:function(n){return"light"===n.palette.mode?"#000":null},pr:0},children:r})}))}},54596:function(n,e,r){var i=r(52797),t=r(74142);e.Z=function(){var n=(0,t.Z)();return{isMobile:(0,i.Z)(n.breakpoints.down("sm")),isMed:(0,i.Z)(n.breakpoints.between("sm","md")),isLg:(0,i.Z)(n.breakpoints.between("md","lg")),isXl:(0,i.Z)(n.breakpoints.between("lg","xl")),isAboveXl:(0,i.Z)(n.breakpoints.up("xl"))}}},31651:function(n,e,r){r.d(e,{Z:function(){return o}});r(72791);var i={parentClass:"LoadingLogo_parentClass__NFHXT",loadingLogo:"LoadingLogo_loadingLogo__BqUtz",loadingParent:"LoadingLogo_loadingParent__VASnq","loading-container":"LoadingLogo_loading-container__cjLsJ","whole-page":"LoadingLogo_whole-page__DkCG7",ldsFacebook:"LoadingLogo_ldsFacebook__pRdY2","lds-facebook":"LoadingLogo_lds-facebook__JLntj"},t=r(77783),s=r(80184);function o(n){return(0,s.jsxs)("div",{className:"".concat(i.parentClass," w-100"),children:[(0,s.jsx)("div",{children:(0,s.jsx)("div",{className:i.loadingLogo,children:(0,s.jsx)("img",{src:t,className:"".concat(i.logoImg," d-inline-block"),alt:"logo"})})}),(0,s.jsx)("div",{className:i.loadingParent,children:(0,s.jsxs)("div",{className:i.ldsFacebook,children:[(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{})]})}),(0,s.jsxs)("div",{className:i.secfont,children:["Loading ",n.message," ..."]})]})}},64317:function(n,e,r){r.d(e,{C:function(){return s},T:function(){return t}});var i=r(78687),t=i.useDispatch,s=i.useSelector}}]);
//# sourceMappingURL=455.48e64227.chunk.js.map