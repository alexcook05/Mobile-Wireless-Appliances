import { createContext, useState } from "react";

export const CartContext = createContext({
  // create context/basic blueprint
  ids: [],
  addCart: (id, quantity) => {},
  removeCart: (id) => {},
  clearCart: () => {},
});

function CartContextProvider({ children }) {
  // Create state variable for bookmark ids list
  const [cartItems, setCartItems] = useState([]);

  // Function to add item to cart
  function addItem(id, quantity) {
    setCartItems((currentCartItems) => {
      // Check if item is already in cart
      const inCart = currentCartItems.find((item) => item.id === id);

      // If item is already in cart
      if (inCart) {
        // Look through items to find matching item in cart
        return currentCartItems.map((item) => {
          if (item.id === id) {
            return {
              // Once the item is found, update the quantity
              id: item.id,
              quantity: item.quantity + quantity,
            };
          }
          // Keep other items the same
          return item;
        });
      }

      // If item is not in cart already
      return [
        // Add new item to cart
        ...currentCartItems,
        {
          id: id,
          quantity: quantity,
        },
      ];
    });
  }

  // Function to remove item from carat
  function removeItem(id) {
    // Find item in cart with matching id and remove it
    setCartItems((currentCartItems) => {
      return currentCartItems.filter((item) => item.id !== id);
    });
  }

  // Function to clear cart whenever order is placed
  function clearCart() {
    setCartItems([]);
  }

  const value = {
    // Assign state/list and functions
    items: cartItems,
    addCart: addItem,
    removeCart: removeItem,
    clearCart: clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartContextProvider;
