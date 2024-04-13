// component should start Capital letter


// child component
function ArgumentPassing({name,price,companyName}){
    // object destructuring
    // this 
    return <div>
        <h1>{name}</h1>
        <h1>{price}</h1>
        <h1>{companyName}</h1>
    </div>
}

export default ArgumentPassing;