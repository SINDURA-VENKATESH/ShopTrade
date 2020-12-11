const getShopItemList = (data) =>{
    return {
        type:"GET_SHOP_ITEM_LIST",
        payload: data
    }
}

export default getShopItemList;