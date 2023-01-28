import express from "express";
import { register } from "../controller/user.controller.js";

const user = express.Router();

user.post("/register", register);

// user.get('/', getAllUsers);



export default user;