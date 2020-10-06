import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionyPage from '../collection/collection.component';

type ShopPageProps = RouteComponentProps

const ShopPage = ({
  match
}: ShopPageProps) => {

  return(
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionyPage}/>
    </div>
  )
}

export default ShopPage;