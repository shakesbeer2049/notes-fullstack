

const notesRouter = require('express').Router()
const Note = require('../models/note')

//GET ALL
notesRouter.get('/', (req,res) => {
    Note.find({})
       .then(notes=> {
           res.json(notes)
       })
})

//GET ONE
notesRouter.get('/:id', (req, res, next) => {
    const id = req.params.id

    Note.findById(id)
       .then(noted => {
           if(noted) res.json(noted)
              else{
                  res.status(404).end()
              }
          
       }).catch(error => next(error))
})

//POST
notesRouter.post('/', (req, res, next) => {

    const body = req.body //get the body

    const note = new Note({
        content: body.content,
        important: body.important || false,
        date: new Date()
    })

    note.save()
      .then(savedNote => {
          res.json(savedNote)
      })
      .catch(error => next(error))

})

//DELETE
notesRouter.delete('/:id', (req, res, next) => {
    Note.findByIdAndRemove(req.params.id)
      .then(() => {
        res.status(204).end()
      })
      .catch(error => next(error))
  })
  
  //UPDATE
  notesRouter.put('/:id', (req, res, next) => {
    const body = req.body
  
    const note = {
      content: body.content,
      important: body.important,
    }
  
    Note.findByIdAndUpdate(req.params.id, note, { new: true })
      .then(updatedNote => {
        res.json(updatedNote)
      })
      .catch(error => next(error))
  })

  module.exports = notesRouter