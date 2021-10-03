import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import toppersChoice from "../assets/images/toppers_choice.png";
import toppersNameCard from "../assets/images/toppers_name_card.png";
import toppersVideoScreenShot from "../assets/images/toppers_video_screen_shot.png";
import { device } from "../utils/mediaUtil";

const ProductReviewMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;

const TextContent = styled.div`
  display: flex colum wrap;
  font-size: 21px;
  margin: 30px 100px;
`;

const ImageTag = styled.img`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  top: ${(props) => props.mobileTop}%;
  left: ${(props) => props.mobileLeft}%;
  width: ${(props) => props.mobileWidth}%;
  height: ${(props) => props.mobileHeight}px;
  position: ${(props) => (props.isAbsolute ? "absolute" : "static")};
  @media ${device.tablet} {
    flex-direction: row;
    top: ${(props) => props.top}%;
    left: ${(props) => props.left}%;
    width: ${(props) => props.width}%;
    height: ${(props) => props.height}px;
  }
`;

const StoriesPanel = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  height: 420px;
  @media ${device.tablet} {
    height: 300px;
  }
`;

function ProductRecommendation({ translation }) {
  return (
    <ProductReviewMainDiv>
      <ImageTag src={toppersChoice} />
      <TextContent>{translation.productRecommendationHeading}</TextContent>
      <StoriesPanel>
        <ImageTag
          isAbsolute
          width="20"
          height="280"
          top="0"
          left="10"
          mobileTop="-5"
          mobileLeft="53"
          mobileWidth="40"
          mobileHeight="200"
          src={toppersNameCard}
        />
        <ImageTag
          isAbsolute
          width="40"
          height="280"
          top="0"
          left="45"
          mobileTop="42"
          mobileLeft="5"
          mobileWidth="80"
          mobileHeight="200"
          src={toppersVideoScreenShot}
        />
      </StoriesPanel>
    </ProductReviewMainDiv>
  );
}

ProductRecommendation.propTypes = {
  translation: PropTypes.object
};

export default ProductRecommendation;
