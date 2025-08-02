function help2() {
  function showcontact() {
    const showhelp = document.querySelector("#contact");
    showhelp.innerHTML = `
      <div class="w-40 h-[200px] flex flex-col justify-center pt-5 lg:pt-0 lg:mt-0">
        <button type="button" class="cursor-pointer text-white bg-gradient-to-br from-[#e51d53] to-[#da0964] hover:bg-gradient-to-bl
             focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800
             font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-40 h-12
             transition-transform duration-300 ease-in-out
             hover:scale-105 hover:shadow-lg" id="btnContact">
          <h3 class="text-md flex justify-center">Want to book?</h3>
        </button>

        <div id="socialMedia" class="pl-3  bg-white w-[120px] opacity-0 pointer-events-none space-y-1 p-2 rounded-md shadow-md
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
    `;
  }

  // Primero generamos el contenido
  showcontact();

  // Luego añadimos los listeners después de que los elementos existen
  const btnContact = document.getElementById("btnContact");
  const socialMedia = document.getElementById("socialMedia");

  btnContact.addEventListener("click", () => {
    if (socialMedia.classList.contains("opacity-0")) {
      socialMedia.classList.remove("opacity-0", "pointer-events-none");
      socialMedia.classList.add("opacity-100", "pointer-events-auto");
    } else {
      socialMedia.classList.add("opacity-0", "pointer-events-none");
      socialMedia.classList.remove("opacity-100", "pointer-events-auto");
    }
  });
}

help2()