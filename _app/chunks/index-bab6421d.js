function x(){}const X=t=>t;function ht(t,e){for(const n in e)t[n]=e[n];return t}function Y(t){return t()}function J(){return Object.create(null)}function $(t){t.forEach(Y)}function q(t){return typeof t=="function"}function Rt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let T;function Bt(t,e){return T||(T=document.createElement("a")),T.href=e,t===T.href}function mt(t){return Object.keys(t).length===0}function zt(t,e,n,i){if(t){const r=Z(t,e,n,i);return t[0](r)}}function Z(t,e,n,i){return t[1]&&i?ht(n.ctx.slice(),t[1](i(e))):n.ctx}function Ft(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],s=Math.max(e.dirty.length,r.length);for(let l=0;l<s;l+=1)o[l]=e.dirty[l]|r[l];return o}return e.dirty|r}return e.dirty}function Gt(t,e,n,i,r,o){if(r){const s=Z(e,n,i,o);t.p(s,r)}}function It(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Wt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Jt(t){return t==null?"":t}function Kt(t){return t&&q(t.destroy)?t.destroy:x}const tt=typeof window!="undefined";let et=tt?()=>window.performance.now():()=>Date.now(),F=tt?t=>requestAnimationFrame(t):x;const g=new Set;function nt(t){g.forEach(e=>{e.c(t)||(g.delete(e),e.f())}),g.size!==0&&F(nt)}function it(t){let e;return g.size===0&&F(nt),{promise:new Promise(n=>{g.add(e={c:t,f:n})}),abort(){g.delete(e)}}}let D=!1;function pt(){D=!0}function yt(){D=!1}function gt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function xt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let a=0;a<e.length;a++){const f=e[a];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const a=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=a?r+1:gt(1,r,_=>e[n[_]].claim_order,a))-1;i[c]=n[f]+1;const u=f+1;n[u]=c,r=Math.max(u,r)}const o=[],s=[];let l=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);l>=c;l--)s.push(e[l]);l--}for(;l>=0;l--)s.push(e[l]);o.reverse(),s.sort((c,a)=>c.claim_order-a.claim_order);for(let c=0,a=0;c<s.length;c++){for(;a<o.length&&s[c].claim_order>=o[a].claim_order;)a++;const f=a<o.length?o[a]:null;t.insertBefore(s[c],f)}}function $t(t,e){t.appendChild(e)}function rt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function wt(t){const e=G("style");return bt(rt(t),e),e.sheet}function bt(t,e){return $t(t.head||t,e),e.sheet}function vt(t,e){if(D){for(xt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Et(t,e,n){t.insertBefore(e,n||null)}function kt(t,e,n){D&&!n?vt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function E(t){t.parentNode.removeChild(t)}function Qt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function G(t){return document.createElement(t)}function Nt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function I(t){return document.createTextNode(t)}function Ut(){return I(" ")}function Vt(){return I("")}function Xt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Yt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function At(t){return Array.from(t.childNodes)}function st(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ct(t,e,n,i,r=!1){st(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(e(l)){const c=n(l);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(e(l)){const c=n(l);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function Tt(t,e,n,i){return ct(t,r=>r.nodeName===e,r=>{const o=[];for(let s=0;s<r.attributes.length;s++){const l=r.attributes[s];n[l.name]||o.push(l.name)}o.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Zt(t,e,n){return Tt(t,e,n,G)}function St(t,e){return ct(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>I(e),!0)}function te(t){return St(t," ")}function K(t,e,n){for(let i=n;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===e)return i}return t.length}function ee(t,e){const n=K(t,"HTML_TAG_START",0),i=K(t,"HTML_TAG_END",n);if(n===i)return new Q(void 0,e);st(t);const r=t.splice(n,i-n+1);E(r[0]),E(r[r.length-1]);const o=r.slice(1,r.length-1);for(const s of o)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new Q(o,e)}function ne(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ie(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function re(t,e,n){t.classList[n?"add":"remove"](e)}function ot(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function se(t,e=document.body){return Array.from(e.querySelectorAll(t))}class Ct{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=Nt(n.nodeName):this.e=G(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Et(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(E)}}class Q extends Ct{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)kt(this.t,this.n[n],e)}}const M=new Map;let H=0;function jt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Mt(t,e){const n={stylesheet:wt(e),rules:{}};return M.set(t,n),n}function lt(t,e,n,i,r,o,s,l=0){const c=16.666/i;let a=`{
`;for(let m=0;m<=1;m+=c){const A=e+(n-e)*o(m);a+=m*100+`%{${s(A,1-A)}}
`}const f=a+`100% {${s(n,1-n)}}
}`,u=`__svelte_${jt(f)}_${l}`,_=rt(t),{stylesheet:d,rules:h}=M.get(_)||Mt(_,t);h[u]||(h[u]=!0,d.insertRule(`@keyframes ${u} ${f}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${u} ${i}ms linear ${r}ms 1 both`,H+=1,u}function B(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),H-=r,H||Ht())}function Ht(){F(()=>{H||(M.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&E(e)}),M.clear())})}let k;function v(t){k=t}function P(){if(!k)throw new Error("Function called outside component initialization");return k}function ce(t){P().$$.on_mount.push(t)}function oe(t){P().$$.after_update.push(t)}function le(){const t=P();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const o=ot(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,o)}),!o.defaultPrevented}return!0}}function ae(t,e){return P().$$.context.set(t,e),e}const b=[],U=[],C=[],V=[],at=Promise.resolve();let z=!1;function ut(){z||(z=!0,at.then(ft))}function ue(){return ut(),at}function N(t){C.push(t)}const R=new Set;let S=0;function ft(){const t=k;do{for(;S<b.length;){const e=b[S];S++,v(e),Lt(e.$$)}for(v(null),b.length=0,S=0;U.length;)U.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];R.has(n)||(R.add(n),n())}C.length=0}while(b.length);for(;V.length;)V.pop()();z=!1,R.clear(),v(t)}function Lt(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}let w;function _t(){return w||(w=Promise.resolve(),w.then(()=>{w=null})),w}function L(t,e,n){t.dispatchEvent(ot(`${e?"intro":"outro"}${n}`))}const j=new Set;let y;function fe(){y={r:0,c:[],p:y}}function _e(){y.r||$(y.c),y=y.p}function qt(t,e){t&&t.i&&(j.delete(t),t.i(e))}function de(t,e,n,i){if(t&&t.o){if(j.has(t))return;j.add(t),y.c.push(()=>{j.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const dt={duration:0};function he(t,e,n){let i=e(t,n),r=!1,o,s,l=0;function c(){o&&B(t,o)}function a(){const{delay:u=0,duration:_=300,easing:d=X,tick:h=x,css:p}=i||dt;p&&(o=lt(t,0,1,_,u,d,p,l++)),h(0,1);const m=et()+u,A=m+_;s&&s.abort(),r=!0,N(()=>L(t,!0,"start")),s=it(O=>{if(r){if(O>=A)return h(1,0),L(t,!0,"end"),c(),r=!1;if(O>=m){const W=d((O-m)/_);h(W,1-W)}}return r})}let f=!1;return{start(){f||(f=!0,B(t),q(i)?(i=i(),_t().then(a)):a())},invalidate(){f=!1},end(){r&&(c(),r=!1)}}}function me(t,e,n){let i=e(t,n),r=!0,o;const s=y;s.r+=1;function l(){const{delay:c=0,duration:a=300,easing:f=X,tick:u=x,css:_}=i||dt;_&&(o=lt(t,1,0,a,c,f,_));const d=et()+c,h=d+a;N(()=>L(t,!1,"start")),it(p=>{if(r){if(p>=h)return u(0,1),L(t,!1,"end"),--s.r||$(s.c),!1;if(p>=d){const m=f((p-d)/a);u(1-m,m)}}return r})}return q(i)?_t().then(()=>{i=i(),l()}):l(),{end(c){c&&i.tick&&i.tick(1,0),r&&(o&&B(t,o),r=!1)}}}function pe(t,e){const n={},i={},r={$$scope:1};let o=t.length;for(;o--;){const s=t[o],l=e[o];if(l){for(const c in s)c in l||(i[c]=1);for(const c in l)r[c]||(n[c]=l[c],r[c]=1);t[o]=l}else for(const c in s)r[c]=1}for(const s in i)s in n||(n[s]=void 0);return n}function ye(t){return typeof t=="object"&&t!==null?t:{}}function ge(t){t&&t.c()}function xe(t,e){t&&t.l(e)}function Dt(t,e,n,i){const{fragment:r,on_mount:o,on_destroy:s,after_update:l}=t.$$;r&&r.m(e,n),i||N(()=>{const c=o.map(Y).filter(q);s?s.push(...c):$(c),t.$$.on_mount=[]}),l.forEach(N)}function Pt(t,e){const n=t.$$;n.fragment!==null&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ot(t,e){t.$$.dirty[0]===-1&&(b.push(t),ut(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function $e(t,e,n,i,r,o,s,l=[-1]){const c=k;v(t);const a=t.$$={fragment:null,ctx:null,props:o,update:x,not_equal:r,bound:J(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:J(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};s&&s(a.root);let f=!1;if(a.ctx=n?n(t,e.props||{},(u,_,...d)=>{const h=d.length?d[0]:_;return a.ctx&&r(a.ctx[u],a.ctx[u]=h)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](h),f&&Ot(t,u)),_}):[],a.update(),f=!0,$(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){pt();const u=At(e.target);a.fragment&&a.fragment.l(u),u.forEach(E)}else a.fragment&&a.fragment.c();e.intro&&qt(t.$$.fragment),Dt(t,e.target,e.anchor,e.customElement),yt(),ft()}v(c)}class we{$destroy(){Pt(this,1),this.$destroy=x}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!mt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Pt as A,ht as B,x as C,ue as D,zt as E,ie as F,re as G,Kt as H,Gt as I,It as J,Ft as K,q as L,le as M,Jt as N,vt as O,Xt as P,N as Q,he as R,we as S,me as T,Q as U,se as V,ee as W,Bt as X,Wt as Y,Qt as Z,At as a,Yt as b,Zt as c,E as d,G as e,kt as f,St as g,ne as h,$e as i,Ut as j,Vt as k,te as l,fe as m,de as n,_e as o,qt as p,ae as q,oe as r,Rt as s,I as t,ce as u,ge as v,xe as w,Dt as x,pe as y,ye as z};
