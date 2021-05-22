import React from 'react';
import { render } from 'react-dom';
import { StyleSheet} from 'react-native';

export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const TabNavigator= createBottomTabNavigator({
  faceBook: {screen:fb},
  instagram: {screen:insta}
  })
  const AppContainer= createAppContainer(TabNavigator);