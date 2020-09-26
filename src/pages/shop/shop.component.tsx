import React, {useState} from 'react';
import SHOP_DATA from './shop.data';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';
const ShopPage = () => {
  const [collections] = useState(SHOP_DATA)

  return(
    <div>
      {
        collections.map(({ id, ...collectionProps}) => (
          <CollectionPreview key={id } {...collectionProps}/>
        ))
      }
    </div>
  )
}

export default ShopPage