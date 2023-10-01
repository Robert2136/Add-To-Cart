import React, { useState } from 'react';
import Products from "../Products/Products"





function App() {

  // Initialize the cart state as an empty array
  const [cart, setCart] = useState([]);
  // const [display, setDisplay] = useState("none")
  // console.log(cart);
  const addToCart2 = (product) => {

    // This function checks if the product is already in the cart and gives back the index of the array.
    const existingProductIndex = cart.findIndex(
      (item) => item.name === product.name
    );
    console.log(existingProductIndex);



    const updatedCart = [...cart];
    
    if (existingProductIndex !== -1) {
      // If product already exists, increase its quantity and update total price
      if (updatedCart[existingProductIndex].quantity < updatedCart[existingProductIndex].stock) {
        updatedCart[existingProductIndex].quantity += 1;
        updatedCart[existingProductIndex].totalPrice =
          updatedCart[existingProductIndex].price *
          updatedCart[existingProductIndex].quantity;
          
        console.log(updatedCart);
        setCart(updatedCart);
      }
      else {
        // console.log(updatedCart[existingProductIndex].quantity);
        // console.log(updatedCart[existingProductIndex].stock);
        alert("Out of Stock")
        // setDisplay("block")
      }
    }
    else {
      // If product doesn't exist, add it to the cart with quantity and total price

      //   It's created a new array named "updatedCart", and with ...cart will make a copy of the original cart and add to updatedCart. ...product is making a copy of the product and added to updatedCart, and after is adding two more properties to be displayed.
      const updateCart = [
        ...cart,
        { ...product, quantity: 1, totalPrice: product.price, errorMessage: "Out of Stock" },
      ];
      console.log(updateCart);
      setCart(updateCart);
    }
  };

  const removeToCart2 = (product) => {

    const existingProductIndex = cart.findIndex(
      (item) => item.name === product.name
    );
    console.log(existingProductIndex);



    const updatedCart = [...cart];
    console.log(updatedCart);

    // debugger
    if(existingProductIndex !== -1) {
      if (updatedCart[existingProductIndex].quantity > 0) {
        // If product already exists, increase its quantity and update total price
        updatedCart[existingProductIndex].quantity -= 1;
        updatedCart[existingProductIndex].totalPrice =
          updatedCart[existingProductIndex].price *
          updatedCart[existingProductIndex].quantity;
        setCart(updatedCart);
      }
      else {
        // alert("Your shoping cart is empty")
      }
    }
    else {
      alert("You have no items in your shopping cart")
      // setDisplay("block")
    }
  }


  return (
    <div className='main'>
      <div className='shopping-cart'>
        Shopping Cart
      </div>
      <div className="shopping">

        <Products name="Sausage" price={10} stock={5} image="https://littlebitrecipes.com/wp-content/uploads/2022/10/italian-sausage-cooked-in-oven-sq.jpg" addToCart={addToCart2} removeToCart={removeToCart2} />
        <Products name="Bread" price={20} stock={4} image="https://food-images.files.bbci.co.uk/food/recipes/paul_hollywoods_crusty_83536_16x9.jpg" addToCart={addToCart2} removeToCart={removeToCart2} />
        <Products name="Butter" price={30} stock={2} image="https://www.southernliving.com/thmb/JOV1II4ho49bEI50Drk4RDtDK1Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/How_To_Soften_Butter_013-2000-61e8b4e1ad9c431887472483ae714dbb.jpg" addToCart={addToCart2} removeToCart={removeToCart2} />
        <Products name="Water" price={15} stock={10} image="https://i.pinimg.com/1200x/ab/09/c9/ab09c9ec24627ec696b4a4e983d3a758.jpg" addToCart={addToCart2} removeToCart={removeToCart2} />
        <Products name="Milk" price={6} stock={20} image="https://www.mcqueensdairies.co.uk/wp-content/uploads/2023/02/U010-McQUEENS-PRODUCTS-007-scaled.jpg" addToCart={addToCart2} removeToCart={removeToCart2} />
        <Products name="Tea" price={3} stock={13} image="https://www.designbolts.com/wp-content/uploads/2022/08/Free-Organic-Tea-Standing-Pouch-Mockup-PSD-1.jpg" addToCart={addToCart2} removeToCart={removeToCart2} />
        <Products name="Coffee" price={4} stock={11} image="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/323594_2200-1200x628.jpg" addToCart={addToCart2} removeToCart={removeToCart2} />
      </div>
      <div className='cart'>
        <h2>Cart:</h2>
        <ul>
          {cart.map((item, index) => (
            // The key={index} is for helping the react aplication to know that each list element have an unique key whick is the index. it givest to the array item an unique value which is the index. It works without but it gives some errors.
            <li className='list-modifier' key={index}>
              {item.name} - ${item.price} Quantity: ({item.quantity})
              <br />
              {/* <p style={{ display: display, color: "red", fontStyle: "italic" }}>{item.errorMessage}</p> */}
              Total: ${item.price * item.quantity}
            </li>
          ))}
        </ul>
        <p id='total-cost'>Total cost : ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
      </div>
    </div>
  )
}



export default App;