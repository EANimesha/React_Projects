import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholders'

export const fetchPostsAndUsers=()=>async (dispatch,getState)=>{
    await dispatch(fetchPost());

    // const userIds=_.uniq(_.map(getState().posts,'UserId'));
    // userIds.forEach(id=>dispatch(fetchUser(id)));

    _.chain(getState().posts)
      .map('userId')
      .uniq()
      .forEach(id=>dispatch(fetchUser(id)))
      .value();

};

export const fetchPost=()=>async dispatch=>{
    const responses=await jsonPlaceholder.get('/posts');

    dispatch({
        type:'FETCH_POSTS',
        payload:responses.data
    });

};

export const fetchUser=(id)=>async dispatch=>{
    const responses=await jsonPlaceholder.get(`/users/${id}`);

    dispatch({
        type:'FETCH_USER',
        payload:responses.data
    });
};

// export const fetchUser=(id)=>async dispatch=> _fetchUser(id,dispatch);


// const _fetchUser=_.memoize(async(id,dispatch)=>{
//     const responses=await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({
//         type:'FETCH_USER',
//         payload:responses.data
//     });
// });