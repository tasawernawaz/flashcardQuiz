import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { navyBlueDark, red } from '../utils/colors'

export default function HeaderText ({ headerText }) {
  return (
    <View style={{borderBottomColor: navyBlueDark, borderBottomWidth:3}}>
      <Text style={styles.header}>
        {headerText}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    alignSelf: 'center',
    paddingTop: 50,
    paddingBottom: 10,
    color: navyBlueDark,
    fontSize: 20,
  }
})

