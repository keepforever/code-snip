import { Component } from 'react'
import ReactDOM from 'react-dom'

// 'portal' corrisponds to <div id='portal'></div> in the index.html file
const portalRoot = document.getElementById('portal')


class Portal extends Component {
  constructor(props) {
    super(props);

    this.el = document.createElement('div')
  }

  componentDidMount = () => {
    portalRoot.appendChild(this.el)
  }

  componentWillUnmount = () => {
    portalRoot.removeChild(this.el)
  }


  render () {
    const { children } = this.props
    return ReactDOM.createPortal(children, this.el);
  }
}

export default Portal
