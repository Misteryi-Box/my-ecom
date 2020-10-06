import SHOP_DATA from './shop.data';
import { ShopState } from './shop.types';

const initialData = {
  collections: SHOP_DATA
}

const shopReducer = (state: ShopState = initialData, action: any) => {
  switch(action.type) {
    default: 
      return state;
  }
}

export default shopReducer;