'use client'
import Lottie from "lottie-react";
import animation from "./animation.json";

//https://lottiereact.com/ (Documentation)

export default function LottieComponent() {

  return (
    <main className="main">
      <Lottie animationData={animation} loop={true} style={{ width: '600px' }} />
    </main>
  )
}


