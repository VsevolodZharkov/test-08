// Add imports above this line
import { galleryItems } from "./gallery-items";

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const galleryRef = document.querySelector(".gallery");
// const galleryImg = document.querySelector(".gallery__image");
// const galleryLink = document.querySelector(".gallery__link");

const newGalleryIm = galleryItems
  .map(({ description, original, preview }) => {
    return `
		<a class="gallery__item" href="${original}">
			<img class="gallery__image" 
					height="600px"
					width="1200px"
					src="${preview}"
					alt="${description}" />
		</a>`;
  })
  .join("");

	galleryRef.insertAdjacentHTML("afterbegin", newGalleryIm);

	// galleryRef.addEventListener("click", openModal);

	// function openModal(event) {
	// 	event.preventDefault();
		
	// 	// const dataSourse = event.target.dataset.source;
		
	// 	if (event.target.tagName !== "IMG") {
	// 		return;
	// 	}
		new SimpleLightbox('.gallery a ', {captionsData:	'alt' , captionClass:	'bottom', captionDelay:	'250' });
	// }
