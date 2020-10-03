import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { addItemAction } from '../../redux/cart/cart.actions';
import { 
  // CartState, 
  itemType 
} from '../../redux/cart/cart.types';
import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

// const mapStateToProps = (state: CartState) => {

// }

const mapDispatchToProps = (dispatch:Dispatch) => ({
  addItem: (item: itemType) => dispatch(addItemAction(item))
})
const connector = connect(null, mapDispatchToProps);

type CollectionItemProps = ConnectedProps<typeof connector> & {
  item: itemType
}

const CollectionItem = ({
  item,
  addItem 
}: CollectionItemProps) => {
  const {name, imageUrl, price} = item;
  return (
    <div className='collection-item'>
      <div 
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>Add to cart</CustomButton>
    </div>
  )
};

export default connector(CollectionItem);