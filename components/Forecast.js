import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function Forecast(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.main}>{props.main}</Text>
            <Text style={styles.description}>{props.description}</Text>
            <Text style={styles.temp}>{props.temp} °C</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    main: {
        textAlign: 'center',
        fontSize: 36,
        color: 'white',
    },
    description: {
        textAlign: 'center',
        fontSize: 16,
        color: 'white',
    },
    temp: {
        textAlign: 'center',
        fontSize: 36,
        color: 'white',
    }
})