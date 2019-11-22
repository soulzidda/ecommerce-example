import React from "react";
import { connect } from "react-redux";

import { togglCartHidden } from "../../redux/cart/cart.actions";

import { ReactComponent as ShoppingIcon } from "../../Assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({ togglCartHidden}) => (
  <div className="cart-icon" onClick={togglCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const MapDispatchToProps = dispatch => ({
  togglCartHidden: () => dispatch(togglCartHidden())
});

export default connect(null, MapDispatchToProps)(CartIcon);
