
export const fetchPosts=(state =[],action )=>{
   // console.log(action.type);
    switch (action.type){
        case 'FETCH_POSTS':
            return action.payload;
        
        default :
            return state;
        
    }
}
