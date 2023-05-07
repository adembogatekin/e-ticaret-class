//// admin panelindeki home componentinin içindeki order status chart kısmı
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Card from '../card/Card';
import styles from "./Chart.module.scss"
import { useSelector } from 'react-redux';
import { selectOrderHistory } from '../../redux/slice/orderSlice';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
  },
};

const Chart = () => {

  const orders = useSelector(selectOrderHistory)

  const array = []
  orders.map((item) => {
    const {orderStatus} = item
    return array.push(orderStatus)
  })