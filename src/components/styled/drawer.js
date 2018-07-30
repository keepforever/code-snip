import styled from "styled-components";
//import { keyframes } from "styled-components";

export const LogoContainer = styled.div `
  color: white;
  margin-bottom: 30px;
`
export const DrawerToggleDiv = styled.div `
  width: 40px;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
  cursor: pointer;
  div {
    width: 90%;
    height: 3px;
    background-color: white;
  }

  @media (min-width: 500px) {
    display: none;
  }
`;
