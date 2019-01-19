import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { timeline, invitation, chat, house, crown_grey } from '../IconManager'

const TabBottom = ({ }) => {
    return (
        <View style={styles.container}>

            <View style={styles.viewTab}>
                <Image source={timeline} style={styles.timeline} resizeMode='contain' />
            </View>

            <View style={styles.viewTab}>
                <Image source={invitation} style={styles.invitation} resizeMode='contain' />
            </View>

            <View style={styles.viewTab}>
                <View style={styles.vHome}>
                    <Image source={house} style={styles.home} resizeMode='contain' />
                </View>
            </View>

            <View style={styles.viewTab}>
                <Image source={crown_grey} style={styles.crown} resizeMode='contain' />
            </View>

            <View style={styles.viewTab}>
                <View style={styles.chat}>
                    <Image source={chat} style={styles.chat} resizeMode='contain' />
                    <View style={styles.noti}>
                        <Text style={styles.number}>5</Text>
                    </View>
                </View>
            </View>

        </View>
    )
}

export default TabBottom

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F7F7F7',
    },
    viewTab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    timeline: {
        height: 25,
        width: 20
    },
    invitation: {
        height: 24,
        width: 23
    },
    home: {
        height: 23.5,
        width: 25
    },
    vHome: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 0.1
        elevation: 1,
    },
    crown: {
        height: 25,
        width: 27
    },
    chat: {
        height: 23,
        width: 23
    },
    noti: {
        position: 'absolute',
        top: -5,
        right: -15,
        width: 20,
        height: 20,
        backgroundColor: '#FF8900',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    number: {
        fontSize: 11,
        fontWeight: 'bold',
        color: 'white'
    }
});