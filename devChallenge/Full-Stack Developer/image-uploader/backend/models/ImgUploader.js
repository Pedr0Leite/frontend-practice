const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const imageUploadSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    imgUploaded: {
        type: String
    }
}, {
    collection: 'images'
})

module.exports = mongoose.model('ImgUploader', imageUploadSchema);