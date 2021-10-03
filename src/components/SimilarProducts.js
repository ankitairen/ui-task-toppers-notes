import React from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import lookInside from "../assets/images/look_inside.png";
import chemistry from "../assets/images/chemistry.png";
import biology from "../assets/images/biology.png";
import { device, responsive } from "../utils/mediaUtil";

const SimilarProductMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;

const ImageTag = styled.img`
  display: flex;
  flex: 1 1 auto;
  width: 100%;
  height: ${(props) => (props.height ? `${props.height}px` : "100%")};
  @media ${device.tablet} {
    width: ${(props) => (props.width ? `${props.width}%` : "100%")};
  }
`;

const CarouselContainer = styled.div`
  margin: 3% 10% 1.5%;
`;

const CarouselItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const CarouselItemText = styled.div`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "inherit")};
  color: ${(props) => (props.color ? props.color : "inherit")};
`;

const images = [
  {
    image: biology,
    primaryText: "Zoology | - Biology",
    secondaryText: "216 Pages"
  },
  {
    image: chemistry,
    primaryText: "Zoology | - Biology",
    secondaryText: "216 Pages"
  },
  {
    image: biology,
    primaryText: "Zoology | - Biology",
    secondaryText: "216 Pages"
  },
  {
    image: biology,
    primaryText: "Zoology | - Biology",
    secondaryText: "216 Pages"
  },
  {
    image: biology,
    primaryText: "Zoology | - Biology",
    secondaryText: "216 Pages"
  }
];

function SimilarProduct() {
  return (
    <SimilarProductMainDiv>
      <ImageTag src={lookInside} />
      <CarouselContainer>
        <Carousel
          partialVisbile
          deviceType="desktop"
          itemClass="image-item"
          responsive={responsive}
        >
          {images.map((image) => {
            return (
              <CarouselItemContainer>
                <ImageTag
                  width="100"
                  height="250"
                  alt={image.primaryText}
                  src={image.image}
                />
                <CarouselItemText fontSize="13px" color="#4176D9">
                  {image.primaryText}
                </CarouselItemText>
                <CarouselItemText fontSize="12px" color="#808080">
                  {image.secondaryText}
                </CarouselItemText>
              </CarouselItemContainer>
            );
          })}
        </Carousel>
      </CarouselContainer>
    </SimilarProductMainDiv>
  );
}

export default SimilarProduct;
