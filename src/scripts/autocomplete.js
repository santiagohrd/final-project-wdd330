export class Autocomplete {
  constructor(input, cities, container) {
    this.input = input;
    this.cities = cities;
    this.container = container;
    this.init();
  }

  init() {
    this.input.addEventListener("input", () => this.mostrarSugerencias());
  }

  mostrarSugerencias() {
    const texto = this.input.value.toLowerCase().trim();
    this.container.innerHTML = "";
    if (texto === "") return;

    const resultados = this.cities.filter(ciudad => ciudad.toLowerCase().includes(texto));
    resultados.forEach(ciudad => {
      const li = document.createElement("li");
      li.innerHTML = `<span class="text-red-500">📍</span> ${ciudad}, Finland`;
      li.classList.add("cursor-pointer", "p-2", "hover:bg-gray-200", "rounded");
      li.addEventListener("click", () => {
        this.input.value = ciudad;
        this.container.innerHTML = "";
      });
      this.container.appendChild(li);
    });
  }
}