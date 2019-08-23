import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import

export const app = express()
const router = express.Router()
app.disable('x-powered-by')
app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))


app.use('/api', router)
//using router
//instead of doing app.get() for every request
router.route('/cat')
  .get()
  .post()

router.route('/cat/:id')
  .get()
  .put()
  .delete()

// creating custom middleware
const log = (req,res,next) => {
  console.log('logging')
  next()
}

/* running log for entire server */
// app.use(log)

/* running log for a specific request */
/*
app.get('/data', log, (req, res) => {
  res.send({data: [1,2,3]})
})
*/


app.get('/data', (req, res) => {
  res.send({data: [1,2,3]})
})

app.post('/', (req,res) => {
  console.log(req.body)
  res.send({ok: true})
})

export const start = () => {
  app.listen(3000, () => {
    console.log('server is on 3000')
  })
}
