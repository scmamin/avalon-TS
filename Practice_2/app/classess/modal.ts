export class Modal {
  private readonly id: string;

  public static modals: any[] = [];

  constructor(id = null) {
    const findModal = Modal.modals.find((x) => x.id === id);
    if (findModal) {
      Modal.removeById(id);
    }

    Modal.modals.push(this);
    this.id = id || Math.random() + Modal.modals.length;
  }

  public static removeById(id: string): void {
    const modalIndex = Modal.modals.findIndex((x) => x.id === id);
    if (modalIndex !== -1) {
      Modal.modals.splice(modalIndex, 1);
    }
    const modalEL = document.getElementById(id);
    if (modalEL) {
      modalEL.parentNode?.removeChild(modalEL);
    }
  }

  public open(template: string): void {
    const divWrap = document.createElement("div");
    divWrap.innerHTML = template;
    divWrap.id = this.id;
    divWrap.setAttribute("modal-id", this.id);
    divWrap.classList.add("modal-element");
    document.body.appendChild(divWrap);
  }

  public remove(): void {
    const modalEL = document.getElementById(this.id);
    modalEL?.parentNode?.removeChild(modalEL);
    Modal.modals = Modal.modals.filter((modal) => modal.id !== this.id);
  }
}
