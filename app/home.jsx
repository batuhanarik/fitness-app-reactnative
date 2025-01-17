import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageSlider from '../components/ImageSlider';

export default function Home() {
    return (
        <SafeAreaView className="flex-1 bg-white flex space-y-5" edges={['top']}>
            <StatusBar style='dark' />
            <View className="flex-row justify-between items-center mx-5">
                <View className="space-y-2">
                    <Text style={{ fontSize: hp(4.5) }} className="font-bold tracking-wider text-neutral-500">
                        READY TO
                    </Text>
                    <Text style={{ fontSize: hp(4.5) }} className="font-bold tracking-wider text-rose-500">
                        WORKOUT
                    </Text>
                </View>

                <View className="flex justify-center items-center space-y-2">
                    <Image
                        className="rounded-full"
                        style={{ height: hp(5.5), width: hp(5.5) }}
                        source={require('../assets/images/welcome.jpg')} />
                    <View className="bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300">
                        <Ionicons name='notifications' size={hp(3)} color='#900' />
                    </View>
                </View>
            </View>
            {/* image slider */}
            <View className="justify-self-end">
                <ImageSlider />
            </View>
        </SafeAreaView>
    )
}