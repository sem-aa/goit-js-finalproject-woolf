import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (image) =>
      `<li class="gallery__item">
        <a class="gallery__link" href=${image.original}>
         <img
          class="gallery__image"
          src=${image.preview}
          alt=${image.description}
         />
        </a>
      </li>`
  )
  .join("");

galleryList.insertAdjacentHTML("afterbegin", markup);
new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
