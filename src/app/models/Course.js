const mongoose = require('mongoose')
var mongooseDelete = require('mongoose-delete')

const Schema = mongoose.Schema
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug)

const Course = new Schema({
    name: { type: String, maxlength: 255, required: true },
    description: { type: String, maxlength: 600 },
    image: { type: String, maxlength: 255 },
    videoID: { type: String, maxlength: 255 },
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true,
})

// soft delete
Course.plugin(mongooseDelete, { 
    overrideMethods: 'all',
    deletedAt : true,
})

module.exports = mongoose.model('Course', Course)
