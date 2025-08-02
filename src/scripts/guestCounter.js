export class GuestCounter {
  constructor(cantidadAdultos, cantidadNiños, totalGuestSpan, gest) {
    this.adultos = 0;
    this.niños = 0;
    this.cantidadAdultos = cantidadAdultos;
    this.cantidadNiños = cantidadNiños;
    this.totalGuestSpan = totalGuestSpan;
    this.gest = gest;
  }

  actualizarVista() {
    this.cantidadAdultos.textContent = this.adultos;
    this.cantidadNiños.textContent = this.niños;
    const total = this.adultos + this.niños;
    this.totalGuestSpan.textContent = total > 0 ? `${total} guests` : '';
    this.gest.textContent = total;
  }

  sumarAdulto() {
    this.adultos++;
    this.actualizarVista();
  }

  restarAdulto() {
    if (this.adultos > 0) this.adultos--;
    this.actualizarVista();
  }

  sumarNiño() {
    this.niños++;
    this.actualizarVista();
  }

  restarNiño() {
    if (this.niños > 0) this.niños--;
    this.actualizarVista();
  }

  totalHuespedes() {
    return this.adultos + this.niños;
  }
}