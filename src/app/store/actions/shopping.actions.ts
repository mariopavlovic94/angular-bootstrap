import { Action } from '@ngrx/store';
import { ShoppingItem } from '../models/shopping-item.model';

export enum ShopingActionTypes {
   ADD_ITEM = '[SHOPPING] Add Item',
   DELETE_ITEM = '[SHOPPING] Delete Item'
}

export class AddItemAction implements Action {
    readonly type = ShopingActionTypes.ADD_ITEM;

    constructor(public payload: ShoppingItem) {}
}

export class DeleteItemAction implements Action {
    readonly type = ShopingActionTypes.DELETE_ITEM;

    constructor(public payload: string) {}
}

export type ShoppingAction = AddItemAction | DeleteItemAction;

