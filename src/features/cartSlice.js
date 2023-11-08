import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
}
const cartSlice = createSlice({
  name: 'cart',
  initialState: defaultState,
  reducers: {
    addItems: (state, actions) => {
      console.log(state, actions)
    },
  },
})

export const { addItems } = cartSlice.actions
export default cartSlice.reducer
