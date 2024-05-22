// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchImage } from "./js/pixabay-api";
import { createMarkup } from "./js/render-functions";


const searchInput = document.querySelector('.search-input');
const searchForm = document.querySelector('.form-search-img');
const loader = document.querySelector('.loader');
const results = document.querySelector('.list-results');




