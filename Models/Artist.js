const mongoose = require('mongoose')

const ArtistSchema = new mongoose.Schema()

module.exports = mongoose.model('artist', ArtistSchema);
// console.log(mongoose.model('artists'))