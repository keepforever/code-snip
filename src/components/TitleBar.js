import React from 'react';
import Typography from "@material-ui/core/Typography";
import { WelcomeTextContainer } from './styled'

const TitleBar = ( { title } ) => {

  return (
    <WelcomeTextContainer>
      <Typography variant="display1" color="secondary">
        <strong>{title}</strong>
      </Typography>
    </WelcomeTextContainer>
  )
};

export default TitleBar;
