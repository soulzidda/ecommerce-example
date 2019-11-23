import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { togglCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { ReactComponent as ShoppingIcon } from "../../Assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({ togglCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={togglCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const MapDispatchToProps = dispatch => ({
  togglCartHidden: () => dispatch(togglCartHidden())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, MapDispatchToProps)(CartIcon);
