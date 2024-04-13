console.log("HIIII")

import navbar from "../components/navbar.js"
let navbar_div=document.getElementById("navbar_div")

navbar_div.innerHTML=navbar();


let createBtn=document.getElementById("create-blog-button");
createBtn.addEventListener("click",()=>{
    PostDate();
})

const PostDate=async ()=>{
    // let title=document.getElementById("title").value;
    let body=document.getElementById("body").value;
    let author=document.getElementById("author").value;

    let new_obj={
        // title:title,
        // body:body,
        // author:author
        title:document.getElementById("title").value,
        body,
        author
    }

    try {
        let response=await fetch(`http://localhost:3000/blogs`,{
            method:"POST",
            body:JSON.stringify(new_obj),
            headers:{
                "Content-Type":"application/json"
            }

        });
        // let data=response.json();
        // console.log(data)
    } catch (error) {
        console.log(error)
    }
}