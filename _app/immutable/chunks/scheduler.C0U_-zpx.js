function j(){}const A=t=>t;function E(t,n){for(const e in n)t[e]=n[e];return t}function q(t){return t()}function C(){return Object.create(null)}function O(t){t.forEach(q)}function P(t){return typeof t=="function"}function S(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let f;function g(t,n){return t===n?!0:(f||(f=document.createElement("a")),f.href=n,t===f.href)}function b(t){return t.split(",").map(n=>n.trim().split(" ").filter(Boolean))}function U(t,n){const e=b(t.srcset),r=b(n||"");return r.length===e.length&&r.every(([s,c],o)=>c===e[o][1]&&(g(e[o][0],s)||g(s,e[o][0])))}function D(t){return Object.keys(t).length===0}function v(t,...n){if(t==null){for(const r of n)r(void 0);return j}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function G(t,n,e){t.$$.on_destroy.push(v(n,e))}function H(t,n,e,r){if(t){const s=x(t,n,e,r);return t[0](s)}}function x(t,n,e,r){return t[1]&&r?E(e.ctx.slice(),t[1](r(n))):e.ctx}function I(t,n,e,r){if(t[2]&&r){const s=t[2](r(e));if(n.dirty===void 0)return s;if(typeof s=="object"){const c=[],o=Math.max(n.dirty.length,s.length);for(let i=0;i<o;i+=1)c[i]=n.dirty[i]|s[i];return c}return n.dirty|s}return n.dirty}function J(t,n,e,r,s,c){if(s){const o=x(n,e,r,c);t.p(o,s)}}function K(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function L(t){return t??""}function N(t){const n=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return n?[parseFloat(n[1]),n[2]||"px"]:[t,"px"]}let _;function h(t){_=t}function k(){if(!_)throw new Error("Function called outside component initialization");return _}function Q(t){k().$$.on_mount.push(t)}function R(t){k().$$.after_update.push(t)}const a=[],m=[];let l=[];const y=[],w=Promise.resolve();let p=!1;function z(){p||(p=!0,w.then(F))}function T(){return z(),w}function B(t){l.push(t)}const d=new Set;let u=0;function F(){if(u!==0)return;const t=_;do{try{for(;u<a.length;){const n=a[u];u++,h(n),M(n.$$)}}catch(n){throw a.length=0,u=0,n}for(h(null),a.length=0,u=0;m.length;)m.pop()();for(let n=0;n<l.length;n+=1){const e=l[n];d.has(e)||(d.add(e),e())}l.length=0}while(a.length);for(;y.length;)y.pop()();p=!1,d.clear(),h(t)}function M(t){if(t.fragment!==null){t.update(),O(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(B)}}function V(t){const n=[],e=[];l.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),l=n}export{J as A,K as B,I as C,g as a,U as b,G as c,R as d,m as e,B as f,A as g,C as h,P as i,F as j,D as k,V as l,_ as m,j as n,Q as o,h as p,q,O as r,S as s,T as t,a as u,z as v,L as w,v as x,N as y,H as z};
