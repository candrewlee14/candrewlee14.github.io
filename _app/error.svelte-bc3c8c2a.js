import{S as w,i as y,s as z,e as E,t as v,c as d,a as b,g as P,d as m,f as u,O as R,h as C,j as N,k as q,l as S,C as H}from"./chunks/index-bab6421d.js";function O(r){let f,t=r[1].frame+"",a;return{c(){f=E("pre"),a=v(t)},l(l){f=d(l,"PRE",{});var s=b(f);a=P(s,t),s.forEach(m)},m(l,s){u(l,f,s),R(f,a)},p(l,s){s&2&&t!==(t=l[1].frame+"")&&C(a,t)},d(l){l&&m(f)}}}function h(r){let f,t=r[1].stack+"",a;return{c(){f=E("pre"),a=v(t)},l(l){f=d(l,"PRE",{});var s=b(f);a=P(s,t),s.forEach(m)},m(l,s){u(l,f,s),R(f,a)},p(l,s){s&2&&t!==(t=l[1].stack+"")&&C(a,t)},d(l){l&&m(f)}}}function A(r){let f,t,a,l,s=r[1].message+"",c,k,n,p,i=r[1].frame&&O(r),_=r[1].stack&&h(r);return{c(){f=E("h1"),t=v(r[0]),a=N(),l=E("pre"),c=v(s),k=N(),i&&i.c(),n=N(),_&&_.c(),p=q()},l(e){f=d(e,"H1",{});var o=b(f);t=P(o,r[0]),o.forEach(m),a=S(e),l=d(e,"PRE",{});var j=b(l);c=P(j,s),j.forEach(m),k=S(e),i&&i.l(e),n=S(e),_&&_.l(e),p=q()},m(e,o){u(e,f,o),R(f,t),u(e,a,o),u(e,l,o),R(l,c),u(e,k,o),i&&i.m(e,o),u(e,n,o),_&&_.m(e,o),u(e,p,o)},p(e,[o]){o&1&&C(t,e[0]),o&2&&s!==(s=e[1].message+"")&&C(c,s),e[1].frame?i?i.p(e,o):(i=O(e),i.c(),i.m(n.parentNode,n)):i&&(i.d(1),i=null),e[1].stack?_?_.p(e,o):(_=h(e),_.c(),_.m(p.parentNode,p)):_&&(_.d(1),_=null)},i:H,o:H,d(e){e&&m(f),e&&m(a),e&&m(l),e&&m(k),i&&i.d(e),e&&m(n),_&&_.d(e),e&&m(p)}}}function F({error:r,status:f}){return{props:{error:r,status:f}}}function B(r,f,t){let{status:a}=f,{error:l}=f;return r.$$set=s=>{"status"in s&&t(0,a=s.status),"error"in s&&t(1,l=s.error)},[a,l]}class G extends w{constructor(f){super(),y(this,f,B,A,z,{status:0,error:1})}}export{G as default,F as load};
