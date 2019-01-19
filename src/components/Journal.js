import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { ItemJournal } from '../Views/ViewManagers'

export default class Journal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            journals: [1, 2, 3, 4, 5]
        }
    }

    render() {
        const { journals } = this.state
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    My Journal
                </Text>

                {journals.map((item, index) =>
                    <ItemJournal key={index} item={item} />
                )}

                <View style={styles.vButton}>
                    <View style={styles.button}>
                        <Text style={styles.textButton}>VIEW MORE</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginVertical: 15
    },
    title: {
        color: 'black',
        fontSize: 18,
        fontWeight: '400'
    },
    vButton: {
        flex: 1,
        alignItems: 'center'
    },
    button: {
        height: 35,
        width: 114,
        marginTop: 15,
        // borderWidth: 0.1,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 3,
    },
    textButton: {
        fontSize: 13,
        color: '#446FE5'
    }
})