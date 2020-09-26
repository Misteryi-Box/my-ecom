import { title } from 'process';
import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

interface CollectionPreviewProps {
  title: string,
  items: any[]
}
const CollectionPreview = ({
  title,
  items
}: CollectionPreviewProps) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {
        items
          .filter((item,i) => i < 4)
          .map(({id, ...itemProps}) => (
            <CollectionItem key={id} {...itemProps}/>
          ))
          // .map(({id,name}) => (
          //   <div key={id}>{name}</div>
          // ))
      }
    </div>
  </div>
)

export default CollectionPreview