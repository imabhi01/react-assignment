import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please provide an password"]
    }
}); 

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;