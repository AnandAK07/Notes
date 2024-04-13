let buttons=document.getElementById("buttons");


let previous=document.createElement("button")
previous.innerText="<<previous"
previous.setAttribute("id","previous")
previous.addEventListener("click",()=>{
    previous.disabled=true
    previousPage(el);
})

let page_number=document.createElement("h3")
page_number.setAttribute("id","page_number")
page_number.innerText=`${page_number}`////let me know

let next=document.createElement("button")
next.setAttribute("id","next")
next.innerText="next>>"
next.addEventListener("click",()=>{
    next.disabled=true
    next(el);
})


let sort_htl=document.createElement("button")
sort_htl.setAttribute("id","sort-htl")
sort_htl.innerText="Sort Low to High"

let sort_lth=document.createElement("button")
sort_lth.setAttribute("id","sort-lth")
sort_lth.innerText="Sort High to Low"

buttons.append(previous,page_number,next,sort_htl,sort_lth)






let load=async ()=>{
    try {
        let resp=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products`)
        let data=await resp.json();
        console.log(data.data)
        displayData(data.data)
    } catch (error) {
        console.log(error)
    }
}

function displayData(data){
    let main_items=document.getElementById("main_items");
    main_items.innerHTML="";

    data.map((el)=>{
        let item=document.createElement("div");
        item.setAttribute("class","item");
        
        let image=document.createElement("img");
        image.setAttribute("class","image");
        image.src=el.img

        let brand=document.createElement("p");
        brand.setAttribute("class","brand");
        brand.innerText=el.brand

        let category=document.createElement("p");
        category.setAttribute("class","category");
        category.innerText=el.category

        let price=document.createElement("p");
        price.setAttribute("class","price");
        price.innerText=el.price

        let details=document.createElement("p");
        details.setAttribute("class","details");
        details.innerText=el.details

        let add_to_cart=document.createElement("button");
        add_to_cart.setAttribute("class","add_to_cart");
        add_to_cart.textContent="Add to Cart"
        add_to_cart.addEventListener("click",()=>{
            addToCart(el);
        })

        item.append(image,brand,category,price,details,add_to_cart)
        main_items.append(item)
    })

}

load();


let cartArr=JSON.parse(localStorage.getItem("cart"))||[];


function addToCart(el){
    cartArr.push(el);
    console.log(cartArr);
    localStorage.setItem("cart",JSON.stringify(cartArr))
}

