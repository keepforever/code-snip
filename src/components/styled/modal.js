import styled from "styled-components";
//import { keyframes } from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  background-color: black;
  top: 50%;
  left: 50%;
  height: 100%;
  width: 100%;
  transform: translate(-50%, -50%);
`;

export const WelcomeContainer = styled.div`
  position: fixed;
  max-width: 500px;
  top: 50%;
  left: 50%;
  width: 65%;
  transform: translate(-50%, -50%);
  ${'' /* max-width: 75%; */}
  max-height: 85%;
  background: rgba(0,0,0,0.3);
`;

export const HelpContainer = styled.div`
  position: fixed;
  max-width: 400px;
  top: 50%;
  left: 50%;
  width: 65%;
  transform: translate(-50%, -50%);
  ${'' /* max-width: 75%; */}
  max-height: 89%;
  background: rgba(0,0,0,0.5);
  /* let it scroll */
  overflow: auto;

  @media (max-width: 455px) {
    width: 92%;
  }
`;
