export const getOne = model => async (req, res) => {
  const id = req.params.id
  const user = req.user._id
  const doc = await model.findOne({_id: id, createdBy: userId}).exec()
  if(!doc) {
    res.status(404).end()
  }
  res.status(200).json({data: doc})
}

export const getMany = model => async (req, res) => {
  const docs = model.find({createdBy: req.user.id}).exec()
  res.status(200).json({data: docs})
}

export const createOne = model => async (req, res) => {
  // Shallow-cloning using ...
  // Content of doc is {req.body}
  const doc =  await model.create({...req.body, createdBy: req.user.id}).exec()
  const user = req.user._id
  res.status(201).json({data: docs})
}

export const updateOne = model => async (req, res) => {
  const doc = model.findByIdAndUpdate({
    _id: req.params.id,
     createdBy: req.user.id
   },
   req.body,
   {new: true}
 ).exec()
 if(!doc) {
   return res.status(400).end
 }
 res.status(200).json({data: doc})
}

export const removeOne = model => async (req, res) => {
  const doc = model.findOneAndRemove({
    _id: req.params.id,
    createdBy: req.user._id
  }).exec()
  if (!doc) {
    res.status(400)
  }
  res.status(200).json({data: doc})
}

export const crudControllers = model => ({
  removeOne: removeOne(model),
  updateOne: updateOne(model),
  getMany: getMany(model),
  getOne: getOne(model),
  createOne: createOne(model)
})

/**
 * GET / Read many
 * GET /:id Read one
 * POST / Create one
 * PUT /:id Update one
 * DELETE /:id Delete one
**/
