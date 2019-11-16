import React from "react"

import '../../homePage.styles.scss'

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-ítem">
        <div className="content">
          <h1 className="title"> HATS</h1>
          <span className="subtitle">SHOP</span>
        </div>
      </div>
      <div className="menu-ítem">
        <div className="content">
          <h1 className="title"> JACKETS</h1>
          <span className="subtitle">SHOP</span>
        </div>
      </div>
      <div className="menu-ítem">
        <div className="content">
          <h1 className="title"> SHOES</h1>
          <span className="subtitle">SHOP</span>
        </div>
      </div>
    </div>
    <div className="menu-ítem">
      <div className="content">
        <h1 className="title"> WOMENS</h1>
        <span className="subtitle">SHOP</span>
      </div>
    </div>
    <div className="menu-ítem">
      <div className="content">
        <h1 className="title"> MENS</h1>
        <span className="subtitle">SHOP</span>
      </div>
    </div>
  </div>
);

export default HomePage