import React, { useEffect, useState } from 'react';
import styles from "./app.module.css";
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

const API_URL = 'https://norma.nomoreparties.space/api/ingredients';

function App() {
  const [ingredientsData, setIngredientsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setIngredientsData(data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.main}>
        <section className={styles.section}>
          <BurgerIngredients data={ingredientsData} isLoading={isLoading} error={error} />
        </section>
        <section className={styles.section}>
          <BurgerConstructor ingredients={ingredientsData} />
        </section>
      </main>
    </div>
  );
}

export default App;
