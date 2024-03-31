import './loader.css';

function loader() {
  const LOADER_ELEMENT = document.createElement('div');
  LOADER_ELEMENT.classList.add('loader');

  const LOADER_TEXT_ELEMENT = document.createElement('p');
  LOADER_TEXT_ELEMENT.classList.add('loader__text');
  LOADER_TEXT_ELEMENT.textContent = 'Loading...';

  const LOADER_SPINNER_ELEMENT = document.createElement('p');
  LOADER_SPINNER_ELEMENT.classList.add('loader__spinner');

  LOADER_ELEMENT.append(LOADER_SPINNER_ELEMENT, LOADER_TEXT_ELEMENT);

  return LOADER_ELEMENT;
}

export { loader };