import{S as I,i as w,s as y,e as v,t as E,c as d,a as b,g as P,d as n,f as u,F as R,h as j,j as N,k as q,l as S,I as C}from"./chunks/vendor-e96ab80a.js";function F(r){let f,a=r[1].frame+"",t;return{c(){f=v("pre"),t=E(a)},l(l){f=d(l,"PRE",{});var s=b(f);t=P(s,a),s.forEach(n)},m(l,s){u(l,f,s),R(f,t)},p(l,s){s&2&&a!==(a=l[1].frame+"")&&j(t,a)},d(l){l&&n(f)}}}function H(r){let f,a=r[1].stack+"",t;return{c(){f=v("pre"),t=E(a)},l(l){f=d(l,"PRE",{});var s=b(f);t=P(s,a),s.forEach(n)},m(l,s){u(l,f,s),R(f,t)},p(l,s){s&2&&a!==(a=l[1].stack+"")&&j(t,a)},d(l){l&&n(f)}}}function z(r){let f,a,t,l,s=r[1].message+"",c,k,m,p,i=r[1].frame&&F(r),o=r[1].stack&&H(r);return{c(){f=v("h1"),a=E(r[0]),t=N(),l=v("pre"),c=E(s),k=N(),i&&i.c(),m=N(),o&&o.c(),p=q()},l(e){f=d(e,"H1",{});var _=b(f);a=P(_,r[0]),_.forEach(n),t=S(e),l=d(e,"PRE",{});var h=b(l);c=P(h,s),h.forEach(n),k=S(e),i&&i.l(e),m=S(e),o&&o.l(e),p=q()},m(e,_){u(e,f,_),R(f,a),u(e,t,_),u(e,l,_),R(l,c),u(e,k,_),i&&i.m(e,_),u(e,m,_),o&&o.m(e,_),u(e,p,_)},p(e,[_]){_&1&&j(a,e[0]),_&2&&s!==(s=e[1].message+"")&&j(c,s),e[1].frame?i?i.p(e,_):(i=F(e),i.c(),i.m(m.parentNode,m)):i&&(i.d(1),i=null),e[1].stack?o?o.p(e,_):(o=H(e),o.c(),o.m(p.parentNode,p)):o&&(o.d(1),o=null)},i:C,o:C,d(e){e&&n(f),e&&n(t),e&&n(l),e&&n(k),i&&i.d(e),e&&n(m),o&&o.d(e),e&&n(p)}}}function D({error:r,status:f}){return{props:{error:r,status:f}}}function A(r,f,a){let{status:t}=f,{error:l}=f;return r.$$set=s=>{"status"in s&&a(0,t=s.status),"error"in s&&a(1,l=s.error)},[t,l]}class G extends I{constructor(f){super();w(this,f,A,z,y,{status:0,error:1})}}export{G as default,D as load};
