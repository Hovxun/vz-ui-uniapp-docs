import{d as s,o as e,c as a,p as t,u as l,f as n,w as i,h as o,j as r,F as c,b as u,m as p,e as d,t as m,v as _,q as f,y as v}from"./index-DxPopHhY.js";import{c as g}from"./bem.DA8SpLb8.js";import{_ as x}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{V as z}from"./vz-icon.qGNd4aTz.js";import{a as y}from"./unit.t4QfnxDT.js";const k=x(s({name:"VZLoadingCircular",__name:"vz-loading-circular",setup(s){const i=g("loading-circular");return(s,o)=>{const r=n;return e(),a(r,{class:t([l(i).b()])},null,8,["class"])}}}),[["__scopeId","data-v-4522e650"]]),j=x(s({name:"VZLoadingSpinner",__name:"vz-loading-spinner",setup(s){const p=g("loading-spinner");return(s,d)=>{const m=n;return e(),a(m,{class:t([l(p).b()])},{default:i((()=>[(e(),o(c,null,r(12,(s=>u(m,{key:s,class:t(l(p).e("line"))},null,8,["class"]))),64))])),_:1},8,["class"])}}}),[["__scopeId","data-v-7edff77f"]]),C=x(s({name:"VZLoading",__name:"vz-loading",props:{name:{default:"circular"},color:{},size:{},lineWidth:{},duration:{},steps:{},text:{},textColor:{},textSize:{},gap:{},vertical:{type:Boolean,default:!1},iClass:{},iStyle:{}},emits:["click"],setup(s,{emit:o}){const r=s,c=o,x=g("loading"),C=p((()=>"spinner"===r.name?12:r.steps&&r.steps>1?r.steps:"")),V=p((()=>x.cssVarBlock({size:y(r.size),color:r.color,"line-width":y(r.lineWidth),"animation-duration":r.duration,"animation-steps":C.value,"text-size":y(r.textSize),"text-color":r.textColor,gap:y(r.gap)})));function b(s){c("click",s)}return(s,o)=>{const r=n,c=v;return e(),a(r,{class:t([l(x).b(),l(x).is("vertical",s.vertical),s.iClass]),style:f([V.value,s.iStyle]),onClick:b},{default:i((()=>[u(r,{class:t([l(x).e("icon"),l(x).is("steps",!!C.value)])},{default:i((()=>["circular"===s.name?(e(),a(k,{key:0})):"spinner"===s.name?(e(),a(j,{key:1})):(e(),a(z,{key:2,name:s.name,size:s.size,color:s.color},null,8,["name","size","color"]))])),_:1},8,["class"]),s.text?(e(),a(c,{key:0,class:t([l(x).e("text")])},{default:i((()=>[d(m(s.text),1)])),_:1},8,["class"])):_("",!0)])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-d6f964ec"]]);export{C as V};