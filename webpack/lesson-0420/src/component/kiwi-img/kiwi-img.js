import kiwi from './kiwi.jpg'
import './kiwi.scss'

class KiwiImg {
  render() {
    const img = document.createElement('img')
    img.src = kiwi
    img.alt = 'kiwi'
    img.classList.add('kiwi-img')

    document.querySelector('body').appendChild(img)
  }
}

export default KiwiImg