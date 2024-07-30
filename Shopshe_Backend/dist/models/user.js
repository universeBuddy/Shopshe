import mongoose from "mongoose";
const schema = new mongoose.Schema({
    _id: {
        type: String,
        required: [true, "please enter ID"],
    },
    name: {
        type: String,
        required: [true, "please enter your Name"],
    },
    email: {
        type: String,
        unique: [true, "Email already exists"],
        required: [true, "please enter your Email"],
        validator: {}
    },
    photo: {
        type: String,
        required: [true, "please add your Photo"],
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: [true, "please choose your Gender"],
    },
    dob: {
        type: Date,
        required: [true, "please enter your Date of Birth"],
    },
}, {
    timestamps: true,
});
export const User = mongoose.model("User", schema);
