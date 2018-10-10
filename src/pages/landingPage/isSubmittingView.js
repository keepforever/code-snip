import React from 'react';
//material-ui
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
//local
import MoOutHelp from '../../components/MoOutHelp'


const IsSubmittingView = ( props ) => {

  return (
    <MoOutHelp>
      <div
        style={{
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: 400
        }}
        >
          <div style={{ padding: 10, marginBottom: 10}}>
            <Typography variant="subheading" color="secondary">
              <strong>
                Note: This site is hosted on two separate free services and
                sometimes they can be slow or fail. If you experience a
                login wait time greater than 30 seconds, refresh the page
                to try again.
              </strong>
            </Typography>
          </div>
          <CircularProgress thickness={7} />;
        </div>
    </MoOutHelp>
  )
};

export default IsSubmittingView;
