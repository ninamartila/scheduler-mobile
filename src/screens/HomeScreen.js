import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { dimensions } from '../helpers/metrics';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScheduler({ navigation }) {
    function onPress() {
        navigation.navigate('UPCOMING SCHEDULE')
    }

    return (
        <ScrollView>
            <View style={{ backgroundColor: '#FFF333', height: dimensions.screenHeight / 3, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, paddingTop: 40 }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 20, alignItems: 'center' }}>
                    <View>
                        <Image
                            style={{ width: 50, height: 50, borderRadius: 25 }}
                            source={{ uri: 'https://markey.id/wp-content/uploads/2019/06/programmer-2.jpg' }}
                        />
                    </View>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>LIVE ATTENDANCE</Text>
                    <Ionicons name="ios-notifications-outline" color="black" size={24} />
                </View>
                <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50%' }}>
                    <Text style={{ fontSize: 70, fontWeight: 'bold' }}>TIME</Text>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>TIME</Text>
                </View>
            </View>
            <View style={{ padding: 20 }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 15, paddingTop: 5 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>TODAY'S SCHEDULE</Text>
                    <Text style={{ color: 'red' }}>Refresh</Text>
                </View>
                <View style={{ backgroundColor: '#E4E7E6', padding: 10, borderRadius: 10 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Mediterania Garden Residence</Text>
                    <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
                        <Ionicons name="ios-time-outline" color="black" size={16} />
                        <Text style={{ paddingLeft: 5 }}>08.00 - 17.00</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15 }}>
                        <TouchableOpacity
                            style={{ backgroundColor: '#03BFAD', alignItems: 'center', paddingVertical: 5, width: 100, borderRadius: 8 }}
                        >
                            <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>CLOCK IN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ backgroundColor: '#E93B3B', alignItems: 'center', paddingVertical: 5, width: 100, borderRadius: 8 }}
                        >
                            <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>CLOCK OUT</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
                        <View style={{ width: 100, alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>-- : --</Text>
                        </View>
                        <View style={{ alignItems: 'center', flex: 1 }}>
                            <Text style={{ color: '#D2CECE' }}>------------------</Text>
                        </View>
                        <View style={{ width: 100, alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>-- : --</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ paddingHorizontal: 20 }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 15, paddingTop: 5 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>NEXT SCHEDULE</Text>
                    <TouchableOpacity onPress={() => onPress()}>
                        <Text style={{ color: 'red' }}>See All</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: '#E4E7E6', width: dimensions.screenWidth / 1.6, padding: 10, borderRadius: 10 }}>
                    <Text style={{ fontSize: 12 }}>WEDNESDAY</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, paddingBottom: 20 }}>7 Apr</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Mediterania Garden Residance</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons name="ios-time-outline" color="black" size={16} />
                        <Text style={{ paddingLeft: 5 }}>08.00 - 17.00</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                <TouchableOpacity
                    style={{ backgroundColor: '#03BFAD', alignItems: 'center', paddingVertical: 5, flex: 1, borderRadius: 8, marginRight: 10, height: 50, justifyContent: 'center' }}
                >
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>Clock In</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ backgroundColor: '#B7B7B7', alignItems: 'center', paddingVertical: 5, flex: 1, borderRadius: 8, marginRight: 10, height: 50, justifyContent: 'center' }}
                >
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>Clock Out</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}