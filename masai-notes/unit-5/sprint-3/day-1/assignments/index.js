// get method-->normal fetch request

//add the data the data base we created 

// let create_btn =document.getElementById("submitBtn");

// create_btn.addEventListener("click",()=>{
//     addPost();
// })


// const addPost=async ()=>{
//     try {
//         // let title=document.getElementById("title").value;
//         // let author=document.getElementById("author").value;

//         let new_obj={
//             // title,
//             // author,
//             title:document.getElementById("title").value,
//             author:document.getElementById("author").value
//         };

//         let response =await fetch(`http://localhost:3000/posts`,{
//             method:"POST",
//             body:JSON.stringify(new_obj),
//             headers:{
//                 "Content-Type":"application/json"
//             },
//         })
        
//         let data=await response.json();
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }



let submitBtn=document.getElementById("submitBtn");
submitBtn.addEventListener("click",()=>{
    addPost();
})


let addPost=async ()=>{

    try {
        let new_obj={
            // title,
            // author,
            title:document.getElementById("title"),
            author:document.getElementById("author")
        }
    
        let response=await fetch(`http://localhost:3000/posts`,{
            method:"POST",
            body:JSON.stringify(new_obj),
            headers:{
                "Content-Type":"application/json"
            }
    
            
        })
    
        let data=response.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
