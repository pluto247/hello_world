const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type:String,
        maxlength:50
    }
})

const User = mongoose.model('Uesr', userSchema);

module.exports = {User}