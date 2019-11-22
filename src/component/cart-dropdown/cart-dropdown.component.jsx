import React from "react";

import CustomButton from "../button/custom-button.component";

import "./card-dropdown.styles.scss";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items">
      <CustomButton>CHECKOUT</CustomButton>
    </div>
  </div>
);

export default CartDropdown;