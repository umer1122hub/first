const mongoose = require("mongoose")
const customSchema = mongoose.Schema({
    name: {
        type: String   
    },
    age:{
        type: Number,
        required: true,
        validate: {
            validator: function(val){
                return val > 18
            },
            message: "Age should be greater than 18"
        }
    }
})
const custom = mongoose.model("custom", customSchema)
module.exports = custom