import{sleep as c}from"./sleep-b92576d7.js";import{$ as i}from"./vendor-c9d17524.js";const o=(s,a)=>Math.floor(Math.random()*(a-s)+s),e=async s=>c(Array.isArray(s)?s[o(0,s.length)]:s),f=async({currentNode:s,text:a},r)=>{i(s,r.parentElement,n=>{const t=s===n?"typing":"finished-typing";n.classList.add(t)});for(let n=0;n<=a.length;n++)a[n]==="<"&&(n=a.indexOf(">",n)),s.innerHTML=a.slice(0,n),await e(r.interval)};export{o as r,e as t,f as w};
