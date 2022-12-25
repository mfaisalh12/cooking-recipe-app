import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Router from './src/router';

const CookingApp = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default CookingApp;
