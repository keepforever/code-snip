import styled from "styled-components";
//import { keyframes } from "styled-components";

export const WelcomeTextContainer = styled.div`
  padding-bottom: 10px;
`

export const LoadSpinContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
`;

export const HeaderContainer = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 20 0;
`

export const CursorDiv = styled.div`
  cursor: pointer;
`
CursorDiv.displayName = "CursorDiv"
