async function fetchCards() {
  const cardsURL = 'https://api.escuelajs.co/api/v1/products';

  try {
    const response = await fetch(cardsURL);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response;
  } catch (error) {
    console.error(`GET error: ${error}`);
    throw new Error(error);
  } 
}

export { fetchCards };