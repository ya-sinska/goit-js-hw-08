// Add imports above this line
import { galleryItems } from './gallery-items';
// Імпорт розмітки із шаблонізатора
import GalleryMarkupTml from '../templates/gallery-markup.hbs';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);
const gallery = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

// Функція для рендеру розмітки(змінила з використанням функції шаблонізатора)

function createGalleryMarkup(galleryItems) {
return GalleryMarkupTml(galleryItems)
}
// додаю розмітку в документ
gallery.insertAdjacentHTML('beforeend', galleryMarkup);

// Галерея за допомогою плагіна SimpleLightbox (не потребує прослуховування кліків, розмітка будь яка) 

let simpleGallery = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: "250ms" });