import { ShoppingItem } from '../models/shopping-item.model';
import { ShoppingAction, ShopingActionTypes } from '../actions/shopping.actions';

const initialState: Array<ShoppingItem> = [
    {
        id: '14563798344-234fd-4234r-42385823j32f',
        name: 'Diet Coke'
    }
];

export function ShoppingReducer(state: Array<ShoppingItem> = initialState, action: ShoppingAction) {
    switch (action.type) {
        case ShopingActionTypes.ADD_ITEM:
            return [...state, action.payload];
        case ShopingActionTypes.DELETE_ITEM:
            return state.filter(item => item.id !== action.payload);
        default:
            return state;
    }
}
