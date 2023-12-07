import React from "react";
import SliderHome from "./home/sliderhome";
import { EmblaOptionsType } from 'embla-carousel-react'

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 4
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Home() {

  return (
    <>
      <SliderHome slides={SLIDES} options={OPTIONS}/>
    </>
  )
}
