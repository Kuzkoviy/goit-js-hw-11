// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";



const API_KEY = '24251933-9d29857377778e751e7f0d7a1';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchPhotosByQuery = query => {
    const searchParams = new URLSearchParams({
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    });
  
    return fetch(`${BASE_URL}?${searchParams}`).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  };

