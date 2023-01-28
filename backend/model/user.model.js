import mongoose from "mongoose";

let UserSchema = mongoose.Schema({
    name: { type: String, required: true },
    difficulty: { type: String, required: true,enum:["Hard","Medium","Easy"], default:"Easy"},
    amount: { type: Number, required: true, default: 0 },
    category: { type: String, enum :["General Knowledge", "Sports","Geography"] },
    score: { type: Number, default: 0 },
    percentage:{ type: Number, default: 0 }
    
}, {timestamps: true});


let User = mongoose.model("user", UserSchema);

export default User;