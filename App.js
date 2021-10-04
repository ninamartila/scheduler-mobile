import React from 'react';
import store from './src/store';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { DetailScheduler, HomeScheduler, ListScheduler } from './src/screens';
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeSceduler" component={HomeScheduler} options={{ headerShown: false }} />
          <Stack.Screen name="UPCOMING SCHEDULE" component={ListScheduler} />
          <Stack.Screen name="7 APRIL 2021" component={DetailScheduler} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
