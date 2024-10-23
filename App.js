import React from 'react';
import App from './src/App';
import { OktoProvider } from 'okto-sdk-react-native';
import { OKTO_CLIENT_API } from '@env';
import { BuildType } from 'okto-sdk-react-native';

export default function AppMain() {
  return (
    <OktoProvider apiKey={"dcece6f3-68d3-4ca8-b5eb-e14d4a0dac36"} buildType={BuildType.SANDBOX}>
      <App />
    </OktoProvider>
  );
}
