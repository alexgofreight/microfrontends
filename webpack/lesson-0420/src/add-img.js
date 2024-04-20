import ball from './img/ball.jpg'

function addImage() {
  const elem = document.createElement('img');
  elem.src = ball;
  document.querySelector('body').appendChild(elem)
}

export default addImage