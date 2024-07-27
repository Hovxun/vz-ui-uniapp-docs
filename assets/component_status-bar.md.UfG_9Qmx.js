import{_ as t,c as a,I as i,a6 as e,o as h,E as n}from"./chunks/framework.CLC5XAI4.js";const b=JSON.parse('{"title":"StatusBar 状态栏","description":"","frontmatter":{},"headers":[],"relativePath":"component/status-bar.md","filePath":"component/status-bar.md","lastUpdated":1722075222000}'),d={name:"component/status-bar.md"},l=e(`<h1 id="statusbar-状态栏" tabindex="-1">StatusBar 状态栏 <a class="header-anchor" href="#statusbar-状态栏" aria-label="Permalink to &quot;StatusBar 状态栏&quot;">​</a></h1><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">vz-status-bar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">vz-status-bar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="固定在顶部" tabindex="-1">固定在顶部 <a class="header-anchor" href="#固定在顶部" aria-label="Permalink to &quot;固定在顶部&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">vz-status-bar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fixed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">vz-status-bar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="背景颜色" tabindex="-1">背景颜色 <a class="header-anchor" href="#背景颜色" aria-label="Permalink to &quot;背景颜色&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">vz-status-bar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> background</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;var(--vz-color-primary)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">vz-status-bar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table tabindex="0"><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th><th>样式变量</th></tr></thead><tbody><tr><td>fixed</td><td>是否固定在顶部</td><td>boolean</td><td>false</td><td>-</td></tr><tr><td>z-index</td><td><code>z-index</code></td><td>string / number</td><td>--vz-z-index</td><td>--vz-status-bar-z-index</td></tr><tr><td>background</td><td>背景</td><td>string</td><td>--vz-bg-color</td><td>--vz-status-bar-background</td></tr><tr><td>i-class</td><td>根节点样式类</td><td>string</td><td>-</td><td>-</td></tr><tr><td>i-style</td><td>根节点样式</td><td><code>Object</code></td><td>-</td><td>-</td></tr></tbody></table><h2 id="scss" tabindex="-1">SCSS <a class="header-anchor" href="#scss" aria-label="Permalink to &quot;SCSS&quot;">​</a></h2><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$status-bar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;z-index&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">--vz-z-index</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;background&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">--vz-bg-color-page</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>`,11);function r(p,k,o,c,E,g){const s=n("IFramePreview");return h(),a("div",null,[i(s),l])}const y=t(d,[["render",r]]);export{b as __pageData,y as default};
