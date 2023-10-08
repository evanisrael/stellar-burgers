export const API_URL = 'https://norma.nomoreparties.space/api';

export function getIngredients() {
  return fetch(`${API_URL}/ingredients`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => data.data)
    .catch((error) => {
      throw error;
    });
}