import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collections-overview/CollectionsOverview';
import CollectionPage from '../collection-page/CollectionPage';

import './ShopPage.scss';

const ShopPage = ({ match }) => (
	<div className="shop-page">
		<Route exact path={`${match.path}`} component={CollectionOverview} />
		<Route path={`${match.path}/:collectionID`} component={CollectionPage} />
	</div>
);

export default ShopPage;
