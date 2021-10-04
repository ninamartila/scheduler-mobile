import React from 'react'
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function ListScheduler({ navigation }) {
    function onPress() {
        navigation.navigate('7 APRIL 2021')
    }

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', paddingBottom: 20 }}>APRIL 2021</Text>
            <View>
                <TouchableOpacity onPress={() => onPress()}>
                    <View style={{ flexDirection: 'row', height: 90, paddingVertical: 10 }}>
                        <View style={{ width: 60, alignItems: 'center' }}>
                            <Text>MON</Text>
                            <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 5 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>5</Text>
                            </View>
                        </View>
                        <View style={{ backgroundColor: '#E4E7E6', flex: 1, borderRadius: 10, padding: 10 }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Mediterania Garden Recidence</Text>
                            <View style={{ flexDirection: 'row', paddingVertical: 5, alignItems: 'center' }}>
                                <Ionicons name="ios-time-outline" color="black" size={16} />
                                <Text style={{ paddingLeft: 5 }}>08.00 - 17.00</Text>
                                <View style={{ backgroundColor: '#E93B3B', borderRadius: 8, marginLeft: 10 }}>
                                    <Text style={{ color: 'white', paddingHorizontal: 10, paddingVertical: 5 }}>TODAY</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', height: 90, paddingVertical: 10 }}>
                    <View style={{ width: 60, alignItems: 'center' }}>
                        <Text>MON</Text>
                        <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 5 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>6</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, borderRadius: 10, borderWidth: 3, alignItems: 'center', justifyContent: 'center', borderStyle: 'dashed', borderColor: '#D2CECE' }}>
                        <Text style={{ fontWeight: 'bold' }}>NO SCHEDULE</Text>
                    </View>
                </View>
            </View>
        </View >
    )
}