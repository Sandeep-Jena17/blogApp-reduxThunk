import React from 'react';
import {connect } from 'react-redux';
import {fetchPosts} from '../actions';
import UserHeader from './userHeader';

class PostList extends React.Component{
  componentDidMount(){
      this.props.fetchPosts();
  }   
 renderPost=()=>{
     return this.props.posts.map((post)=>{
        //console.log(post.userId);
        return (
             <div className='item' key={post.id}>
                 <i className='large middle  aligned icon user'></i>
                 <div className='content'>
                 <div className='description'>
                     <h2>{post.title}</h2>
                     <p>{post.body}</p>

                 </div>
                 <UserHeader userId={post.userId}/>                 
                </div>
                
   
             </div>
         );
     });
 };
    render(){
        return(
            <div className='ui relaxed divided list'>{this.renderPost()}</div>
        )
    }
}
const mapStatesToProps=(state)=>{
return {posts:state.posts}
}
//exporting enhanced component.
export default connect(mapStatesToProps,{fetchPosts})(PostList) ;

//using es5 insted of writng this {fetchPosts:fetchPosts}  we simply write {fetchPosts};