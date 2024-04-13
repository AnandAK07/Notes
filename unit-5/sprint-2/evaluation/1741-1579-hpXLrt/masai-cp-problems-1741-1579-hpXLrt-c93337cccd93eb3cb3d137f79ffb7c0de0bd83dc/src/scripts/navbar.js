// Export navbar from here
let navbar=document.getElementById("navbar");
let page_number=document.getElementById("page_number");

let home=document.createElement("h3");
home.setAttribute("id","home");
home.textContent="Home"

let cart_count=document.createElement("h3");
cart_count.textContent=`Cart ${page_number}`//wrong

navbar.append(home,cart_count);




