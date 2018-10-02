import React from 'react';
import { LoadSpinContainer } from '../../components/styled/'
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import {
  ModalContainer,
  WelcomeContainer,
  HelpContainer
} from "../../components/styled";
import OuterSpace from "../../components/outer-space";

const IsSubmittingView = ( props ) => {

  return (
    <ModalContainer>
      <OuterSpace>
        <HelpContainer>
          <LoadSpinContainer>
            <div style={{ padding: 10, marginBottom: 10}}>
              <Typography variant="subheading" color="secondary">
                <strong>
                  Note: This site is hosted on two separate free services and
                  sometimes they can be slow or fail. If you experience a
                  login wait time greater than six seconds, refresh the page
                  to try again.
                </strong>
              </Typography>
            </div>
            <CircularProgress thickness={7} />;
          </LoadSpinContainer>
        </HelpContainer>
      </OuterSpace>
    </ModalContainer>
  )
};

export default IsSubmittingView;
