const name = 'Zonda'
const userAge = 35

const user = {
    name,             
    age: userAge, 
    location: 'Mars'
}

const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating : 4.2
}

const {label:productLabel, stock, rating = 5} = product   

const transaction = (type, {label, stock = 0}= {})=>{
    console.log(type, label, stock)
}

transaction('order',product)