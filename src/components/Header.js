import React, { Component } from 'react'
import { Image, StyleSheet, Text, View, Dimensions, ImageBackground } from 'react-native'

import { BoxShadow } from 'react-native-shadow'
import LinearGradient from 'react-native-linear-gradient'
import { winged_heart, avatar, cup, cloud, star, background } from '../IconManager'

const { height, width } = Dimensions.get('window')

const ButtonHeader = ({ icon, text }) => {
  return (
    <LinearGradient
      colors={['#4776E6', '#E5F7FF', '#427BE8', '#74D2FC', '#4B74E6']}
      style={styles.viewborder}
      start={{ x: 0.25, y: 0.75 }}
      end={{ x: 0.75, y: 0.25 }}
    >
      <View style={styles.buttonHeader}>
        <Image resizeMode='contain' source={icon} style={styles.iconButton} />
        <Text style={styles.textButton}>{text}</Text>
      </View>
    </LinearGradient>
  )
}

const AvatarFriend = ({ item }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image source={avatar} style={styles.avatar} />
      <Text style={styles.name}>Name</Text>
    </View>
  )
}

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      friends: [1, 2, 3, 4]
    }
  }

  render() {
    const { friends } = this.state
    return (
      <View style={styles.container}>

        <ImageBackground source={background} style={styles.imageBackground}>

          <View style={styles.topBar}>

            <View style={{ alignItems: 'center' }}>
              <Image resizeMode='contain' source={winged_heart} style={styles.iwingedHeart} />
              <Text style={styles.checkIn}>Check In</Text>
            </View>

            <Text style={styles.title}>Sprout Diary</Text>

            <View style={styles.avatar}>
              <Image source={avatar} style={styles.avatar} />
              <View style={styles.noti}>
                <Text style={styles.notiNumber}>5</Text>
              </View>
            </View>

          </View>

          <View style={styles.vButton}>
            <ButtonHeader icon={cup} text={123456} />
            <View style={{ width: 10 }} />
            <ButtonHeader icon={cloud} text={123456} />
            <View style={{ width: 10 }} />
            <ButtonHeader icon={star} text={123456} />
          </View>

          <Text style={styles.newFriends}>New Friends</Text>


          <BoxShadow setting={shadowOpt}>
            <View style={styles.vFriends}>

              <View style={{ alignItems: 'center' }}>

                <LinearGradient
                  colors={['#05A7F3', '#1C97EF', '#3783EA', '#4579E7', '#4B74E6']}
                  style={styles.viewAdd} start={{ x: 0.25, y: 0.75 }}
                  end={{ x: 0.75, y: 0.25 }}
                >
                  <Text style={styles.textAdd}>+</Text>
                </LinearGradient >

                <Text style={styles.name}>Add</Text>
              </View>

              {friends.map((item, index) =>
                <AvatarFriend key={index} item={item} />
              )}

            </View>
          </BoxShadow>

        </ImageBackground>

        <View style={styles.buttonMemory}>
          <Text style={styles.textMemmory}>My Journal, I Grow, My Best Memory</Text>
        </View>

        <Text style={styles.reward}>Complete the tasks to gain reward</Text>


      </View>
    )
  }
}

const shadowOpt = {
  width: width - 20,
  height: 100,
  color: "#000",
  side: 'botom',
  border: 3,
  radius: 5,
  opacity: 0.1,
  y: 2,
}

const styles = StyleSheet.create({
  container: {
    // marginHorizontal: 10,
    // marginTop: 10,
  },
  imageBackground: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  iwingedHeart: {
    height: 22,
    width: 50
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  checkIn: {
    fontSize: 11,
    color: '#707070'
  },
  title: {
    color: '#4B74E6',
    fontSize: 26
  },
  noti: {
    position: 'absolute',
    top: 5,
    right: -5,
    width: 20,
    height: 20,
    backgroundColor: '#FF8900',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  notiNumber: {
    fontSize: 11,
    fontWeight: 'bold',
    color: 'white'
  },
  vButton: {
    flexDirection: 'row',
    height: 32,
    marginTop: 5
  },
  viewborder: {
    flex: 1,
    borderRadius: 50,
    padding: 3
  },
  buttonHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 10
  },
  iconButton: {
    height: 13,
    width: 16,
    marginRight: 10
  },
  textButton: {
    flex: 1,
    fontSize: 12,
    color: '#620404'
  },
  newFriends: {
    textAlign: 'center',
    fontSize: 14,
    color: '#707070',
    marginVertical: 5
  },
  vFriends: {
    height: 100,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'grey',
    // borderWidth: 0.1,
    // elevation: 3,
    borderRadius: 5,
    backgroundColor: 'white'
  },
  viewAdd: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#05A7F3',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textAdd: {
    color: 'white',
    fontSize: 36
  },
  name: {
    color: 'black',
    fontSize: 12,
    marginTop: 5,
  },
  buttonMemory: {
    backgroundColor: '#4B74E6',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    marginVertical: 15,
    marginHorizontal: 10,
  },
  textMemmory: {
    color: 'white',
    fontSize: 13
  },
  reward: {
    textAlign: 'center',
    fontSize: 14,
    color: '#707070'
  }
})
