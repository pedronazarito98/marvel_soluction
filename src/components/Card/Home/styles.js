import { Link } from "react-router-dom";
import styled from "styled-components";

export const GoCorner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 2rem;
  height: 2rem;
  overflow: hidden;
  top: 0;
  right: 0;
  background-color: #00838d;
  border-radius: 0 0.25rem 0 2rem;
`;
export const GoArrow = styled.div`
  margin-top: -0.25rem;
  margin-right: -0.25rem;
  color: white;
`;

export const TitleCard = styled.h3`
  color: #fff;
  font-size: 1.063rem;
  line-height: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
`;

export const DescriptionCard = styled.p`
  font-size: 1.063rem;
  font-weight: 400;
  line-height: 1.25rem;
  color: #e6e9e9;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; //? Define quantas linhas
  -webkit-box-orient: vertical;
  &.small {
    font-size: 0.875rem;
  }
`;

export const Card = styled(Link)`
  display: block;
  top: 0px;
  position: relative;
  max-width: 16.375rem;
  background-color: #151515;
  border-radius: 0.25rem;
  padding: 2rem 1.5rem;
  margin: 0.75rem 0;
  text-decoration: none;
  z-index: 0;
  overflow: hidden;
  border: 0.063rem solid #f2f8f9;

  

  transition: background-color 1s;

  &:hover {
    transition: all 0.2s ease-out;
    box-shadow: 0rem 0.25rem 0.5rem rgba(38, 38, 38, 0.2);
    top: -0.25rem;
    border: 0.063rem solid #cccccc;
    background-color: white;

    ${TitleCard},${DescriptionCard} {
      color: black;
    }
  }

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -1rem;
    right: -1rem;
    background: #00838d;
    height: 2rem;
    width: 2rem;
    border-radius: 2rem;
    transform: scale(2);
    transform-origin: 50% 50%;
    transition: transform 0.15s ease-out;
  }

  &:hover:before {
    transform: scale(2.15);
  }

  @media (max-width: 768px) {
    max-width: 15rem;
  }
`;
