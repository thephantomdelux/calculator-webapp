import mongoose from "mongoose";

const calucatorSchema = new mongoose.Schema({
    num1 : {type: Number, required : true},
    num2 : {type: Number, required : true},
    operation : {type : String, required : true},
    result : {type : Number, required : true}
},
{timestamps: true}
)

export default mongoose.model("Calculation",calucatorSchema);