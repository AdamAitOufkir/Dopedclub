
import React, { useEffect } from 'react'

const Glitched = ({Title}) => {

  useEffect(() => {
    let style1 = document.createElement("style")
    let style2 = document.createElement("style")
    let after = document.getElementById("after-te1")
    let before = document.getElementById("before-te1")
    const setKeyframesRules = (n, start = 0) => {
      let steps = ""
      for (let i = start; i <= n; i++) {
        let percent = (i / n) * 100
        let random1 = `${Math.random()*150}px`
        let random2 = `${Math.random()*150}px`
        steps = steps.concat(`${percent}% { clip: rect(${random1}, 9999px, ${random2}, 0) } `)
      }
      return steps
    }
    let keyframes1 = `@keyframes glitch-anim-1 { ${setKeyframesRules(24)} }`
    let keyframes2 = `@keyframes glitch-anim-2 { ${setKeyframesRules(32, 2)} }`
    style1.innerHTML = keyframes1
    style2.innerHTML = keyframes2
    after.appendChild(style1)
    before.appendChild(style2)
    after.style.animation = "glitch-anim-1 2.5s infinite linear alternate-reverse"
    before.style.animation = "glitch-anim-2 3s infinite linear alternate-reverse"
  }, [])

  return (
<div className="h-full flex justify-center items-center">
  <h1 className="text-white text-6xl md:text-6xl lg:text-8xl font-bold uppercase relative inline-block">
    <span
      id="before-te1"
      className="absolute top-0 left-0.5 w-full h-full bg-transparent"
      style={{ textShadow: "-2px 0 #fce700", clipPath: "rect(24px, 550px, 90px, 0)" }}
      aria-hidden="true"
    >
      {Title}
    </span>
    {/* glitch::before */}
    {Title}
    <span
      id="after-te1"
      className="absolute top-0 -left-0.5 w-full h-full bg-transparent"
      style={{ textShadow: "-2px 0 spin(#fce700, 180)", clipPath: "rect(85px, 550px, 140px, 0)" }}
      aria-hidden="true"
    >
      {Title}
    </span>
    {/* glitch::after */}
  </h1>
</div>

  )
}

export default Glitched
