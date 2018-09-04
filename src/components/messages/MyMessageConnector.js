import React, { Component } from 'react';
import MyViewMessages from './MyViewMessages'
import { clearLog } from "../../utils";

class MyMessageConnector extends Component {
  state = {
    isSubscribed: false
  }
  unsubscribe = () => {
    return null
  }
  render () {
    // use this pattern if a message thread is to be identified or quarantined
    // to, say, a specific listing or 'chatroom'
    // const {
    //   match: {
    //     params: { listingId }
    //   }
    // } = this.props;
    const { isSubscribed } = this.state
    
    return (
      <MyViewMessages listingId="listingId property">
        {({ loading, messages, subscribe }) => {
          if (loading) {
            return <div>...loading</div>;
          }
          if(!isSubscribed){
            subscribe()
            this.setState({
              isSubscribed: true
            })
            clearLog("isSubscribed to True", 'OK')
          }
          // if (!this.unsubscribe) {
          //   clearLog('!this.unsubscribe', 'xxx')
          //   this.unsubscribe = subscribe();
          // }
          return (
            <div>
              {messages.map((m, i) => <div key={`${i}-lm`}>{m.text}</div>)}
              <div>Input bar</div>
            </div>
          );
        }}
      </MyViewMessages>
    );
  }
}

export default MyMessageConnector
