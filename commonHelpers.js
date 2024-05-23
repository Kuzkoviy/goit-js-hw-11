import{S as d,i as c}from"./assets/vendor-8c59ed88.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const u="24251933-9d29857377778e751e7f0d7a1",h="https://pixabay.com/api/",f=r=>{const i=new URLSearchParams({q:r,key:u,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${h}?${i}`).then(s=>{if(!s.ok)throw new Error(s.statusText);return s.json()})},p=r=>r.map(({webformatURL:i,largeImageURL:s,tags:l,likes:t,views:e,comments:o,downloads:m})=>`
         <li class="item-list">
     <a href="${s}" class="item-list-link">
         <img class="item-list-img"  height="152"
         width="300" src="${i}" alt="${l}">
     </a>
     <div class='markup-info'>
         <div class="item-list-info-text">
             <h3 class="item-list-title">Likes</h3>
                 <p class="item-list-text">${t}</p>
         </div>
         <div class="item-list-info-text">
             <h3 class="item-list-title">Views</h3>
                 <p class="item-list-text">${e}</p>
         </div>
         <div class="item-list-info-text">
             <h3 class="item-list-title">Comments</h3>
                 <p class="item-list-text">${o}</p>
         </div>
         <div class="item-list-info-text">
             <h3 class="item-list-title">Downloads</h3>
             <p class="item-list-text">${m}</p>
         </div>
         </div>
         </li>
         `).join(""),y=document.querySelector(".js-search-form"),a=document.querySelector(".js-gallery"),n=document.querySelector(".js-loader"),g=new d("ul.list a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});function L(r){r.preventDefault();const i=r.target.elements.searchKeyword.value.trim();if(i===""){a.innerHTML="",r.target.reset(),c.show({message:"Input field can not be empty",position:"topRight",timeout:2e3,color:"red"});return}a.innerHTML="",n.classList.remove("is-hidden"),f(i).then(s=>{s.total===0&&c.show({message:"Sorry, there are no images for this query",position:"topRight",timeout:2e3,color:"red"}),a.innerHTML=p(s.hits),g.refresh()}).catch(s=>console.log(s)).finally(()=>{r.target.reset(),n.classList.add("is-hidden")})}y.addEventListener("submit",L);
//# sourceMappingURL=commonHelpers.js.map
