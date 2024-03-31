import './card.css';

function createCard(card) {
  const CARD_ELEMENT = document.createElement('article');
  CARD_ELEMENT.classList.add('card');

  const IMG_ELEMENT = document.createElement('img');
  IMG_ELEMENT.classList.add('card__img');
  IMG_ELEMENT.src = 'https://placehold.co/600x400';
  IMG_ELEMENT.alt = 'Product image';

  const CONTENT_ELEMENT = document.createElement('div');
  CONTENT_ELEMENT.classList.add('card__content');

  const TITLE_ELEMENT = document.createElement('h2');
  TITLE_ELEMENT.classList.add('card__title');
  TITLE_ELEMENT.textContent = `${card.title}`;

  const DESCRIPTION_ELEMENT = document.createElement('p');
  DESCRIPTION_ELEMENT.classList.add('card__description');
  DESCRIPTION_ELEMENT.textContent = `${card.description}`;

  const TAG_ELEMENT = document.createElement('span');
  TAG_ELEMENT.classList.add('card__tag');
  TAG_ELEMENT.textContent = `${card.category.name}`;


  const FOOTER_ELEMENT = document.createElement('span');
  FOOTER_ELEMENT.classList.add('card__footer');

  const PRICE_ELEMENT = document.createElement('div');
  PRICE_ELEMENT.classList.add('card__price');

  const PRICE_TEXT_ELEMENT = document.createElement('span');
  PRICE_TEXT_ELEMENT.classList.add('card__price-text');
  PRICE_TEXT_ELEMENT.textContent = 'Price';

  const PRICE_VALUE_ELEMENT = document.createElement('span');
  PRICE_VALUE_ELEMENT.classList.add('card__price-value');
  PRICE_VALUE_ELEMENT.textContent = `$${card.price}`;

  const BTN_ELEMENT = document.createElement('button');
  BTN_ELEMENT.classList.add('card__btn');
  BTN_ELEMENT.textContent = 'Add To Cart';

  PRICE_ELEMENT.append(PRICE_TEXT_ELEMENT, PRICE_VALUE_ELEMENT);
  FOOTER_ELEMENT.append(PRICE_ELEMENT, BTN_ELEMENT);
  CONTENT_ELEMENT.append(TITLE_ELEMENT, DESCRIPTION_ELEMENT, TAG_ELEMENT, FOOTER_ELEMENT);
  CARD_ELEMENT.append(IMG_ELEMENT);
  CARD_ELEMENT.append(CONTENT_ELEMENT);

  return CARD_ELEMENT;
}

export { createCard };