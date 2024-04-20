import hello from './hello'
import addImage from './add-img';
import HelloButton from './component/hello-button'

hello();
addImage();

const helloBtn = new HelloButton()
helloBtn.render()