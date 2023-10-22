import React, { createContext, useState, useEffect } from 'react';
import { getIngredients } from '../../utils/burger-api';

export const IngredientsContext = createContext();

export const IngredientsProvider = ({ children }) => {
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getIngredients()
      .then((data) => {
        setIngredients(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <IngredientsContext.Provider value={{ ingredients, setIngredients, loading, error }}>
      {children}
    </IngredientsContext.Provider>
  );
};