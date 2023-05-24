//// alışveriş sepeti (cart) sayfası
//// alışveriş sepeti (cart) sayfası
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { ADD_TO_CART, CALCULATE_SUBTOTAL, CALCULATE_TOTAL_QUANTITY, CLEAR_CART, DECREASE_CART, REMOVE_FROM_CART, SAVE_URL, selectCartItems, selectCartTotalAmount, selectCartTotalQuantity } from '../../redux/slice/cartSlice'
import styles from "./Cart.module.scss"
import {FaTrashAlt} from "react-icons/fa"
import Card from '../../components/card/Card'
import { selectIsLoggedIn } from '../../redux/slice/authSlice'

const Cart = () => {
  return (
    <div>Cart</div>
  )
}

export default Cart