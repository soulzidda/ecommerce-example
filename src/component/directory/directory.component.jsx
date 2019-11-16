import React from "react"

import MenuItem from '../menu-Item/menu-item.component'

import './directory.styles.scss'

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Lids",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "Lids"
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: ""
        },
        {
          title: "Trainers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: ""
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          id: 4,
          linkUrl: ""
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          id: 5,
          linkUrl: ""
        }]
    }
  }

  render(){
      return(
          <div className='directory-menu'>
              {
                  this.state.sections.map(({id, ...otherSectionProps}) => (
                      <MenuItem key={id} {...otherSectionProps} />
                  ))
              }
          </div>
      )
  }
}

export default Directory;
