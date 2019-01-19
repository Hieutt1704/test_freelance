import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { ocean, heart, comment, chat } from '../IconManager';

const ItemJournal = ({ item }) => {
    return (
        <View style={styles.container}>

            <Image source={ocean} style={styles.image} />

            <Text style={styles.content} numberOfLines={1} ellipsizeMode='tail'>
                Come back home
            </Text>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={heart} style={styles.icon} resizeMode='contain' />
                <Text style={styles.number}>12.300</Text>

                <Image source={chat} style={styles.icon} resizeMode='contain' />
                <Text style={styles.number}>12.300</Text>

                <View style={{ flex: 1 }} />
                <Text style={styles.date}>07/12/2018</Text>
            </View>
        </View>
    )
}

export default ItemJournal

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
    },
    image: {
        width: '100%',
        height: 175,
        borderRadius: 5
    },
    content: {
        fontSize: 16, color: 'black',
        marginVertical: 5
    },
    icon: {
        marginRight: 3,
        height: 18,
        width: 20
    },
    number: {
        marginRight: 40,
        fontSize: 12,
        color: 'black'
    },
    date: {
        fontSize: 12,
        color: '#707070'
    }
});
