import { ItemType } from './cart.types';

export const addItemToCartUtil = (cartItems: ItemType[], cartItemToAdd: ItemType) => {
  const existingCartItem = cartItems.find(
    ({id})=> id === cartItemToAdd.id 
  );

  if( existingCartItem ) {
    return cartItems.map((cartItem) => 
      cartItem.id === cartItemToAdd.id 
        ? {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
    )
  }
  return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

export const removeItemFromCartUtil = (cartItems: ItemType[], cartItemToRemove:ItemType) => {
  const existingCartItem = cartItems.find(
    ({id})=> id === cartItemToRemove.id 
  );

  if(existingCartItem?.quantity === 1) {
    return cartItems.filter((cartItem: ItemType) => cartItem.id !== cartItemToRemove.id )
  }

  return cartItems.map((cartItem) => 
    cartItem.id === cartItemToRemove.id 
      ? {...cartItem, quantity: cartItem.quantity - 1}
      : cartItem
  )
}