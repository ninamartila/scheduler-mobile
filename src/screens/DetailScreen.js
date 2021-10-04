import React from 'react'
import { View, Text, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function DetailScheduler() {
    return (
        <View style={{ padding: 20 }}>
            <View>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>STORE</Text>
                <View style={{ marginVertical: 15, padding: 15, backgroundColor: '#E4E7E6', borderRadius: 10, flexDirection: 'row' }}>
                    <Image
                        style={{ width: 55, height: 55, borderRadius: 10 }}
                        source={{ uri: 'https://i0.wp.com/dekoruma.blog/wp-content/uploads/2018/02/Arsitektur-Rumah-Mediterania-Yunani-505946695-1517481708192.jpg?resize=1000%2C791&ssl=1' }}
                    />
                    <View style={{ flex: 1, marginLeft: 15 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', paddingBottom: 5 }}>Mediterania Garden Residence</Text>
                        <Text style={{ color: '#979797' }}>Main Lobby, Apartement Mediterania Garden Recidance 1</Text>
                        <View style={{ marginTop: 10, width: 90, alignItems: 'center', paddingVertical: 5, borderWidth: 1, borderColor: 'red', borderRadius: 10 }}>
                            <Text style={{ color: 'red' }}>View Maps</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ paddingTop: 15 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>TIME SCHEDULE</Text>
                <View style={{ marginVertical: 15, padding: 15, backgroundColor: '#E4E7E6', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row', paddingVertical: 5, alignItems: 'center' }}>
                        <Ionicons name="ios-time-outline" color="black" size={16} />
                        <Text style={{ paddingLeft: 10, fontWeight: 'bold' }}>08.00 - 17.00</Text>
                    </View>
                </View>
            </View>
            <View style={{ paddingTop: 15 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>CLOCK IN</Text>
                <View style={{ marginVertical: 15, padding: 15, backgroundColor: '#E4E7E6', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row', paddingVertical: 5, alignItems: 'center' }}>
                        <Ionicons name="ios-barcode-outline" color="black" size={20} />
                        <Text style={{ paddingLeft: 10, fontWeight: 'bold' }}>-- : --</Text>
                    </View>
                </View>
            </View>
            <View style={{ paddingTop: 15 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>CLOCK OUT</Text>
                <View style={{ marginVertical: 15, padding: 15, backgroundColor: '#E4E7E6', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row', paddingVertical: 5, alignItems: 'center' }}>
                        <Ionicons name="ios-barcode-outline" color="black" size={20} />
                        <Text style={{ paddingLeft: 10, fontWeight: 'bold' }}>-- : --</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}