import { connectToDB } from "@utils/database";

export const POST=async(req)=>{
    const {userId,post,tag}=await req.json();
    try{
        await connectToDB();
    }catch(error)
    {

    }
}