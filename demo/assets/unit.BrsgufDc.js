import{X as t}from"./index-BWsgb0Z6.js";const r=t=>"number"==typeof t,e=t=>!!t&&(t=>"string"==typeof t)(t)&&!Number.isNaN(Number(t)),n=t=>"[object Object]"===Object.prototype.toString.call(t);function o(t,n="rpx"){return""===t?"":r(t)||e(t)?`${t}${n}`:t}function u(n){if(""===n)return 0;if(r(n))return t(n);if(e(n))return t(Number(n));const o=parseFloat(n);if(!o)return 0;const u=function(t){const r=t.match(/^-?([0-9]+)?([.]{1}[0-9]+){0,1}(em|rpx|px|%)$/);return r?r[4]:""}(n);return"px"===u?1*o:t(o)}export{o as a,n as i,u as t};