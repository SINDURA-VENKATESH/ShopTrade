import * as Constants from '../../Constants';
import getShopItemList from '../actions/ShopListItems';

async function getShopItemListThunk(){
    return function(dispatch){

    let response = await fetch(Constants.apiURL);

    console.log(response);

    dispatch(getShopItemList(response.json()))

}
}

export default getShopItemListThunk;