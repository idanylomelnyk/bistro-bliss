(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))g(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&g(u)}).observe(document,{childList:!0,subtree:!0});function h(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function g(e){if(e.ep)return;e.ep=!0;const o=h(e);fetch(e.href,o)}})();const E=document.querySelector(".js-nav-booking"),m=document.querySelector(".js-booking-form"),n=document.querySelector(".booking-form"),k=document.querySelector(".js-booking-form__close-button");document.querySelector(".js-booking-form__button");const f=document.querySelector(".js-date-input"),L=document.querySelector(".js-time-input"),q=document.querySelector(".js-mobile-action__booking"),b=()=>{m.classList.remove("booking-form-is-hide")},c=()=>{m.classList.add("booking-form-is-hide")};E.addEventListener("click",b);q.addEventListener("click",b);k.addEventListener("click",c);m.addEventListener("click",t=>{t.currentTarget===t.target&&c()});window.addEventListener("keydown",t=>{t.code==="Escape"&&c()});n.addEventListener("submit",t=>{t.preventDefault();const r={date:n.elements.date.value,time:n.elements.time.value,name:n.elements.name.value,tel:n.elements.tel.value,total:n.elements.total.value,booking:new Date};return n.style.height="auto",n.innerHTML=`
<p style="font-size: 22px; text-align: center">Thank you, ${n.elements.name.value}! We are waiting for you!</p>`,setTimeout(()=>{c(),n.reset(),f.value=f.min,L.value="09:00",location.reload()},5e3),console.log(r),r});const a=document.querySelector(".js-mobile-menu"),v=document.querySelector(".js-menu-toggle"),p=v.querySelector("use"),S="./icons/sprite.svg#menu",j="./icons/sprite.svg#close";v.addEventListener("click",()=>{a.classList.toggle("menu-is-hide"),a.classList.contains("menu-is-hide")?p.setAttribute("href",S):p.setAttribute("href",j),a.classList.contains("menu-is-hide")?document.body.style.overflow="auto":document.body.style.overflow="hidden"});const y=document.querySelector(".js-date-input"),I=document.querySelector(".js-time-input");document.querySelector(".js-name-input");document.querySelector(".js-tel-input");const s=new Date,O=s.getFullYear();let l=s.getMonth()+1,i=s.getDate(),d=s.getHours(),w=s.getMinutes();const F=()=>{l<10&&(l="0"+l),i<10&&(i="0"+i),d>21&&(i+=1);const t=`${O}-${l}-${i}`;y.min=t,y.value=t};F();const M=()=>{let t=`${d}:${w}`;d>20&&(t="09:00"),I.value=t};M();
