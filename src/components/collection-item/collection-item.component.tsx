import React from 'react';

import './collection-item.styles.scss';

interface CollectionItemProps {
  id: string,
  name: string,
  imageUrl: string,
  price: number
}
const CollectionItem = ({
  id,
  name,
  imageUrl,
  price
}: CollectionItemProps) => (
  <div className='collection-item'>{console.log('hello', imageUrl)}
    <div 
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <span className='name'>{name}</span>
    <span className='price'>{price}</span>
  </div>
);

export default CollectionItem;