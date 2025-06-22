import{a as b,S as L,i as n}from"./assets/vendor-frHSA4Lh.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();async function g(s,r=1){const e="50818793-d0305411d1a3093dc980e97a9",i=new URLSearchParams({key:e,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15});return(await b(`https://pixabay.com/api/?${i}`)).data}const y=document.querySelector(".gallery"),f=document.querySelector(".loader"),m=document.querySelector(".load-btn"),S=new L(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"});function h(s){const r=s.map(e=>`
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
        `).join("");y.insertAdjacentHTML("beforeend",r),S.refresh()}function P(){y.innerHTML=""}function v(){f.style.display="block"}function q(){f.style.display="none"}function E(){m.style.display="block"}function l(){m.style.display="none"}const R=document.querySelector(".form"),p=document.querySelector("input"),$=document.querySelector(".load-btn");R.addEventListener("submit",B);$.addEventListener("click",C);l();let a=1,u="",c;const w=15;async function B(s){s.preventDefault();const r=p.value.toLowerCase().trim();if(u=r,a=1,!r){n.warning({title:"Info",message:"Please, enter a searching word!",position:"topRight"});return}P(),v();try{const e=await g(u,a);e.hits.length>0?(h(e.hits),p.value="",c=Math.ceil(e.totalHits/w),E(),a>c&&l()):(l(),n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}))}catch{n.error({title:"Error",message:"Something went wrong. Please, try again!",position:"topRight"})}finally{q()}}async function C(){a+=1;try{const s=await g(u,a);c=Math.ceil(s.totalHits/w),h(s.hits),a>=c&&(l(),n.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}));const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}catch{n.error({title:"Error",message:"Something went wrong. Please, try again!",position:"topRight"})}}
//# sourceMappingURL=index.js.map
