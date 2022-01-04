
//Require Mongoose
const mongoose = require('mongoose');
const validator = require('mongoose-unique-validator')

//DEFINE SCHEMA
    const noteSchema = new mongoose.Schema({
        content: {
           type: String,
           minlength: 5,
           required: true,
           unique: true,
        },
        date: Date,
        important: Boolean,
    }) 

    //modify id/object using set
    noteSchema.set('toJSON',{
        transform: (document, returnedObject) => {
            returnedObject.id = returnedObject._id.toString()
            delete returnedObject._id
            delete returnedObject.__v
        }
    })
    noteSchema.plugin(validator)

    //export Model

    module.exports = mongoose.model('Note', noteSchema)
    
