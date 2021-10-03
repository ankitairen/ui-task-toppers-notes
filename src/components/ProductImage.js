import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { device } from "../utils/mediaUtil";

const ProductImageMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  position: relative;
  width: 100%;
  @media ${device.tablet} {
    width: 200px;
  }
`;

const ImageTag = styled.img`
  display: ${(props) => (props.isMobile ? "flex" : "none")};
  flex: 1 1 auto;
  width: 100%;
  @media ${device.tablet} {
    position: ${(props) => (props.isDesktop ? "absolute" : "static")};
    display: ${(props) => (props.isDesktop ? "flex" : "none")};
    width: 100%;
  }
`;

function ProductImage({ desktopImage, mobileImage }) {
  return (
    <ProductImageMainDiv>
      <ImageTag
        isDesktop
        src={desktopImage}
        alt="IAS Toppers Samanya Adhyayan Notes"
      />
      <ImageTag
        isMobile
        src={mobileImage}
        alt="IAS Toppers Samanya Adhyayan Notes"
      />
    </ProductImageMainDiv>
  );
}

ProductImage.propTypes = {
  desktopImage: PropTypes.string,
  mobileImage: PropTypes.string
};

export default ProductImage;
