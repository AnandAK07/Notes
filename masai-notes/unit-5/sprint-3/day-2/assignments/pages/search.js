console.log("HIIII")

import navbar from "../components/navbar.js"
let navbar_div=document.getElementById("navbar_div")

navbar_div.innerHTML=navbar();

let tbody=document.getElementById("table-body");

const getBlogs=async()=>{
    try {
        let res=await fetch(`http://localhost:3000/blogs`);
        let blogs=await res.json();
        displayData(blogs);
    } catch (error) {
        console.log(error)
    }
}

getBlogs();

const displayData=(blogs)=>{
    tbody.innerHTML="";
    blogs.forEach((blog) => {
        let blogRow=document.createElement("tr");

        let td1=document.createElement("td");
        td1.textContent=blog.id;
        let td2=document.createElement("td");
        td2.textContent=blog.title;
        let td3=document.createElement("td");
        td3.textContent=blog.author;
        let td4=document.createElement("td");
        let viewBtn=document.createElement("button");
        viewBtn.textContent="VIEW";
        viewBtn.addEventListener("click",()=>{
            location.href="../pages/view.html";
            localStorage.setItem("blogId",blog.id);
        })      
        td4.append(viewBtn);
        let td5=document.createElement("td");
        let editBtn=document.createElement("button");
        editBtn.textContent="EDIT";
        editBtn.addEventListener("click",()=>{
            location.href="../pages/edit.html";
            localStorage.setItem("blogId",blogs.id);
        }) 
        td5.append(editBtn);
        let td6=document.createElement("td");
        let deleteBtn=document.createElement("button");
        deleteBtn.textContent="DELETE";
        deleteBtn.addEventListener("click",async()=>{
            try {
                await fetch(`http://localhost:3000/blogs/${blog.id}`,{
                    method:"DELETE",
                })

            } catch (error) {
                console.log(error)
            }
        }) 
        td6.append(deleteBtn);
        blogRow.append(td1,td2,td3,td4,td5,td6);
        tbody.append(blogRow);
    });
}

let searchBtn=document.getElementById("search-blog-button");
searchBtn.addEventListener("click",async()=>{
    try{
        let query=document.getElementById("search-param").ariaValueMax;
        let res=await fetch(`http://localhost:3000/blogs?q=${query}`);
        let blogs=await res.json();
        displayData();
    }catch(error){
        console.log(error)
    }
})


let resetBtn=document.getElementById("reset-button");
resetBtn.addEventListener("click",()=>{
    document.getElementById("search-param").value="";
    getBlogs();
})

