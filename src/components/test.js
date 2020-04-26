import React, { Component } from 'react';
import { captureUserCamera,captureUserWindow} from './AppUtils';

const hasGetUserMedia =(navigator.getDisplayMedia || navigator.mediaDevices.getDisplayMedia|| navigator.getUserMedia);
export default class test extends Component {
    constructor(props) {
        super(props);    
        this.state = {
          recordVideo: null,
          src: null,
          uploadSuccess: null,
          uploading: false
        };

        this.requestUserMedia = this.requestUserMedia.bind(this);
        //this.captureUserCamera = this.captureUserCamera.bind(this);
        //this.captureUserWindow = this.captureUserWindow.bind(this);
      }
    
      componentDidMount() {
        if(!hasGetUserMedia) {
          alert("Your browser cannot stream from your webcam. Please switch to Chrome or Firefox.");
          return;
        }
        this.requestUserMedia();
      }
    
      requestUserMedia() {
        console.log('requestUserMedia');
        captureUserCamera((camera) => {
          this.setState({ src: camera });
          console.log('setting state', this.state)
        });

        captureUserWindow((stream) => {
           console.log('yeah');
        });

      }    
    render() {
        return(
            <div >    
                <h1>Video+Screen recording using RecordRTC</h1>                                                 
            </div>
        )
      }    
}
