/* Общие методы используются для вставки текста в header   footer*/

/*  -
    - Указать в методах возвращающие типы, типы для параметров, в теле функции также указать типы
*/
export function initHeaderTitle(ticketName: string, selector: string): void {
  const headerElement: HTMLElement | null = document.querySelector("header");
  const targetItem: HTMLElement | null =
    headerElement?.querySelector(selector) || null;

  if (targetItem) {
    targetItem.innerText = ticketName; // Устанавливаем текст, если элемент найден
  }
}

export function initFooterTitle(ticketName: string, selector: string): void {
  const footerElement: HTMLElement | null = document.querySelector("footer");
  const targetItem: HTMLElement | null =
    footerElement?.querySelector(selector) || null;

  if (targetItem) {
    targetItem.innerText = ticketName;
  }
}
