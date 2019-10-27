import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HeaderButton from '../components/common/HeaderButton';
import {CardSection} from "../components/common/CardSection";
import {Button} from "../components/common/Button";

export default class Settings extends Component {

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <HeaderButton onPress={() => this.props.navigation.openDrawer()}/>
        <Text style={styles.header}>
          Settings Tab
        </Text>
        <CardSection>
          <Button onPress={() => navigate('Profile', {user: 'Tom'})}>
            Open Profile
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => navigate('Modal')}>
            Open Modal
          </Button>
        </CardSection>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    marginVertical: 20,
  },
});
