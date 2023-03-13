"use strict";(self.webpackChunkstarwars=self.webpackChunkstarwars||[]).push([[620],{75620:function(n,e,t){t.r(e);var i=t(57689),r=t(73808),o=t(54596),s=t(94162),a=t(64152),l=(t(7150),t(72791)),c=t(36227),u=t(64317),d=(t(31651),t(13555)),f=t(80184);e.default=function(){var n=(0,o.Z)().isMobile,e=(0,u.T)(),t=(0,i.UO)().coreEntityId;(0,l.useEffect)((function(){t&&e((0,d.V)({entity:t}))}),[t,e]);var v=(0,l.useCallback)((function(n){n&&n.trim()}),[]);return(0,f.jsxs)(s.Z,{direction:"column",width:"100%",children:[(0,f.jsx)(r.Z,{toolbarProps:{position:"sticky",sx:{top:n?"56px":"64px"}},children:(0,f.jsxs)(c.Z,{container:!0,xs:12,flexDirection:{xs:"row",sm:"row"},justifyContent:"space-between",alignItems:"center",children:[(0,f.jsx)(c.Z,{xs:10,sm:4,children:(0,f.jsx)(s.Z,{direction:"row",justifyContent:"start",alignItems:"center",children:(0,f.jsxs)(c.Z,{container:!0,xs:12,children:[(0,f.jsx)(c.Z,{xs:8,children:(0,f.jsx)(a.Z,{filterChange:v,currentText:""})}),(0,f.jsx)(c.Z,{xs:2,sx:{display:"flex"},justifyContent:"center",alignItems:"center",children:!1})]})})}),(0,f.jsx)(c.Z,{xs:2,sm:8,children:(0,f.jsx)(s.Z,{direction:"row",justifyContent:"flex-end",alignItems:"center"})})]})}),(0,f.jsx)(i.j3,{})]})}},64152:function(n,e,t){t.d(e,{Z:function(){return k}});var i=t(70885),r=t(72791),o=t(59911),s=t(4942),a=t(63366),l=t(87462),c=t(28182),u=t(94419),d=t(49853),f=t(4565),v=t(51211),p=t(90529),h=t(60277),x=t(75878),m=t(21217);function Z(n){return(0,m.Z)("MuiInputAdornment",n)}var j,b=(0,x.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),g=t(85513),y=t(80184),E=["children","className","component","disablePointerEvents","disableTypography","position","variant"],w=(0,h.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(n,e){var t=n.ownerState;return[e.root,e["position".concat((0,d.Z)(t.position))],!0===t.disablePointerEvents&&e.disablePointerEvents,e[t.variant]]}})((function(n){var e=n.theme,t=n.ownerState;return(0,l.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(e.vars||e).palette.action.active},"filled"===t.variant&&(0,s.Z)({},"&.".concat(b.positionStart,"&:not(.").concat(b.hiddenLabel,")"),{marginTop:16}),"start"===t.position&&{marginRight:8},"end"===t.position&&{marginLeft:8},!0===t.disablePointerEvents&&{pointerEvents:"none"})})),C=r.forwardRef((function(n,e){var t=(0,g.Z)({props:n,name:"MuiInputAdornment"}),i=t.children,o=t.className,s=t.component,h=void 0===s?"div":s,x=t.disablePointerEvents,m=void 0!==x&&x,b=t.disableTypography,C=void 0!==b&&b,P=t.position,S=t.variant,I=(0,a.Z)(t,E),z=(0,p.Z)()||{},T=S;S&&z.variant,z&&!T&&(T=z.variant);var L=(0,l.Z)({},t,{hiddenLabel:z.hiddenLabel,size:z.size,disablePointerEvents:m,position:P,variant:T}),k=function(n){var e=n.classes,t=n.disablePointerEvents,i=n.hiddenLabel,r=n.position,o=n.size,s=n.variant,a={root:["root",t&&"disablePointerEvents",r&&"position".concat((0,d.Z)(r)),s,i&&"hiddenLabel",o&&"size".concat((0,d.Z)(o))]};return(0,u.Z)(a,Z,e)}(L);return(0,y.jsx)(v.Z.Provider,{value:null,children:(0,y.jsx)(w,(0,l.Z)({as:h,ownerState:L,className:(0,c.Z)(k.root,o),ref:e},I,{children:"string"!==typeof i||C?(0,y.jsxs)(r.Fragment,{children:["start"===P?j||(j=(0,y.jsx)("span",{className:"notranslate",children:"\u200b"})):null,i]}):(0,y.jsx)(f.Z,{color:"text.secondary",children:i})}))})})),P=t(13811);var S=function(n,e){var t=function(){var n=(0,r.useRef)(!0);return n.current?(n.current=!1,!0):n.current}();(0,r.useEffect)((function(){if(!t)return n()}),e)},I=t(81245),z=(0,I.Z)((0,y.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),T=(0,I.Z)((0,y.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search"),L=t(763);function k(n){var e=n.count,t=n.filterChange,s=n.placeholderText,a=n.currentText,l=(0,r.useState)(""),c=(0,i.Z)(l,2),u=c[0],d=c[1],f=function(n,e){var t=(0,r.useState)(n),o=(0,i.Z)(t,2),s=o[0],a=o[1];return(0,r.useEffect)((function(){var t=setTimeout((function(){a(n)}),e);return function(){clearTimeout(t)}}),[n,e]),s}(u,400),v=(0,r.useState)("Filter by name"),p=(0,i.Z)(v,2),h=p[0],x=p[1];return(0,r.useEffect)((function(){a||x(null!==s&&void 0!==s?s:"Filter by name ".concat(void 0!==e?"("+e+")":""))}),[e,a,s]),S((function(){t(f)}),[t,f]),(0,r.useEffect)((function(){d(null!==a&&void 0!==a?a:"")}),[a]),(0,y.jsx)(o.Z,{name:"movieName",type:"text",fullWidth:!0,value:u,onChange:function(n){return d(n.target.value)},placeholder:h,variant:"standard",InputProps:{endAdornment:(0,y.jsx)(C,{position:"end",children:!(0,L.isEmpty)(u)&&(0,y.jsx)(P.Z,{onClick:function(){return d("")},size:"small",children:(0,y.jsx)(z,{})})}),startAdornment:(0,y.jsx)(C,{position:"start",children:(0,y.jsx)(T,{})})}})}},73808:function(n,e,t){t.d(e,{Z:function(){return l}});var i=t(1413),r=t(22892),o=t(44666),s=t(43906),a=t(80184);function l(n){var e=n.toolbarProps,t=n.children;return(0,a.jsx)(r.Z,(0,i.Z)((0,i.Z)({elevation:0},e),{},{children:(0,a.jsx)(o.Z,{variant:"regular",sx:{bgcolor:function(n){return"light"===n.palette.mode?s.s[100]:null},color:function(n){return"light"===n.palette.mode?"#000":null}},children:t})}))}}}]);
//# sourceMappingURL=620.d73dcbed.chunk.js.map