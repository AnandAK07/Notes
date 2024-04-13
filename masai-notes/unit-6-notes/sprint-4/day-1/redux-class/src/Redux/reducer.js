export const reducer=(state,action)=>{
    console.log(state);
    console.log(action)
    switch(action.type){
        case "ADD_ONE":{
            return{...state,count:state.count+action.payload}
        }
        case "SUB_ONE":{
            return{...state,count:state.count-1}
        }
        default:
            return state;
    }
 
}

// inc
// dec
// reset