'use client';
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Form from "@components/Form";
const CreatePost = () => {
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        post:'',
        tag:'',
    })
    const createPost=async(e)=>{
        e.preventDefault();
        setSubmitting(true);
        console.log(post)

        //post api
        try {
            const response = await fetch("/api/post/new", {
              method: "POST",
              body: JSON.stringify({
                prompt: post.prompt,
                userId: session?.user.id,
                tag: post.tag,
              }),
            });
      
            if (response.ok) {
              router.push("/");
            }
          } catch (error) {
            console.log(error);
          } finally {
            setIsSubmitting(false);
          }
    }
    console.log(post);
    return (
        <Form
        type='Create'
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={CreatePost}
        />
    );
};

export default CreatePost;