import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export default function Forecast(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{props.name}</Text>
            <Image
                source={{ uri: 'http://openweathermap.org/img/wn/' + props.icon + '@2x.png', }}
                style={styles.icon} />
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        fontSize: 36,
        color: 'white',
    },
    main: {
        fontSize: 28,
        color: 'white',
    },
    description: {
        fontSize: 16,
        color: 'white',
    },
    temp: {
        fontSize: 28,
        color: 'white',
        marginTop: 20,
    },
    feels_like: {
        fontSize: 16,
        color: 'white',
    },
    temp_max: {
        fontSize: 16,
        color: 'white',
        marginTop: 20,
    },
    temp_min: {
        fontSize: 16,
        color: 'white',
    },
    icon: {
        width: 60,
        height: 60,
    },
})