(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();class g{constructor(t,s,a,e){this.adultos=0,this.niños=0,this.cantidadAdultos=t,this.cantidadNiños=s,this.totalGuestSpan=a,this.gest=e}actualizarVista(){this.cantidadAdultos.textContent=this.adultos,this.cantidadNiños.textContent=this.niños;const t=this.adultos+this.niños;this.totalGuestSpan.textContent=t>0?`${t} guests`:"",this.gest.textContent=t}sumarAdulto(){this.adultos++,this.actualizarVista()}restarAdulto(){this.adultos>0&&this.adultos--,this.actualizarVista()}sumarNiño(){this.niños++,this.actualizarVista()}restarNiño(){this.niños>0&&this.niños--,this.actualizarVista()}totalHuespedes(){return this.adultos+this.niños}}class f{constructor(t,s,a){this.btns=t,this.modal=s,this.closeBtn=a,this.botonOculto=null,this.init()}init(){this.btns.forEach(t=>{t.addEventListener("click",()=>{this.modal.classList.remove("hidden"),t.classList.add("hidden"),this.botonOculto=t})}),this.closeBtn.addEventListener("click",()=>this.cerrarModal())}cerrarModal(){this.modal.classList.add("hidden"),this.botonOculto&&(this.botonOculto.classList.remove("hidden"),this.botonOculto=null)}}class v{constructor(t,s,a){this.input=t,this.cities=s,this.container=a,this.init()}init(){this.input.addEventListener("input",()=>this.mostrarSugerencias())}mostrarSugerencias(){const t=this.input.value.toLowerCase().trim();if(this.container.innerHTML="",t==="")return;this.cities.filter(a=>a.toLowerCase().includes(t)).forEach(a=>{const e=document.createElement("li");e.innerHTML=`<span class="text-red-500">📍</span> ${a}, Finland`,e.classList.add("cursor-pointer","p-2","hover:bg-gray-200","rounded"),e.addEventListener("click",()=>{this.input.value=a,this.container.innerHTML=""}),this.container.appendChild(e)})}}const b="https://mocki.io/v1/7d8ce78a-042b-465e-9c65-32962bc01a66";async function d(){try{const o=await fetch(b);if(!o.ok)throw new Error("Error al obtener los datos");const t=await o.json();return t.data||t}catch(o){return console.error("Error al obtener alojamientos:",o),[]}}function u(o,t){t.innerHTML="",o.forEach(s=>{t.innerHTML+=`
    <a href="productdetail.html?id=${s.id}">
      <div class="flex flex-col justify-center pb-[20px] gap-1">
        <div class="w-[337px] h-[223.26px] overflow-hidden rounded-2xl object-cover transition-transform duration-500 ease-in-out hover:scale-102">
          <img 
            class="w-full h-full " 
            src="${s.photo}" 
            alt="" 
          />
        </div>
        <div class="flex justify-between">
          <div class="flex items-center gap-1">
            ${s.superHost?'<span class="text-[10px] border border-black px-2 rounded-md font-semibold">SUPER HOST</span>':""}
            <span class="text-[12px]">
              ${s.type} ${s.beds!==null?`  ${s.beds} beds`:""}
            </span>
          </div>
          <div class="flex">
            <svg class="w-[12px]" xmlns="http://www.w3.org/2000/svg" fill="#eb5757" viewBox="0 0 24 24" stroke-width="1.5" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
            </svg>
            <span class="text-[12px]">
              ${s.rating}
            </span>
          </div>
        </div>
        <div>
          <p class="font-semibold">
            ${s.title}
          </p>
        </div>
      </div>
    </a>
    `})}function h(o){o.innerHTML="";for(let t=0;t<6;t++)o.innerHTML+=` <a href="#" class="mb-[50px] block w-[337px] h-[223.26px] bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div role="status" class="w-[337px] h-[223.26px]animate-pulse">
    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] "></div>
    <span class="sr-only">Loading...</span>
</div>
</a>`}function y(){function o(){const a=document.querySelector("#contact");a.innerHTML=`
      <div class="w-40 h-[250px] flex flex-col justify-center">
        <button type="button" class="cursor-pointer text-white bg-gradient-to-br from-[#e51d53] to-[#da0964] hover:bg-gradient-to-bl
             focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800
             font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-40 h-12
             transition-transform duration-300 ease-in-out
             hover:scale-105 hover:shadow-lg" id="btnContact">
          <h3 class="text-md flex justify-center">Want to book?</h3>
        </button>

        <div id="socialMedia" class="pl-3 bg-white w-[120px] opacity-0 pointer-events-none space-y-1 p-2 rounded-md shadow-md
         transition-opacity duration-300 ease-in-out transform">
          <div class="flex items-center gap-1">
            <img src="./src/images/icons/icons8-whatsapp.svg" alt="" class="w-4 h-4" />
            <a href="https://wa.me/56912345678" target="_blank"
              class="text-[13px] text-gray-700 hover:text-pink-600 hover:underline transition-colors duration-300">
              Whatsapp
            </a>
          </div>
          <div class="flex items-center gap-1">
            <img src="./src/images/icons/icons8-messenger.svg" alt="" class="w-4 h-4" />
            <a href="https://m.me/tuusuario" target="_blank"
              class="text-[13px] text-gray-700 hover:text-pink-600 hover:underline transition-colors duration-300">
              Messenger
            </a>
          </div>
          <div class="flex items-center gap-1">
            <img src="./src/images/icons/icons8-gmail (1).svg" alt="" class="w-4 h-4" />
            <a href="mailto:tuemail@gmail.com"
              class="text-[13px] text-gray-700 hover:text-pink-600 hover:underline transition-colors duration-300">
              Email
            </a>
          </div>
        </div>
      </div>
    `}o();const t=document.getElementById("btnContact"),s=document.getElementById("socialMedia");t.addEventListener("click",()=>{s.classList.contains("opacity-0")?(s.classList.remove("opacity-0","pointer-events-none"),s.classList.add("opacity-100","pointer-events-auto")):(s.classList.add("opacity-0","pointer-events-none"),s.classList.remove("opacity-100","pointer-events-auto"))})}const r=document.querySelector("#alojamientos"),l=document.querySelector("#ciudadMostrar"),x=document.querySelector("#numberCiudad"),w=document.querySelectorAll(".btnModal"),L=document.querySelector("#closeModal"),k=document.querySelector(".modalPadre"),m=document.querySelector("#location"),S=document.querySelector(".totalguest"),M=document.querySelector("#botonEnviar"),E=document.querySelector("#suggestions"),C=document.querySelector(".btn-menosa"),q=document.querySelector(".btn-masa"),A=document.querySelector(".cantidadAdultos"),j=document.querySelector(".btn-menosn"),H=document.querySelector(".btn-masn"),N=document.querySelector(".cantidadniños"),O=document.querySelector("#guest"),$=["Helsinki","Turku","Oulu","Vaasa"],c=new g(A,N,O,S),T=new f(w,k,L);new v(m,$,E);q.addEventListener("click",()=>c.sumarAdulto());C.addEventListener("click",()=>c.restarAdulto());H.addEventListener("click",()=>c.sumarNiño());j.addEventListener("click",()=>c.restarNiño());(async function(){h(r);const t=await d();u(t,r)})();M.addEventListener("click",async function(){T.cerrarModal();const o=m.value.trim().toLowerCase(),t=c.totalHuespedes();h(r);const a=(await d()).filter(n=>{const i=o===""||n.city.toLowerCase()===o,p=n.maxGuests>=t;return i&&p}),e=a.length;u(a,r),l.textContent=o?`Stay in ${o.charAt(0).toUpperCase()+o.slice(1)}`:"All stays",x.textContent=`${e} stays`,e===0&&(r.innerHTML='<p class="text-center text-gray-500 text-lg ml-5">No se encontraron alojamientos con los criterios seleccionados.</p>',l.textContent="")});y();
