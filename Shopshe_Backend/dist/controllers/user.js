import { User } from "../models/user.js";
export const newUser = async (req, res, next) => {
    try {
        const { name, email, photo, gender, _id, dob } = req.body;
        console.log(name, email, photo, gender, _id, dob);
        const user = await User.create({
            name,
            email,
            photo,
            gender,
            _id,
            dob: new Date(dob),
        });
        res.status(201).json({
            success: true,
            message: ` Welcome ${user.name}`,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: console.log(error)
        });
    }
};
