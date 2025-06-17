import{a as f,S as y,i}from"./assets/vendor-frHSA4Lh.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function m(o,s){const t="50818793-d0305411d1a3093dc980e97a9",a=new URLSearchParams({key:t,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15});return f(`https://pixabay.com/api/?${a}`).then(e=>e.data)}const d=document.querySelector(".gallery"),p=document.querySelector(".loader"),u=document.querySelector(".load-btn"),g=new y(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"});function h(o){const s=o.map(t=>`
        <li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
        <img
        class="gallery-img"
        src="${t.webformatURL}"
        alt="${t.tags}"
        width="360" />
        </a>
        <div class="descr">
       <p class="descr-label">Likes <span class="descr-span">${t.likes}</span></p>
       <p class="descr-label">Views <span class="descr-span">${t.views}</span></p>
       <p class="descr-label">Comments <span class="descr-span">${t.comments}</span></p>
       <p class="descr-label">Downloads <span class="descr-span">${t.downloads}</span></p>
       </div>
        </li>
        `).join("");d.innerHTML=s,g.refresh()}function L(){d.innerHTML=""}function b(){p.style.display="block"}function w(){p.style.display="none"}function S(){u.style.display="block"}function P(){u.style.display="none"}const q=document.querySelector(".form"),c=document.querySelector("input");q.addEventListener("submit",v);P();let l=1;function v(o){o.preventDefault();const s=c.value.toLowerCase().trim();s&&(l=1,L(),b(),m(s,l).then(t=>{t.hits.length>0?(h(t.hits),c.value="",l+=1,S()):i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).catch(t=>{i.error({title:"Error",message:"Something went wrong. Please, try again!",position:"topRight"})}).finally(()=>w()))}
//# sourceMappingURL=index.js.map
