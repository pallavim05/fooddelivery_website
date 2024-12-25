import React, { useContext } from "react";
import './Cart.css';
import { StoreContext } from "../../context/StoreContext";

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {
          food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div className="cart-items-title cart-items-item" key={index}>
                    <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.title}</p>
                  <p>{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{(item.price * cartItems[item._id]).toFixed(2)}</p>
                  <button onClick={() => removeFromCart(item._id)}>Remove</button>
                </div>
              );
            }
            return null; // जर `if` शर्त पूर्ण होत नसेल तर काहीही रेंडर करू नका.
          })
        }
      </div>
    </div>
  );
};

export default Cart;
