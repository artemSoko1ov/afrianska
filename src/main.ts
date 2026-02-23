import '@/assets/styles'
import { BurgerMenuController } from '@/modules/burgerMenu'
import { HeaderController } from '@/modules/header'

const burgerMenu = new BurgerMenuController()

new HeaderController(burgerMenu)
