import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js'; 

import { 
    clearGallery, 
    createGallery,
    showLoader,
    hideLoader,
    showLoadMoreButton,
    hideLoadMoreButton
} from './js/render-functions.js';

const searchForm = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more-btn');
const gallery = document.querySelector('.gallery');

let currentPage = 1;      
let currentQuery = '';    
let totalPages = 0;        
const PER_PAGE = 15;

function smoothScroll() {
  const firstGalleryItem = gallery.querySelector('.gallery-item');
  if (!firstGalleryItem) {
    return;
  }

  const cardHeight = firstGalleryItem.getBoundingClientRect().height;

  window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
    });
}

async function fetchImages() {
  showLoader();
  hideLoadMoreButton();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);
    const images = data.hits;
    const totalHits = data.totalHits;

    totalPages = Math.ceil(totalHits / PER_PAGE);

    if (images.length === 0) {
            if (currentPage === 1) {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                });
            }
            return; 
    }
    
    createGallery(images);

    if (currentPage > 1) {
      smoothScroll();
    }
    
    if (currentPage < totalPages) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
                position: 'bottomCenter',
            });
        }
  } catch (error) {
    iziToast.error({
            message: 'Error fetching images. Please try again.',
            position: 'topRight',
        });
        hideLoadMoreButton();
  } finally {
    hideLoader();
    }
}

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const query = event.currentTarget.elements['search-text'].value.trim();

    if (query === '') {
        iziToast.warning({
            message: 'Please enter a search query.',
            position: 'topRight',
        });
        return;
    }
  
    currentQuery = query;
    currentPage = 1;
    
    clearGallery();
  
  await fetchImages();
  
  event.currentTarget.reset();
});
  
loadMoreBtn.addEventListener('click', async () => {
    currentPage += 1; 
    
    await fetchImages();
});

