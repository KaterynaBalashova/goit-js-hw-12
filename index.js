import{a as d,S as u,i}from"./assets/vendor-frHSA4Lh.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();function f(o){const s="50818793-d0305411d1a3093dc980e97a9",e=new URLSearchParams({key:s,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return d(`https://pixabay.com/api/?${e}`).then(a=>a.data)}const c=document.querySelector(".gallery"),p=document.querySelector(".loader"),m=new u(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"});function y(o){const s=o.map(e=>`
        <li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
        <img
        class="gallery-img"
        src="${e.webformatURL}"
        alt="${e.tags}"
        width="360" />
        </a>
        <div class="descr">
       <p class="descr-label">Likes <span class="descr-span">${e.likes}</span></p>
       <p class="descr-label">Views <span class="descr-span">${e.views}</span></p>
       <p class="descr-label">Comments <span class="descr-span">${e.comments}</span></p>
       <p class="descr-label">Downloads <span class="descr-span">${e.downloads}</span></p>
       </div>
        </li>
        `).join("");c.innerHTML=s,m.refresh()}function g(){c.innerHTML=""}function h(){p.style.display="block"}function L(){p.style.display="none"}const b=document.querySelector(".form"),l=document.querySelector("input");b.addEventListener("submit",w);function w(o){o.preventDefault();const s=l.value.toLowerCase().trim();s&&(g(),h(),f(s).then(e=>{e.hits.length>0?(y(e.hits),l.value=""):i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).catch(e=>{i.error({title:"Error",message:"Something went wrong. Please, try again!",position:"topRight"})}).finally(()=>L()))}
//# sourceMappingURL=index.js.map
