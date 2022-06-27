function randomColor() {
  let body = document.querySelector('body')
  let bigBox = document.createElement('div')
  bigBox.classList.add(`bigBox`)
  let h1 = document.createElement('h1')
  h1.innerText = '🤩🤩 Random Color Generator🤩🤩'
  let box1 = document.createElement('div')
  box1.className = 'clickBox'
  let clickBtn = document.createElement('button')
  clickBtn.classList.add('clickBtn')
  clickBtn.innerText = 'Click'
  let box2 = document.createElement('div')
  box2.className = 'mouse-move-Box'
  let mousemoveBtn = document.createElement('button')
  mousemoveBtn.className = 'mousemoveBtn'
  mousemoveBtn.innerText = 'Move Your Mouse'
  body.append(h1, bigBox)
  bigBox.append(box1, box2)
  box1.append(clickBtn)
  box2.append(mousemoveBtn)
  box1.addEventListener('click', function () {
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)
    let rendom = `rgb(${red}, ${green}, ${blue})`
    box1.style.background = rendom
    h1.style.color = rendom
    box2.style.background = 'white'
  })
  box2.addEventListener('mousemove', function () {
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)
    let rendom = `rgb(${red}, ${green}, ${blue})`
    box2.style.background = rendom
    h1.style.color = rendom
    box1.style.background = 'white'
  })
}
randomColor()
