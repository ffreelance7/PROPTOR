import React, { Component } from 'react'

export default class Webcam extends Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
            <video autoPlay muted src={this.props.src} />
        )
    }
}
