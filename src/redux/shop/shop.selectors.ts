import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';
import { AppState } from '../store';

export const selectShop = (state: AppState) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = memoize((collectionUrlParam: string) => 
createSelector(
  [selectShopCollections],
  collections => collections[collectionUrlParam]
));