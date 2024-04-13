console.log("HIIII")

import navbar from "../components/navbar.js"
let navbar_div=document.getElementById("navbar_div")

navbar_div.innerHTML=navbar();

let blogId=localStorage.getItem("blogId");

const getBlogData=async()=>{
    try {
        let respns=await fetch(`http://localhost:3000/blogs/${blogId}`);
        let blog=await respns.json();

        display(blog);
    } catch (error) {
        console.log(error)
    }
}

getBlogData();

let parentNode=document.getElementById("main-content");

function display(blog){
    parentNode.innerHTML="";

    let blogTitleElement=document.createElement("p");
    blogTitleElement.textContent=blog.title;
    let blogBodyElement=document.createElement("p");
    blogBodyElement.textContent=blog.body;
    let blogAuthorElement=document.createElement("p");
    blogAuthorElement.textContent=`By :${blog.body}`;

    parentNode.append(blogTitleElement,blogBodyElement,blogAuthorElement);
}