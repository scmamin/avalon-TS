import { openModal } from "@services/modal/modalService";

export interface TourData {
  id: number;
  name: string;
  description: string;
  img: string;
}

export function initToursDivElements(data: TourData[]): void {
  if (Array.isArray(data)) {
    const rootElement = document.querySelector(".main-app") as HTMLElement;
    const tourWrap = document.createElement("div");

    tourWrap.classList.add("tour-wrap");

    // Инициализация клика для модального окна
    initTourElemListener(tourWrap);

    let rootElementData = "";
    data.forEach((el, i: number) => {
      rootElementData += getTourTemplate(el, i);
    });

    tourWrap.innerHTML = rootElementData;
    rootElement.appendChild(tourWrap);
  }
}

export function initTourElemListener(tourWrap: HTMLElement): void {
  tourWrap.addEventListener("click", (ev: MouseEvent) => {
    const targetItem = ev.target as HTMLElement;
    const parentItem = targetItem?.parentNode as HTMLElement | null;
    let realTarget: HTMLElement | null = null;

    if (targetItem.hasAttribute("data-tour-item-index")) {
      realTarget = targetItem;
    } else if (parentItem && parentItem.hasAttribute("data-tour-item-index")) {
      realTarget = parentItem;
    }

    if (realTarget) {
      const dataIndex = realTarget.getAttribute("data-tour-item-index");
      openModal("order", Number(dataIndex));
    }
  });
}

function getTourTemplate(data: TourData, index: number): string {
  return `
      <div class="tour-item" data-tour-item-index="${index}">
        <img src="${data.img}" alt="${data.name}" />
        <h3>${data.name}</h3>
        <p>${data.description}</p>
      </div>
    `;
}
