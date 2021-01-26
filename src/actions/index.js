// import JSONPlaceholder from "../apis/JsonPlaceholder"

import JsonPlaceholder from '../apis/JsonPlaceholder';



export const fetchPosts=()=>async dispatch=>{
 const response=await JsonPlaceholder.get('/posts')

 dispatch({type:'FETCH_POSTS',payload:response.data});
}



//userfetch Action 

export const fetchUser=(id)=>async dispatch=>{
    const userData=await JsonPlaceholder.get(`/users/${id}`)
    dispatch({type:'FETCH_USER',payload:userData.data});
}


// export const fetchPosts= async()=>{

//     //Bad Approch 
//     //Error: Actions must be plain objects. Use custom middleware for async actions
//  const response= await JsonPlaceholder.get('/posts')
//     return{
//         type:'FETCH_POSTS',
//         payload:response
//     }
// }

//for creating Action creator which will depend on REST Api , that means there is asynchronous operation so we need a middleware . Redux thunk is one of them. 
// basically it performs depend onthe action like if the action is a plain object its directly dispatch to reducer .
//if its a function then it called that function and dispatch the action .


// export const fetchPosts=()=>{
//     return async function(dispatch){
//         const response= await JsonPlaceholder.get('/posts');
//            dispatch({type:'FETCH_POSTS',payload:response});  
//     }
// }

//i can shorten the above func.


































