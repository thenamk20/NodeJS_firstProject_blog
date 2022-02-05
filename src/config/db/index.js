const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/thenam_node_dev');
        console.log('Connect successfully!');
    }
    catch (err) {
        console.log('Connect failed!');
    }
}

module.exports = { connect }