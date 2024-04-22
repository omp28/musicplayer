import {View, Text} from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';
import {useProgress} from 'react-native-track-player';

export default function songSlider() {
  const {position, duration} = useProgress();

  return (
    <View>
      <Text>songSlider</Text>
      <Slider
        value={position}
        minimumValue={0}
        maximumValue={duration}
        maximumTrackTintColor="#000000"
        minimumTrackTintColor="#FFFFFF"
      />
      <View>
        <Text>{new Date(position * 1000).toISOString().substr(15, 19)}</Text>
        <Text>
          {new Date((duration - position) * 1000).toISOString().substr(15, 19)}
        </Text>
      </View>
    </View>
  );
}
