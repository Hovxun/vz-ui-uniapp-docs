import{i as n}from"./unit.Ce8tXKdL.js";import{I as r}from"./index-Blpl2poy.js";function t(n,r){return Math.floor(Math.random()*(r-n)+n)}function i(n){return n?Array.isArray(n)?n:[n]:[]}function e(n){return n?JSON.parse(JSON.stringify(n)):n}function s(r,t,i){if(!r)return;if(-1===t.indexOf(".")||void 0!==r[t])return r[t];const e=t.split("."),s=e.length;let o=r,f=-1;for(;n(o)&&++f<s;)o=o[e[f]];return o||i}function o(r,t,i){if(!n(r))return r;if(-1===t.indexOf("."))return r[t]=i,r;const e=t.split("."),s=e.length,o=s-1;let f=-1,u=r;for(;++f<s;){const r=e[f];let t=i;if(f!==o){const i=u[r];t=n(i)?i:{}}u[r]=t,u=u[r]}return r}async function f(n){return r(n)}async function u(n=30){return new Promise((r=>{setTimeout((()=>{r(!0)}),n)}))}export{i as a,o as b,e as d,s as g,f as n,t as r,u as s};
