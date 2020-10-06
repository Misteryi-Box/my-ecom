import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { AppState } from '../../redux/store';
import CollectionPreview from '../collection-preview/collection-preview.component';

import './collections-overview.styles.scss';

type CollectionsOverviewProps = ConnectedProps<typeof connector>

const CollectionsOverview = ({
  collections
}: CollectionsOverviewProps) => (
  <div className='collections-overview'>
      {
        collections.map(({ id, ...collectionProps}) => (
          <CollectionPreview key={id } {...collectionProps}/>
        ))
      }
  </div>
);

const mapStateToProps = (state: AppState) => ({
  collections: selectCollectionsForPreview(state)
})
const connector = connect(mapStateToProps);

export default connector(CollectionsOverview);