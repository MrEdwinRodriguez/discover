import React, { Component } from 'react'
 
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'
 
class Recording extends Component {
  constructor(props) {
    super(props)
 
    this.state = {
      recordState: null,
      show: false,
      url: null
    }
  }
 
  start = () => {
    this.setState({
      recordState: RecordState.START
    })
  }
 
  stop = () => {
    this.setState({
      recordState: RecordState.STOP
    })
    this.setState({
      show: true
    })
    // this.setState({
    //   show: true
    // })
  }
 
  //audioData contains blob and blobUrl
  onStop = (audioData) => {
    console.log('audioData', audioData)
    this.setState({
      url: audioData.url
    })
  }
 
  render() {
    const { recordState, show, url } = this.state
 
    return (
      <div>
        <AudioReactRecorder state={recordState} onStop={this.onStop} />
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
        { show && url ? <audio id='audio' controls src={url} /> : ""}
      </div>
    )
  }
}

export default Recording