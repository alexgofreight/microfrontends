import Header from './component/header'
import KiwiImg from './component/kiwi-img/kiwi-img'
import _ from 'lodash'

const header = new Header()
header.render(_.upperFirst('kiwi'))

const kiwi = new KiwiImg()
kiwi.render()