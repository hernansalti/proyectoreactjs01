const products = [
    { 
        id: '1', 
        name: 'Set Matero Negro', 
        price: 3000, 
        category: 'Mates', 
        img:'images/SetMate01.jpeg', 
        stock: 15, 
        description:'Set matero: Termo, yerbera y azucarera revestidas en ecocuero marron, mate de algarrobo media chapa con bombilla, canasto matero ecocuero marron.'
    },
    {   id: '2',
        name: 'Robert Celeste Libro ',
        price: 700,
        category: 'Deco',
        img:'images/Deco01.jpeg',
        stock: 10,
        description:'Maceta Robet impresion 3D color celeste.'
    },
    {   id: '3',
        name: 'Aquiles',
        price: 500,
        category: 'Bazar',
        img:'images/Bazar01.jpeg',
        stock: 6,
        description:'Aquiles destapador y rompe hielo, metalico color cobre'
    }
]

export const getProductsNonno = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 3000)
    })
}