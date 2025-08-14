document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const contenedor = document.querySelector("#productdetail");

  fetch("https://mocki.io/v1/7d8ce78a-042b-465e-9c65-32962bc01a66")
    .then((response) => response.json())
    .then((result) => {
      const alojamientos = result || [];
      const alojamiento = alojamientos.find((item) => String(item.id) === id);

      if (alojamiento && contenedor) {
        contenedor.innerHTML = `
             <div class="flex flex-col pt-5 lg:flex-row justify-center items-start w-[80%] gap-8 lg:pt-20">
                <img class="w-[100%] max-h-[430px]  md:w-[100%] lg:w-[50%] object-cover transform transition-transform duration-300 ease-in-out hover:scale-105 " src="${
                  alojamiento.photo
                }" alt="${alojamiento.title}" />
                <div class=" w-[100%] md:w-[100%]  lg:w-[50%] flex flex-col gap-4 justify-start items-start">
                <h2 class=" text-3xl font-semibold">${alojamiento.title}</h2>
                <p class ="text-[20px] flex items-center gap-2">${
                  alojamiento.type
                } <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M200-200h-40l-26-80H80v-201q0-33 23.5-56t56.5-23v-120q0-33 23.5-56.5T240-760h480q33 0 56.5 23.5T800-680v120q33 0 56.5 23.5T880-480v200h-54l-26 80h-40l-26-80H226l-26 80Zm320-360h200v-120H520v120Zm-280 0h200v-120H240v120Zm-80 200h640v-120H160v120Zm640 0H160h640Z"/></svg> ${
          alojamiento.beds
        } beds</p>
                <p class ="text-[20px] flex gap-1">
                <svg class="w-5" xmlns="http://www.w3.org/2000/svg" fill="#eb5757" viewBox="0 0 24 24" stroke-width="1.5"  class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                 ${alojamiento.rating}</p>

                <div class="flex items-center gap-1 text-[20px]">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M600-120q-118 0-210-67T260-360H120v-80h122q-3-24-2.5-44.5T242-520H120v-80h140q38-106 130-173t210-67q69 0 130.5 24.5T840-748l-57 56q-37-32-83.5-50T600-760q-85 0-152 44.5T347-600h253v80H323q-4 27-3 47.5t3 32.5h277v80H347q34 71 101 115.5T600-200q53 0 99.5-18t83.5-50l57 56q-48 43-109.5 67.5T600-120Z"/></svg>
                    <p>${alojamiento.price} </p>
                </div>

                 <div class="flex items-center gap-1 text-[20px]">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
                    <path
                        d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
                </svg>
                <p>${alojamiento.location} </p>

                </div>

                <p class ="text-[20px]">${alojamiento.description || ""}</p>

                </div>
                
             </div >

        `;

        if (alojamiento.location) {
          const apiKey = "pk.5a9b5a0a478ae8e10263dbb977b591d9"; 
          const url = `https://us1.locationiq.com/v1/search?key=${apiKey}&q=${encodeURIComponent(
            alojamiento.location
          )}&format=json`;

          fetch(url)
            .then((res) => res.json())
            .then((data) => {
              if (data && data.length > 0) {
                const lat = data[0].lat;
                const lon = data[0].lon;
                const map = L.map("map").setView([lat, lon], 15);
                L.tileLayer(
                  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                  {
                    attribution: "&copy; OpenStreetMap contributors",
                  }
                ).addTo(map);
                L.marker([lat, lon])
                  .addTo(map)
                  .bindPopup(alojamiento.title)
                  .openPopup();
              } else {
                document.getElementById("map").innerHTML =
                  "<p>No se pudo encontrar la ubicación en el mapa.</p>";
              }
            })
            .catch(() => {
              document.getElementById("map").innerHTML =
                "<p>Error al cargar el mapa.</p>";
            });
        }
      } else {
        contenedor.innerHTML = "<p>Stay not found</p>";
      }
    })
    .catch((error) => {
      contenedor.innerHTML = "<p>Error to get data</p>";
      console.error(error);
    });
});