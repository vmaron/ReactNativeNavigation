import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CardSection} from "./CardSection";
import {Button} from "./Button";
import Icon from "react-native-vector-icons/Ionicons";

export default class Drawer extends Component {

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{padding: 5}}>
          <Icon.Button
            name='md-close'
            size={26}
            color="#4F8EF7"
            backgroundColor="#FFF"
            onPress={() => this.props.navigation.closeDrawer()}
          />
        </View>
        <View style={styles.top}>
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
        <View style={styles.bottom}>
          <CardSection>
            <View style={{padding: 5}}>
              <Icon.Button
                name='md-power'
                size={26}
                color="#4F8EF7"
                backgroundColor="#FFF"
                onPress={() => this.props.navigation.closeDrawer()}
              />
            </View>
          </CardSection>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    marginVertical: 20,
  },
  container: {
    flex:1,
    backgroundColor: '#FFF',
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  top: {
    flex: 0.5,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bottom: {
    flex: 0.5,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 10
  }
});
