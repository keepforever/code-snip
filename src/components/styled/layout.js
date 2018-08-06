import styled from "styled-components";
//import { keyframes } from "styled-components";

export const LayoutContainer_A = styled.div `

  @media (min-width: 632px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export const LayoutContainer_B = styled.div `
  
  @media (max-width: 855px) {
    display: none;
  }
`;
