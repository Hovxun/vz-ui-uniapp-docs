const s=(s,e,r,c,n)=>{let t=`${s}-${e}`;return r&&(t+=`-${r}`),c&&(t+=`__${c}`),n&&(t+=`--${n}`),t},e=e=>({namespace:"vz",b:(r="")=>s("vz",e,r,"",""),e:r=>r?s("vz",e,"",r,""):"",m:r=>r?s("vz",e,"","",r):"",be:(r,c)=>r&&c?s("vz",e,r,c,""):"",em:(r,c)=>r&&c?s("vz",e,"",r,c):"",bm:(r,c)=>r&&c?s("vz",e,r,"",c):"",bem:(r,c,n)=>r&&c&&n?s("vz",e,r,c,n):"",is:(s,...e)=>{const r=!(e.length>=1)||e[0];return s&&r?`is-${s}`:""},cssVar:s=>{const e={};for(const r in s)s[r]&&s[r]&&(e[`--vz-${r}`]=s[r]);return e},cssVarName:s=>`--vz-${s}`,cssVarBlock:s=>{const r={};for(const c in s)s[c]&&(r[`--vz-${e}-${c}`]=s[c]);return r},cssVarBlockName:s=>`--vz-${e}-${s}`});export{e as c};
