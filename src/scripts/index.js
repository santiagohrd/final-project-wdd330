// const contenedor = document.querySelector("#alojamientos");
// const ciudadMostrar = document.querySelector("#ciudadMostrar");
// const numberCiudad = document.querySelector("#numberCiudad");
// const btnModal = document.querySelectorAll(".btnModal");
// const btnCerrarModal = document.querySelector("#closeModal");
// const modalPadre = document.querySelector(".modalPadre");
// const locationCity = document.querySelector("#location");
// const gest = document.querySelector(".totalguest");
// const botonEnviar = document.querySelector("#botonEnviar");
// const ciudades = ["Helsinki", "Turku", "Oulu", "Vaasa"];
// const suggestions = document.querySelector("#suggestions");

// const btnRestarAdultos = document.querySelector('.btn-menosa');
// const btnSumarAdultos = document.querySelector('.btn-masa');
// const cantidadAdultos = document.querySelector('.cantidadAdultos');

// const btnRestarNiños = document.querySelector('.btn-menosn');
// const btnSumarNiños = document.querySelector('.btn-masn');
// const cantidadNiños = document.querySelector('.cantidadniños');

// const totalGuestSpan = document.querySelector('#guest');

// const API_URL = "https://api.myjson.online/v1/records/1b3a30ad-9b13-4914-a6cb-09dbf590c870";

// // Clase para manejar los contadores de huéspedes
// class GuestCounter {
//   constructor() {
//     this.adultos = 0;
//     this.niños = 0;
//   }

//   actualizarVista() {
//     cantidadAdultos.textContent = this.adultos;
//     cantidadNiños.textContent = this.niños;
//     const total = this.adultos + this.niños;
//     totalGuestSpan.textContent = total > 0 ? `${total} guests` : '';
//     gest.textContent = total;
//   }

//   sumarAdulto() {
//     this.adultos++;
//     this.actualizarVista();
//   }

//   restarAdulto() {
//     if (this.adultos > 0) this.adultos--;
//     this.actualizarVista();
//   }

//   sumarNiño() {
//     this.niños++;
//     this.actualizarVista();
//   }

//   restarNiño() {
//     if (this.niños > 0) this.niños--;
//     this.actualizarVista();
//   }

//   totalHuespedes() {
//     return this.adultos + this.niños;
//   }
// }

// const guestCounter = new GuestCounter();

// btnSumarAdultos.addEventListener('click', () => guestCounter.sumarAdulto());
// btnRestarAdultos.addEventListener('click', () => guestCounter.restarAdulto());
// btnSumarNiños.addEventListener('click', () => guestCounter.sumarNiño());
// btnRestarNiños.addEventListener('click', () => guestCounter.restarNiño());

// // Clase para el manejo del modal
// class ModalManager {
//   constructor(btns, modal, closeBtn) {
//     this.btns = btns;
//     this.modal = modal;
//     this.closeBtn = closeBtn;
//     this.botonOculto = null;

//     this.init();
//   }

//   init() {
//     this.btns.forEach(btn => {
//       btn.addEventListener("click", () => {
//         this.modal.classList.remove("hidden");
//         btn.classList.add("hidden");
//         this.botonOculto = btn;
//       });
//     });

//     this.closeBtn.addEventListener("click", () => this.cerrarModal());
//   }

//   cerrarModal() {
//     this.modal.classList.add("hidden");
//     if (this.botonOculto) {
//       this.botonOculto.classList.remove("hidden");
//       this.botonOculto = null;
//     }
//   }
// }

// const modalManager = new ModalManager(btnModal, modalPadre, btnCerrarModal);

// // Clase para autocompletado
// class Autocomplete {
//   constructor(input, cities, container) {
//     this.input = input;
//     this.cities = cities;
//     this.container = container;
//     this.init();
//   }

//   init() {
//     this.input.addEventListener("input", () => this.mostrarSugerencias());
//   }

//   mostrarSugerencias() {
//     const texto = this.input.value.toLowerCase().trim();
//     this.container.innerHTML = "";

//     if (texto === "") return;

//     const resultados = this.cities.filter(ciudad => ciudad.toLowerCase().includes(texto));

