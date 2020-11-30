import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    email: {
        type: String, 
        lowercase: true,
        required: [true, "can't be blank"],
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        index: true
    },
    firstname: String,
    lastname: String,
    image: String,
    password: {
        type: String,
        required: true
    }
}, {timestamps: true});

const User = mongoose.model('User', UserSchema);

export default User;