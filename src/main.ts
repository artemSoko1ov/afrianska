import '@/assets/styles'
import { BurgerMenuController } from '@/modules/burgerMenu'
import { FormController } from '@/modules/form'
import { HeaderController } from '@/modules/header'
import { ModalController } from '@/modules/modal'

class App {
  burgerMenu: BurgerMenuController

  header: HeaderController

  modal: ModalController

  form: FormController

  constructor() {
    this.burgerMenu = new BurgerMenuController()
    this.header = new HeaderController(this.burgerMenu)
    this.modal = new ModalController()
    this.form = new FormController()
  }
}

new App()
