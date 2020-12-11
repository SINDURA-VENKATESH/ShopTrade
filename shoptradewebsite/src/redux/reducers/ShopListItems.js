const initialState={
    shopItems:[]
}

const shopListItemReducer = (state=initialState, action) =>{
    switch(action.type){
        case "GET_SHOP_ITEM_LIST":
            return{
                ...state,
                shopItems: action.shopItems,
            };
        default:
            return state
    }

}

export default shopListItemReducer;