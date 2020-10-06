import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';
// import { CollectionType } from '../../redux/shop/shop.types';
import { AppState } from '../../redux/store';
import './collection.styles.scss';

type CollectionPageProps = ConnectedProps<typeof connector> & RouteComponentProps<{ collectionId: string }>;
const CollectionPage = ({
  match,
  collection,
}: CollectionPageProps) => {
  console.log('match', match.params.collectionId);
  console.log('collection', collection)
  return (
    <div className='collection-page'>
      <h2 className='title'>{collection?.title}</h2>
      <div className='items'>
        {
          collection?.items.map(item => <CollectionItem key={item.id} item={item}/>)
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state: AppState, ownProps: RouteComponentProps<{ collectionId: string }> ) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

const connector = connect(mapStateToProps);
export default connector(CollectionPage);