export const reducer = (state, action) =>{
    if (action.type == "toggleNav") {
        return {
            ...state,
            navOpen : action.payload
        }
    }

    if(action.type == "CURRENT_POST") {
        return {
            ...state,
            currentPost : action.payload,
        }
    }
}