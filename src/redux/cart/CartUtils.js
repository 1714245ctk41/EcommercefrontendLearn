//* -	Utility functions allow us to keep our files clean and organize
//*  functions that we may need in multiple files in one location

// tham số đầu là các item đã có trong cart
export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : //* nếu không có item trùng thì trả về cartitem
          cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
