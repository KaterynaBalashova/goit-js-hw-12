import{a as b,S as L,i as n}from"./assets/vendor-frHSA4Lh.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();async function g(s,o=1){const e="50818793-d0305411d1a3093dc980e97a9",l=new URLSearchParams({key:e,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15});return(await b(`https://pixabay.com/api/?${l}`)).data}const y=document.querySelector(".gallery"),f=document.querySelector(".loader"),m=document.querySelector(".load-btn"),S=new L(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"});function h(s){const o=s.map(e=>`
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
        `).join("");y.insertAdjacentHTML("beforeend",o),S.refresh()}function P(){y.innerHTML=""}function v(){f.style.display="block"}function q(){f.style.display="none"}function E(){m.style.display="block"}function c(){m.style.display="none"}const R=document.querySelector(".form"),p=document.querySelector("input"),$=document.querySelector(".load-btn");R.addEventListener("submit",B);$.addEventListener("click",C);c();let a=1,u="",i;const w=15;async function B(s){s.preventDefault();const o=p.value.toLowerCase().trim();if(u=o,a=1,!o){n.warning({title:"Info",message:"Please, enter a searching word!",position:"topRight"});return}P(),v();try{const e=await g(u,a);console.log(e),e.hits.length>0?(h(e.hits),p.value="",i=Math.ceil(e.totalHits/w),console.log(i),E(),a>i&&c()):(c(),n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}))}catch{n.error({title:"Error",message:"Something went wrong. Please, try again!",position:"topRight"})}finally{q()}}async function C(){a+=1;try{const s=await g(u,a);i=Math.ceil(s.totalHits/w),h(s.hits),a>=i&&(c(),n.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}));const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}catch{n.error({title:"Error",message:"Something went wrong. Please, try again!",position:"topRight"})}}
//# sourceMappingURL=index.js.map
