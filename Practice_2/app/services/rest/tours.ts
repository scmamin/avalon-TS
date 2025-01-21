import { getTourTemplate } from "../../templates/tours";
import { openModal } from "@services/modal/modalService";
import { ITours } from "../../models/tours/";

// запрос на получение списка туров - Определить типы (возвращающие и для параметров)

export function getTours(): Promise<ITours[]> {
  return fetch(
    "https://62b9e756ff109cd1dc9dae16.mockapi.io/apiv/v1/tours/"
  ).then((response) => response.json());
}

// export function initToursDivElements(data: string) {
//   if (Array.isArray(data)) {
//     const rootElement: Element = document.querySelector(".main-app");
//     const tourWrap = document.createElement("div");

//     tourWrap.classList.add("tour-wrap");

//     // init click for modal
//     initTourElemListener(tourWrap);

//     let rootElementData = "";
//     data.forEach((el: ITours, i: number) => {
//       rootElementData += getTourTemplate(el, i);
//     });

//     tourWrap.innerHTML = rootElementData;
//     rootElement.appendChild(tourWrap);
//   }
// }

// export function initTourElemListener(tourWrap: HTMLDivElement): void {
//   tourWrap.addEventListener("click", (ev: MouseEvent): void => {
//     const targetItem = ev.target as HTMLElement;
//     const parentItem = targetItem?.parentNode as HTMLElement | null;
//     let realTarget: HTMLElement;

//     if (targetItem.hasAttribute("data-tour-item-index")) {
//       realTarget = targetItem;
//     } else if (parentItem && parentItem.hasAttribute("data-tour-item-index")) {
//       realTarget = parentItem;
//     }

//     if (realTarget) {
//       const dataIndex = realTarget.getAttribute("data-tour-item-index");
//       openModal("order", Number(dataIndex));
//     }
//   });
// }

// // removeModal(tourWrap);
// export function removeModal(tourWrap: HTMLDivElement): void {
//   tourWrap.addEventListener("click", (ev: MouseEvent): void => {
//     const targetItem = ev.target as HTMLElement;
//     const parentItem = targetItem?.parentNode as HTMLElement | null;
//     let realTarget: HTMLElement;

//     if (targetItem.hasAttribute("tour-modal")) {
//       realTarget = targetItem;
//     } else if (parentItem && parentItem.hasAttribute("tour-modal")) {
//       realTarget = parentItem;
//     }

//     if (realTarget) {
//       const dataIndex = realTarget.getAttribute("data-tour-item-index");
//       openModal("remove", Number(dataIndex));
//     }
//   });
// }
