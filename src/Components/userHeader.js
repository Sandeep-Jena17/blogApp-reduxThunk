import React, { useEffect } from "react";
import {connect} from "react-redux";
import {fetchUser} from "../actions/index";
const UserHeader=({userId,fetchUser,user})=>{
    useEffect(()=>{
     //props.fetchUser(props.userId);
      fetchUser(userId);    
    },[])
    
   
    return(
    
        <div className="header">{(!user?null:user.name)}</div>
    );
};
const mapStatesToProps=(state,{userId})=>{
    return {user:state.users.find((user)=>user.id===userId)}
}

export default connect(mapStatesToProps,{fetchUser})(UserHeader);