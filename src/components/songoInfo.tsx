import {View, Text} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {Track} from 'react-native-track-player';

type songInfoProps = PropsWithChildren<{
  track: Track | null | undefined;
}>;

export default function songoInfo({track}: songInfoProps) {
  return (
    <View>
      <Text>songoInfo</Text>
      <Text>{track?.title}</Text>
      <Text>{track?.artist}</Text>
      <Text>{track?.album}</Text>
    </View>
  );
}
