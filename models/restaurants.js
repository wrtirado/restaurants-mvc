var mongoose       = require('mongoose'),      // <-- assigning mongoose to the variable, mongoose
  Schema           = mongoose.Schema,          // creating a Schema variable that points to mongoose's Schema method
  restaurantSchema = new Schema({              // Creating a reuseable restaurant Schema, using the new keyword, along with the Schema variable that is linked to mongoose's Schema method
    name    : {type: String, required: true},  // <-- setting a data type for the name key, and setting it to validate that a string is put in
    address : String,                          // <-- setting the data type for the address key to string
    rating  : {type: Number, min: 1, max: 5},  // <-- setting a data type for the rating key, and setting it to validate that a number between 1 and 5 is put in
    type    : String,                          // <-- setting the data type for the address key to string
    locations: [],                             // setting the locations key to an empty array
    createdAt: {type: Date, Default: Date.now} // setting the createdAt key to automatically assign the specific day date to createdAt
  })


  module.exports = { // turning the variable restaurantSchema into a mongoose model, assigning it to the Restaurant key inside the module.exports object
    Restaurant : mongoose.model('Restaurant', restaurantSchema)
  }
