
const API_KEY = '24251933-9d29857377778e751e7f0d7a1';
const BASE_URL = 'https://pixabay.com/api/';

export default function fetchImage(q){
        const params =  new URLSearchParams({
        key: API_KEY,
        q: searchWord,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
        })

        return fetch(`${BASE_URL}?&${params}`).then(response => {
            if(!response.ok) {
                throw new Error(response.status)
            }

            return response.json();
        })
    };

