import './styles/index.css';
import { createCards } from './scripts/ui/Cards/cards';
import { fetchCards } from './scripts/api/fetch-cards';
import { loader } from './scripts/ui/Loader/loader';
import { showFetchError } from './scripts/ui/FetchError/fetch-error';

async function render() {
  const LOADER_ELEMENT = loader();
  document.body.append(LOADER_ELEMENT);

  try {
    const response = await fetchCards();
    const fetchedCards = await response.json();

    if (fetchedCards) {
      LOADER_ELEMENT.remove();

      const CARDS_ELEMENT = createCards(fetchedCards);
      CARDS_ELEMENT.classList.add('cards');

      document.body.append(CARDS_ELEMENT);
    }
  } catch (error) {
    const FETCH_ERROR_ELEMENT = showFetchError();
    document.body.append(FETCH_ERROR_ELEMENT);

    throw new Error(error);
  }
}

render();