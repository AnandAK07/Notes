// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://127.0.0.1:${
  import.meta && import.meta.env && import.meta.env.REACT_APP_JSON_SERVER_PORT
    ? import.meta.env.REACT_APP_JSON_SERVER_PORT
    : 9090
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ** Constants / Variables ** //

// data fetching URL's
const matchesURL = `${baseServerURL}/matches`;
const recipeURL = `${baseServerURL}/recipes`;
const employeeURL = `${baseServerURL}/employees`;

//fetching buttons
let fetchRecipesBtn = document.getElementById("fetch-recipes");
fetchRecipesBtn.addEventListener("click", GetRecipies);
let fetchEmployeesBtn = document.getElementById("fetch-employees");
fetchEmployeesBtn.addEventListener("click", FetchEmployee);

//Append div with class "card-link" to mainSection
let mainSection = document.getElementById("data-list-wrapper");

//Sorting Buttons
let sortAtoZBtn = document.getElementById("sort-low-to-high");
sortAtoZBtn.addEventListener("click",()=>{
  SortAsc();
});
let sortZtoABtn = document.getElementById("sort-high-to-low");
sortZtoABtn.addEventListener("click",()=>{
  SortDsc();
})

//filtering buttons
let filterLessThan20thousand = document.getElementById(
  "filter-Less-Than-20thousand"
);

filterLessThan20thousand.addEventListener("click",()=>{
  FilterLess();
})
let filterMoreThan20thousand = document.getElementById(
  "filter-More-Than-20thousand"
);
filterMoreThan20thousand.addEventListener("click", ()=>{
  FilterMore();
})

//Ticket booking status div and cancel ticket button
let ticketBookStatus = document.getElementById("ticket-book-card");
let cancelTicketBtn = document.getElementById("cancel-ticket");
cancelTicketBtn.addEventListener("click", clearTHIS);


function clearTHIS(){
  ticketBookStatus.textContent=`BOOKING STATUS : NOT booked yet!`
}

let matchesData = [];
let employeesData = [];
let recipeData = [];

getData();
async function getData(){
  try {

let resp= await fetch(matchesURL);
matchesData= await resp.json();

display(matchesData);
    
  }catch (error) {
    console.log(error);
  }
}

function display(arrObj){
  console.log(arrObj);

  let container=document.getElementById("data-list-wrapper")
 container.innerHTML="";
 let cardList=document.createElement("div");
 cardList.setAttribute("class", "card-list");

arrObj.map(function(el){
  let card=document.createElement("div");
  card.setAttribute("class","card")
  let cardImage=document.createElement("div");
  cardImage.setAttribute("class","card-image")
  let Img=document.createElement("img");
  Img.src=`${baseServerURL}${el.image}`;
  cardImage.append(Img);

  let cardBody=document.createElement("div");
  cardBody.setAttribute("class", "card-body");
  let h3=document.createElement("h3");
  h3.setAttribute("class", "card-title");
  h3.textContent=el.name;
  let div=document.createElement("div");
  div.setAttribute("class", "card-description");
  div.textContent=el.captain;
  let a=document.createElement("a");
  a.setAttribute("data-name",`${el.name}`);
  a.setAttribute("class","card-link");
  a.href="#";
  a.textContent="BOOK NOW";
  a.addEventListener("click", ()=>{
    showMSG(el);

    
  })
let price=document.createElement("div");
price.setAttribute("card-price","card-price");
price.textContent=el.price;
cardBody.append(h3,div,a,price);
card.append(cardImage,cardBody);
cardList.append(card);

});
container.append(cardList);
};

async function SortAsc(){
 try {
  let resp=await fetch(`${matchesURL}?_sort=price&_order=asc`);
  matchesData=await resp.json();
  display(matchesData);
 } catch (error) {
  console.log(error);
 }
}

async function SortDsc(){
  try {
   let resp=await fetch(`${matchesURL}?_sort=price&_order=desc`);
   matchesData=await resp.json();
   display(matchesData);
  } catch (error) {
   console.log(error);
  }
 }

async function FilterLess(){

try {
  let resp=await fetch(`${matchesURL}?price_lte=19999`);
  matchesData=await resp.json();
  display(matchesData);
} catch (error) {
  console.log(error);
}


}

async function FilterMore(){

  try {
    let resp=await fetch(`${matchesURL}?price_gte=20000`);
    matchesData=await resp.json();
    display(matchesData);
  } catch (error) {
    console.log(error);
  }
  
  
  } 
function showMSG(el){
    document.getElementById("ticket-book-card").innerText=`Ticket Booking for : ${el.name}!`;
  };
async function GetRecipies(){
  try {

    let resp=await fetch(`${recipeURL}?_limit=10`);
    recipeData=await resp.json();
   
    DisplayRecipe(recipeData);
  } catch (error) {
    console.log(error);
  }
}
function DisplayRecipe(arrObj){
  console.log(arrObj);

  let container=document.getElementById("data-list-wrapper")
 container.innerHTML="";
 let cardList=document.createElement("div");
 cardList.setAttribute("class", "card-list");

arrObj.map(function(el){
  let card=document.createElement("div");
  card.setAttribute("class","card")
  let cardImage=document.createElement("div");
  cardImage.setAttribute("class","card-image")
  let Img=document.createElement("img");
  Img.src=`${baseServerURL}${el.image}`;
  Img.alt="pic"
  cardImage.append(Img);

  let cardBody=document.createElement("div");
  cardBody.setAttribute("class", "card-body");
  let h3=document.createElement("h3");
  h3.setAttribute("class", "card-title");
  h3.textContent=el.name;
  let div=document.createElement("div");
  div.setAttribute("class", "card-description");
  div.textContent=el.price;


cardBody.append(h3,div);
card.append(cardImage,cardBody);
cardList.append(card);

});
container.append(cardList);
}

async function FetchEmployee(){
  try {
    let resp=await fetch(employeeURL);
    employeesData=await resp.json();
    DisplayEmployee(employeesData);
  } catch (error) {
    console.log(error);
  }
}

function DisplayEmployee(arrObj){
  console.log(arrObj);

  let container=document.getElementById("data-list-wrapper")
 container.innerHTML="";
 let cardList=document.createElement("div");
 cardList.setAttribute("class", "card-list");

arrObj.map(function(el){
  let card=document.createElement("div");
  card.setAttribute("class","card")
  let cardImage=document.createElement("div");
  cardImage.setAttribute("class","card-image")
  let Img=document.createElement("img");
  Img.src=`${baseServerURL}${el.image}`;
  Img.alt="pic"
  cardImage.append(Img);

  let cardBody=document.createElement("div");
  cardBody.setAttribute("class", "card-body");
  let h3=document.createElement("h3");
  h3.setAttribute("class", "card-title");
  h3.textContent=el.name;
  

  let a=document.createElement("a");
  a.setAttribute("data-name",`${el.name}`);
  a.setAttribute("class","card-link");
  a.href="#";
  a.textContent="Greet";
  a.addEventListener("click", ()=>{
    Greet(el);

    
  })
  let div=document.createElement("div");
  div.setAttribute("class", "card-description");
  div.textContent=el.salary;


cardBody.append(h3,a,div);
card.append(cardImage,cardBody);
cardList.append(card);

});
container.append(cardList);
}
function Greet(obj){
  alert(`Greetings from ${obj.name}!`)


}