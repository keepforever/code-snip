import styled from "styled-components";
//import { keyframes } from "styled-components";

export {
  LoadSpinContainer,
  HeaderContainer,
  CursorDiv,
  WelcomeTextContainer
} from './shared'


export {
  DrawerToggleDiv,
  LogoContainer
} from './drawer'

export {
  KeepFormWidthDiv
} from './addSnip'

export {
  FormInputDiv,
  FormOuterContainer
} from './form'

export {
  LayoutContainer_A,
  LayoutContainer_B,
  HideDivWhenSmall,
  ShowDivWhenSmall
} from './layout'


export {
  ToolbarLinks,
  ToolbarHeader
}  from './toolbar'

export {
  ModalContainer,
  WelcomeContainer,
  HelpContainer
} from './modal'

export {
  SearchTextContainer,
} from './search'


export const ContainerAlpha = styled.div`
  color: 'white';
  display: flex;
  flex-direction: column;
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
