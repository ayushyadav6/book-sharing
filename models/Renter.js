const mongoose = require('mongoose')

const Schema = mongoose.Schema
const Renter = new Schema(
{
  Renter_id: string,
  Renter_name: string,
  Contact_no:{
   type: Number,
   required: true,
   },
  Address: string,
  Amount_recieved: {
   type: Number
   }
})

const Renters = mongoose.model('Renters', user)

exports = module.exports = Renters