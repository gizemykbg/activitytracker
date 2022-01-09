import React, {useContext} from 'react';
import {Input, Button} from 'react-native-elements';
import Spacer from './Spacer';
import {LocationContext} from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
  const {
    state: {recording, name, locations},
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  const [saveTrack] = useSaveTrack();

  return (
    <>
      <Spacer>
        <Input
          placeholder="Enter name"
          onChangeText={changeName}
          value={name}
        />
      </Spacer>

      <Spacer>
        {recording ? (
          <Button title="Stop" onPress={stopRecording} />
        ) : (
          <Button title="Record" onPress={startRecording} />
        )}
      </Spacer>

      <Spacer>
        {!recording && locations.length ? (
          <Button title="Save Recording" onPress={saveTrack} />
        ) : null}
      </Spacer>
    </>
  );
};

export default TrackForm;
