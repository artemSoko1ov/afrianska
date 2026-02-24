import '@/assets/styles'
import { BurgerMenuController } from '@/modules/burgerMenu'
import { FormController } from '@/modules/form'
import { HeaderController } from '@/modules/header'
import { ModalController } from '@/modules/modal/ModalController.ts'

const burgerMenu = new BurgerMenuController()

new HeaderController(burgerMenu)
new ModalController()
new FormController()
