const getShopItemList = (shopItems) =>{
    return {
        type:"GET_SHOP_ITEM_LIST",
        shopItems
    }
}

export default getShopItemList;