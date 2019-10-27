import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CardSection} from "./CardSection";
import {Button} from "./Button";

export default class Drawer extends Component {

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <CardSection>
            <Text style={styles.header}>
              Drawer
            </Text>
          </CardSection>
          <CardSection>
            <Button onPress={() => navigate('Modal')}>
              Open Modal
            </Button>
          </CardSection>
        </View>
        <View style={styles.bottomContainer}>
          <CardSection>
            <Button onPress={() => this.props.navigation.closeDrawer()} >
              Close Me
            </Button>
          </CardSection>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    marginVertical: 20,
  },
  topContainer: {
    flex: 0.5,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bottomContainer: {
    flex: 0.5,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 10
  }
});
