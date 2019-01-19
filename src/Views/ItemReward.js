import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { crow, gift } from '../IconManager'

const ItemReward = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>

                <View style={styles.crown}>
                    <Image style={styles.icon} source={crow} resizeMode='contain' />
                </View>

                <View style={styles.vContent}>
                    <Text style={styles.content}>One Day One Photo</Text>
                    <Text style={styles.date}>24:00:00</Text>
                </View>

                <Image source={gift} style={styles.gift} />
            </View>

            <View style={styles.bottom}>

                <View style={{ justifyContent: 'center' }}>
                    <Text style={styles.level}>Level</Text>
                    <View style={styles.vNumber}>
                        <Text style={styles.number}>7</Text>
                    </View>
                </View>

                <View style={styles.button}>
                    <Text style={styles.diary}>GO DIARY</Text>
                </View>

                <View style={[styles.button, { backgroundColor: '#4B74E6' }]}>
                    <Text style={styles.reward}>VIEW REWARD</Text>
                </View>

            </View>
        </View>
    )
}

export default ItemReward

const styles = StyleSheet.create({
    container: {
        height: 129,
        padding: 15,
        // borderColor: 'grey',
        // borderWidth: 0.5,
        borderRadius: 5,
        marginTop: 15,
        backgroundColor: 'white',
        marginHorizontal: 10,
        elevation: 1,
    },
    crown: {
        height: 35,
        width: 35,
        borderRadius: 17.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EFEFEF',
        marginRight: 40
    },
    icon: {
        height: 17,
        width: 25
    },
    vContent: {
        marginTop: 5,
        flex: 1
    },
    content: {
        color: 'black',
        fontSize: 18,
        fontWeight: '400'
    },
    date: {
        color: '#2E002F60',
        fontSize: 13
    },
    gift: {
        height: 61,
        width: 78,
        marginTop: 30
    },
    bottom: {
        flexDirection: "row",
        position: 'absolute',
        bottom: 15,
        left: 15,
        alignItems: 'flex-end'
    },
    level: {
        color: 'black',
        fontSize: 11,
        marginLeft: 3,
        marginBottom: 3
    },
    vNumber: {
        height: 35,
        width: 35,
        borderRadius: 17.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9C07BF',
        marginRight: 30
    },
    number: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    button: {
        flex: 1,
        // borderTopWidth: 0.1,
        borderRadius: 50,
        height: 35,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        elevation: 3,
    },
    diary: {
        color: 'black',
        fontSize: 13
    },
    reward: {
        color: 'white',
        fontSize: 13,
        fontWeight: 'bold'
    }
});
