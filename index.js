import{a as f,S as m,i as a}from"./assets/vendor-Cq7ZUixy.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const p="53373800-5cba4f67b460dc5eb84c5d72c",g="https://pixabay.com/api/";function h(s){const o={key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get(g,{params:o}).then(e=>e.data.hits)}const u=document.querySelector(".gallery"),d=document.querySelector(".loader");let n;function y(){d.classList.remove("is-hidden")}function b(){d.classList.add("is-hidden")}function c(){u.innerHTML=""}function L(s){const o=s.map(e=>`
                <li class="gallery-item">
                    <a href="${e.largeImageURL}" class="gallery-link">
                        <img 
                            src="${e.webformatURL}" 
                            alt="${e.tags}" 
                            class="gallery-image"
                        >
                    </a>
                    <div class="info-box">
                        <p class="info-item"><b>Likes</b> ${e.likes}</p>
                        <p class="info-item"><b>Views</b> ${e.views}</p>
                        <p class="info-item"><b>Comments</b> ${e.comments}</p>
                        <p class="info-item"><b>Downloads</b> ${e.downloads}</p>
                    </div>
                </li>
            `).join("");u.insertAdjacentHTML("beforeend",o),n?n.refresh():n=new m(".gallery a",{captionsData:"alt",captionDelay:250})}const w=document.querySelector(".form");w.addEventListener("submit",s=>{s.preventDefault();const o=s.currentTarget.elements["search-text"].value.trim();if(!o){c(),a.warning({title:"Warning",message:"Please enter a search query.",position:"topRight"}),s.currentTarget.reset();return}c(),y(),h(o).then(e=>{e.length===0?a.error({title:"Not Found",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):L(e)}).catch(e=>{console.error("Error fetching images:",e),a.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight"})}).finally(()=>{b(),s.currentTarget.reset()})});
//# sourceMappingURL=index.js.map
