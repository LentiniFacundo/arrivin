const url = "https://arrivin-api.vercel.app/products";

const getProducts = () => {
    return fetch(url)
        .then(data => data.json())
        .then(products => {
            return products
        })
        .catch(error => console.log(error))
};

const getProductById = id => {
    return fetch(`${url}/${id}`)
        .then(data => data.json())
        .then(product => {
            return product
        })
        .catch(error => alert(error))
}

const addProduct = newProduct => {
    const newProductJSON = JSON.stringify(newProduct)
    console.log(newProductJSON)
    return fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: newProductJSON
    })
    .then(data => data.json())
    .then(products => {
        return products
    })
    .catch(error => console.log(error))
};

const deleteProduct = id => {
    return fetch(`${url}/${id}`, {
        method: "DELETE"
    })
        .then(data => data.json())
        .then(products => {
            return products
        })
        .catch(error => console.log(error))
};

export {getProducts, getProductById, addProduct, deleteProduct};