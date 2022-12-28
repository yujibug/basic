import React, { useEffect, useState } from 'react';

export default function useProducts({ salesOnly }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`data/${salesOnly ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('Products Component가 마운트 될 때 데이터를 받아옴');
        setProducts(data);
      })
      .catch((err) => {
        setError('에러가 발생했음!');
      })
      .finally(() => setLoading(false));
    return () => {
      console.log('언마운트 될 때 작동');
    };
  }, [salesOnly]);

  return [loading, error, products];
}
