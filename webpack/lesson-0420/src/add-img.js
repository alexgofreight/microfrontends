import ball from './img/ball.jpg'
import circle from './img/circle.svg'

function addImage() {
  const elem = document.createElement('img');
  elem.src = ball;
  elem.width = '300'
  document.querySelector('body').appendChild(elem)

  //---
  const elem2 = document.createElement('img');
  elem2.src = circle;
  elem2.width = '300'
  document.querySelector('body').appendChild(elem2)
}

export default addImage