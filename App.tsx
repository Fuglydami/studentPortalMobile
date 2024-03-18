import 'react-native-gesture-handler';
import React from 'react';

import {AppProvider} from './mobile/hooks/useGlobalContext';
import Navigation from './mobile/pages';

import {AlertNotificationRoot} from 'react-native-alert-notification';

function App(): JSX.Element {
  return (
    <AppProvider>
      <AlertNotificationRoot>
        <Navigation />
      </AlertNotificationRoot>
    </AppProvider>
  );
}

export default App;
