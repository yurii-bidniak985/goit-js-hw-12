import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js'; 

import { 
    clearGallery, 
    createGallery,
    showLoader,
    hideLoader
} from './js/render-functions.js';

const searchForm = document.querySelector('.form');

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const query = event.currentTarget.elements['search-text'].value.trim();

    if (!query) {
    clearGallery();
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query.',
      position: 'topRight',
    });
    event.currentTarget.reset(); 
    return;
    }
    
    clearGallery();
    showLoader();

    getImagesByQuery(query)
        .then(images => {
        if (images.length === 0) {
        iziToast.error({
          title: 'Not Found',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      } else {
        createGallery(images);
      }
        })
    .catch(error => {
      console.error('Error fetching images:', error);
      iziToast.error({
        title: 'Error',
        message: 'Failed to fetch images. Please try again later.',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader(); 
      event.currentTarget.reset(); 
    });
});
