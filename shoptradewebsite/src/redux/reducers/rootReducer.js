import {combineReducers} from "redux";
import shopListItemReducer from "./ShopListItems";

const rootReducer = combineReducers({
    shopListItemState: shopListItemReducer
});

export default rootReducer;