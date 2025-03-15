import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true // 'require' should be 'required'
    },
    age: {
        type: Number,
        required: true // 'require' should be 'required'
    },
    email: {
        type: String,
        required: true, // 'require' should be 'required'
        unique: true
    },
    // userOrder:{type:Object,default:{test:'test value'}}
    userOrder:{type:Object,default:{}}
}, { timestamps: true ,minimize:false}); // This should be outside the field definitions

// Create the model from the schema
export const Person = mongoose.model("Person", personSchema);
