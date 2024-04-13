// 1.class components
// 2.functional Components
function FirstComponent({name,age}){
    return(
        <div>
        <h1>Named export 1</h1>
        <p>direct destructure{name}</p>
    </div>
    )
}

export  {FirstComponent};

// named export
// default export