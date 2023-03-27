import{i as _,g as E,u as w,a as r,j as e,b as o,T as n,m as k,I as P,_ as T,k as M,t as j,n as A,o as B,r as y,S as L,d,p as $,F as R,G as a,q,v as H}from"./index-2601b20a.js";import{P as U}from"./CircleProgress-2b45e103.js";import{F as Y}from"./FilterInput-cd35b72a.js";import{C as z,a as N,b as W,c as G,B as O}from"./index-69b7d8e0.js";import{H as V}from"./HourglassBottom-666a445f.js";import{a as J,s as K,b as Q,c as X,d as Z}from"./films.selectors-d2bbb7e0.js";import{D as ee}from"./DateDisplay-dee3f9d4.js";import{A as te}from"./Toolbar-bf89fd1d.js";import{u as re}from"./useIsMobile-81be2979.js";import{D as f}from"./general.model-1fceca1f.js";import{E as oe}from"./ErrorPage-4a6b7fea.js";import{s as ae,a as se}from"./favorites.selectors-3a07da1f.js";import"./useDebounce-9c2c92be.js";var ie=_();const ne=E(ie);function ce({film:t,uid:s,userId:C,allFavoritesLoading:v,favToggleLoading:D}){var b;const p=w(),u=()=>{var l,x;const{url:g}=t,F=g.split("/")[g.split("/").length-1],h=T(M,`swdb/:user/favorites${(l=t.favorite)!=null&&l.fireId?"/"+((x=t.favorite)==null?void 0:x.fireId):""}.json`,{user:C}),c={filmUrl:g,filmId:F,lastUpdated:new Date().getTime(),episodeId:t.episode_id,isCurrentFavorite:!0};let m;t.favorite?(c.isCurrentFavorite=!t.favorite.isCurrentFavorite,c.fireId=t.favorite.fireId,m=p(j({fav:c,url:h,favStatus:!t.favorite.isCurrentFavorite}))):m=p(A({fav:c,url:h,favStatus:!0})),m.then(S=>p(B({httpParams:{user:"yqu"}})))};return r(z,{sx:{display:"flex",flexDirection:"column",justifyContent:"space-between"},elevation:2,children:[r("div",{children:[e(N,{component:"img",alt:"poster",height:"440",image:`/assets/poster-img/${t.episode_id}.png`,sx:{backgroundColor:"#000",objectFit:"contain"}}),r(W,{children:[r(o.Stack,{direction:{lg:"column",xl:"row"},justifyContent:{xl:"space-between",lg:"flex-start"},marginBottom:{lg:"10px",xl:"0px"},children:[e(n,{gutterBottom:!0,variant:"h5",component:k.Link,to:`./${s}`,sx:{fontWeight:"500"},children:t.title}),r(n,{variant:"h5",color:"text.secondary",sx:{fontWeight:"300"},children:["EP ",t.episode_id]})]}),r(o.Stack,{spacing:1,children:[r(o.Stack,{direction:"row",spacing:.5,children:[e(n,{variant:"body1",color:"text.secondary",children:"Released:"}),e(n,{variant:"body1",color:"text.secondary",children:e(ee,{date:t.release_date,format:"MMM Do YYYY"})})]}),r(n,{variant:"body1",color:"text.secondary",children:["Directed by: ",t.director]}),r(n,{variant:"body1",color:"text.secondary",children:["Produced by: ",t.producer]}),e(n,{variant:"body1",color:"text.primary",children:t.opening_crawl})]})]})]}),r(G,{sx:{display:"flex",justifyContent:"space-between"},children:[e("div",{children:e(O,{size:"small",component:k.Link,to:`./${s}`,children:"See More"})}),e("div",{children:e(P,{"aria-label":"favorite",onClick:u,title:J(t.favorite),disabled:!!v,children:v?e(V,{}):e(ne,{color:(b=t.favorite)!=null&&b.isCurrentFavorite?"error":"disabled"})})})]})]})}const le="_loadingbackdrop_1tkxi_1",de="_spinner_1tkxi_1",pe={loadingbackdrop:le,spinner:de};function ue({isLoading:t,children:s}){return e(o.Box,{className:t?`${pe.loadingbackdrop}`:"",width:"100%",children:s})}const ge="yqu",we=()=>{const t=w(),{showSnackbar:s}=y.useContext(L),[C,v]=k.useSearchParams(),D=C.get("moviePageDisplayMode"),{isMobile:p}=re(),[u,b]=y.useState(D),g=d(K),F=d(Q),h=d(X),c=d(ae),m=d(se),l=d(Z);y.useEffect(()=>()=>{s("info",void 0)},[s]);const x=y.useCallback(i=>{t($({title:i}))},[t]),S=()=>{const i={moviePageDisplayMode:I(u)};v(i)};return r(R,{children:[e(te,{toolbarProps:{position:"sticky",sx:{top:p?"56px":"64px"}},children:r(a,{container:!0,xs:12,flexDirection:{xs:"row",sm:"row"},justifyContent:"space-between",alignItems:"center",children:[e(a,{xs:10,sm:4,children:e(o.Stack,{direction:"row",justifyContent:"start",alignItems:"center",children:r(a,{container:!0,xs:12,children:[e(a,{xs:8,children:e(Y,{filterChange:x})}),e(a,{xs:2,sx:{display:"flex"},justifyContent:"center",alignItems:"center",children:F&&e(U,{size:20})})]})})}),e(a,{xs:2,sm:8,children:e(o.Stack,{direction:"row",justifyContent:"flex-end",alignItems:"center",children:e(o.Tooltip,{title:`Switch to ${I(u)}`,children:e(o.IconButton,{onClick:S,children:u===f.CARD?e(q,{}):e(H,{})})})})})]})}),e(ue,{isLoading:g,children:h?e(oe,{reason:"Failed loading all films.",debug:h}):e(o.Stack,{direction:"column",p:2,width:"100%",children:e(a,{container:!0,disableEqualOverflow:!0,rowSpacing:4,children:l==null?void 0:l.map(i=>e(a,{xs:12,sm:4,smOffset:4,children:e(ce,{userId:ge,film:i.properties,uid:i.uid,allFavoritesLoading:c,favToggleLoading:m})},i.properties.episode_id))})})})]})},I=t=>t?t===f.CARD?f.TABLE:f.CARD:f.CARD;export{we as default};