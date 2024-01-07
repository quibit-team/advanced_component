/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

/**
 * @format
 */
import 'react-native-gesture-handler'
import 'react-native-image-keyboard'

import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'
import AppProvider from './AppProvider'
import './src/locales/i18n'
window.Buffer = window.Buffer || require('buffer').Buffer

AppRegistry.registerComponent(appName, () => AppProvider)