//     resultados.forEach(ciudad => {
//       const li = document.createElement("li");
//       li.innerHTML = `<span class="text-red-500">📍</span> ${ciudad}, Finland`;
//       li.classList.add("cursor-pointer", "p-2", "hover:bg-gray-200", "rounded");
//       li.addEventListener("click", () => {
//         this.input.value = ciudad;
//         this.container.innerHTML = "";
//       });
//       this.container.appendChild(li);
//     });
//   }
// }

// new Autocomplete(locationCity, ciudades, suggestions);

// // Función para obtener alojamientos
// async function obtenerAlojamientos() {
//   try {
//     const respuesta = await fetch(API_URL);
//     if (!respuesta.ok) throw new Error("Error al obtener los datos de la API");

//     const datos = await respuesta.json();
//     return datos.data || datos;
//   } catch (error) {
//     console.error("Hubo un problema al obtener los alojamientos:", error);
//     return [];
//   }
// }

// // Skeleton de carga
// function traerSkeleton(contenedor) {
//   contenedor.innerHTML = "";
//   for (let i = 0; i < 6; i++) {
//     contenedor.innerHTML += `<div class="w-[337px] h-[223.26px] bg-gray-200 rounded-xl animate-pulse"></div>`;
//   }
// }

// // Mostrar alojamientos
// function Alojamientos(listastays, contenedor) {
//   contenedor.innerHTML = "";
//   listastays.forEach(element => {
//     contenedor.innerHTML += `
//       <div class="flex flex-col justify-center pb-[20px] gap-1">
//         <div class="w-[337px] h-[223.26px]">
//           <img class="w-[337px] h-[223.26px] rounded-2xl" src="${element.photo}" alt="" />
//         </div>
//         <div class="flex justify-between">
//           <div class="flex items-center gap-1">
//             ${element.superHost ? `<span class="text-[10px] border border-black px-2 rounded-md font-semibold">SUPER HOST</span>` : ""}
//             <span class="text-[12px]">${element.type} ${element.beds ? `${element.beds} beds` : ""}</span>
//           </div>
//           <div>
//             <span class="text-[12px]">${element.rating}</span>
//           </div>
//         </div>
//         <div><p class="font-semibold">${element.title}</p></div>
//       </div>
//     `;
//   });
// }

// // Carga inicial
// async function cargarAlojamientos() {
//   try {
//     traerSkeleton(contenedor);
//     const alojamientos = await obtenerAlojamientos();
//     Alojamientos(alojamientos, contenedor);
//   } catch (error) {
//     console.error("Error al cargar alojamientos:", error);
//     contenedor.innerHTML = `<p class="text-center text-red-500 text-lg ml-5">Error al cargar los alojamientos.</p>`;
//   }
// }

// cargarAlojamientos();

// // Filtrado por ciudad y cantidad de huéspedes
// botonEnviar.addEventListener("click", async function () {
//   modalManager.cerrarModal();
//   contenedor.innerHTML = "";

//   const ciudad = locationCity.value.trim().toLowerCase();
//   const cantidadHuespedes = guestCounter.totalHuespedes();

//   try {
//     const alojamientos = await obtenerAlojamientos();

//     const filtrados = alojamientos.filter((stay) => {
//       const coincideCiudad = ciudad === "" || stay.city.toLowerCase() === ciudad;
//       const permiteHuespedes = stay.maxGuests >= cantidadHuespedes;
//       return coincideCiudad && permiteHuespedes;
//     });

//     const contador = filtrados.length;
//     Alojamientos(filtrados, contenedor);

//     ciudadMostrar.textContent = ciudad ? `Stay in ${ciudad.charAt(0).toUpperCase() + ciudad.slice(1)}` : "All stays";
//     numberCiudad.textContent = `${contador} stays`;

//     if (contador === 0) {
//       contenedor.innerHTML = `<p class="text-center text-gray-500 text-lg ml-5">No se encontraron alojamientos con los criterios seleccionados.</p>`;
//       ciudadMostrar.textContent = "";
//     }
//   } catch (error) {
//     console.error("Error en la búsqueda:", error);
//     contenedor.innerHTML = `<p class="text-center text-red-500 text-lg ml-5">Error al filtrar alojamientos.</p>`;
//   }
// });
