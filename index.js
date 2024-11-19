import './index.css'
import js from './assets/js.png'

const body = document.querySelector('body')

const head = document.createElement('h1')
const img = document.createElement('img')
img.src = js
head.innerText = 'I love JavaScript'
body.append(head, img)
