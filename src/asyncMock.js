const products = [
    { 
        id: '1', 
        name: 'Set Matero Negro', 
        price: 3000, 
        category: 'Mates', 
        img:'images/SetMate01.jpeg', 
        stock: 10, 
        description:'Set Matero Negro: Yerbera y azucarera revestidas en ecocuero marrón, mate de algarrobo media chapa con bombilla, termo Atom 1L color negro y canasto matero ecocuero marrón'
    },
    { 
    id: '2', 
    name: 'Maceta Robert', 
    price: 1000, 
    category: 'Deco', 
    img:'images/Deco01.jpeg', 
    stock: 15, 
    description:'Maceta en impresión 3D Robert Plant leyendo libro color celeste pastel'
},
    { 
        id: '3', 
        name: 'Aquiles', 
        price: 800, 
        category: 'Bazar', 
        img:'images/Bazar01.jpeg', 
        stock: 7, 
        description:'Aquiles, destapador y rompe hielos. Metal color cobre'
    }
]

export const getProductosNonno = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}