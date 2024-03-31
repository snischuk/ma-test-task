import './fetch-error.css';

function showFetchError() {
  const FETCH_ERROR_ELEMENT = document.createElement('p');
  FETCH_ERROR_ELEMENT.classList.add('fetch-error');
  FETCH_ERROR_ELEMENT.textContent = 'Failed to fetch... :(';

  return FETCH_ERROR_ELEMENT;
}

export { showFetchError };