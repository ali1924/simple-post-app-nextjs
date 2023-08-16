import { connectToDB } from "@utils/database";
import Post from "@models/post";
export const POST=async(req)=>{
    // extract all post data
    const {userId,post,tag}=await req.json();
    try{
        await connectToDB();

        // 1. create post
        const createPost=new Post({
            creator:userId,
            post:post,
            tag
        })
        // 2. save mongo db
        await createPost.save();
        // 3. return response json data
        return Response(JSON.stringify(createPost),{status:201});
    }catch(error)
    {
        console.log(error);
        return Response('Failed to create a new Post',{status:500});
    }
}