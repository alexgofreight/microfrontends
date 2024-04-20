import ball from './img/ball.jpg'

function addImage() {
  const elem = document.createElement('img');
  elem.src = ball;
  elem.width = '300'
  document.querySelector('body').appendChild(elem)
}

export default addImage