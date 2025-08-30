import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";
import { title } from "process";


const MobilesSchema =new mongoose.Schema({
    title: { type: String, required: true,unique:true },
    model: { type: String, required: true,unique:true        },
    price: { type: Number, required: true },
   
}, {timestamps:true});

const MobileModel = mongoose.models.mobile || mongoose.model("mobile", MobilesSchema);


export default MobileModel;