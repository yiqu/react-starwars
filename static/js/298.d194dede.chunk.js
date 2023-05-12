"use strict";(self.webpackChunkstarwars=self.webpackChunkstarwars||[]).push([[298],{15298:function(e,n,r){r.r(n),r.d(n,{default:function(){return xe}});var t=r(70885),a=r(72791),i=r(36227),l=r(94162),s=r(4565),o=r(17205),d=r(35645),c=r(60788),u=r(77248),p=r(8771),h=r(78711),f=r(96015),m=r(53329),x=r(86753),v=r(55705),Z=r(42982),b=r(1413),j=r(40464),g=r(13811),y=r(81872),C=r(8440),w=r(45987),I=r(59911),k=r(81898),S=r(88823),E=r(37924),F=r(4218),T=r(763),P=r(98937),A=r(77907),N=r(80184),q=["label","name","options","dataLoading","placeholder","validate","disabled"],O=(0,N.jsx)(P.Z,{}),L=(0,N.jsx)(A.Z,{}),R=function(e){var n=e.label,r=e.name,t=e.options,a=e.dataLoading,i=e.placeholder,l=e.validate,s=e.disabled,o=(0,w.Z)(e,q),d=(0,v.u6)();return(0,N.jsxs)(k.Z,{fullWidth:!0,size:"small",children:[(0,N.jsx)(v.gN,(0,b.Z)({as:F.Z,label:n,name:r,id:r,onChange:function(e,n){d.setFieldValue(r,n)},renderInput:function(e){return(0,N.jsx)(I.Z,(0,b.Z)((0,b.Z)({},e),{},{name:r,variant:"standard",label:(0,T.startCase)(a?"Loading ".concat(r,"..."):"Select ".concat(r)),placeholder:(0,T.upperFirst)(null!==i&&void 0!==i?i:n),error:d.touched[r]&&!!d.errors[r]},o.renderInputProps))},renderOption:function(e,n,r){var t,a,i=r.selected;return(0,N.jsxs)("li",(0,b.Z)((0,b.Z)({},e),{},{children:[(0,N.jsx)(S.Z,{icon:O,checkedIcon:L,checked:i}),null!==(t=null!==(a=n.name)&&void 0!==a?a:n.display)&&void 0!==t?t:n]}))},getOptionLabel:function(e){var n,r;return null!==(n=null!==(r=e.name)&&void 0!==r?r:e.display)&&void 0!==n?n:e},validate:l,options:t,disabled:s,loading:a,loadingText:"Loading ".concat(n),noOptionsText:"No ".concat(n," available"),autoHighlight:!0},o.props)),(0,N.jsx)(E.Z,{id:"".concat(r,"-helper-text"),error:d.touched[r]&&!!d.errors[r],children:d.touched[r]&&d.errors[r]?(0,N.jsx)(v.Bc,{name:r,render:function(e){return(0,T.upperFirst)(e)}}):(0,N.jsx)(N.Fragment,{children:o.helperText})})]})},z=r(72900),D=function(e){var n=e.label,r=e.name,t=e.props,a=e.disabled,i=(0,v.u6)();return(0,N.jsx)(k.Z,{fullWidth:!0,size:"small",children:(0,N.jsx)(v.gN,(0,b.Z)({as:z.Z,control:(0,N.jsx)(S.Z,{checked:!!i.values[r],onChange:function(e){return i.setFieldValue(r,e.target.checked||!1)}}),label:(0,T.startCase)(n),name:r,id:r,disabled:a},t))})},M=["label","name","validate","disabled","placeholder"],V=function(e){var n=e.label,r=e.name,t=e.validate,a=e.disabled,i=e.placeholder,l=(0,w.Z)(e,M),s=(0,v.u6)();return(0,N.jsxs)(k.Z,{fullWidth:!0,size:"small",children:[(0,N.jsx)(v.gN,(0,b.Z)({as:I.Z,label:(0,T.startCase)(n),name:r,id:r,error:s.touched[r]&&!!s.errors[r],validate:t,variant:"standard",disabled:a,placeholder:(0,T.upperFirst)(null!==i&&void 0!==i?i:n)},l.props)),(0,N.jsx)(E.Z,{id:"".concat(r,"-helper-text"),error:s.touched[r]&&!!s.errors[r],children:s.touched[r]&&s.errors[r]?(0,N.jsx)(v.Bc,{name:r,render:function(e){return(0,T.upperFirst)(e)}}):(0,N.jsx)(N.Fragment,{children:l.helperText})})]})},W=r(72851),B=r(35702),H=r(79365),X=["label","name","options","disabled","placeholder","validate"],_=function(e){var n=e.label,r=e.name,t=e.options,a=e.disabled,i=(e.placeholder,e.validate),l=(0,w.Z)(e,X),o=(0,v.u6)();return(0,N.jsxs)(k.Z,{fullWidth:!0,size:"small",children:[(0,N.jsxs)(H.Z,{id:r+"label",children:[" ",(0,T.startCase)(n)," "]}),(0,N.jsxs)(v.gN,(0,b.Z)((0,b.Z)({as:W.Z,name:r,label:(0,T.startCase)(n),id:r,validate:i,variant:"standard",error:o.touched[r]&&!!o.errors[r],disabled:a},l.props),{},{children:[l.useDefaultNoneSelected&&(0,N.jsx)(B.Z,{value:"NONE_SELECTED",disabled:!0,children:(0,N.jsxs)(s.Z,{sx:{color:"#666"},children:["Select ",l.useDefaultNoneSelected]})},""),null===t||void 0===t?void 0:t.map((function(e){var n,r,t,a=null!==(n=e.name)&&void 0!==n?n:e,i=null!==(r=e.value)&&void 0!==r?r:e;return(0,N.jsx)(B.Z,{value:i,children:a},null!==(t=e.id)&&void 0!==t?t:e.uid)}))]})),(0,N.jsx)(E.Z,{id:"".concat(r,"-helper-text"),error:o.touched[r]&&!!o.errors[r],children:o.touched[r]&&o.errors[r]?(0,N.jsx)(v.Bc,{name:r,render:function(e){return(0,T.upperFirst)(e)}}):(0,N.jsx)(N.Fragment,{children:l.helperText})})]})},G=r(71747),J=["label","name","placeholder","disabled","validate"],K=function(e){var n=e.label,r=e.name,t=e.placeholder,a=(e.disabled,e.validate),i=(0,w.Z)(e,J),l=(0,v.u6)();return(0,N.jsxs)(k.Z,{fullWidth:!0,size:"small",children:[(0,N.jsx)(v.gN,(0,b.Z)({as:I.Z,multiline:!0,name:r,id:r,validate:a,minRows:1,label:(0,T.startCase)(n),error:l.touched[r]&&!!l.errors[r],placeholder:(0,T.upperFirst)(null!==t&&void 0!==t?t:n),InputProps:{inputComponent:G.Z,inputProps:{style:{resize:"vertical",minHeight:"3.5rem"}}}},i.props)),(0,N.jsx)(E.Z,{id:"".concat(r,"-helper-text"),error:l.touched[r]&&!!l.errors[r],children:l.touched[r]&&l.errors[r]?(0,N.jsx)(v.Bc,{name:r,render:function(e){return(0,T.upperFirst)(e)}}):(0,N.jsx)(N.Fragment,{children:i.helperText})})]})},Q=function(e){switch(e.type){case"select":var n;return(0,N.jsx)(_,(0,b.Z)({name:e.name,label:e.label,options:null!==(n=e.options)&&void 0!==n?n:[],disabled:e.disabled,placeholder:e.placeholder},e));case"text":return(0,N.jsx)(V,(0,b.Z)({name:e.name,label:e.label,disabled:e.disabled,placeholder:e.placeholder},e));case"autocomplete":var r;return(0,N.jsx)(R,(0,b.Z)({name:e.name,label:e.label,options:null!==(r=e.props.options)&&void 0!==r?r:[],dataLoading:e.props.loading,disabled:e.disabled,placeholder:e.placeholder},e));case"textarea":return(0,N.jsx)(K,(0,b.Z)({name:e.name,label:e.label,disabled:e.disabled,placeholder:e.placeholder},e));case"checkbox":return(0,N.jsx)(D,(0,b.Z)({name:e.name,label:e.label,disabled:e.disabled},e));default:return(0,N.jsx)(N.Fragment,{children:" No component matched... "})}},U=r(96884),Y=r(51070),$=r.n(Y),ee=r(12068),ne=r(95885),re=r(70773),te={limit:1e4,page:1},ae=function(e){var n=e.entityType,r=e.params,i=void 0===r?{}:r,l=e.sleep,s=void 0===l?0:l,o=(0,a.useState)(),d=(0,t.Z)(o,2),c=d[0],u=d[1];(0,U.Z)((function(){var e=$()(re.H8,n,i);u(e)}),[i,n]);var p=(0,ee.Z)((function(){return c||null}),(function(e){return(0,ne.k)(e,s)}),{shouldRetryOnError:!1}),h=p.data,f=p.isValidating,m=p.error,x=p.isLoading;return{data:null===h||void 0===h?void 0:h.results,validating:f,loading:x,error:m}},ie=r(22007),le=r(29823),se=function(e){var n=e.handleClose,r=e.isEditMode,s=(0,v.u6)(),o=(0,a.useRef)(s),d=(0,a.useState)(0),c=(0,t.Z)(d,2),u=c[0],m=c[1],x=(0,a.useState)([]),w=(0,t.Z)(x,2),I=w[0],k=w[1],S=ae({entityType:"people",sleep:1e3,params:(0,b.Z)((0,b.Z)({},te),{},{time:u})}),E=S.data,F=S.error,T=S.loading,P=ae({entityType:"starships",params:(0,b.Z)((0,b.Z)({},te),{},{time:u})}),A=P.data,q=P.error,O=P.loading,L=ae({entityType:"vehicles",params:(0,b.Z)((0,b.Z)({},te),{},{time:u})}),R=L.data,z=L.error,D=L.loading,M=ae({entityType:"planets",params:(0,b.Z)((0,b.Z)({},te),{},{time:u})}),V=M.data,W=M.error,B=(M.loading,ae({entityType:"species",params:(0,b.Z)((0,b.Z)({},te),{},{time:u})})),H=B.data,X=B.error,_=B.loading;(0,a.useEffect)((function(){k(oe)}),[]),(0,a.useEffect)((function(){o.current.resetForm()}),[u]);return(0,a.useEffect)((function(){E&&E.length>-1&&k((function(e){var n=e.findIndex((function(e){return"characters"===e.name}));return e[n].props.options=E,e}))}),[E]),(0,a.useEffect)((function(){k((function(e){var n=e.findIndex((function(e){return"characters"===e.name}));return e[n].props.loading=T,(0,Z.Z)(e)}))}),[T]),(0,a.useEffect)((function(){A&&A.length>-1&&k((function(e){var n=e.findIndex((function(e){return"starships"===e.name}));return e[n].props.options=A,e}))}),[A]),(0,a.useEffect)((function(){k((function(e){var n=e.findIndex((function(e){return"starships"===e.name}));return e[n].props.loading=O,(0,Z.Z)(e)}))}),[O]),(0,a.useEffect)((function(){R&&R.length>-1&&k((function(e){var n=e.findIndex((function(e){return"vehicles"===e.name}));return e[n].props.options=R,e}))}),[R]),(0,a.useEffect)((function(){k((function(e){var n=e.findIndex((function(e){return"vehicles"===e.name}));return e[n].props.loading=D,(0,Z.Z)(e)}))}),[D]),(0,a.useEffect)((function(){V&&V.length>-1&&k((function(e){var n=e.findIndex((function(e){return"planets"===e.name}));return e[n].options=V,(0,Z.Z)(e)}))}),[V]),(0,a.useEffect)((function(){H&&H.length>-1&&k((function(e){var n=e.findIndex((function(e){return"species"===e.name}));return e[n].props.options=H,e}))}),[H]),(0,a.useEffect)((function(){k((function(e){var n=e.findIndex((function(e){return"species"===e.name}));return e[n].props.loading=_,(0,Z.Z)(e)}))}),[_]),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(j.Z,{children:(0,N.jsxs)(l.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,N.jsx)(l.Z,{children:r?"Editing":"Create New Movie"}),(0,N.jsxs)(l.Z,{direction:"row",children:[(0,N.jsx)(g.Z,{onClick:function(){m((new Date).getTime())},children:(0,N.jsx)(ie.Z,{})}),(0,N.jsx)(g.Z,{onClick:n,children:(0,N.jsx)(le.Z,{})})]})]})}),(0,N.jsx)(y.Z,{}),(0,N.jsx)(C.Z,{children:(0,N.jsxs)(l.Z,{direction:"column",spacing:2,children:[(F||X||z||q||W)&&(0,N.jsxs)(p.Z,{severity:"error",children:[(0,N.jsx)(h.Z,{children:"API Error"}),(0,N.jsx)(f.Z,{children:(0,N.jsxs)(N.Fragment,{children:["An API error occurred:",(0,N.jsx)(f.Z,{children:null===F||void 0===F?void 0:F.message}),(0,N.jsx)(f.Z,{children:null===X||void 0===X?void 0:X.message}),(0,N.jsx)(f.Z,{children:null===z||void 0===z?void 0:z.message}),(0,N.jsx)(f.Z,{children:null===q||void 0===q?void 0:q.message}),(0,N.jsx)(f.Z,{children:null===W||void 0===W?void 0:W.message})]})})]}),(0,N.jsx)(v.l0,{children:(0,N.jsx)(i.Z,{container:!0,spacing:2,children:I.map((function(e){return(0,N.jsx)(i.Z,{xs:12,children:Q(e)},e.name)}))})})]})})]})},oe=[{name:"title",label:"title",placeholder:"A new hope",type:"text",disabled:!1,props:{variant:"outlined"}},{name:"director",label:"director",placeholder:"George Lucas",type:"text",disabled:!1,props:{variant:"outlined"}},{name:"characters",label:"characters",type:"autocomplete",renderInputProps:{variant:"outlined"},disabled:!1,placeholder:"Luke Skywalker, Han Solo...",props:{options:[],multiple:!0,disableCloseOnSelect:!0,ChipProps:{color:"primary"}}},{name:"openingCrawl",label:"Opening crawl",placeholder:"In a galaxy far far away...",type:"textarea",disabled:!1},{name:"planets",label:"Select planet",type:"select",options:[],disabled:!1,props:{variant:"outlined"}},{name:"species",label:"Species",type:"autocomplete",renderInputProps:{variant:"outlined"},disabled:!1,props:{multiple:!0,disableCloseOnSelect:!0,ChipProps:{color:"primary"}}},{name:"vehicles",label:"Vehicles",type:"autocomplete",renderInputProps:{variant:"outlined"},disabled:!1,props:{multiple:!0,disableCloseOnSelect:!0,ChipProps:{color:"primary"}}},{name:"starships",label:"starships",type:"autocomplete",renderInputProps:{variant:"outlined"},disabled:!1,props:{multiple:!0,disableCloseOnSelect:!0,ChipProps:{color:"primary"}}},{name:"canon",label:"Canon",type:"checkbox",disabled:!1}],de=r(62797),ce=de.Ry({title:de.Z_().required(),director:de.Z_().required().min(1),openingCrawl:de.Z_().required("Opening crawl text is a required field").min(5,"At least 5 characters is required for crawl text"),characters:de.IX().min(1,"At least one character is required"),starships:de.IX().min(1,"At least one starship is required"),planets:de.Ry().required("Planet is a required field"),species:de.IX().min(1,"At least one species is required"),vehicles:de.IX().min(1,"At least one vehicle is required")}),ue=r(21405),pe=r.n(ue),he=function(e){var n=e.film,r=e.onSuccess,t=e.onFailure;!function(e){var n=e.url,r=e.body,t=e.onSuccess,a=e.onFailure,i=e.onFinally;e.abortController,pe().post(n,r).then((function(e){t&&t(e.data)})).catch((function(e){console.log("App error POST: ",e),a&&a(e)})).finally((function(){i&&i()}))}({url:$()("https://kq-1-1a499.firebaseio.com/","/swdb/:user/added-films.json",{user:"yqu"}),body:JSON.stringify(n),onSuccess:r,onFailure:t})},fe={title:"",director:"",characters:[],starships:[],openingCrawl:"In a galaxy far far away...",planets:"",species:[],vehicles:[],canon:!1},me=function(e){var n=e.onClose,r=e.open,i=e.isEditMode,l=(0,a.useCallback)((function(e,r){"backdropClick"!==r&&n(null)}),[n]),s=(0,a.useState)(),d=(0,t.Z)(s,2),Z=d[0],b=d[1];return(0,N.jsx)(v.J9,{initialValues:fe,onSubmit:function(e){b(void 0),e&&he({film:e,onSuccess:function(e){n(e)},onFailure:function(e){var n;b("".concat(null===(n=e.response)||void 0===n?void 0:n.data))}})},validationSchema:ce,children:function(e){return(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)(c.Z,{onClose:l,open:r,disableEscapeKeyDown:!0,children:[(0,N.jsx)(se,{handleClose:l,isEditMode:i}),Z&&(0,N.jsxs)(p.Z,{severity:"error",children:[(0,N.jsx)(h.Z,{children:"API Error"}),(0,N.jsxs)(f.Z,{children:["An API error occurred: ",Z]})]}),(0,N.jsxs)(u.Z,{children:[(0,N.jsx)(o.Z,{variant:"text",startIcon:(0,N.jsx)(x.Z,{}),onClick:e.handleReset,children:"Reset"}),(0,N.jsx)(o.Z,{variant:"text",startIcon:(0,N.jsx)(m.Z,{}),onClick:e.submitForm,children:"Save"})]})]})})}})},xe=function(){var e=(0,a.useState)(!1),n=(0,t.Z)(e,2),r=n[0],c=n[1],u=(0,a.useCallback)((function(e){console.log(e),c(!1)}),[]);return(0,N.jsxs)(l.Z,{direction:"column",p:2,width:"100%",children:[(0,N.jsx)(i.Z,{container:!0,children:(0,N.jsx)(i.Z,{xs:12,children:(0,N.jsxs)(l.Z,{direction:"column",spacing:3,alignItems:"center",justifyContent:"center",children:[(0,N.jsx)(l.Z,{direction:"row",children:(0,N.jsx)(s.Z,{variant:"h6",children:"Create your own Starwars movie."})}),(0,N.jsx)(l.Z,{direction:"row",children:(0,N.jsx)(s.Z,{variant:"body2",children:"Try adding your own movie with starships, vehicles, species, and planet."})}),(0,N.jsx)(l.Z,{direction:"row",children:(0,N.jsx)(o.Z,{variant:"contained",startIcon:(0,N.jsx)(d.Z,{}),onClick:function(){c(!0)},children:"Add New Movie"})})]})})}),r&&(0,N.jsx)(me,{onClose:u,open:r})]})}},95885:function(e,n,r){r.d(n,{k:function(){return o}});var t=r(74165),a=r(15861),i=r(21405),l=r.n(i);function s(e){return new Promise((function(n,r){setTimeout((function(){n()}),e)}))}var o=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n){var r,a,i=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=i.length>1&&void 0!==i[1]?i[1]:0)){e.next=4;break}return e.next=4,s(r);case 4:return e.prev=4,e.next=7,l().get(n,{headers:{"Content-Type":"application/json"},responseType:"json"});case 7:if(200!==(a=e.sent).status){e.next=10;break}return e.abrupt("return",a.data);case 10:return e.abrupt("return",Promise.reject(a));case 13:throw e.prev=13,e.t0=e.catch(4),console.error("App fetcher GET error:",e.t0),e.t0;case 17:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=298.d194dede.chunk.js.map