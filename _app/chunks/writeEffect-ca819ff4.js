import{sleep as i}from"./sleep-b92576d7.js";import{U as o}from"./vendor-0d85f6fe.js";const c=(s,a)=>Math.floor(Math.random()*(a-s)+s),e=async s=>i(Array.isArray(s)?s[c(0,s.length)]:s),l=async({currentNode:s,text:a},r)=>{o(s,r.parentElement,n=>{const t=s===n?"typing":"finished-typing";n.classList.add(t)});for(let n=0;n<=a.length;n++)a[n]==="<"&&(n=a.indexOf(">",n)),s.innerHTML=a.slice(0,n),await e(r.interval)};export{c as r,e as t,l as w};
