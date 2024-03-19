const products = [
    {
    
        id: '1',
        name: 'Nike 2024',
        price: 1000,
        category: 'Nike',
        img:'https://www.nike.com.ar/zapatillas-nike-air-force-1-07-dd8959-100/p',
        stock: 25,
        description: 'Zapatillas Blancas Nike'
    },
    {
    
        id: '2',
        name: 'Jordan 2023',
        price: 1000,
        category: '',
        img:'https://www.nike.com.ar/air-jordan-3-retro-ct8532-102/p',
        stock: 25,
        description: 'Zapatillas Beige Jordan'
    },

    
    ]
    export const getProducts = () => {
        return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products)
        },100)  
    })
    }
    export const getProductByCategory = (categoryId) => {
        return new Promise((resolve) =>{
            setTimeout(() => {
                resolve(products.filter(prod => prod.category === categoryId))
            }, 100)
        })
    }
    export const getProductsById = (itemId) => {
        return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products.find( prod=> prod.id === itemId))
        },100)  
    })
    }
