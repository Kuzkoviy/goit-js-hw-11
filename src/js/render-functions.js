
export default function createMarkup(hitsArray) {
    const gallery = hitsArray
    .reduce((acc, ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return acc += `<li class="item-results">
        <a href="${largeImageURL}" class="gallery-link">
          <img src="${webformatURL}" alt="${tags}" class="gallery-img"/>
        </a>
        <div class="wrap-info">
          <ul class="list-info">
            <li class="item-info">
              <p class="headline-info">Likes</p>
              <p class="text-info">${likes}</p>
            </li>
            <li class="item-info">
              <p class="headline-info">Views</p>
              <p class="text-info">${views}</p>
            </li>
            <li class="item-info">
              <p class="headline-info">Comments</p>
              <p class="text-info">${comments}</p>
            </li>
            <li class="item-info">
              <p class="headline-info">Downloads</p>
              <p class="text-info">${downloads}</p>
            </li>
          </ul>
        </div>
      </li>`
      }), '');


      document.querySelector('.list-results').innerHTML = gallery;
}