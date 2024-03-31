import './cards.css';
import { createCard } from '../Card/card';

function createCards(cards) {
  const CARDS_ELEMENT = document.createElement('div');
  CARDS_ELEMENT.classList.add('cards');

  cards.map((card) => {
    const CARD_ELEMENT = createCard(card);
    CARDS_ELEMENT.append(CARD_ELEMENT);
  })

  return CARDS_ELEMENT;
}

export { createCards };