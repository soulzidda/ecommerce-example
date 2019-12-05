import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { togglCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import {
  CartItem,
  ItemCountContainer,
  ShoppingIconContainer
} from "./cart-icon.styles";

const CartIcon = ({ togglCartHidden, itemCount }) => (
  <CartItem onClick={togglCartHidden}>
    <ShoppingIconContainer />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartItem>
);

const MapDispatchToProps = dispatch => ({
  togglCartHidden: () => dispatch(togglCartHidden())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, MapDispatchToProps)(CartIcon);
