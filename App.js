import React from 'react';
import { createStackNavigator,createAppContainer } from 'react-navigation';
import Login from './src/components/screens/LoginScreen';
import Register from './src/components/screens/RegisterScreen';
import Home from './src/components/screens/HomeScreen';

export default class App extends React.Component {
  render() {
    const App = createAppContainer(AppStackNavigator);  
    return (
        <App/>
    );
  }
}
const AppStackNavigator = createStackNavigator({
  Login: { screen: Login, navigationOptions: { header: null, gesturesEnabled: false,}},
  Register: { screen: Register, navigationOptions: { header: null, gesturesEnabled: false, headerLeft: null, }},
  Home: { screen: Home, 
    navigationOptions: { 
      headerTitle:'Login Register App', 
      headerTitleStyle: {color: 'white', fontWeight: '100', fontSize: 15 },
      gesturesEnabled: false, 
      headerLeft: null,
      headerStyle: {
        backgroundColor: '#2980b9',
      },  
    }},
})