import axios from 'axios'
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../actions/types"

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data: { _id, name, image, price, countInStock } } = await axios.get(`/api/products/${id}`)

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: _id,
            name,
            image,
            price,
            countInStock,
            qty
        }
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}