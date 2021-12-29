import { Link } from "react-router-dom";
import styled from "styled-components";

export const GoCorner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 32px;
  height: 32px;
  overflow: hidden;
  top: 0;
  right: 0;
  background-color: #00838d;
  border-radius: 0 4px 0 32px;
`;
export const GoArrow = styled.div`
  margin-top: -4px;
  margin-right: -4px;
  color: white;
`;

export const TitleCard = styled.h3`
  color: #fff;
  font-size: 17px;
  line-height: 24px;
  font-weight: 700;
  margin-bottom: 4px;
`;

export const DescriptionCard = styled.p`
  font-size: 17px;
  font-weight: 400;
  line-height: 20px;
  color: #e6e9e9;

  &.small {
    font-size: 14px;
  }
`;

export const Card = styled(Link)`
  display: block;
  top: 0px;
  position: relative;
  max-width: 262px;
  background-color: #151515;
  border-radius: 4px;
  padding: 32px 24px;
  margin: 12px;
  text-decoration: none;
  z-index: 0;
  overflow: hidden;
  border: 1px solid #f2f8f9;

  &:hover {
    transition: all 0.2s ease-out;
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
    top: -4px;
    border: 1px solid #cccccc;
    background-color: white;

    ${TitleCard},${DescriptionCard} {
      color: black;
    }
  }

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: #00838d;
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(2);
    transform-origin: 50% 50%;
    transition: transform 0.15s ease-out;
  }

  &:hover:before {
    transform: scale(2.15);
  }
`;
