import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import { connect } from 'react-redux';

import './CartDropdown.scss';

const CartDropdown = () => (
	<div className="cart-dropdown">
		<div className="cart-items" />
		<CustomButton>Go to checkout</CustomButton>
	</div>
);

export default connect()(CartDropdown);
