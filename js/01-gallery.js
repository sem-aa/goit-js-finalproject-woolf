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
              data-source=${image.original}
              alt=${image.description}
            />
          </a>
      </li>`
  )
  .join("");

galleryList.insertAdjacentHTML("afterbegin", markup);

let modalInstance = null;

const handleOpenModal = (e) => {
  e.preventDefault();
  modalInstance = basicLightbox.create(
    `<div class="modal">
      <img
        src=${e.target.getAttribute("data-source")}
        alt=${e.target.getAttribute("alt")}
        width=800px
      />
    </div>`
  );
  modalInstance.show();

  document.addEventListener("keydown", handleKeyPress);
};

const handleKeyPress = (e) => {
  if (modalInstance) {
    if (e.key === "Escape") {
      modalInstance.close();
      modalInstance = null;
      document.removeEventListener("keydown", handleKeyPress);
    }
  }
};

galleryList.addEventListener("click", handleOpenModal);
