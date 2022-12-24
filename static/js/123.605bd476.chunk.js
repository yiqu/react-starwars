"use strict";(self.webpackChunkstarwars=self.webpackChunkstarwars||[]).push([[123],{123:function(e,n,r){r.r(n),r.d(n,{default:function(){return re}});var t=r(885),i=r(2791),a=r(8275),s=r(4565),o=r(7205),l=r(5645),c=r(788),u=r(464),d=r(8440),p=r(7323),h=r(9823),f=r(4162),x=r(3811),m=r(1872),v=r(3329),g=r(6753),Z=r(5705),j=r(1413),b=r(2982),y=r(8823),C=r(3319),w=r(5987),I=r(9911),E=r(1898),L=r(9365),F=r(7924),O=r(6494),k=r(763),T=r(184),S=["label","name","options","dataLoading","validate"],N=function(e){var n=e.label,r=e.name,t=e.options,i=e.dataLoading,a=e.validate,s=(0,w.Z)(e,S),o=(0,Z.u6)();return(0,T.jsx)(T.Fragment,{children:(0,T.jsxs)(E.Z,{fullWidth:!0,children:[s.showLabel&&(0,T.jsx)(L.Z,{htmlFor:r,children:n}),(0,T.jsx)(Z.gN,(0,j.Z)({as:O.Z,label:n,name:r,id:r,onChange:function(e,n){o.setFieldValue(r,n)},renderInput:function(e){return(0,T.jsx)(I.Z,(0,j.Z)((0,j.Z)({},e),{},{name:r,variant:"standard",label:i?"Loading ".concat(r,"..."):"Select ".concat(r),placeholder:n,error:o.touched[r]&&!!o.errors[r]},s.renderInputProps))},getOptionLabel:function(e){return e.id},validate:a,options:t,loading:i},s.props)),(0,T.jsx)(F.Z,{id:"".concat(r,"-helper-text"),error:o.touched[r]&&!!o.errors[r],children:o.touched[r]&&o.errors[r]?(0,T.jsx)(Z.Bc,{name:r,render:function(e){return(0,k.upperFirst)(e)}}):(0,T.jsx)(T.Fragment,{children:s.helperText})})]})})},P=r(5051),q=r(2851),R=r(5702),D=["label","name","options","validate"],A=function(e){var n=e.label,r=e.name,t=e.options,i=e.validate,a=(0,w.Z)(e,D),o=(0,Z.u6)();return(0,T.jsx)(T.Fragment,{children:(0,T.jsxs)(E.Z,{fullWidth:!0,size:"small",children:[(0,T.jsx)(L.Z,{id:r,children:n}),(0,T.jsxs)(Z.gN,(0,j.Z)((0,j.Z)({as:q.Z,label:n,name:r,id:r,validate:i,variant:"standard",error:o.touched[r]&&!!o.errors[r]},a.props),{},{children:[a.useDefaultNoneSelected&&(0,T.jsx)(R.Z,{value:"NONE_SELECTED",disabled:!0,children:(0,T.jsxs)(s.Z,{sx:{color:"#666"},children:["Select ",a.useDefaultNoneSelected]})},""),null===t||void 0===t?void 0:t.map((function(e){var n,r,t,i=null!==(n=e.name)&&void 0!==n?n:e,a=null!==(r=e.value)&&void 0!==r?r:e;return(0,T.jsx)(R.Z,{value:a,children:i},null!==(t=e.id)&&void 0!==t?t:e.uid)}))]})),(0,T.jsx)(F.Z,{id:"".concat(r,"-helper-text"),error:o.touched[r]&&!!o.errors[r],children:o.touched[r]&&o.errors[r]?(0,T.jsx)(Z.Bc,{name:r,render:function(e){return(0,k.upperFirst)(e)}}):(0,T.jsx)(T.Fragment,{children:a.helperText})})]})})},_=r(1747),H=["label","name","valueChange","validate"],z=function(e){var n=e.label,r=e.name,t=(e.valueChange,e.validate),i=(0,w.Z)(e,H),a=(0,Z.u6)();return(0,T.jsx)(T.Fragment,{children:(0,T.jsxs)(E.Z,{fullWidth:!0,children:[i.showLabel&&!a.values[r]&&(0,T.jsx)(L.Z,{htmlFor:r,children:n}),(0,T.jsx)(Z.gN,(0,j.Z)({as:I.Z,multiline:!0,name:r,id:r,validate:t,minRows:1,error:a.touched[r]&&!!a.errors[r],InputProps:{inputComponent:_.Z,inputProps:{style:{resize:"vertical",minHeight:"3.5rem"}}}},i.props)),(0,T.jsx)(F.Z,{id:"".concat(r,"-helper-text"),error:a.touched[r]&&!!a.errors[r],children:a.touched[r]&&a.errors[r]?(0,T.jsx)(Z.Bc,{name:r,render:function(e){return(0,k.upperFirst)(e)}}):(0,T.jsx)(T.Fragment,{children:i.helperText})})]})})},B=function(e){switch(e.type){case"select":var n;return(0,T.jsx)(A,(0,j.Z)({name:e.name,label:e.label,options:null!==(n=e.options)&&void 0!==n?n:[]},e));case"text":return(0,T.jsx)(P.Z,(0,j.Z)({name:e.name,label:e.label},e));case"autocomplete":var r;return(0,T.jsx)(N,(0,j.Z)({name:e.name,label:e.label,options:null!==(r=e.props.options)&&void 0!==r?r:[],dataLoading:e.props.loading},e));case"textarea":return(0,T.jsx)(z,(0,j.Z)({name:e.name,label:e.label},e));default:return(0,T.jsx)(T.Fragment,{children:" No component matched... "})}},W=r(8937),X=r(7907),M=r(2068),V=r(2175),J=r(6884),K=function(e,n){var r=(0,i.useState)(n),a=(0,t.Z)(r,2),s=(a[0],a[1]);(0,J.Z)((function(){s((function(e){return(0,j.Z)((0,j.Z)({},e),n)}))}),[n]);var o=(0,M.Z)("".concat(e),V.Lt),l=o.data,c=o.error,u=o.isLoading;return{data:null===l||void 0===l?void 0:l.results,loading:u,isError:c}},U=(0,T.jsx)(W.Z,{fontSize:"small"}),G=(0,T.jsx)(X.Z,{fontSize:"small"}),Q=function(e){var n=(0,Z.u6)(),r=(0,i.useState)([]),a=(0,t.Z)(r,2),s=a[0],o=a[1],l=K("people",V.cs),c=l.data,u=(l.isError,l.loading),d=K("starships",V.cs),p=d.data,h=(d.isError,d.loading),f=K("vehicles",V.cs),x=f.data,m=(f.isError,f.loading),v=K("planets",V.cs),g=v.data,j=(v.isError,v.loading,K("species",V.cs)),y=j.data,w=(j.isError,j.loading);return(0,i.useEffect)((function(){console.log(n.values)}),[n.values]),(0,i.useEffect)((function(){o(Y)}),[]),(0,i.useEffect)((function(){c&&c.length>-1&&o((function(e){var n=e.findIndex((function(e){return"characters"===e.name}));return e[n].props.options=c,e}))}),[c]),(0,i.useEffect)((function(){o((function(e){var n=e.findIndex((function(e){return"characters"===e.name}));return e[n].props.loading=u,(0,b.Z)(e)}))}),[u]),(0,i.useEffect)((function(){p&&p.length>-1&&o((function(e){var n=e.findIndex((function(e){return"starships"===e.name}));return e[n].props.options=p,e}))}),[p]),(0,i.useEffect)((function(){o((function(e){var n=e.findIndex((function(e){return"starships"===e.name}));return e[n].props.loading=h,(0,b.Z)(e)}))}),[h]),(0,i.useEffect)((function(){x&&x.length>-1&&o((function(e){var n=e.findIndex((function(e){return"vehicles"===e.name}));return e[n].props.options=x,e}))}),[x]),(0,i.useEffect)((function(){o((function(e){var n=e.findIndex((function(e){return"vehicles"===e.name}));return e[n].props.loading=m,(0,b.Z)(e)}))}),[m]),(0,i.useEffect)((function(){g&&g.length>-1&&o((function(e){var n=e.findIndex((function(e){return"planets"===e.name}));return e[n].options=g,(0,b.Z)(e)}))}),[g]),(0,i.useEffect)((function(){y&&y.length>-1&&o((function(e){var n=e.findIndex((function(e){return"species"===e.name}));return e[n].props.options=y,e}))}),[y]),(0,i.useEffect)((function(){o((function(e){var n=e.findIndex((function(e){return"species"===e.name}));return e[n].props.loading=w,(0,b.Z)(e)}))}),[w]),(0,T.jsx)(Z.l0,{children:(0,T.jsx)(C.Z,{container:!0,spacing:2,children:s.map((function(e){return(0,T.jsx)(C.Z,{xs:12,children:B(e)},e.name)}))})})},Y=[{name:"title",label:"Title",type:"text",props:{variant:"outlined"}},{name:"director",label:"Director",type:"text",props:{variant:"outlined"}},{name:"characters",label:"Characters",type:"autocomplete",renderInputProps:{variant:"outlined"},props:{options:[],autoHighlight:!0,multiple:!0,disableCloseOnSelect:!0,getOptionLabel:function(e){return e.name},renderOption:function(e,n,r){var t=r.selected;return(0,T.jsxs)("li",(0,j.Z)((0,j.Z)({},e),{},{style:{height:"2rem"},children:[(0,T.jsx)(y.Z,{icon:U,checkedIcon:G,style:{marginRight:8},checked:t}),n.name]}))},ChipProps:{color:"primary"},noOptionsText:"No characters available",loadingText:"Loading characters..."}},{name:"openingCrawl",label:"Opening Crawl Text",type:"textarea",helperText:"Opening Crawl",showLabel:!0},{name:"planets",label:"Planet",type:"select",options:[],props:{variant:"outlined"}},{name:"species",label:"Species",type:"autocomplete",renderInputProps:{variant:"outlined"},props:{autoHighlight:!0,multiple:!0,disableCloseOnSelect:!0,getOptionLabel:function(e){return e.name},renderOption:function(e,n,r){var t=r.selected;return(0,T.jsxs)("li",(0,j.Z)((0,j.Z)({},e),{},{style:{height:"2rem"},children:[(0,T.jsx)(y.Z,{icon:U,checkedIcon:G,style:{marginRight:8},checked:t}),n.name]}))},ChipProps:{color:"primary"},noOptionsText:"No species available",loadingText:"Loading species..."}},{name:"vehicles",label:"Vehicles",type:"autocomplete",renderInputProps:{variant:"outlined"},props:{autoHighlight:!0,multiple:!0,disableCloseOnSelect:!0,getOptionLabel:function(e){return e.name},renderOption:function(e,n,r){var t=r.selected;return(0,T.jsxs)("li",(0,j.Z)((0,j.Z)({},e),{},{style:{height:"2rem"},children:[(0,T.jsx)(y.Z,{icon:U,checkedIcon:G,style:{marginRight:8},checked:t}),n.name]}))},ChipProps:{color:"primary"},noOptionsText:"No vehicles available",loadingText:"Loading vehicles..."}},{name:"starships",label:"starships",type:"autocomplete",renderInputProps:{variant:"outlined"},props:{autoHighlight:!0,multiple:!0,disableCloseOnSelect:!0,getOptionLabel:function(e){return e.name},renderOption:function(e,n,r){var t=r.selected;return(0,T.jsxs)("li",(0,j.Z)((0,j.Z)({},e),{},{style:{height:"2rem"},children:[(0,T.jsx)(y.Z,{icon:U,checkedIcon:G,style:{marginRight:8},checked:t}),n.name]}))},ChipProps:{color:"primary"},noOptionsText:"No starships available",loadingText:"Loading starships..."}}],$=r(3123),ee=$.Ry({title:$.Z_().required(),director:$.Z_().required().min(1),openingCrawl:$.Z_().required("Opening crawl text is a required field").min(5,"At least 5 characters is required for crawl text"),characters:$.IX().min(1,"At least one character is required"),starships:$.IX().min(1,"At least one starship is required"),planets:$.Ry().required("Planet is a required field"),species:$.IX().min(1,"At least one species is required"),vehicles:$.IX().min(1,"At least one vehicle is required")}),ne=function(e){var n=function(n,r){"backdropClick"!==r&&e.onClose(null)};return(0,T.jsx)(Z.J9,{initialValues:{title:"",director:"",characters:[],starships:[],openingCrawl:"In a galaxy far far away...",planets:"",species:[],vehicles:[]},onSubmit:function(e){console.log(e)},validationSchema:ee,children:function(r){return(0,T.jsx)(T.Fragment,{children:(0,T.jsxs)(c.Z,{onClose:n,open:e.open,disableEscapeKeyDown:!0,children:[(0,T.jsx)(u.Z,{bgcolor:"primary.main",color:"white",children:(0,T.jsxs)(f.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,T.jsx)("div",{children:e.isEditMode?"Editing":"Create New Movie"}),(0,T.jsx)("div",{children:(0,T.jsx)(x.Z,{sx:{color:"white"},onClick:n,children:(0,T.jsx)(h.Z,{})})})]})}),(0,T.jsx)(m.Z,{}),(0,T.jsx)(d.Z,{children:(0,T.jsx)(Q,{})}),(0,T.jsxs)(p.Z,{children:[(0,T.jsx)(o.Z,{variant:"text",startIcon:(0,T.jsx)(g.Z,{}),onClick:r.handleReset,children:"Reset"}),(0,T.jsx)(o.Z,{variant:"text",startIcon:(0,T.jsx)(v.Z,{}),onClick:r.submitForm,children:"Save"})]})]})})}})},re=function(){var e=(0,i.useState)(!1),n=(0,t.Z)(e,2),r=n[0],c=n[1];return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(a.Z,{container:!0,children:(0,T.jsxs)(a.Z,{container:!0,mx:2,my:2,xs:12,spacing:2,children:[(0,T.jsx)(a.Z,{xs:12,sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:(0,T.jsx)(s.Z,{variant:"h6",children:"Create your own Starwars movie."})}),(0,T.jsx)(a.Z,{xs:12,sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:(0,T.jsx)(s.Z,{variant:"body2",children:"Try adding your own movie with starships, vehicles, species, and planet."})}),(0,T.jsx)(a.Z,{xs:12,sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:(0,T.jsx)(o.Z,{variant:"contained",startIcon:(0,T.jsx)(l.Z,{}),onClick:function(){c(!0)},children:"Add New Movie"})})]})}),r&&(0,T.jsx)(ne,{onClose:function(){c(!1)},open:r})]})}},5051:function(e,n,r){var t=r(1413),i=r(5987),a=(r(2791),r(9911)),s=r(5705),o=r(1898),l=r(9365),c=r(7924),u=r(763),d=r(184),p=["label","name","valueChange","validate"];n.Z=function(e){var n=e.label,r=e.name,h=(e.valueChange,e.validate),f=(0,i.Z)(e,p),x=(0,s.u6)();return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(o.Z,{fullWidth:!0,children:[f.showLabel&&(0,d.jsx)(l.Z,{htmlFor:r,children:n}),(0,d.jsx)(s.gN,(0,t.Z)({as:a.Z,label:n,name:r,id:r,error:x.touched[r]&&!!x.errors[r],validate:h,variant:"standard"},f.props)),(0,d.jsx)(c.Z,{id:"".concat(r,"-helper-text"),error:x.touched[r]&&!!x.errors[r],children:x.touched[r]&&x.errors[r]?(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(s.Bc,{name:r,render:function(e){return(0,u.upperFirst)(e)}})}):(0,d.jsx)(d.Fragment,{children:f.helperText})})]})})}},2175:function(e,n,r){r.d(n,{Lt:function(){return d},cs:function(){return l},ho:function(){return u}});var t=r(4165),i=r(5861),a=r(4569),s=r.n(a),o=r(5316),l={limit:1e4,page:1},c=s().create({baseURL:"https://swapi.tech/api/",timeout:5e3,headers:{"Content-Type":"application/json"},responseType:"json"}),u=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return c.get(e,{params:n})},d=function(){var e=(0,i.Z)((0,t.Z)().mark((function e(n,r){var i,a=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i=a.length>2&&void 0!==a[2]?a[2]:0)){e.next=4;break}return e.next=4,(0,o._)(i);case 4:return e.next=6,u(n,r).then((function(e){return e.data})).catch((function(e){if(409!==e.response.status)throw e}));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()},5316:function(e,n,r){function t(e){return new Promise((function(n,r){setTimeout((function(){n()}),e)}))}r.d(n,{_:function(){return t}})}}]);
//# sourceMappingURL=123.605bd476.chunk.js.map