import { Router } from 'express'
import controllers from './item.controllers'
const router = Router()

const controller = (req,res) => {
  res.send({message: 'hello'})
}

// /api/item
router
  .route('/')
  .get(controller)
  .post(controller)

// /api/item/:id
router
  .route('/:id')
  .get(controller)
  .put(controller)
  .delete(controller)

export default router
