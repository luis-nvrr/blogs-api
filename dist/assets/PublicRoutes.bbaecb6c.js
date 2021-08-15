import{R as e,F as t,n,S as a,o as r,H as l,p as c,q as o,s as m,u as s,v as i,m as u,x as E,L as d,A as g,E as p,j as h,y as f}from"./vendor.8adc1e17.js";import{u as b}from"./index.d5b54608.js";import{a as w,b as v,L as x}from"./Landing.e40f06fa.js";const S=({children:n})=>e.createElement(t,{flexDirection:"column",width:"100wh",height:"100vh",bgGradient:"linear-gradient(90deg, rgba(180,58,58,1) 0%, rgba(253,123,29,0.8491771708683473) 50%, rgba(252,176,69,1) 100%)",justifyContent:"center",alignItems:"center"},n),y=n(w),j=n(v),C=({onSuccess:t})=>{const[n,g,p]=b(),[h,f]=e.useState(!1),[w,v]=e.useState(""),[x,S]=e.useState("");return e.createElement(a,{flexDirection:"column",marginBottom:"2",justifyContent:"center",alignItems:"center"},e.createElement(r,{bgGradient:"linear(to-r, green.200, pink.500)"}),e.createElement(l,{color:"white"},"Welcome!"),e.createElement("form",{onSubmit:async e=>{e.preventDefault();const n={username:x,password:w};await g(n),t()}},e.createElement(a,{spacing:4,padding:"2rem",backgroundColor:"whiteAlpha.900",boxShadow:"md",borderRadius:"xl"},e.createElement(c,null,e.createElement(o,null,e.createElement(m,{pointerEvents:"none",children:e.createElement(y,{color:"gray.300"})}),e.createElement(s,{onChange:e=>{e.preventDefault(),S(e.target.value)},type:"text",placeholder:"Username"}))),e.createElement(c,null,e.createElement(o,null,e.createElement(m,{pointerEvents:"none",color:"gray.300",children:e.createElement(j,{color:"gray.300"})}),e.createElement(s,{onChange:e=>{e.preventDefault(),v(e.target.value)},type:h?"text":"password",placeholder:"Password"}),e.createElement(i,{width:"4.5rem"},e.createElement(u,{h:"1.75rem",size:"sm",onClick:()=>f(!h)},h?"Hide":"Show"))),e.createElement(E,{textAlign:"right"},e.createElement(d,null,"forgot password?"))),e.createElement(u,{borderRadius:"md",type:"submit",variant:"solid",colorScheme:"teal",width:"full"},"Login"))))},D=()=>{const t=g();return e.createElement(S,null,e.createElement(C,{onSuccess:()=>t("/app")}))},L=()=>e.createElement(p,null,e.createElement(h,{path:"/login",element:e.createElement(D,null)})),k=()=>e.createElement(p,null,e.createElement(h,{path:"/auth/*",element:e.createElement(L,null)}),e.createElement(h,{path:"/",element:e.createElement(x,null)}),e.createElement(h,{path:"*",element:e.createElement(f,{to:"/"})}));export{k as PublicRoutes};