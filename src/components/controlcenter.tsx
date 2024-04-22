import {View, Text} from 'react-native';
import React from 'react';
import TrackPlayer, {usePlaybackState} from 'react-native-track-player';
import {playbackService} from '../../musicPLayerService';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {State} from 'react-native-track-player';

const controlcenter = () => {
  const playBackState = usePlaybackState();

  const skipToNext = async () => {
    await TrackPlayer.skipToNext();
  };
  const skipToPrevious = async () => {
    await TrackPlayer.skipToPrevious();
  };
  const togglePlayback = async (playback: State) => {
    const currentTrack = await TrackPlayer.getCurrentTrack();

    if (currentTrack !== null) {
      if (playback === State.Paused || playback === State.Ready) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };

  return (
    <View>
      <Text className=" text-3xl text-red-600">controlcenter</Text>
      <View className=" flex-row">
        <Icon
          name="skip-previous"
          size={45}
          onPress={skipToPrevious}
          color="black"
        />
        {playBackState === State.Playing ? (
          <Icon
            name="pause"
            size={45}
            onPress={() => togglePlayback(playBackState)}
            color="black"
          />
        ) : (
          <Icon
            name="play-arrow"
            size={45}
            onPress={() => togglePlayback(playBackState)}
            color="black"
          />
        )}
        <Icon name="skip-next" size={45} onPress={skipToNext} color="black" />
      </View>
    </View>
  );
};

export default controlcenter;
