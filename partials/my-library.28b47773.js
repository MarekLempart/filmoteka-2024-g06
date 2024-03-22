var e=globalThis,a={},t={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in a)return a[e].exports;if(e in t){var i=t[e];delete t[e];var r={id:e,exports:{}};return a[e]=r,i.call(r.exports,r,r.exports),r.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,a){t[e]=a},e.parcelRequired7c6=i),i.register;var r=i("hGVxz");const s=document.querySelector(".loader-container");async function l(e){let a={method:"GET",url:"https://api.themoviedb.org/3/movie",params:{api_key:"5abbb3dbf9a78bf33887465dc33dbfa3",language:"en-US",append_to_response:"credits"},headers:{accept:"application/json"}};s.classList.remove("visually-hidden");let t=e.map(e=>(0,r.default).request({...a,url:`${a.url}/${e}`}));return(await Promise.all(t)).map(e=>e.data)}function n(e){let a=document.querySelector(".gallery-library");if(s.classList.add("visually-hidden"),a.innerHTML="",!e||0===e.length){a.innerHTML=`
          <div class="empty-library">
              <p>Brak film\xf3w w bibliotece</p>
              <div class="lCatson"></div>
          </div>`;return}e.forEach(e=>{let t=function(e){let a=e.genres.map(e=>`<span class="home-film-genre">${e.name}</span>`).join(" | ");return`
        <li class="home-film-item" data-index="${e.id}" data-modal-open>
          <img class="home-film-image" src="https://image.tmdb.org/t/p/original/${e.poster_path}" alt="${e.title}">
          <div class="home-film-details">
            <h2 class="home-film-title">${e.title}</h2>
            <p class="home-film-info">
              <span class="home-film-genres">${a}</span> |
              <span class="home-film-year">${e.release_date.slice(0,4)}</span>
              <span class="home-film-rating">${e.vote_average.toFixed(1)}</span>
            </p>
          </div>
        </li>`}(e);a.insertAdjacentHTML("beforeend",t)})}async function o(){let e=document.getElementById("btnWatched"),a=document.getElementById("btnQueue");try{let t=JSON.parse(localStorage.getItem("movies-watched"))||[],i=JSON.parse(localStorage.getItem("movies-queue"))||[];if(e.classList.contains("isActive")){let e=await l(t.map(e=>e.id));n(e)}else if(a.classList.contains("isActive")){let e=await l(i.map(e=>e.id));n(e)}else{let a=await l(t.map(e=>e.id));n(a),e.classList.add("isActive")}}catch(e){console.error("Error rendering library:",e)}e.addEventListener("click",async()=>{try{let t=JSON.parse(localStorage.getItem("movies-watched"))||[],i=await l(t.map(e=>e.id));n(i),e.classList.add("isActive"),a.classList.remove("isActive")}catch(e){console.error("Error rendering watched library:",e)}}),a.addEventListener("click",async()=>{try{let t=JSON.parse(localStorage.getItem("movies-queue"))||[],i=await l(t.map(e=>e.id));n(i),a.classList.add("isActive"),e.classList.remove("isActive")}catch(e){console.error("Error rendering queue library:",e)}})}document.addEventListener("DOMContentLoaded",o),i("40lI0"),i("bMpwc"),i("7UJs8"),i("kBG4Y"),i("4boOf"),i("hHD3f"),i("3HnU4"),i("2AKVI"),i("46SdE");
//# sourceMappingURL=my-library.28b47773.js.map
