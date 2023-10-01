import React, { useState } from 'react';


// Create a product function which accepts as argument an object.
const Products = ({name, price, stock, image, addToCart,removeToCart}) => {
    // const [quantity, setQuantity] = useState(0);

    // Create an arrow function for a button that when is pressed will add 1 qty. 
    const handleAddToCart = () => {
        // setQuantity(quantity + 1);
        addToCart({ name, price, stock,});
        // console.log(addToCart);
    };

    // Create an arrow function for a button that when is pressed will decrease 1 qty. 
    const handleAddToCart2 = () => {
        // setQuantity(quantity + 1);
        removeToCart({ name, price,});
        // console.log(addToCart);
    };

    // Creating the product list
    return (
        <div className = "product">
            <h1>{name}</h1>
            <img src={image} alt="" />
            <p>Price: ${price} </p>
            {/* <p>Quantity: {quantity}</p> */}
            <p>Stock: {stock}</p> 
            <button className="button-52" role="button" onClick={handleAddToCart}>Add</button>
            <button className="button-52" role="button" onClick={handleAddToCart2}>Remove</button>
        </div>
    )
    
}

export default Products;