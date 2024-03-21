const products = [
    {
      id: '1',
      name: 'Nike 2024',
      price: 1000,
      category: 'Nike',
      img: 'https://via.placeholder.com/300', // URL de imagen válida
      stock: 25,
      description: 'Zapatillas Blancas Nike',
    },
    {
      id: '2',
      name: 'Jordan 2023',
      price: 1000,
      category: 'Jordan', // Añadido el nombre de la categoría
      img: 'https://via.placeholder.com/300', // URL de imagen válida
      stock: 25,
      description: 'Zapatillas Beige Jordan',
    },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 100);
    });
  };
  
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((prod) => prod.category === categoryId));
      }, 100);
    });
  };
  
  export const getProductsById = (itemId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((prod) => prod.id === itemId));
      }, 100);
    });
  };
  