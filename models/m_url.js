import { model, Schema } from "mongoose";

const url_schema= new Schema({
    original_url:{
        type: String,
        required: true,
    },
    short_url:{
        type: String,
        unique:true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
});

const url_model=model('url', url_schema);
export default url_model;