const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

// set interval runs blurring every 30ms
let int = setInterval(blurring, 30)

function blurring() {
  load ++

  // stop running function whenever load = 100
  if (load > 99) {
    clearInterval(int)
  }

  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}