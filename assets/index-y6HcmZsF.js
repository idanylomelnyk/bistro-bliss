(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))g(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&g(d)}).observe(document,{childList:!0,subtree:!0});function k(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function g(e){if(e.ep)return;e.ep=!0;const o=k(e);fetch(e.href,o)}})();const a=document.querySelector(".js-mobile-menu"),v=document.querySelector(".js-menu-toggle"),y=v.querySelector("use"),E="./icons/sprite.svg#menu",L="./icons/sprite.svg#close";v.addEventListener("click",()=>{a.classList.toggle("menu-is-hide"),a.classList.contains("menu-is-hide")?y.setAttribute("href",E):y.setAttribute("href",L),a.classList.contains("menu-is-hide")?document.body.style.overflow="auto":document.body.style.overflow="hidden"});const q=document.querySelector(".js-nav-booking"),f=document.querySelector(".js-booking-form"),n=document.querySelector(".booking-form"),S=document.querySelector(".js-booking-form__close-button"),s=document.querySelector(".js-booking-form__button"),b=document.querySelector(".js-date-input"),j=document.querySelector(".js-time-input"),w=document.querySelector(".js-mobile-action__booking"),h=()=>{f.classList.remove("booking-form-is-hide"),document.body.style.overflow="hidden"},u=()=>{f.classList.add("booking-form-is-hide"),document.body.style.overflow="auto"};q.addEventListener("click",h);w.addEventListener("click",h);S.addEventListener("click",u);f.addEventListener("click",t=>{t.currentTarget===t.target&&u()});window.addEventListener("keydown",t=>{t.code==="Escape"&&u()});n.addEventListener("submit",t=>{t.preventDefault();const r={date:n.elements.date.value,time:n.elements.time.value,name:n.elements.name.value,tel:n.elements.tel.value,total:n.elements.total.value,booking:new Date};return s.textContent="Thank you! Your reservation is confirmed!",s.style.backgroundColor="#708238",s.disabled=!0,setTimeout(()=>{u(),n.reset(),b.value=b.min,j.value="09:00",s.textContent="Book a table",s.style.backgroundColor="#ad343e",s.disabled=!1},3e3),console.log(r),r});const p=document.querySelector(".js-date-input"),F=document.querySelector(".js-time-input");document.querySelector(".js-name-input");document.querySelector(".js-tel-input");const l=new Date,I=l.getFullYear();let c=l.getMonth()+1,i=l.getDate(),m=l.getHours(),O=l.getMinutes();const B=()=>{c<10&&(c="0"+c),i<10&&(i="0"+i),m>21&&(i+=1);const t=`${I}-${c}-${i}`;p.min=t,p.value=t};B();const M=()=>{let t=`${m}:${O}`;m>20&&(t="09:00"),F.value=t};M();
