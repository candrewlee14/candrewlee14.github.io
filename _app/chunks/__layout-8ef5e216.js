import{S as F,i as U,s as W,E as J,e as b,c as E,a as w,d as _,b as h,F as P,G as j,f as g,H as de,I as Q,J as z,K as X,L as _e,p as N,n as T,M as me,v as V,j as $,w as C,l as x,x as M,A as B,t as I,g as R,N as D,O as p,P as ie,m as ce,o as fe,C as G,Q as he,R as ye,T as pe,k as Z,u as ke}from"./index-bab6421d.js";import{_ as K}from"./preload-helper-e4860ae8.js";const ee=r=>r.childNodes.length===1&&r.childNodes[0].nodeType===3,ge=(r,e)=>{const t=document.createElement(e);return t.textContent=r,t},ve=r=>r.dataset.static===void 0,ue=(r,{parentElement:e})=>{if(ee(e)){const t=e.textContent,l=ge(e.textContent,"p");return e.textContent="",e.appendChild(l),[{currentNode:l,text:t}]}if(ee(r)){const t=r.innerHTML.replaceAll("&amp;","&");return[{currentNode:r,text:t}]}else return[...r.children].filter(ve).flatMap(s=>ue(s,{parentElement:e}))},be=async(r,e,t)=>{if(!e){console.error("The specified parent element does not exists!");return}let l=r;do{if(l===e)return;t(l),l=l.parentElement||l.parentNode}while(l!==null&&l.nodeType===1)},Ee=r=>{const e=[...r.querySelectorAll("[data-static]")];for(const t of e)be(t,r,l=>{l!==t&&l.classList.add("finished-typing")})},we=async r=>r.loop||r.loopRandom?(await K(()=>import("./loopTypewriter-8d4e399e.js"),["chunks/loopTypewriter-8d4e399e.js","chunks/writeEffect-70297ba1.js","chunks/sleep-b92576d7.js","chunks/index-bab6421d.js","chunks/preload-helper-e4860ae8.js"])).mode:r.scramble?(await K(()=>import("./scramble-3ecc04cb.js"),["chunks/scramble-3ecc04cb.js","chunks/sleep-b92576d7.js","chunks/index-bab6421d.js","chunks/preload-helper-e4860ae8.js"])).mode:(await K(()=>import("./typewriter-6537c9a8.js"),["chunks/typewriter-6537c9a8.js","chunks/preload-helper-e4860ae8.js","chunks/writeEffect-70297ba1.js","chunks/sleep-b92576d7.js","chunks/index-bab6421d.js"])).mode,Se=async(r,e)=>{Ee(r);const t=await we(e),l=ue(r,{parentElement:r,...e});if(e.delay>0){const{sleep:s}=await K(()=>import("./sleep-b92576d7.js"),[]);await s(e.delay),r.classList.remove("delay")}t(l,{parentElement:r,...e})};function Ae(r){let e,t,l,s,a;const i=r[10].default,n=J(i,r,r[9],null);return{c(){e=b("div"),n&&n.c(),this.h()},l(o){e=E(o,"DIV",{class:!0,style:!0});var c=w(e);n&&n.l(c),c.forEach(_),this.h()},h(){h(e,"class","typewriter-container svelte-6ivbo0"),P(e,"--cursor-color",typeof r[0]=="string"?r[0]:"black"),j(e,"cursor",r[0]),j(e,"delay",r[1].delay>0)},m(o,c){g(o,e,c),n&&n.m(e,null),l=!0,s||(a=de(t=Se.call(null,e,r[1])),s=!0)},p(o,[c]){n&&n.p&&(!l||c&512)&&Q(n,i,o,o[9],l?X(i,o[9],c,null):z(o[9]),null),(!l||c&1)&&P(e,"--cursor-color",typeof o[0]=="string"?o[0]:"black"),t&&_e(t.update)&&c&2&&t.update.call(null,o[1]),(!l||c&1)&&j(e,"cursor",o[0]),(!l||c&2)&&j(e,"delay",o[1].delay>0)},i(o){l||(N(n,o),l=!0)},o(o){T(n,o),l=!1},d(o){o&&_(e),n&&n.d(o),s=!1,a()}}}function $e(r,e,t){let l,{$$slots:s={},$$scope:a}=e,{interval:i=30}=e,{cascade:n=!1}=e,{loop:o=!1}=e,{loopRandom:c=!1}=e,{scramble:d=!1}=e,{scrambleSlowdown:u=!!d}=e,{cursor:f=!0}=e,{delay:m=0}=e;const L=me();return r.$$set=y=>{"interval"in y&&t(2,i=y.interval),"cascade"in y&&t(3,n=y.cascade),"loop"in y&&t(4,o=y.loop),"loopRandom"in y&&t(5,c=y.loopRandom),"scramble"in y&&t(6,d=y.scramble),"scrambleSlowdown"in y&&t(7,u=y.scrambleSlowdown),"cursor"in y&&t(0,f=y.cursor),"delay"in y&&t(8,m=y.delay),"$$scope"in y&&t(9,a=y.$$scope)},r.$$.update=()=>{r.$$.dirty&509&&t(1,l={interval:i,cascade:n,loop:o,loopRandom:c,scramble:d,scrambleSlowdown:u,cursor:f,delay:m,dispatch:L})},[f,l,i,n,o,c,d,u,m,a,s]}class q extends F{constructor(e){super(),U(this,e,$e,Ae,W,{interval:2,cascade:3,loop:4,loopRandom:5,scramble:6,scrambleSlowdown:7,cursor:0,delay:8})}}function te(r){let e,t,l,s,a,i;return e=new q({props:{scramble:H,scrambleSlowdown:!0,delay:r[2]===0?250:0,$$slots:{default:[xe]},$$scope:{ctx:r}}}),l=new q({props:{scramble:H+se,scrambleSlowdown:!0,delay:r[2]===0?250:0,$$slots:{default:[Ne]},$$scope:{ctx:r}}}),a=new q({props:{scramble:H+2*se,scrambleSlowdown:!0,delay:r[2]===0?250:0,$$slots:{default:[Te]},$$scope:{ctx:r}}}),a.$on("done",r[3]),{c(){V(e.$$.fragment),t=$(),V(l.$$.fragment),s=$(),V(a.$$.fragment)},l(n){C(e.$$.fragment,n),t=x(n),C(l.$$.fragment,n),s=x(n),C(a.$$.fragment,n)},m(n,o){M(e,n,o),g(n,t,o),M(l,n,o),g(n,s,o),M(a,n,o),i=!0},p(n,o){const c={};o&4&&(c.delay=n[2]===0?250:0),o&33&&(c.$$scope={dirty:o,ctx:n}),e.$set(c);const d={};o&4&&(d.delay=n[2]===0?250:0),o&33&&(d.$$scope={dirty:o,ctx:n}),l.$set(d);const u={};o&4&&(u.delay=n[2]===0?250:0),o&33&&(u.$$scope={dirty:o,ctx:n}),a.$set(u)},i(n){i||(N(e.$$.fragment,n),N(l.$$.fragment,n),N(a.$$.fragment,n),i=!0)},o(n){T(e.$$.fragment,n),T(l.$$.fragment,n),T(a.$$.fragment,n),i=!1},d(n){B(e,n),n&&_(t),B(l,n),n&&_(s),B(a,n)}}}function xe(r){let e,t,l;return{c(){e=b("span"),t=I("AND"),this.h()},l(s){e=E(s,"SPAN",{class:!0});var a=w(e);t=R(a,"AND"),a.forEach(_),this.h()},h(){h(e,"class",l=D(r[0]?"locked":"unlocked")+" svelte-1238xot")},m(s,a){g(s,e,a),p(e,t)},p(s,a){a&1&&l!==(l=D(s[0]?"locked":"unlocked")+" svelte-1238xot")&&h(e,"class",l)},d(s){s&&_(e)}}}function Ne(r){let e,t,l;return{c(){e=b("span"),t=I("REW"),this.h()},l(s){e=E(s,"SPAN",{class:!0});var a=w(e);t=R(a,"REW"),a.forEach(_),this.h()},h(){h(e,"class",l=D(r[0]?"locked":"unlocked")+" svelte-1238xot")},m(s,a){g(s,e,a),p(e,t)},p(s,a){a&1&&l!==(l=D(s[0]?"locked":"unlocked")+" svelte-1238xot")&&h(e,"class",l)},d(s){s&&_(e)}}}function Te(r){let e,t,l;return{c(){e=b("span"),t=I("LEE"),this.h()},l(s){e=E(s,"SPAN",{class:!0});var a=w(e);t=R(a,"LEE"),a.forEach(_),this.h()},h(){h(e,"class",l=D(r[0]?"locked":"unlocked")+" svelte-1238xot")},m(s,a){g(s,e,a),p(e,t)},p(s,a){a&1&&l!==(l=D(s[0]?"locked":"unlocked")+" svelte-1238xot")&&h(e,"class",l)},d(s){s&&_(e)}}}function le(r){let e,t,l,s,a,i,n,o,c,d,u;return{c(){e=b("span"),t=I("AND"),s=$(),a=b("span"),i=I("REW"),o=$(),c=b("span"),d=I("LEE"),this.h()},l(f){e=E(f,"SPAN",{class:!0});var m=w(e);t=R(m,"AND"),m.forEach(_),s=x(f),a=E(f,"SPAN",{class:!0});var L=w(a);i=R(L,"REW"),L.forEach(_),o=x(f),c=E(f,"SPAN",{class:!0});var y=w(c);d=R(y,"LEE"),y.forEach(_),this.h()},h(){h(e,"class",l=D(r[1]?"text-black dark_text-lightgray":"text-gray-500 dark_text-gray-400")+" svelte-1238xot"),h(a,"class",n=D(r[1]?"text-black dark_text-lightgray":"text-gray-500 dark_text-gray-400")+" svelte-1238xot"),h(c,"class",u=D(r[1]?"text-black dark_text-lightgray":"text-gray-500 dark_text-gray-400")+" svelte-1238xot")},m(f,m){g(f,e,m),p(e,t),g(f,s,m),g(f,a,m),p(a,i),g(f,o,m),g(f,c,m),p(c,d)},p(f,m){m&2&&l!==(l=D(f[1]?"text-black dark_text-lightgray":"text-gray-500 dark_text-gray-400")+" svelte-1238xot")&&h(e,"class",l),m&2&&n!==(n=D(f[1]?"text-black dark_text-lightgray":"text-gray-500 dark_text-gray-400")+" svelte-1238xot")&&h(a,"class",n),m&2&&u!==(u=D(f[1]?"text-black dark_text-lightgray":"text-gray-500 dark_text-gray-400")+" svelte-1238xot")&&h(c,"class",u)},d(f){f&&_(e),f&&_(s),f&&_(a),f&&_(o),f&&_(c)}}}function Le(r){let e,t,l,s,a,i,n,o,c=!r[0]&&te(r),d=r[0]&&le(r);return{c(){e=b("div"),c&&c.c(),t=$(),d&&d.c(),l=$(),s=$(),a=b("div"),this.h()},l(u){e=E(u,"DIV",{class:!0});var f=w(e);c&&c.l(f),t=x(f),d&&d.l(f),l=x(f),s=x(f),a=E(f,"DIV",{class:!0,style:!0}),w(a).forEach(_),f.forEach(_),this.h()},h(){h(a,"class","div-after border-4 border-black dark_border-lightgray rounded-md svelte-1238xot"),P(a,"position","absolute"),P(a,"border-left-color","transparent"),P(a,"border-top-color","transparent"),h(e,"class","logo p-1 m-10 text-gray-500 dark_text-gray-400 drop-shadow-sm border-4 rounded border-black dark_border-lightgray svelte-1238xot")},m(u,f){g(u,e,f),c&&c.m(e,null),p(e,t),d&&d.m(e,null),p(e,l),p(e,s),p(e,a),i=!0,n||(o=ie(e,"click",r[4]),n=!0)},p(u,[f]){u[0]?c&&(ce(),T(c,1,1,()=>{c=null}),fe()):c?(c.p(u,f),f&1&&N(c,1)):(c=te(u),c.c(),N(c,1),c.m(e,t)),u[0]?d?d.p(u,f):(d=le(u),d.c(),d.m(e,l)):d&&(d.d(1),d=null)},i(u){i||(N(c),i=!0)},o(u){T(c),i=!1},d(u){u&&_(e),c&&c.d(),d&&d.d(),n=!1,o()}}}const H=1200,se=300;function De(r,e,t){let l=!1,s=!1,a=0;return[l,s,a,()=>{t(0,l=!0),setTimeout(()=>{t(1,s=!0)},100)},()=>{t(2,a++,a),t(0,l=!1),t(1,s=!1)}]}class Ie extends F{constructor(e){super(),U(this,e,De,Le,W,{})}}function Re(r){let e,t,l,s,a,i,n,o,c;return{c(){e=b("div"),t=b("a"),l=I("ABOUT"),s=$(),a=b("a"),i=I("WORK"),n=$(),o=b("a"),c=I("BLOG"),this.h()},l(d){e=E(d,"DIV",{class:!0,style:!0});var u=w(e);t=E(u,"A",{class:!0,href:!0});var f=w(t);l=R(f,"ABOUT"),f.forEach(_),s=x(u),a=E(u,"A",{class:!0,href:!0});var m=w(a);i=R(m,"WORK"),m.forEach(_),n=x(u),o=E(u,"A",{class:!0,href:!0});var L=w(o);c=R(L,"BLOG"),L.forEach(_),u.forEach(_),this.h()},h(){h(t,"class","hover_text-sky-500 dark_hover_text-sky-300 svelte-3kd12y"),h(t,"href","/"),h(a,"class","hover_text-sky-500 dark_hover_text-sky-300 svelte-3kd12y"),h(a,"href","/work"),h(o,"class","hover_text-sky-500 dark_hover_text-sky-300 svelte-3kd12y"),h(o,"href","/blog"),h(e,"class","flex justify-evenly w-full mb-4 text-black dark_text-lightgray font-bold"),P(e,"max-width","800px")},m(d,u){g(d,e,u),p(e,t),p(t,l),p(e,s),p(e,a),p(a,i),p(e,n),p(e,o),p(o,c)},p:G,i:G,o:G,d(d){d&&_(e)}}}class Pe extends F{constructor(e){super(),U(this,e,null,Re,W,{})}}function Oe(r){const e=r-1;return e*e*e+1}function ae(r,{delay:e=0,duration:t=400,easing:l=Oe,x:s=0,y:a=0,opacity:i=0}={}){const n=getComputedStyle(r),o=+n.opacity,c=n.transform==="none"?"":n.transform,d=o*(1-i);return{delay:e,duration:t,easing:l,css:(u,f)=>`
			transform: ${c} translate(${(1-u)*s}px, ${(1-u)*a}px);
			opacity: ${o-d*f}`}}function re(r){let e,t,l,s;const a=r[2].default,i=J(a,r,r[1],null);return{c(){e=b("div"),i&&i.c()},l(n){e=E(n,"DIV",{});var o=w(e);i&&i.l(o),o.forEach(_)},m(n,o){g(n,e,o),i&&i.m(e,null),s=!0},p(n,o){i&&i.p&&(!s||o&2)&&Q(i,a,n,n[1],s?X(a,n[1],o,null):z(n[1]),null)},i(n){s||(N(i,n),he(()=>{l&&l.end(1),t=ye(e,ae,{y:-50,duration:250,delay:300}),t.start()}),s=!0)},o(n){T(i,n),t&&t.invalidate(),l=pe(e,ae,{y:-50,duration:250}),s=!1},d(n){n&&_(e),i&&i.d(n),n&&l&&l.end()}}}function Ve(r){let e=r[0],t,l,s=re(r);return{c(){s.c(),t=Z()},l(a){s.l(a),t=Z()},m(a,i){s.m(a,i),g(a,t,i),l=!0},p(a,[i]){i&1&&W(e,e=a[0])?(ce(),T(s,1,1,G),fe(),s=re(a),s.c(),N(s,1),s.m(t.parentNode,t)):s.p(a,i)},i(a){l||(N(s),l=!0)},o(a){T(s),l=!1},d(a){a&&_(t),s.d(a)}}}function Ce(r,e,t){let{$$slots:l={},$$scope:s}=e,{refresh:a=""}=e;return r.$$set=i=>{"refresh"in i&&t(0,a=i.refresh),"$$scope"in i&&t(1,s=i.$$scope)},[a,s,l]}class Me extends F{constructor(e){super(),U(this,e,Ce,Ve,W,{refresh:0})}}function ne(r){let e;return{c(){e=I("\u2600\uFE0F")},l(t){e=R(t,"\u2600\uFE0F")},m(t,l){g(t,e,l)},d(t){t&&_(e)}}}function oe(r){let e;return{c(){e=I("\u{1F319}")},l(t){e=R(t,"\u{1F319}")},m(t,l){g(t,e,l)},d(t){t&&_(e)}}}function Be(r){let e;const t=r[3].default,l=J(t,r,r[4],null);return{c(){l&&l.c()},l(s){l&&l.l(s)},m(s,a){l&&l.m(s,a),e=!0},p(s,a){l&&l.p&&(!e||a&16)&&Q(l,t,s,s[4],e?X(t,s[4],a,null):z(s[4]),null)},i(s){e||(N(l,s),e=!0)},o(s){T(l,s),e=!1},d(s){l&&l.d(s)}}}function We(r){let e,t,l,s,a,i,n,o,c,d,u,f,m,L,y,Y;t=new Ie({}),s=new Pe({});let S=r[1]==="dark"&&ne(),A=r[1]==="light"&&oe();return u=new Me({props:{refresh:r[0],$$slots:{default:[Be]},$$scope:{ctx:r}}}),{c(){e=b("div"),V(t.$$.fragment),l=$(),V(s.$$.fragment),a=$(),i=b("button"),S&&S.c(),n=$(),A&&A.c(),o=$(),c=b("div"),d=$(),V(u.$$.fragment),f=$(),m=b("div"),this.h()},l(k){e=E(k,"DIV",{class:!0,style:!0});var v=w(e);C(t.$$.fragment,v),l=x(v),C(s.$$.fragment,v),a=x(v),i=E(v,"BUTTON",{class:!0});var O=w(i);S&&S.l(O),n=x(O),A&&A.l(O),O.forEach(_),o=x(v),c=E(v,"DIV",{class:!0,style:!0}),w(c).forEach(_),d=x(v),C(u.$$.fragment,v),v.forEach(_),f=x(k),m=E(k,"DIV",{class:!0,style:!0}),w(m).forEach(_),this.h()},h(){h(i,"class","absolute transition-color t-1 l-1 m-1 text-black hover_text-gray-600 dark_text-white dark_hover_text-gray-300 text-3xl svelte-mcjku9"),h(c,"class","w-5/6 bg-lightgray dark_bg-gray-500 pb-1 mb-10"),P(c,"content","' '"),h(e,"class","flex flex-col w-full items-center"),P(e,"min-height","100vh"),h(m,"class","pb-6 w-full bg-lightgray dark_bg-gray-900 mt-8"),P(m,"content","' '")},m(k,v){g(k,e,v),M(t,e,null),p(e,l),M(s,e,null),p(e,a),p(e,i),S&&S.m(i,null),p(i,n),A&&A.m(i,null),p(e,o),p(e,c),p(e,d),M(u,e,null),g(k,f,v),g(k,m,v),L=!0,y||(Y=ie(i,"click",r[2]),y=!0)},p(k,[v]){k[1]==="dark"?S||(S=ne(),S.c(),S.m(i,n)):S&&(S.d(1),S=null),k[1]==="light"?A||(A=oe(),A.c(),A.m(i,null)):A&&(A.d(1),A=null);const O={};v&1&&(O.refresh=k[0]),v&16&&(O.$$scope={dirty:v,ctx:k}),u.$set(O)},i(k){L||(N(t.$$.fragment,k),N(s.$$.fragment,k),N(u.$$.fragment,k),L=!0)},o(k){T(t.$$.fragment,k),T(s.$$.fragment,k),T(u.$$.fragment,k),L=!1},d(k){k&&_(e),B(t),B(s),S&&S.d(),A&&A.d(),B(u),k&&_(f),k&&_(m),y=!1,Y()}}}const Ge=async({url:r})=>({props:{key:r}});function Fe(r,e,t){let{$$slots:l={},$$scope:s}=e,a=null;function i(){localStorage.theme==="dark"?(t(1,a="dark"),document.body.classList.add("dark"),document.body.style.background="#1f2937"):(document.body.classList.remove("dark"),document.body.style.background="white",t(1,a="light"))}function n(){localStorage.getItem("theme")==="dark"?localStorage.theme="light":localStorage.theme="dark",i()}ke(()=>{i()});let{key:o}=e;return r.$$set=c=>{"key"in c&&t(0,o=c.key),"$$scope"in c&&t(4,s=c.$$scope)},[o,a,n,l,s]}class Ke extends F{constructor(e){super(),U(this,e,Fe,We,W,{key:0})}}export{Ke as _,Ge as l,be as r};
