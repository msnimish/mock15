import Question from "../model/question.model.js";

// import data from "../data.json";

export const addQuestions = async(req,res) => {
    try{
        console.log(req.body);
        let resp = await Question.insertMany(req.body)
        res.status(201).send({message: "Questions added successfully!"})        
    }catch(err){
        console.log(err)
        res.status(500).send({message: err.message})
    }
}

export const getQuestions = async(req,res) => {
    try{
        console.log(req.query.difficulty);
        const { difficulty, category, amount } = req.query;
        let questions = await Question.find({difficulty:difficulty});
        // let questions;
        // if(difficulty && category && amount){
        //     questions = await Question.find({difficulty:difficulty, category:category}).limit(amount);
        // }else if(difficulty && amount){
        //     questions = await Question.find({difficulty:difficulty}).limit(amount);
        // }else if(category && amount){
        //     questions = await Question.find({category:category}).limit(amount);
        // }
        console.log(questions);
        res.status(200).send(questions);
    }catch(err){
        console.log(err);
        res.status(500).send({message: err.message});
    }
}