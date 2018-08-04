import styled from "styled-components";
//import { keyframes } from "styled-components";

export {
  DrawerToggleDiv,
  LogoContainer
} from './drawer'

export {
  ToolbarLinks,
  ToolbarHeader
}  from './toolbar'

export {
  ModalContainer,
  WelcomeContainer
} from './modal'


export const LayoutChildrenDiv = styled.div`
  margin-top: 56px;
`
export const ContainerAlpha = styled.div`
  color: 'white';
  display: flex;
  flex-direction: column;
  margin: 0px 5%;
`;

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const LinkContainer = styled.div`
  color: white;
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;
  font-size: x-large;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;
