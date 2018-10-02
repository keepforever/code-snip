import React, { Component } from "react";
//material-ui
import TextField from "@material-ui/core/TextField";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
//locals
import {
  SearchHeaderContainer, SearchHelpContainer, SearchResultsContainer
} from './styled'
import { ContainerAlpha, SearchTextContainer, CursorDiv } from "../../components/styled";
import SearchSnipListItem from "../../components/snip-list-item/SearchSnipListItem";
// utils
import { clearLog } from '../../utils'

class SearchSnipsView extends Component {

  render() {

    const {
      toggleHelp, search, textChange, match, snipSoup, snips
    } = this.props

    return (

      <ContainerAlpha>
        <AppBar position="static" color="default">
          <SearchHeaderContainer >
          <Typography variant="title" color="secondary">
              Search Snips
          </Typography>
          <Typography variant="body2" color="secondary">
              <CursorDiv onClick={() => toggleHelp()}>
                help
              </CursorDiv>
          </Typography>
        </SearchHeaderContainer>
        </AppBar>
          <SearchTextContainer>
            <AppBar position="static" color="default">
              <TextField
                fullWidth
                autoFocus
                id="search-input"
                label="Snarf for snips..."
                value={search}
                onChange={(event) => {
                  textChange("search", event)
                }}
                margin="normal"
              />
            </AppBar>
          </SearchTextContainer>
        <div>
          {match.map((matchIndex, index) => {
            return (
              <React.Fragment key={index}>
                <SearchSnipListItem
                  soup={snipSoup[matchIndex].bagOfWords}
                  snip={snips[matchIndex]} />
                </React.Fragment>
              );
            })}
        </div>
      </ContainerAlpha>
    );
  }
}

export default SearchSnipsView


//
// <ContainerAlpha>
//   <AppBar position="static" color="default">
//     <div style={styles.headerContainer} >
//     <Typography variant="title" color="secondary">
//         Search Snips
//     </Typography>
//     <Typography variant="body2" color="secondary">
//         <div
//           style={{cursor: 'pointer'}}
//           onClick={() => toggleHelp()}
//         >
//           help
//         </div>
//     </Typography>
//   </div>
//   </AppBar>
//     <SearchTextContainer>
//       <AppBar position="static" color="default">
//         <TextField
//           fullWidth
//           autoFocus
//           id="search-input"
//           label="Snarf for snips..."
//           value={search}
//           onChange={(event) => {
//             textChange("search", event)
//           }}
//           margin="normal"
//         />
//       </AppBar>
//     </SearchTextContainer>
//   <div className="container">
//     {match.map((matchIndex, index) => {
//       return (
//         <React.Fragment key={index}>
//           <SnipListItem
//             soup={snipSoup[matchIndex].bagOfWords}
//             snip={snips[matchIndex]} />
//         </React.Fragment>
//       );
//     })}
//   </div>
// </ContainerAlpha>
//
// const styles = {
//   button: {
//     width: 200,
//     backgroundColor: "black"
//   },
//   headerContainer: {
//     height: 50,
//     display: "flex",
//     flexDirection: 'row',
//     alignItems: "center",
//     justifyContent: "space-around",
//     margin: "20 0"
//   },
//   helpContainer: {
//     height: 50,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     margin: "20 0",
//     cursor: 'pointer'
//   },
//   container: {
//     height: 50,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     margin: "20 0",
//   }
// };
