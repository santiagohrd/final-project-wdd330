export function Alojamientos(listastays, contenedor) {
  contenedor.innerHTML = "";
  listastays.forEach((element) => {
    contenedor.innerHTML += `
    <a href="productdetail.html?id=${element.id}">
      <div class="flex flex-col justify-center pb-[20px] gap-1">
        <div class="w-[337px] h-[223.26px] overflow-hidden rounded-2xl object-cover transition-transform duration-500 ease-in-out hover:scale-102">
          <img 
            class="w-full h-full " 
            src="${element.photo}" 
            alt="" 
          />
        </div>
        <div class="flex justify-between">
          <div class="flex items-center gap-1">
            ${
              element.superHost
                ? `<span class="text-[10px] border border-black px-2 rounded-md font-semibold">SUPER HOST</span>`
                : ""
            }
            <span class="text-[12px]">
              ${element.type} ${
      element.beds !== null ? `  ${element.beds} beds` : ""
    }
            </span>
          </div>
          <div class="flex">
            <svg class="w-[12px]" xmlns="http://www.w3.org/2000/svg" fill="#eb5757" viewBox="0 0 24 24" stroke-width="1.5" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
            </svg>
            <span class="text-[12px]">
              ${element.rating}
            </span>
          </div>
        </div>
        <div>
          <p class="font-semibold">
            ${element.title}
          </p>
        </div>
      </div>
    </a>
    `;
  });
}

export function productdetail() {
  const productdetail = document.querySelector("#productdetail");
}

export function traerSkeleton(contenedor) {
  contenedor.innerHTML = "";
  for (let i = 0; i < 6; i++) {
    contenedor.innerHTML += ` <a href="#" class="mb-[50px] block w-[337px] h-[223.26px] bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div role="status" class="w-[337px] h-[223.26px]animate-pulse">
    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] "></div>
    <span class="sr-only">Loading...</span>
</div>
</a>`;
  }
}

// export default function traerSkeleton(contenedor, stays) {
//   contenedor.innerHTML = "";
//   for (let i = 0; i < stays.length; i++) {
//     contenedor.innerHTML += `
//     <a href="#" class="mb-[50px] block w-[337px] h-[223.26px] bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
//     <div role="status" class="w-[337px] h-[223.26px]animate-pulse">
//     <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
//     <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
//     <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
//     <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
//     <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
//     <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] "></div>
//     <span class="sr-only">Loading...</span>
// </div>
// </a>
//     `;
//   }
// }
