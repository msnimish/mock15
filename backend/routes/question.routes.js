import express from "express";
import { addQuestions, getQuestions } from "../controller/question.controller.js";
// import { register } from "../controller/question.controller.js";

const question = express.Router();

question.post("/", addQuestions);
question.get("/", getQuestions)



export default question;