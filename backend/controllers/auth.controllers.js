import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";


export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        const user = await User.findOne({ username: username });

        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const boyProfilePic = "https://cdn-icons-png.flaticon.com/512/149/149071.png";
        const girlProfilePic = "https://cdn-icons-png.flaticon.com/512/149/149072.png";
        const otherProfilePic = "https://cdn-icons-png.flaticon.com/512/149/149065.png";

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        });
        if (newUser) {

            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                message: "User created successfully", user: {
                    _id: newUser.id,
                    fullName: newUser.fullName,
                    username: newUser.username,
                    profilePic: newUser.profilePic
                }
            });

        } else {
            res.staus(400).json({ message: "Error creating user" });
        }

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || ""); //|| ""illegal arugmenterror by bcryptjs

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic
        });

    } catch (err) {
        console.log("Error in login controller: ", err);
        res.status(500).json({ message: "Server error" });
    }
};

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 })
        res.status(200).json({ messsage: "Logged out successfully" })
    } catch (err) {
        console.log("Error in logout controller", err.message);
        res.status(500).json({ error: "Internal Servar Error" });
    }
};