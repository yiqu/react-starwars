"use strict";(self.webpackChunkstarwars=self.webpackChunkstarwars||[]).push([[38],{7686:function(e,t,n){n.d(t,{F:function(){return l}});var r=n(4165),i=n(5861),a=n(4569),o=n.n(a)().create({baseURL:"https://swapi.tech/api/",timeout:5e3,headers:{"Content-Type":"application/json"},responseType:"json"}),s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return o.get(e,{params:t})},c=n(5316),l=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t,n){var i,a=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i=a.length>2&&void 0!==a[2]?a[2]:0)){e.next=4;break}return e.next=4,(0,c._)(i);case 4:return e.next=6,s(t,n).then((function(e){return e.data})).catch((function(e){if(409!==e.response.status)throw e}));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},9038:function(e,t,n){n.r(t),n.d(t,{default:function(){return J}});var r=n(885),i=n(3319),a=n(2791),o=n(4165),s=n(5861),c=n(4569),l=n.n(c)().create({baseURL:"https://kq-1-1a499.firebaseio.com/",timeout:5e3,headers:{"Content-Type":"application/json"},responseType:"json"}),u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return l.get(e+".json",{params:t})},d=n(5316),f="swdb/",p=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(t,n){var r,i,a=arguments;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=a.length>2&&void 0!==a[2]?a[2]:0)){e.next=4;break}return e.next=4,(0,d._)(r);case 4:return i="".concat(f).concat(t,"/favorites"),e.next=7,u(i,n).then((function(e){return e.data})).catch((function(e){if(409!==e.response.status)throw e}));case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),v=function(e,t){var n,r,i="".concat(f).concat(e,"/favorites");return n=i,r=t,l.post(n+".json",r)},m=function(e,t){var n,r,i="".concat(f).concat(e,"/favorites/").concat(t.fireId);return n=i,r=t,l.put(n+".json",r)},h=n(1413),x=n(2419),g=function(e){var t=(0,x.ZP)((function(){return e.params.fetchTime?[e.userId,e.params]:null}),p,{revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!1}),n=t.data,r=t.isValidating,i=t.error,a=t.mutate,o={};n&&Object.keys(null!==n&&void 0!==n?n:{}).forEach((function(e){o[n[e].episodeId]=(0,h.Z)({fireId:e},n[e])}));return{data:o,loading:r||!i&&!n,error:i,mutate:a}},j=n(7686),Z=function(e){var t=(0,x.ZP)((function(){return[e.url,e.params]}),j.F,{revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!1}),n=t.data,r=t.isValidating,i=t.error;return{data:n,loading:r||!i&&!n,error:i,mutate:t.mutate}},b=n(4169),w=n(5705),y=n(5987),F=n(7818),C=n(184),k=["label","name","valueChange"],T=function(e){var t=e.label,n=e.name,r=e.valueChange,i=(0,y.Z)(e,k),o=(0,w.u6)(),s=o.values;o.submitForm;return(0,a.useEffect)((function(){r(s.movieName)}),[s.movieName,r]),(0,C.jsxs)(C.Fragment,{children:[i.showLabel&&(0,C.jsxs)("label",{htmlFor:n,children:[t," "]}),(0,C.jsx)(w.gN,(0,h.Z)((0,h.Z)({as:F.Z,label:t,name:n,id:n},i),{},{sx:{width:"100%"}}))]})},_=function(){var e=(0,a.useCallback)((function(e){console.log("filter:",e)}),[]);return(0,C.jsx)(w.J9,{initialValues:{movieName:""},onSubmit:function(e){console.log(e)},children:(0,C.jsx)(w.l0,{autoComplete:"off",children:(0,C.jsx)(T,(0,h.Z)((0,h.Z)({},{name:"movieName",label:"Filter by movie name",placeholder:"Enter a movie name...",id:"movieName",variant:"standard"}),{},{valueChange:e}))})})},I=n(8928),U=n(6875),D=n(5194),E=n(199),N=n(7205),S=n(4565),P=n(1087),R=n(2797),L=n(4142),O=function(){var e=(0,L.Z)();return{isMobile:(0,R.Z)(e.breakpoints.down("sm")),isMed:(0,R.Z)(e.breakpoints.down("md")),isLg:(0,R.Z)(e.breakpoints.down("lg")),isXl:(0,R.Z)(e.breakpoints.down("xl"))}},M=n(7237),A=n(3811),V=n(4162),q=n(2426),z=n.n(q),B=function(e){var t="",n=null!==e&&void 0!==e&&e.lastUpdated?z()(null===e||void 0===e?void 0:e.lastUpdated).fromNow():"";return t=null!==e&&void 0!==e&&e.isCurrentFavorite?"Remove from favorites":"Add to favorites",null!==e&&void 0!==e&&e.lastUpdated&&(t=t+". "+(e.isCurrentFavorite?"Favorited ":"Unfavorited ")+n),t},W=function(e){O().isXl;return(0,C.jsxs)(I.Z,{sx:{border:"2px solid #726f53",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"},elevation:4,children:[(0,C.jsxs)("div",{children:[(0,C.jsx)(E.Z,{component:"img",alt:"poster",height:"440",image:"".concat("","/assets/poster-img/").concat(e.film.episode_id,".png"),sx:{backgroundColor:"#000",objectFit:"contain"}}),(0,C.jsxs)(D.Z,{children:[(0,C.jsxs)(V.Z,{direction:{lg:"column",xl:"row"},justifyContent:{xl:"space-between",lg:"flex-start"},marginBottom:{lg:"10px",xl:"0px"},children:[(0,C.jsx)(S.Z,{gutterBottom:!0,variant:"h5",component:P.rU,to:"./".concat(e.uid),sx:{fontFamily:"Poppins",fontWeight:"500"},children:e.film.title}),(0,C.jsxs)(S.Z,{variant:"h5",color:"text.secondary",sx:{fontWeight:"300"},children:["EP ",e.film.episode_id]})]}),(0,C.jsxs)(S.Z,{variant:"body2",color:"text.secondary",children:["Released: ",e.film.release_date]}),(0,C.jsxs)(S.Z,{variant:"body2",color:"text.secondary",children:["Directed by: ",e.film.director]}),(0,C.jsxs)(S.Z,{variant:"body2",color:"text.secondary",children:["Produced by: ",e.film.producer]}),(0,C.jsx)(S.Z,{variant:"body2",color:"text.primary",sx:{mt:"10px"},children:e.film.opening_crawl})]})]}),(0,C.jsxs)(U.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,C.jsx)("div",{children:(0,C.jsx)(N.Z,{size:"small",component:P.rU,to:"./".concat(e.uid),children:"Learn More"})}),(0,C.jsx)("div",{children:(0,C.jsx)(A.Z,{"aria-label":"favorite",onClick:function(){e.onFavoriteToggle(e.film,e.favorited)},title:B(e.favorited),children:(0,C.jsx)(M.Z,{color:e.film.userFavorited?"error":"disabled"})})})]})]})},X="yqu",J=function(){var e=Array.from(Array(3).keys()),t=(0,a.useState)(!1),n=(0,r.Z)(t,2),o=(n[0],n[1]),s=(0,a.useState)(0),c=(0,r.Z)(s,2),l=c[0],u=c[1],d=(0,a.useState)(0),f=(0,r.Z)(d,2),p=f[0],h=(f[1],g({userId:X,params:{fetchTime:l}})),x=h.data,j=(h.error,h.loading,h.mutate,Z({url:"films",params:{fetchTime:p}})),w=j.data,y=j.error,F=j.loading,k=(j.mutate,(0,a.useMemo)((function(){var e,t=null!==(e=null===w||void 0===w?void 0:w.result)&&void 0!==e?e:[];return t&&t.sort((function(e,t){return e.properties.episode_id>t.properties.episode_id?1:-1})),t.forEach((function(e){var t;e.properties.userFavorited=null===(t=x[e.properties.episode_id])||void 0===t?void 0:t.isCurrentFavorite})),t}),[w,x]));(0,a.useEffect)((function(){u((new Date).getTime())}),[]);var T=function(e,t){var n=e.url,r=n.split("/")[n.split("/").length-1],i={filmUrl:n,filmId:r,lastUpdated:(new Date).getTime(),episodeId:e.episode_id,isCurrentFavorite:!0};o(!0),t?(i.isCurrentFavorite=!t.isCurrentFavorite,i.fireId=t.fireId,m(X,i).then((function(e){})).catch((function(e){})).finally((function(){o(!1),u((new Date).getTime())}))):v(X,i).then((function(e){})).catch((function(e){})).finally((function(){o(!1),u((new Date).getTime())}))};return(0,C.jsxs)(i.Z,{container:!0,spacing:2,mx:2,my:2,xs:12,flexDirection:"column",children:[y&&(0,C.jsx)("div",{children:"Error occured:"}),F?(0,C.jsx)(i.Z,{container:!0,xs:12,children:e.map((function(e){return(0,C.jsxs)(i.Z,{xs:4,children:[" ",(0,C.jsx)(b.Z,{})," "]},e)}))}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(i.Z,{xs:4,children:(0,C.jsx)(_,{})}),(0,C.jsx)(i.Z,{xs:12,container:!0,children:null===k||void 0===k?void 0:k.map((function(e){return(0,C.jsx)(i.Z,{xs:12,sm:6,md:4,lg:4,xl:4,children:(0,C.jsx)(W,{film:e.properties,onFavoriteToggle:T,favorited:x[e.properties.episode_id],uid:e.uid})},e.properties.episode_id)}))})]})]})}},4169:function(e,t,n){n(2791);var r=n(1441),i=n(4162),a=n(184);t.Z=function(){return(0,a.jsxs)(i.Z,{spacing:1,children:[(0,a.jsx)(r.Z,{variant:"text",sx:{fontSize:"1rem"}}),(0,a.jsx)(r.Z,{variant:"circular",width:40,height:40}),(0,a.jsx)(r.Z,{variant:"rectangular",width:"100%",height:60}),(0,a.jsx)(r.Z,{variant:"rounded",width:"100%",height:60})]})}},5316:function(e,t,n){function r(e){return new Promise((function(t,n){setTimeout((function(){t()}),e)}))}n.d(t,{_:function(){return r}})}}]);
//# sourceMappingURL=38.b33a3dc8.chunk.js.map