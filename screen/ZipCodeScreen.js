import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, View, Text, StyleSheet, TouchableHighlight, ImageBackground, } from 'react-native'

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]

const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather', { zipCode: code })
    }}>
        <View style={styles.zipItem}>
            <Text style={styles.zipPlace}>{place}</Text>
            <Text style={styles.zipCode}>{code}</Text>
        </View>
    </TouchableHighlight>
)

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <ImageBackground source={require('../home.jpg')} style={styles.image}>
            <FlatList
                data={availableZipItems}
                keyExtractor={item => item.code}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
            />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 5,
    },
    zipPlace: {
        flex: 1,
        fontSize: 16,
        textAlign: 'left',
        marginLeft: 20,
        color:"#000000",
    },
    zipCode: {
        flex: 1,
        fontSize: 16,
        textAlign: 'right',
        marginRight: 20,
    },
    image: {
        width: '100%',
        height: '100%',
    },
})