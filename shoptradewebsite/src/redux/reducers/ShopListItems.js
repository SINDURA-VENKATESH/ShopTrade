const shopListItemReducer = (state, action) =>{
    switch(action.type){
        case "GET_SHOP_ITEM_LIST":
            return{
                ...state,
                action.payload,
            };
        default:
            return state
    }

}

export default shopListItemReducer;