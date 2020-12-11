import {Connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import getShopItemListThunk from '../../redux/thunks/ShopListItems';

const HomeContainer = (props) =>{


    return(
        <>
        <div>This is Home Container</div>
    <p>{props.shopListItems[0].vendor}</p>
        </>
    )

}

const mapStateToProps =(state) =>{
    return{
    shopListItems: state.shopListItemState,
    }
}

const mapDispatchToProps =(dispatch) =>{
    return{
    getShopListItems: bindActionCreators(getShopItemListThunk,dispatch),
    }
}

export default Connect(mapStateToProps, mapDispatchToProps, HomeContainer)