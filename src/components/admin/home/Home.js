////admin panelindeki home componenti
////admin panelindeki home componenti
import React, { useEffect } from 'react'
import InfoBox from '../../infoBox/InfoBox'
import styles from "./Home.module.scss"
import {AiFillDollarCircle} from "react-icons/ai"
import { FaCartArrowDown } from 'react-icons/fa'
import {BsCart4} from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux'
import { selectProducts, STORE_PRODUCTS } from '../../../redux/slice/productSlice'
import { CALC_TOTAL_ORDER_AMOUNT, selectOrderHistory, selectTotalOrderAmount, STORE_ORDERS } from '../../../redux/slice/orderSlice'
import useFetchCollection from '../../../customHooks/useFetchCollection'
import Chart from '../../chart/Chart'

const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home