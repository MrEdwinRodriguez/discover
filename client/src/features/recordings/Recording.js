import React, { Component, useState } from 'react';
import {saveRecording } from './recordingSlice';
import { useDispatch } from 'react-redux';
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'

const Recording = () => {
	const [recordState, setRecordState] = useState(null);
	const [show, setShow] = useState(false);
	const [url, setUrl] = useState(null);
	const dispatch = useDispatch();

	const start = () => {
		setRecordState(RecordState.START)
	};

	const stop = () => {
		setRecordState(RecordState.STOP);
		setShow(true);
	}
	//audioData contains blob and blobUrl
	const onStop = (audioData) => {
		console.log('audioData', audioData);
		setUrl(audioData.url)
		dispatch(saveRecording(audioData));
	}
  	return (
		<div>
			<AudioReactRecorder state={recordState} onStop={onStop} />
			<button onClick={start}>Start</button>
			<button onClick={stop}>Stop</button>
			{ show && url ? <audio id='audio' controls src={url} /> : ""}
		</div>
	)
}

export default Recording