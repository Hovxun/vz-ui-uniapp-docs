import{N as e,T as a,m as n,r as t,U as s,o as i,c as l,w as r,n as d,f as o,J as u,L as p,d as c,R as m,a as g,V as f,b,h,j as z,F as v,e as _,t as x}from"./index-Blpl2poy.js";import{r as y}from"./uni-app.es.BR6pCtX8.js";const S=Symbol("wd-tabs");const k={name:"VzTab"},T=Object.assign(k,{setup:u=>(function(i){const l=e(i,null);if(l){const e=s(),{link:t,unlink:i,internalChildren:r}=l;return t(e),a((()=>i(e))),{parent:l,index:n((()=>r.indexOf(e)))}}t(-1)}(S),(e,a)=>{const n=o;return i(),l(n,{ref:"tabRef"},{default:r((()=>[d(e.$slots,"default")])),_:3},512)})});const O=(e,a)=>{const n=e.indexOf(a);return-1===n?e.findIndex((e=>void 0!==a.key&&null!==a.key&&e.type===a.type&&e.key===a.key)):n};function V(e,a,n){const t=e&&e.subTree&&e.subTree.children?function(e){const a=[],n=e=>{Array.isArray(e)&&e.forEach((e=>{var t,s;(s=e)&&!0===s.__v_isVNode&&(a.push(e),(null==(t=e.component)?void 0:t.subTree)&&(a.push(e.component.subTree),n(e.component.subTree.children)),e.children&&n(e.children))}))};return n(e),a}(e.subTree.children):[];n.sort(((e,a)=>O(t,e.vnode)-O(t,a.vnode)));const s=n.map((e=>e.proxy));a.sort(((e,a)=>s.indexOf(e)-s.indexOf(a)))}const j=c({__name:"vz-tabs",setup(e){const{children:a,linkChildren:n}=function(e){const a=u([]),n=u([]),t=s();return{children:a,linkChildren:s=>{p(e,Object.assign({link:e=>{e.proxy&&(n.push(e),a.push(e.proxy),V(t,a,n))},unlink:e=>{const t=n.indexOf(e);a.splice(t,1),n.splice(t,1)},children:a,internalChildren:n},s))}}}(S);return n({state:{activeIndex:0}}),m((()=>{console.log(a)})),(e,a)=>{const n=o;return i(),l(n,{class:""},{default:r((()=>[d(e.$slots,"default")])),_:3})}}}),w={__name:"index",setup(e){const a=t([{id:0,page:1,pageSize:10,name:"推荐",list:[]},{id:1,page:1,pageSize:10,name:"体育",list:[]},{id:3,page:1,pageSize:10,name:"游戏",list:[]},{id:4,page:1,pageSize:10,name:"财经",list:[]},{id:5,page:1,pageSize:10,name:"汽车",list:[]},{id:6,page:1,pageSize:10,name:"科技",list:[]},{id:7,page:1,pageSize:10,name:"军事",list:[]},{id:8,page:1,pageSize:10,name:"教育",list:[]},{id:9,page:1,pageSize:10,name:"电影",list:[]}]),n=t(0);return t([{id:0,page:1,pageSize:10,name:"推荐",list:[]},{id:1,page:1,pageSize:10,name:"体育",list:[]}]),t(0),t([{id:0,page:1,pageSize:10,name:"推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐",list:[]},{id:1,page:1,pageSize:10,name:"体育",list:[]}]),t(0),(e,t)=>{const s=y(g("vz-tab"),T),d=y(g("vz-tabs"),j),u=o,p=f("wd-tab"),c=f("wd-tabs");return i(),l(u,{class:"container"},{default:r((()=>[b(d,{current:n.value,"onUpdate:current":t[0]||(t[0]=e=>n.value=e),list:a.value},{default:r((()=>[(i(!0),h(v,null,z(a.value,(e=>(i(),l(s,{key:e.id,title:e.name},{default:r((()=>[_(x(e.name),1)])),_:2},1032,["title"])))),128))])),_:1},8,["current","list"]),b(c,{modelValue:n.value,"onUpdate:modelValue":t[1]||(t[1]=e=>n.value=e)},{default:r((()=>[(i(),h(v,null,z(4,(e=>b(p,{key:e,title:`标签${e}`},{default:r((()=>[b(u,{class:"content"},{default:r((()=>[_("内容"+x(e),1)])),_:2},1024)])),_:2},1032,["title"]))),64))])),_:1},8,["modelValue"])])),_:1})}}};export{w as default};