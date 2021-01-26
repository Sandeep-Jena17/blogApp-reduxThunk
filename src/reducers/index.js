import {combineReducers} from 'redux';
import {fetchPosts} from './FetchPostReducers';
import {userDetails } from './userReducer';

export default combineReducers({
    posts:fetchPosts,
    users:userDetails

})