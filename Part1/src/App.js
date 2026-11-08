// PE04 Part 1 - Profile Card with styled Text components
// Based on React Native in Action, Section 4.3 "Styling Text components" (Listings 4.15 - 4.20)
import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          {/* Circle with the user image (already done in HOS05) */}
          <View style={styles.cardImageContainer}>
            <Image style={styles.cardImage} source={require('../assets/images/user.png')} />
          </View>

          {/* NEW in PE04: name */}
          <View>
            <Text style={styles.cardName}>John Doe</Text>
          </View>

          {/* NEW in PE04: occupation with a bottom border (the underline) */}
          <View style={styles.cardOccupationContainer}>
            <Text style={styles.cardOccupation}>React Native Developer</Text>
          </View>

          {/* NEW in PE04: short profile description */}
          <View>
            <Text style={styles.cardDescription}>
              John is a really great JavaScript developer. He loves using JS to build React
              Native applications for iOS and Android.
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 300,
    height: 400,
  },
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    paddingTop: 15,
  },
  cardImage: {
    width: 80,
    height: 80,
  },

  // ---------- Text styles added in PE04 ----------
  // Name: white, bold, large, with a text shadow so it stands out
  cardName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 30,
    textShadowColor: 'black',
    textShadowOffset: { height: 2, width: 2 },
    textShadowRadius: 3,
  },
  // The bottom border of this container creates the line under the occupation
  cardOccupationContainer: {
    borderColor: 'black',
    borderBottomWidth: 3,
  },
  cardOccupation: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  // Description: italic, with side margins so the text wraps inside the card
  cardDescription: {
    fontStyle: 'italic',
    marginTop: 10,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10,
  },
});