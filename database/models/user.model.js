import { model, Schema } from "mongoose";


let schema = new Schema({
    name: String,
    email: String,
    password: String
}, {
    timestamps: true,
    versionKey: false
})



export const User = model('User', schema)