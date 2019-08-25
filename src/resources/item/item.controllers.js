import { crudControllers } from '../../utils/crud'
import { Item } from './item.model'

export default crudControllers(Item)

/** overriding crud Controller
 * ...crudControllers(Item), //spread it
 * getOne() {
   what you want get one to be changed to
 }
**/
