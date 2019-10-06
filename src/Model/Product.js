const mongoose = require('../DataBase/index');

const ProductSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    typeProduct:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required:true
    },
    quantity:{
        type: Number,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;