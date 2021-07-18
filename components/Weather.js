import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, ImageBackground, View, StatusBar } from 'react-native'
import Forecast from './Forecast'

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        name: 'name',
        main: 'main',
        description: 'description',
        temp: 0,
        feels_like: 0,
        temp_min: 0,
        temp_max: 0,
    })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&appid=28c099ab9b2578c63715272399321025`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        name: json.name,
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp,
                        feels_like: json.main.feels_like,
                        temp_min: json.main.temp_min,
                        temp_max: json.main.temp_max,
                    });
                })
                .catch((error) => {
                    console.warn(error);
                })
        }
    }, [props.zipCode])

    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <View style={styles.container}>
                <Text style={styles.zipCode}>Zip Code is {props.zipCode}.</Text>
                <Forecast {...forecastInfo} />
                <StatusBar style="auto" />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        width: '100%',
        maxHeight: '60%'
    },
    zipCode: {
        fontSize: 20,
        color: 'white',
        marginTop: 20,
        textAlign: 'center',
    },
})