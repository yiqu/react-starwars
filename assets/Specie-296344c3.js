import{a as r,b as t,j as e,u as E,m as D,r as v,ad as I,ae as w,F as L,G as d,a2 as j,a3 as T,A,a4 as _}from"./index-2601b20a.js";import{P as B}from"./CircleProgress-2b45e103.js";import{A as H}from"./Toolbar-bf89fd1d.js";import{u as W}from"./useIsMobile-81be2979.js";import{L as P}from"./LoadingLogo-7e711659.js";import{E as R}from"./ErrorPage-4a6b7fea.js";import{L as F}from"./LayoutWithGutter-98cc20f8.js";import"./index-69b7d8e0.js";import"./LoadingLogo.module-1e2568ff.js";function M({editable:s,onDialogClose:o,open:p,title:l,apiLoading:i,hasErrorMsg:c}){const u=()=>{o(s)},a=()=>{o(void 0)},h=(g,m)=>{m==="backdropClick"&&a()};return r(t.Dialog,{onClose:h,open:p,fullWidth:!0,id:"edit-dialog",maxWidth:"sm",children:[r(t.DialogTitle,{children:[c&&e(t.Stack,{width:"100%",pb:2,children:r(t.Alert,{severity:"error",sx:{borderRadius:"20px"},children:[e(t.AlertTitle,{children:"Error"}),c]})}),l]}),e(t.DialogContent,{children:"Mock Edit..."}),r(t.DialogActions,{children:[e(t.Button,{onClick:a,children:"Cancel"}),r(t.Button,{onClick:u,children:[i?"Working...":"Submit"," "]})]})]})}function V(){var x;const{isMobile:s}=W();E();const{specieId:o}=D.useParams(),[p,l]=v.useState(!1),{data:i,isLoading:c,isFetching:u,error:a,isError:h,refetch:g}=I(o),[m,f]=w(),k=v.useMemo(()=>{let n=[];return n=z.map(y=>({key:y,value:`${i==null?void 0:i.result.properties[y]}`})),n},[i]),C=()=>{g()},S=()=>{l(!0)},b=n=>{n?m({entityId:o,editable:n}):l(!1)};return c?e(t.Stack,{direction:"column",width:"100%",justifyContent:"center",alignItems:"center",height:"100vh",children:e(P,{message:"species"})}):h?e(R,{reason:a.status,debug:a.error}):i?r(t.Stack,{direction:"column",width:"100%",children:[e(H,{toolbarProps:{position:"sticky",sx:{top:s?"56px":"64px"}},children:r(d,{container:!0,xs:12,flexDirection:{xs:"row",sm:"row"},justifyContent:"space-between",alignItems:"center",children:[e(d,{xs:10,sm:4,children:r(t.Stack,{direction:"row",justifyContent:"start",alignItems:"center",children:[e(t.Button,{startIcon:e(j,{}),variant:"text",onClick:C,children:"Refresh"}),e(t.Divider,{orientation:"vertical",variant:"middle",flexItem:!0,sx:{mr:1,ml:1}}),e(t.Button,{startIcon:e(T,{}),variant:"text",onClick:S,children:"Edit"})]})}),e(d,{xs:2,sm:8,children:e(t.Stack,{direction:"row",justifyContent:"flex-end",alignItems:"center",children:u&&e(B,{size:20})})})]})}),e(t.Box,{mt:2,m:s?2:0,children:e(F,{size:"med",children:r(d,{xs:12,sx:{border:"1px solid #ddd",borderRadius:"10px",p:2},children:[r(t.Stack,{direction:"row",justifyContent:"start",alignItems:"center",children:[e(t.Typography,{variant:"h4",sx:{fontWeight:500},mr:2,children:i.result.properties.name}),r(t.Typography,{variant:"body1",children:["(",i.result.properties.classification,")"]})]}),e(t.Divider,{sx:{my:2}}),e(t.Stack,{direction:"column",children:k.map(n=>e(t.Box,{mb:1,children:r(t.Stack,{direction:"row",justifyContent:"start",alignItems:"center",children:[e(t.Typography,{variant:"h6",fontWeight:300,children:A.startCase(n.key)}),e(t.Typography,{mr:1.5,children:":"}),e(t.Typography,{variant:"h5",children:_(n.value)?(+n.value).toLocaleString():n.value})]})},n.key))})]})})}),e(M,{open:p,title:`Edit ${i.result.properties.name}`,editable:i.result.properties,onDialogClose:b,apiLoading:f.isLoading,hasErrorMsg:(x=f.error)==null?void 0:x.error})]}):e(L,{})}const z=["language","designation","average_height","average_lifespan","hair_colors","skin_colors","eye_colors"];export{V as default};