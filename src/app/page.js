import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className="main">
      <div>
      <dotlottie-player src="https://lottie.host/93b4aea0-172c-4489-88af-b631ff760f66/0qyLwmtvoH.json" background="transparent" speed="2" style={{ width: '300px', height: '300px' }} direction="1" mode="normal" loop autoplay></dotlottie-player>
      </div>
    </main>
  )
}
