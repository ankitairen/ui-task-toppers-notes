import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';
import { languageMap } from '../utils/i18n';
import { device } from '../utils/mediaUtil';
import desktopImage from '../assets/images/image_desktop.png';
import mobileImage from '../assets/images/image_mobile.png'
import Header from '../components/HeaderComponent';
import ProductImage from '../components/ProductImage';
import ProductDescription from '../components/ProductDescription';
import ProductReview from '../components/ProductReview';
import ProductRecommendation from '../components/ProductRecommendation';
import ProductHighlights from '../components/ProductHighlights';
import SimilarProduct from '../components/SimilarProducts';

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const ContentContainerDiv = styled.div`
  background-color: #ffffff;
  margin: 15px;
  width: 95%;
  height: 100%;
`;

const MainPanel = styled.div`
  display: flex;
  flex-direction: column;  
  padding: 25px;
  width: 100%;
  height: 100%;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;

function ProductContainer() {

  const [translation, setTranslation] = useState(languageMap.Hindi);

  const [btnHindiActive, setBtnHindiActive] = useState(true);

  const [btnEnglishActive, setBtnEnglishActive] = useState(false);
  
  return (
    <MainDiv>
      <Header logo={logo} />
      <ContentContainerDiv>
        <MainPanel>
            <ProductImage 
              desktopImage={desktopImage} 
              mobileImage={mobileImage} />
            <ProductDescription 
              translation={translation}
              btnHindiActive={btnHindiActive} 
              btnEnglishActive={btnEnglishActive}
              setTranslation={(type) => {
                switch (type) {
                  case 'English':
                    setTranslation(languageMap.English);
                    setBtnEnglishActive(true);
                    setBtnHindiActive(false);
                    break;
                  case 'Hindi':
                    setTranslation(languageMap.Hindi);
                    setBtnHindiActive(true);
                    setBtnEnglishActive(false);
                    break;
                }
              }}
            />
        </MainPanel>
        <ProductReview translation={translation} />
        <ProductRecommendation translation={translation} />
        <ProductHighlights translation={translation} />
        <SimilarProduct />
      </ContentContainerDiv>
    </MainDiv>
  );
}

export default ProductContainer;
