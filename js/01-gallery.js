import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listEl = document.querySelector(".gallery");

function createMarkup() {
  const markup = galleryItems
    .map(
      (item) => `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt= "  ${item.description}"
      />
    </a>

    
  </li>`
    )
    .join("");

  return markup;
}

listEl.insertAdjacentHTML("beforeend", createMarkup());

listEl.addEventListener("click", onImgClick);

function onImgClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  const originalImg = event.target.dataset.source;

  const instance = basicLightbox.create(
    `
    <img src="${originalImg}" width="800" height="600">

`,
    {
      onShow: (instance) => {
        addEventListener("keydown", closeModal);
      },

      onClose: (instance) => {
        removeEventListener("keydown", closeModal);
      },
    }
  );

  instance.show();

  function closeModal(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
