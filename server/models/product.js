import mongoose from 'mongoose';

const ProductSchema = mongoose.Schema({
    name: {
        type: String, 
        required: [true, "can't be blank"],
        index: true
    },
    category: {
        type: String, 
        required: [true, "can't be blank"],
        index: true
    },
    price: {
        type: Number,
        required: [true, "can't be blank"],
    },
    quantity: {
        type: Number,
        required: [true, "can't be blank"],
    },
    description: String,
    image: String,
    
}, {timestamps: true});

const Product = mongoose.model('Product', ProductSchema);

export default Product;