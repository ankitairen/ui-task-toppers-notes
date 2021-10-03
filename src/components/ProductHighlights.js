import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ProductHighlightsMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;

const TextContent = styled.div`
  display: flex colum wrap;
  font-size: 21px;
  margin: 3% 10% 1.5%;
`;

const ContentContainer = styled.ol`
  font-size: 13px;
  color: #808080;
  margin: 0% 12%;
`;

const ListItem = styled.li`
  margin: 0px 0px 15px;
`;

function ProductHighlights({ translation }) {
  return (
    <ProductHighlightsMainDiv>
      <TextContent>{translation.productsAdvantagesHeading}</TextContent>
      <ContentContainer>
        {translation.productsAdvantagesList.map((value, index) => {
          return <ListItem key={index}>{value}</ListItem>;
        })}
      </ContentContainer>
    </ProductHighlightsMainDiv>
  );
}

ProductHighlights.propTypes = {
  translation: PropTypes.object
};

export default ProductHighlights;
