import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native'

import Header from './src/components/Header'
import Reward from './src/components/Reward'
import Journal from './src/components/Journal'
import TabBottom from './src/components/TabBottom'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <ScrollView style={styles.container}>

          <Header />
          <Reward />
          <Journal />

        </ScrollView >

        <TabBottom />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
})
