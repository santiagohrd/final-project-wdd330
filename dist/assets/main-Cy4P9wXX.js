import"./output-CqgOaHT_.js";class g{constructor(t,s,o,a){this.adultos=0,this.niños=0,this.cantidadAdultos=t,this.cantidadNiños=s,this.totalGuestSpan=o,this.gest=a}actualizarVista(){this.cantidadAdultos.textContent=this.adultos,this.cantidadNiños.textContent=this.niños;const t=this.adultos+this.niños;this.totalGuestSpan.textContent=t>0?`${t} guests`:"",this.gest.textContent=t}sumarAdulto(){this.adultos++,this.actualizarVista()}restarAdulto(){this.adultos>0&&this.adultos--,this.actualizarVista()}sumarNiño(){this.niños++,this.actualizarVista()}restarNiño(){this.niños>0&&this.niños--,this.actualizarVista()}totalHuespedes(){return this.adultos+this.niños}}class v{constructor(t,s,o){this.btns=t,this.modal=s,this.closeBtn=o,this.botonOculto=null,this.init()}init(){this.btns.forEach(t=>{t.addEventListener("click",()=>{this.modal.classList.remove("hidden"),t.classList.add("hidden"),this.botonOculto=t})}),this.closeBtn.addEventListener("click",()=>this.cerrarModal())}cerrarModal(){this.modal.classList.add("hidden"),this.botonOculto&&(this.botonOculto.classList.remove("hidden"),this.botonOculto=null)}}class b{constructor(t,s,o){this.input=t,this.cities=s,this.container=o,this.init()}init(){this.input.addEventListener("input",()=>this.mostrarSugerencias())}mostrarSugerencias(){const t=this.input.value.toLowerCase().trim();if(this.container.innerHTML="",t==="")return;this.cities.filter(o=>o.toLowerCase().includes(t)).forEach(o=>{const a=document.createElement("li");a.innerHTML=`<span class="text-red-500">📍</span> ${o}, Finland`,a.classList.add("cursor-pointer","p-2","hover:bg-gray-200","rounded"),a.addEventListener("click",()=>{this.input.value=o,this.container.innerHTML=""}),this.container.appendChild(a)})}}const x="https://mocki.io/v1/7d8ce78a-042b-465e-9c65-32962bc01a66";async function d(){try{const e=await fetch(x);if(!e.ok)throw new Error("Error al obtener los datos");const t=await e.json();return t.data||t}catch(e){return console.error("Error al obtener alojamientos:",e),[]}}function l(e,t){t.innerHTML="",e.forEach(s=>{t.innerHTML+=`
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
    `})}function u(e){e.innerHTML="";for(let t=0;t<6;t++)e.innerHTML+=` <a href="#" class="mb-[50px] block w-[337px] h-[223.26px] bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div role="status" class="w-[337px] h-[223.26px]animate-pulse">
    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] "></div>
    <span class="sr-only">Loading...</span>
</div>
</a>`}function y(){function e(){const o=document.querySelector("#contact");o.innerHTML=`
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
    `}e();const t=document.getElementById("btnContact"),s=document.getElementById("socialMedia");t.addEventListener("click",()=>{s.classList.contains("opacity-0")?(s.classList.remove("opacity-0","pointer-events-none"),s.classList.add("opacity-100","pointer-events-auto")):(s.classList.add("opacity-0","pointer-events-none"),s.classList.remove("opacity-100","pointer-events-auto"))})}const n=document.querySelector("#alojamientos"),c=document.querySelector("#ciudadMostrar"),f=document.querySelector("#numberCiudad"),w=document.querySelectorAll(".btnModal"),k=document.querySelector("#closeModal"),L=document.querySelector(".modalPadre"),h=document.querySelector("#location"),S=document.querySelector(".totalguest"),M=document.querySelector("#botonEnviar"),C=document.querySelector("#suggestions"),E=document.querySelector(".btn-menosa"),q=document.querySelector(".btn-masa"),A=document.querySelector(".cantidadAdultos"),j=document.querySelector(".btn-menosn"),H=document.querySelector(".btn-masn"),$=document.querySelector(".cantidadniños"),T=document.querySelector("#guest"),N=["Helsinki","Turku","Oulu","Vaasa"],i=new g(A,$,T,S),O=new v(w,L,k);new b(h,N,C);q.addEventListener("click",()=>i.sumarAdulto());E.addEventListener("click",()=>i.restarAdulto());H.addEventListener("click",()=>i.sumarNiño());j.addEventListener("click",()=>i.restarNiño());(async function(){u(n);const t=await d();l(t,n)})();M.addEventListener("click",async function(){O.cerrarModal();const e=h.value.trim().toLowerCase(),t=i.totalHuespedes();u(n);const o=(await d()).filter(r=>{const m=e===""||r.city.toLowerCase()===e,p=r.maxGuests>=t;return m&&p}),a=o.length;l(o,n),c.textContent=e?`Stay in ${e.charAt(0).toUpperCase()+e.slice(1)}`:"All stays",f.textContent=`${a} stays`,a===0&&(n.innerHTML='<p class="text-center text-gray-500 text-lg ml-5">No se encontraron alojamientos con los criterios seleccionados.</p>',c.textContent="")});y();
