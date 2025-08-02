import { GuestCounter } from './guestCounter.js';
import { ModalManager } from './modalManager.js';
import { Autocomplete } from './autocomplete.js';
import { obtenerAlojamientos } from './api.js';
import { Alojamientos, traerSkeleton } from './alojamientos.js';
import help from './contact.js'

// DOM Elements
const contenedor = document.querySelector("#alojamientos");
const ciudadMostrar = document.querySelector("#ciudadMostrar");
const numberCiudad = document.querySelector("#numberCiudad");
const btnModal = document.querySelectorAll(".btnModal");
const btnCerrarModal = document.querySelector("#closeModal");
const modalPadre = document.querySelector(".modalPadre");
const locationCity = document.querySelector("#location");
const gest = document.querySelector(".totalguest");
const botonEnviar = document.querySelector("#botonEnviar");
const suggestions = document.querySelector("#suggestions");
const btnRestarAdultos = document.querySelector('.btn-menosa');
const btnSumarAdultos = document.querySelector('.btn-masa');
const cantidadAdultos = document.querySelector('.cantidadAdultos');
const btnRestarNiños = document.querySelector('.btn-menosn');
const btnSumarNiños = document.querySelector('.btn-masn');
const cantidadNiños = document.querySelector('.cantidadniños');
const totalGuestSpan = document.querySelector('#guest');

const ciudades = ["Helsinki", "Turku", "Oulu", "Vaasa"];

// Clases
const guestCounter = new GuestCounter(cantidadAdultos, cantidadNiños, totalGuestSpan, gest);
const modalManager = new ModalManager(btnModal, modalPadre, btnCerrarModal);
new Autocomplete(locationCity, ciudades, suggestions);

// Eventos botones
btnSumarAdultos.addEventListener('click', () => guestCounter.sumarAdulto());
btnRestarAdultos.addEventListener('click', () => guestCounter.restarAdulto());
btnSumarNiños.addEventListener('click', () => guestCounter.sumarNiño());
btnRestarNiños.addEventListener('click', () => guestCounter.restarNiño());

// Cargar alojamientos al iniciar
(async function cargarAlojamientos() {
  traerSkeleton(contenedor);
  const alojamientos = await obtenerAlojamientos();
  Alojamientos(alojamientos, contenedor);
})();

// Filtrar al hacer clic en Buscar
botonEnviar.addEventListener("click", async function () {
  modalManager.cerrarModal();
  const ciudad = locationCity.value.trim().toLowerCase();
  const cantidadHuespedes = guestCounter.totalHuespedes();

  traerSkeleton(contenedor);
  const alojamientos = await obtenerAlojamientos();

  const filtrados = alojamientos.filter(stay => {
    const coincideCiudad = ciudad === "" || stay.city.toLowerCase() === ciudad;
    const permiteHuespedes = stay.maxGuests >= cantidadHuespedes;
    return coincideCiudad && permiteHuespedes;
  });

  const contador = filtrados.length;
  Alojamientos(filtrados, contenedor);
  ciudadMostrar.textContent = ciudad ? `Stay in ${ciudad.charAt(0).toUpperCase() + ciudad.slice(1)}` : "All stays";
  numberCiudad.textContent = `${contador} stays`;

  if (contador === 0) {
    contenedor.innerHTML = `<p class="text-center text-gray-500 text-lg ml-5">No se encontraron alojamientos con los criterios seleccionados.</p>`;
    ciudadMostrar.textContent = "";
  }
});

help()