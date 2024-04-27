import './header.scss'

class Header {
  render(pageName) {
    const h1 = document.createElement('h1')
    h1.innerHTML = 'Webpack Good: ' + pageName + ' page'
    document.querySelector('body').appendChild(h1)
  }
}

export default Header