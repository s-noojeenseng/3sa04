import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function Forecast(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.main}>{props.main}</Text>
            <Text style={styles.description}>{props.description}</Text>
            <Text style={styles.temp}>{props.temp} °C</Text>
            <Text style={styles.feels_like}>Feels like: {props.feels_like} °C</Text>
            <Text style={styles.temp_max}>max: {props.temp_max} °C</Text>
            <Text style={styles.temp_min}>min: {props.temp_min} °C</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    main: {
        textAlign: 'center',
        fontSize: 36,
        color: 'white',
        marginTop: 24,
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
        marginTop: 24,
    },
    feels_like: {
        textAlign: 'center',
        fontSize: 16,
        color: 'white',
    },
    temp_max: {
        textAlign: 'center',
        fontSize: 16,
        color: 'white',
        marginTop: 24,
    },
    temp_min: {
        textAlign: 'center',
        fontSize: 16,
        color: 'white',
    },
})