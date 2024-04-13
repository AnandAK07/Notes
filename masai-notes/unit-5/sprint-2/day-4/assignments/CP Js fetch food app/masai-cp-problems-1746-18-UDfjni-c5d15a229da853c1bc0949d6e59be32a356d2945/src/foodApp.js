



const getCategoriesData = async () => {
  // code here
  try{
    let getCD=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
    let data=await getCD.json();
    console.log(data)
    return data;
  }catch(error){
    console.log(error)
    return `something went wrong`
  }
};

const getIngredientData = async () => {
  // code here
  try{
    let getID=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`)
    let data=await getID.json();
    console.log(data)
    return data;
  }catch(error){
    console.log(error)
    return `something went wrong`
  }
};

window.onload = function () {
  //  get the buttons here and add click event
  document.getElementById("get-category-data").addEventListener("click",getCategoriesData)
  document.getElementById("get-ingredient-data").addEventListener("click",getIngredientData)

};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    getCategoriesData,
    getIngredientData,
  };
}
