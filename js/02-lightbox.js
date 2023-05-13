import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallaryEl = document.querySelector(".gallery");

function createMarkup() {
  const markup = galleryItems
    .map(
      (item) => `<li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
         <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
      </a>
   </li>`
    )
    .join("");

  return markup;
}

gallaryEl.insertAdjacentHTML("afterbegin", createMarkup());

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
