import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../component/collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selectors";

import {
  CollectionPageContainer,
  TitleHeader,
  ItemsContainer
} from "./collection.styles";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <TitleHeader>{title}</TitleHeader>
      <ItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.Id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
