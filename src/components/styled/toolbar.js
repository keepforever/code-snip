import styled from "styled-components";
//import { keyframes } from "styled-components";

export const ToolbarHeader = styled.header`
  color: white;
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;
`;

export const ToolbarLinks = styled.div`
  @media (max-width: 500px) {
    display: none;
  }
`;
