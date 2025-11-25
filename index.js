import{a as p,S as b,i}from"./assets/vendor-DvfmeZXB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const L="53373800-5cba4f67b460dc5eb84c5d72c",w="https://pixabay.com/api/",P=15;async function S(e,t=1){const o={key:L,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:P};try{return(await p.get(w,{params:o})).data}catch(a){throw a}}const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),y=document.querySelector(".load-more-btn");let l;function q(){m.classList.remove("is-hidden")}function v(){m.classList.add("is-hidden")}function E(){f.innerHTML=""}function $(e){const t=e.map(o=>`
                <li class="gallery-item">
                    <a href="${o.largeImageURL}" class="gallery-link">
                        <img 
                            src="${o.webformatURL}" 
                            alt="${o.tags}" 
                            class="gallery-image"
                        >
                    </a>
                    <div class="info-box">
                        <p class="info-item"><b>Likes</b> ${o.likes}</p>
                        <p class="info-item"><b>Views</b> ${o.views}</p>
                        <p class="info-item"><b>Comments</b> ${o.comments}</p>
                        <p class="info-item"><b>Downloads</b> ${o.downloads}</p>
                    </div>
                </li>
            `).join("");f.insertAdjacentHTML("beforeend",t),l?l.refresh():l=new b(".gallery a",{captionsData:"alt",captionDelay:250})}function R(){y.classList.remove("is-hidden")}function u(){y.classList.add("is-hidden")}const B=document.querySelector(".form"),M=document.querySelector(".load-more-btn"),x=document.querySelector(".gallery");let n=1,g="",d=0;const A=15;function I(){const e=x.querySelector(".gallery-item");if(!e)return;const t=e.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}async function h(){q(),u();try{const e=await S(g,n),t=e.hits,o=e.totalHits;if(d=Math.ceil(o/A),t.length===0){n===1&&i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}$(t),n>1&&I(),n<d?R():(u(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"bottomCenter"}))}catch{i.error({message:"Error fetching images. Please try again.",position:"topRight"}),u()}finally{v()}}B.addEventListener("submit",async e=>{e.preventDefault();const t=e.currentTarget.elements["search-text"].value.trim();if(t===""){i.warning({message:"Please enter a search query.",position:"topRight"});return}g=t,n=1,E(),await h(),e.currentTarget.reset()});M.addEventListener("click",async()=>{n+=1,await h()});
//# sourceMappingURL=index.js.map
