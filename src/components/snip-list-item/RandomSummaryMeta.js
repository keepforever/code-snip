import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";

class RandomSummaryMeta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      randOne: props.soup[Math.floor(Math.random() * props.soup.length)],
      randTwo: props.soup[Math.floor(Math.random() * props.soup.length)],
      randThree: props.soup[Math.floor(Math.random() * props.soup.length)]
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 3000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    const { soup } = this.props;
    const randOne = soup[Math.floor(Math.random() * soup.length)];
    const randTwo = soup[Math.floor(Math.random() * soup.length)];
    const randThree = soup[Math.floor(Math.random() * soup.length)];
    this.setState({
      date: new Date(),
      randOne,
      randTwo,
      randThree
    });
  }

  render() {
    const { randOne, randTwo, randThree } = this.state;
    return (
      <div style={styles.container}>
        <div style={styles.listMeta}>
          <Typography
            variant="body2"
            color="secondary"
          >
            {randOne}
          </Typography>
        </div>
        <div style={styles.listMeta}>
          <Typography
            variant="body2"
            color="secondary"
            >
            {randTwo}
          </Typography>
        </div>
        <div style={styles.listMeta}>
          <Typography
            variant="body2"
            color="secondary"
            >
            {randThree}
          </Typography>
        </div>
      </div>
    );
  }
}

export default RandomSummaryMeta;

const styles = {
  listMeta: {
    paddingRight: 13
  },
  container:{
    display: 'flex',
    maxHeight: 30,
    maxWidth: '100%',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    overflowX: 'hidden'
  }
}
