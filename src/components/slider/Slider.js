//// home sayfasındaki slider i yapacağımız yer
import React from 'react'
import "./Slider.scss"
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"

const Slider = () => {
  return (
    <div classNa me="slider">
      <AiOutlineArrowLeft className="arrow prev"/>
      <AiOutlineArrowRight className="arrow right"/>
    </div>
  )
}

export default Slider