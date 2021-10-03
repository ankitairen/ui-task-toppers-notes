import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import productOverview from "../assets/images/product_review.png";
import { device } from "../utils/mediaUtil";

const ProductReviewMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  background-color: #fef6e2;
  height: 195px;
  position: relative;
`;

const TextContent = styled.div`
  display: flex column wrap;
  flex: 1 1 auto;
  font-size: 21px;
  margin: 30px 60px;
`;

const ImageTag = styled.img`
  display: flex;
  flex: 1 1 auto;
  position: absolute;
  width: 50%;
  top: 45%;
  left: 45%;
  height: 100px;
  @media ${device.tablet} {
    width: 20%;
    top: 40%;
    left: 65%;
  }
`;

function ProductReview({ translation }) {
  return (
    <ProductReviewMainDiv>
      <TextContent>{translation.productReviewText}</TextContent>
      <ImageTag src={productOverview} />
    </ProductReviewMainDiv>
  );
}

ProductReview.propTypes = {
  translation: PropTypes.object
};

export default ProductReview;
