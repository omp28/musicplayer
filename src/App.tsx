import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';
import {setupPlayer, addTracks} from '../musicPLayerService';

export default function App() {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  async function setup() {
    let isSetup = await setupPlayer();
    if (isSetup) {
      await addTracks();
    }
    setIsPlayerReady(true);
  }

  useEffect(() => {
    setup();
  }, []);

  if (!isPlayerReady) {
    return (
      <View>
        <Text>Loading...</Text>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View>
      <Text className=" text-red-900">App </Text>
    </View>
  );
}
