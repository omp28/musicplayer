import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player';
import {playbackService} from './musicPLayerService';

AppRegistry.registerComponent(appName, () => App);
// below line is added to register the playback service with the track player module
TrackPlayer.registerPlaybackService(() => playbackService);
