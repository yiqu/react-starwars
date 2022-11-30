"use strict";(self.webpackChunkstarwars=self.webpackChunkstarwars||[]).push([[258],{4258:function(e,n,r){r.r(n),r.d(n,{default:function(){return Q}});var t=r(885),i=r(2791),a=r(8275),s=r(4565),l=r(7205),o=r(5645),c=r(788),u=r(464),d=r(8440),h=r(7248),x=r(9823),p=r(4162),m=r(3811),f=r(1872),j=r(3319),Z=r(3329),v=r(6753),g=r(5705),b=r(1413),w=r(8823),y=r(9911),C=r(5987),S=r(1898),F=r(9365),T=r(7924),E=r(6494),k=r(184),N=["label","name","options","loading"],I=function(e){var n=e.label,r=e.name,t=e.options,i=e.loading,a=(0,C.Z)(e,N),s=(0,g.u6)();return(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)(S.Z,{fullWidth:!0,children:[a.showLabel&&(0,k.jsx)(F.Z,{htmlFor:r,children:n}),(0,k.jsx)(g.gN,(0,b.Z)((0,b.Z)({as:E.Z,label:n,name:r,id:r,disabled:i},a.props),{},{onChange:function(e,n){s.setFieldValue(r,n)},options:t,loading:i,renderInput:function(e){return(0,k.jsx)(y.Z,(0,b.Z)((0,b.Z)({},e),{},{label:i?"Loading ".concat(r,"..."):"Select ".concat(r),placeholder:n,error:s.touched[r]&&!!s.errors[r]}))}})),(0,k.jsx)(T.Z,{id:"".concat(r,"-helper-text"),error:s.touched[r]&&!!s.errors[r],children:s.touched[r]&&s.errors[r]?(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(g.Bc,{name:r})}):(0,k.jsx)(k.Fragment,{children:a.helperText})})]})})},D=r(5051),L="NONE_SELECTED",O=r(2851),_=r(5702),W=["label","name"],P=function(e){var n,r=e.label,t=e.name,i=(0,C.Z)(e,W),a=(0,g.u6)();return(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)(S.Z,{fullWidth:!0,children:[(0,k.jsx)(F.Z,{id:t,children:r}),(0,k.jsxs)(g.gN,(0,b.Z)((0,b.Z)({as:O.Z,label:r,name:t,id:t,error:a.touched[t]&&!!a.errors[t]},i.props),{},{children:[i.useDefaultNoneSelected&&(0,k.jsx)(_.Z,{value:L,disabled:!0,children:(0,k.jsxs)(s.Z,{sx:{color:"#666"},children:["Select ",i.useDefaultNoneSelected]})},""),null===(n=i.options)||void 0===n?void 0:n.map((function(e){var n,r,t=null!==(n=e.display)&&void 0!==n?n:e,i=null!==(r=e.value)&&void 0!==r?r:e;return(0,k.jsx)(_.Z,{value:i,children:t},e.value)}))]})),(0,k.jsx)(T.Z,{id:"".concat(t,"-helper-text"),error:a.touched[t]&&!!a.errors[t],children:a.touched[t]&&a.errors[t]?(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(g.Bc,{name:t})}):(0,k.jsx)(k.Fragment,{children:i.helperText})})]})})},R=function(e,n){switch(e.name){case"starships":var r,t;return(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(P,(0,b.Z)({name:e.name,label:e.label,options:null!==(r=null===(t=n[e.name])||void 0===t?void 0:t.options)&&void 0!==r?r:[]},e))});case"title":case"director":return(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(D.Z,(0,b.Z)({name:e.name,label:e.label},e))});case"characters":var i,a,s;return(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(I,(0,b.Z)({name:e.name,label:e.label,options:null!==(i=null===(a=n[e.name])||void 0===a?void 0:a.options)&&void 0!==i?i:[],loading:null===(s=n[e.name])||void 0===s?void 0:s.loading},e))});default:return(0,k.jsx)(k.Fragment,{children:" No component matched "})}},q=r(8937),z=r(7907),B=r(2068),M=r(2175),V=r(6884),A=function(e,n){var r=(0,i.useState)(n),a=(0,t.Z)(r,2),s=a[0],l=a[1];(0,V.Z)((function(){l((function(e){return(0,b.Z)((0,b.Z)({},e),n)}))}),[n]);var o=(0,B.Z)([e,s,3e3],M.Lt),c=o.data,u=o.error;return{data:null===c||void 0===c?void 0:c.results,loading:!u&&void 0===c,isError:u}},Y=(0,k.jsx)(q.Z,{fontSize:"small"}),H=(0,k.jsx)(z.Z,{fontSize:"small"}),J=function(e){var n=(0,g.u6)(),r=(0,i.useState)({}),a=(0,t.Z)(r,2),s=a[0],l=a[1],o=(0,i.useState)([]),c=(0,t.Z)(o,2),u=c[0],d=c[1],h=A("people",M.cs),x=h.data,p=(h.isError,h.loading),m=A("starships",M.cs),f=(m.data,m.isError,m.loading,A("vehicles",M.cs));f.data,f.isError,f.loading;return(0,i.useEffect)((function(){console.log(n.values)}),[n.values]),(0,i.useEffect)((function(){d(K)}),[]),(0,i.useEffect)((function(){l((function(e){return(0,b.Z)((0,b.Z)({},e),{},{characters:{options:x,loading:p}})}))}),[x,p]),(0,k.jsx)(g.l0,{children:u.map((function(e){return(0,k.jsx)(j.Z,{xs:12,md:12,xl:6,children:R(e,s)},e.name)}))})},K=[{name:"title",label:"Title",helperText:"Your film title"},{name:"director",label:"Director",helperText:"Yourself! Or someone else.."},{name:"characters",label:"Characters",helperText:"Core people in your film",props:{autoHighlight:!0,multiple:!0,disableCloseOnSelect:!0,getOptionLabel:function(e){return e.name},renderOption:function(e,n,r){var t=r.selected;return(0,k.jsxs)("li",(0,b.Z)((0,b.Z)({},e),{},{style:{height:"2rem"},children:[(0,k.jsx)(w.Z,{icon:Y,checkedIcon:H,style:{marginRight:8},checked:t}),n.name]}))},renderInput:function(e){return(0,k.jsx)(y.Z,(0,b.Z)((0,b.Z)({},e),{},{label:"Select your characters",placeholder:"Characters"}))},noOptionsText:"No characters available",loadingText:"Loading characters..."}},{name:"openingCrawl",label:"Opening Crawl Text"},{name:"planets",label:"Planets"},{name:"species",label:"Species"},{name:"vehicles",label:"Vehicles"},{name:"starships",label:"starships",useDefaultNoneSelected:"your starships",props:{variant:"outlined",size:"small"}}],U=r(3123),X=U.Ry({title:U.Z_().required(),director:U.Z_().required().min(1),characters:U.IX().min(1,"At least one character is required")}),G=function(e){var n={title:"",director:"",characters:[],starships:L,opening_crawl:"",planets:[],species:[],vehicles:[]},r=function(n,r){"backdropClick"!==r&&e.onClose(null)};return(0,k.jsxs)(c.Z,{onClose:r,open:e.open,disableEscapeKeyDown:!0,maxWidth:"md",PaperProps:{sx:{minWidth:"calc(100% - 50rem)"}},children:[(0,k.jsx)(u.Z,{bgcolor:"primary.main",color:"white",children:(0,k.jsxs)(p.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,k.jsx)("div",{children:e.isEditMode?"Editing":"Create New Movie"}),(0,k.jsx)("div",{children:(0,k.jsx)(m.Z,{sx:{color:"white"},onClick:r,children:(0,k.jsx)(x.Z,{})})})]})}),(0,k.jsx)(f.Z,{}),(0,k.jsx)(d.Z,{children:(0,k.jsx)(j.Z,{container:!0,spacing:2,children:(0,k.jsx)(g.J9,{initialValues:n,onSubmit:function(e){},validationSchema:X,children:function(e){return(0,k.jsx)("div",{style:{width:"100%"},children:(0,k.jsx)(J,{})})}})})}),(0,k.jsx)(f.Z,{}),(0,k.jsxs)(h.Z,{children:[(0,k.jsx)(l.Z,{variant:"text",startIcon:(0,k.jsx)(v.Z,{}),children:"Reset"}),(0,k.jsx)(l.Z,{variant:"text",startIcon:(0,k.jsx)(Z.Z,{}),children:"Save"})]})]})},Q=function(){var e=(0,i.useState)(!1),n=(0,t.Z)(e,2),r=n[0],c=n[1];return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(a.Z,{container:!0,children:(0,k.jsxs)(a.Z,{container:!0,mx:2,my:2,xs:12,spacing:2,children:[(0,k.jsx)(a.Z,{xs:12,sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:(0,k.jsx)(s.Z,{variant:"h6",children:"Create your own Starwars movie!"})}),(0,k.jsx)(a.Z,{xs:12,sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:(0,k.jsx)(s.Z,{variant:"body2",children:"Try adding your own movie with starships, vehicles, species, and planets."})}),(0,k.jsx)(a.Z,{xs:12,sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:(0,k.jsx)(l.Z,{variant:"contained",startIcon:(0,k.jsx)(o.Z,{}),onClick:function(){c(!0)},children:"Add New Movie"})})]})}),(0,k.jsx)(G,{onClose:function(){c(!1)},open:r})]})}},5051:function(e,n,r){var t=r(1413),i=r(5987),a=(r(2791),r(9911)),s=r(5705),l=r(1898),o=r(9365),c=r(7924),u=r(184),d=["label","name","valueChange"];n.Z=function(e){var n=e.label,r=e.name,h=(e.valueChange,(0,i.Z)(e,d)),x=(0,s.u6)();return console.log("input"),(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(l.Z,{fullWidth:!0,children:[h.showLabel&&(0,u.jsx)(o.Z,{htmlFor:r,children:n}),(0,u.jsx)(s.gN,(0,t.Z)({as:a.Z,label:n,name:r,id:r,error:x.touched[r]&&!!x.errors[r]},h.props)),(0,u.jsx)(c.Z,{id:"".concat(r,"-helper-text"),error:x.touched[r]&&!!x.errors[r],children:x.touched[r]&&x.errors[r]?(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(s.Bc,{name:r})}):(0,u.jsx)(u.Fragment,{children:h.helperText})})]})})}},2175:function(e,n,r){r.d(n,{Lt:function(){return d},cs:function(){return o},ho:function(){return u}});var t=r(4165),i=r(5861),a=r(4569),s=r.n(a),l=r(5316),o={limit:1e4,page:1},c=s().create({baseURL:"https://swapi.tech/api/",timeout:5e3,headers:{"Content-Type":"application/json"},responseType:"json"}),u=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return c.get(e,{params:n})},d=function(){var e=(0,i.Z)((0,t.Z)().mark((function e(n,r){var i,a=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i=a.length>2&&void 0!==a[2]?a[2]:0)){e.next=4;break}return e.next=4,(0,l._)(i);case 4:return e.next=6,u(n,r).then((function(e){return e.data})).catch((function(e){if(409!==e.response.status)throw e}));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()},5316:function(e,n,r){function t(e){return new Promise((function(n,r){setTimeout((function(){n()}),e)}))}r.d(n,{_:function(){return t}})}}]);
//# sourceMappingURL=258.9f0c9a16.chunk.js.map