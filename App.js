import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { StackNavigator, DrawerNavigator, NavigationActions } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator/>
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

class MenuPage extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>This is a menu page!</Text>
        <Button onPress={() => { this.props.navigation.navigate('InnerMenuPage') }} title='Next'/>
        <Button onPress={() => { this.props.navigation.goBack() }} title='Back'/>
      </View>
    )
  }
}

class InnerMenuPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is an inner menu page!</Text>
        <TextInput>Type something here.</TextInput>
        <Button onPress={() => { this.props.navigation.goBack() }} title='Back'/>
      </View>
    )
  }
}

class HomePage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the home page.</Text>
        <Button onPress={() => { this.props.navigation.navigate('DrawerOpen') }} title='Open Drawer'/>
      </View>
    )
  }
}

class DrawerMenu extends React.Component {
  render() {
    return (
      <View>
        <Button title='Home' onPress={() => this.props.navigation.reset({
          index: 0,
          actions: [NavigationActions.navigate('Home')]
        })}/>
        <Button title='MenuPage' onPress={() => this.props.navigation.navigate('MenuPage')}/>
      </View>
    )
  }
}

const DrawerStack = DrawerNavigator({
  'HomePage': { screen: HomePage },
}, {
  contentComponent: DrawerMenu
})

const AppNavigator = StackNavigator({
  'Home': { screen: DrawerStack },
  'MenuPage': { screen: MenuPage },
  'InnerMenuPage': { screen: InnerMenuPage }
})
