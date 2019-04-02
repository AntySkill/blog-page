const initState = {
    posts: [
            {id: '1', title: 'Putin rides a bear', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
            {id: '2', title: 'Elon is a cool guy', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
            {id: '3', title: 'I started off in Brooklyn. My father gave a small loan of a million $', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'}
    ]
}


const rootReducer = (state = initState, action) => {
    if(action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post =>{
            return action.id !== post.id
        })
        return{
            ...state,
            posts: newPosts
        }
    }
    console.log(action);
    return state;
}

export default rootReducer