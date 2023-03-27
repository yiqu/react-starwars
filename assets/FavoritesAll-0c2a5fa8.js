import{a as t,G as s,b as r,j as e,F as p,g as f,W as C,u as x,r as k,m as F,_ as v,k as y,X as I,d as h}from"./index-7ee8e1d8.js";import{e as S,f as w,s as D}from"./favorites.selectors-d2728799.js";import"./index-c747f4c0.js";import{H as A}from"./HourglassBottom-48092f33.js";import{D as b}from"./DateDisplay-7b862aec.js";function B(o){return o.loading?t(s,{xs:12,sm:12,children:[t(r.Stack,{direction:"row",sx:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[e(r.Skeleton,{variant:"text",sx:{fontSize:"2rem",width:"10rem"}}),e(r.Skeleton,{variant:"circular",width:40,height:40})]}),e(r.Skeleton,{variant:"rectangular",height:"30rem"})]}):e(p,{children:o.children})}var E=C();const L=f(E);function j({open:o,handleClose:n,title:l,message:a}){const c=(i,u)=>{n(!1)},d=i=>u=>{n(i)};return t(r.Dialog,{open:!!o,onClose:c,children:[e(r.DialogTitle,{id:"confirm-dialog",mb:2,sx:{bgcolor:i=>i.palette.mode==="light"?"primary.light":null,color:i=>i.palette.mode==="light"?"#fff":null},children:l??"Confirmation"}),e(r.DialogContent,{children:e(r.DialogContentText,{id:"confirm-dialog-description",children:a??"Are you sure?"})}),t(r.DialogActions,{children:[e(r.Button,{onClick:d(!1),sx:{color:"gray"},children:"Cancel"}),e(r.Button,{onClick:d(!0),autoFocus:!0,children:"Confirm"})]})]})}function T({fav:o}){const n="yqu",l=x(),[a,c]=k.useState(!1),d=()=>{if(o.isCurrentFavorite){const m={...o},g=v(y,`swdb/:user/favorites/${o.fireId}.json`,{user:n});l(I({fav:m,favStatus:!1,url:g})).unwrap().then(U=>{})}},i=()=>{c(!0)},u=m=>{c(!1),m&&d()};return t(p,{children:[t(r.Card,{children:[e(r.CardContent,{children:t(r.Stack,{direction:"row",spacing:2,children:[e(r.Box,{children:e(r.CardMedia,{component:"img",alt:"poster",height:"100",image:`/assets/poster-img/${o.episodeId}.png`,sx:{backgroundColor:"#000",objectFit:"contain",borderRadius:"20px"}})}),t(r.Stack,{direction:"column",spacing:.3,children:[t(r.Typography,{variant:"h5",sx:{fontWeight:"500",fontFamily:"Poppins"},component:F.Link,to:`/movies/${o.filmId}`,children:["EP ",o.episodeId]}),e(r.Box,{color:"text.secondary",children:t(r.Stack,{direction:"row",spacing:.3,children:[e(r.Box,{children:"Favorited"}),e(b,{date:o.lastUpdated,fromNow:!0})]})})]})]})}),e(r.CardActions,{children:e(r.Button,{variant:"text",startIcon:o.apiWorking?e(A,{}):e(L,{}),onClick:i,title:o.isCurrentFavorite?"Unfavorite this film":"",disabled:o.apiWorking,fullWidth:!0,color:"error",children:"Remove"})})]}),e(j,{handleClose:u,open:a,message:`Are you sure you want to remove EP ${o.episodeId} from favorites?`})]})}function q(){const o=h(S),n=h(w);return!h(D)&&o.length<1?e(s,{container:!0,children:e(s,{md:4,xs:12,children:e(r.Typography,{children:"No favorites found."})})}):e(B,{loading:n,children:e(s,{container:!0,spacing:2,children:o.map(a=>e(s,{md:2,xs:12,children:e(T,{fav:a})},a.fireId))})})}export{q as default};