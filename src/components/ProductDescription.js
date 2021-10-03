import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import BreadCrumb from "./BreadCrumb";
import starRating from "../assets/images/star_rating.png";
import upscLogo from "../assets/images/upsc_logo.png";
import { device } from "../utils/mediaUtil";

const ProductDescriptionMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  margin-left: 2%;
  width: 650px;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "column")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "22px")};
  margin: ${(props) => (props.margin ? props.margin : "1% 1%")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "0")};
  color: ${(props) => (props.color ? props.color : "inherit")};
  position: ${(props) => (props.isAbsolute ? "absolute" : "static")};
  left: ${(props) => (props.left ? props.left : "inherit")};
`;

const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin-left: 1%;
  height: 30px;
`;

const ImageTag = styled.img`
  display: flex;
  flex: 1 1 auto;
  width: ${(props) => (props.width ? props.width : "inherit")};
  height: ${(props) => (props.height ? props.height : "inherit")};
  position: ${(props) => (props.isAbsolute ? "absolute" : "static")};
`;

const IntervalContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60px;
  height: 60px;
  background-color: #d94633;
  border-radius: 5px;
  margin: 1% 1%;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledButton = styled.div`
  display: flex;
  width: 150px;
  height: 50px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin: 1% 1%;
  border: 1px solid #4176d9;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? "#4176D9" : "#ffffff")};
  color: ${(props) => (props.isActive ? "#ffffff" : "#4176D9")};
`;

const HighlightContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const HighlightTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1% 1%;
`;

const UspContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  height: 150px;
`;

const UspTextContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 1% 1%;
  left: 100px;
  position: absolute;
  flex-direction: column;
`;

function ProductDescription({
  translation,
  btnEnglishActive,
  btnHindiActive,
  setTranslation
}) {
  return (
    <ProductDescriptionMainDiv>
      <BreadCrumb />
      <TextContent fontWeight="600">{translation.productHeading}</TextContent>
      <TextContent fontWeight="600" margin="0% 1% 1% 1%">
        {translation.productSubheading}
      </TextContent>
      <TextContent fontWeight="500" fontSize="20px" color="#808080">
        11 BOOKS
      </TextContent>
      <RatingContainer>
        <ImageTag isAbsolute src={starRating} width="50px" height="25px" />
        <TextContent
          isAbsolute
          left="60px"
          fontSize="11px"
          color="#808080"
          margin="7px 0px"
          fontWeight="500"
        >
          {translation.ratingText}
        </TextContent>
      </RatingContainer>
      <TextContent fontWeight="600" fontSize="20px" color="#6BA255">
        Extra ₹3000 off
      </TextContent>
      <TextContent direction="row" fontWeight="600" fontSize="25px">
        ₹13,999
        <TextContent
          margin="0% 2% 0%"
          fontWeight="600"
          fontSize="25px"
          color="#808080"
        >
          <del>₹16,999</del>
        </TextContent>
        <TextContent
          margin="0%"
          fontWeight="600"
          fontSize="25px"
          color="#6BA255"
        >
          17% Off
        </TextContent>
      </TextContent>
      <TextContent
        margin="2% 1% 1% 3%"
        fontWeight="600"
        fontSize="11px"
        color="#808080"
      >
        {translation.flashSaleText}
      </TextContent>
      <IntervalContainer>
        <TimeContainer>
          <TextContent color="#ffffff">52</TextContent>
          <TextContent fontSize="11" color="#ffffff">
            mins
          </TextContent>
        </TimeContainer>
        <TimeContainer>
          <TextContent color="#ffffff">25</TextContent>
          <TextContent fontSize="11" color="#ffffff">
            secs
          </TextContent>
        </TimeContainer>
      </IntervalContainer>
      <TextContent fontWeight="600" fontSize="15px" color="#808080">
        {translation.packagesAvailibility}
      </TextContent>
      <ButtonContainer>
        <StyledButton
          isActive={btnHindiActive}
          onClick={(e) => {
            e.stopPropagation();
            setTranslation("Hindi");
          }}
        >
          <TextContent>IAS हिंदी</TextContent>
        </StyledButton>
        <StyledButton
          isActive={btnEnglishActive}
          onClick={(e) => {
            e.stopPropagation();
            setTranslation("English");
          }}
        >
          <TextContent>IAS English</TextContent>
        </StyledButton>
      </ButtonContainer>
      <HighlightContainer>
        <TextContent fontWeight="600" fontSize="15px" color="#808080">
          {translation.highlightsHeading}
        </TextContent>
        <HighlightTextContainer>
          {translation.highlightsText.map((value) => {
            return (
              <TextContent margin="0.5% 1% 2%" fontWeight="600" fontSize="15px">
                * {value}
              </TextContent>
            );
          })}
        </HighlightTextContainer>
      </HighlightContainer>
      <UspContainer>
        <ImageTag isAbsolute src={upscLogo} width="100px" height="140px" />
        <UspTextContainer>
          {translation.uspHighlightsText.map((value) => {
            return (
              <TextContent margin="0.5% 1% 2%" fontWeight="600" fontSize="15px">
                {value}
              </TextContent>
            );
          })}
        </UspTextContainer>
      </UspContainer>
    </ProductDescriptionMainDiv>
  );
}

ProductDescription.propTypes = {
  translation: PropTypes.object,
  btnEnglishActive: PropTypes.bool,
  btnHindiActive: PropTypes.bool,
  setTranslation: PropTypes.func
};

export default ProductDescription;
