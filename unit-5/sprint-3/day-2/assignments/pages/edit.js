console.log("HIIII")

import navbar from "../components/navbar.js"
let navbar_div=document.getElementById("navbar_div")

navbar_div.innerHTML=navbar();

let blogId=localStorage.getItem("blogId");

const getBlogData=async()=>{
    try {
        let res=await fetch(`http://localhost:3000/blogs${blogId}`);
        let blog=await res.json();

        let {title,body,author}=blog;

        document.getElementById("title").value=title;
        document.getElementById("body").value=body;
        document.getElementById("author").value=author;
    } catch (error) {
        console.log(error)
    }
};

getBlogData();

let confirmBtn=document.getElementById("edit-blog-btn");
confirmBtn.addEventListener("click",async()=>{
    try {
        let title=document.getElementById("title").value;
        let body=document.getElementById("body").value;
        let author=document.getElementById("author").value;

        let new_obj={
            title,
            body,
            author
        }
        await fetch(`http://localhost:3000/blogs${blogId}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(new_obj),
        });
        location.href="index.html";
    } catch (error) {
        console.log(error);
    }
})

