(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const s=document.querySelector(".js-mobile-menu"),c=document.querySelector(".js-menu-toggle"),i=c.querySelector("use"),u="./icons/sprite.svg#menu",d="./icons/sprite.svg#close";c.addEventListener("click",()=>{s.classList.toggle("menu-is-hide"),s.classList.contains("menu-is-hide")?i.setAttribute("href",u):i.setAttribute("href",d),s.classList.contains("menu-is-hide")?document.body.style.overflow="auto":document.body.style.overflow="hidden"});
