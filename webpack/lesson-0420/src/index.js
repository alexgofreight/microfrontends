import hello from './hello'
import addImage from './add-img';
import Header from './component/header'
import HelloButton from './component/hello-button'

hello();
addImage();

const header = new Header()
const helloBtn = new HelloButton()
header.render()
helloBtn.render()

console.log(process.env.NODE_ENV)
helloBtn.triggerError()