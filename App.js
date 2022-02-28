import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { StyleSheet } from 'react-native';
import Home from './screens/Home';
import Home2 from './screens/Home2';
import Api1 from './screens/Api1';
import Api2 from './screens/Api2';
const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator options="false">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Home2" component={Home2} />
    </Stack.Navigator>




  </NavigationContainer>
);
const styles = StyleSheet.create({
  layout: { flex: 1, justifyContent: 'center', padding: 8, },
  title: { margin: 24, fontSize: 18, fontWeight: 'bold', textAlign: 'center', },
});
export default App;