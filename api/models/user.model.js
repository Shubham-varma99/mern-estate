import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true, // to protect our database from different type inputs
        unique:true  // No one has similar username which is owned by person.
    },
    email: {
        type:String,
        required:true, // to protect our database from different type inputs
        unique:true  // No one has similar username which is owned by person.
    },
    password: {
        type:String,
        required:true, // to protect our database from different type inputs
    },
    avatar : {
        type:String,
        default :"https://assets.materialup.com/uploads/b6c33467-82c3-442c-a2dc-c089bbff9fa1/preview.png"
    },
},{timestamps:true}); // timestamps: true which is going to tell the mongodb two important info, one is time of creation and other is time of update of users. 

const User = mongoose.model("User",userSchema);

export default User; 