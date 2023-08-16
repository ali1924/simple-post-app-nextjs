import mongoose from '@mongoose';
import { Schema } from 'mongoose';

const PostSchema=new Schema({
    creator:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    post:{
        type:String,
        // required:true,
        required:[true,"Post is required."],
    },
    tag:{
        type:String,
        required:[true,"Tag is required"],
    }
})


const Post=models.Post || model('Post',PostSchema);

export default Post;