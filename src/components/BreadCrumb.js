import React from "react";
import styled from "styled-components";
import { device } from "../utils/mediaUtil";

const BreadCrumbMainDiv = styled.div`
  color: #808080;
  font-size: 12px;
  cursor: pointer;
  display: none;
  @media ${device.tablet} {
    display: flex;
  }
`;

const BreadCrumbContent = styled.span`
  margin-left: 1%;
  margin-right: 1%;
`;

const breadCrumbNav = ["Home", "IAS Study Material", "IAS Toppers Samanya..."];

function BreadCrumb() {
  return (
    <BreadCrumbMainDiv>
      {breadCrumbNav.map((value, index) => {
        return (
          <>
            <BreadCrumbContent key={index}>{value}</BreadCrumbContent>
            {index === breadCrumbNav.length - 1 ? "" : "  >  "}
          </>
        );
      })}
    </BreadCrumbMainDiv>
  );
}

export default BreadCrumb;
