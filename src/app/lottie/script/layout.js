import Script from 'next/script'

export default function LottieScriptLayout({ children }) {
  return (
    <html lang="en">
      {/* <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> */}
      <Script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"  type="module"/>
      <body>{children}</body>
    </html>
  )
}
