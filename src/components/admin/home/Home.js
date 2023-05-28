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

const earningIcon = <AiFillDollarCircle size={30} color="#b624ff" />
const productIcon = <BsCart4 size={30} color="#1f93ff" />
const ordersIcon = <FaCartArrowDown size={30} color="orangered" />

const Home = () => {
  const products = useSelector(selectProducts)
  const orders = useSelector(selectOrderHistory)
  const totalOrderAmount = useSelector(selectTotalOrderAmount)

  const fbProducts = useFetchCollection("products")
  const {data} = useFetchCollection("orders")

  const dispatch = useDispatch()



export default Home