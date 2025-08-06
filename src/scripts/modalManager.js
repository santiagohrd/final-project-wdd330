export class ModalManager {
  constructor(btns, modal, closeBtn) {
    this.btns = btns;
    this.modal = modal;
    this.closeBtn = closeBtn;
    this.botonOculto = null;
    this.init();
  }

  init() {
    this.btns.forEach(btn => {
      btn.addEventListener("click", () => {
        this.modal.classList.remove("hidden");
        btn.classList.add("hidden");
        this.botonOculto = btn;
      });
    });

    this.closeBtn.addEventListener("click", () => this.cerrarModal());
  }

  cerrarModal() {
    this.modal.classList.add("hidden");
    if (this.botonOculto) {
      this.botonOculto.classList.remove("hidden");
      this.botonOculto = null;
    }
  }
}