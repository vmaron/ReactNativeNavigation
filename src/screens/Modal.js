import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HeaderButton from '../components/common/HeaderButton';
import {Button} from '../components/common/Button'
import {CardSection} from '../components/common/CardSection'


export default class Modal extends Component {

  render() {
    const {goBack} = this.props.navigation;
    return (
      <View style={styles.container}>
        <HeaderButton
          icon="md-close"
          onPress={() => goBack()}
        />
        <CardSection>
          <Text style={styles.header}>
            Hi, I'm a modal!
          </Text>
        </CardSection>
        <CardSection>
          <Button onPress={() => goBack()}>
            Close Me
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
