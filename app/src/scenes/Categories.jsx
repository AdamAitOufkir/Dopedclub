import React from "react";
import styled, { keyframes } from "styled-components";

const aitfAnimation = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
`;


const Span = styled.span`
  font: 700 4em/1 'Oswald', sans-serif;
  letter-spacing: 0;
  padding: .25em 0 .325em;
  display: block;
  margin: 0 auto;
  text-shadow: 0 0 20px rgba(255, 255, 255, .5);

  background: url(https://i.ibb.co/QM42g0Q/yellowcategory.png) repeat-y;
  -webkit-background-clip: text;
  background-clip: text;

  -webkit-text-fill-color: transparent;
  animation: ${aitfAnimation} 40s linear infinite;

  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;

  @media screen and (max-width: 768px) {
    font-size: 2em; 
  }
`;

const Categories = ({ Title }) => {
  return (
        <Span>{Title}</Span>
  );
};

export default Categories;
