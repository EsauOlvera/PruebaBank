import React from 'react'
import { Text, View, Image } from 'react-native'

export const TitleLabel = ({text}) => {
    return (
        <View>
            <Text className="text-slate-100 font-semibold text-lg">
                {text}
            </Text>
        </View>
    )
}

export const DescriptionLabel = ({text}) => {
    return (
        <View className="py-2" >
            <Text className="text-slate-100 italic">
                "{text}"
            </Text>
        </View>
    )
}

export const OperationalAgeLabel = ({text}) => {
    return (
        <View>
            <Text className="text-slate-100 uppercase tracking-tight text-xs">
                Años en servicio: {text}
            </Text>
        </View>
    )
}

export const BankCard = ({children}) => {
    return (
        <View className="flex-row m-4 w-[90%] rounded-lg bg-slate-800">
            {children}
        </View>
    )
}

export const ContentCard = ({children}) => {
    return (
        <View className="flex-col w-[64%] p-4 truncate overflow-clip">
            {children}
        </View>
    )
}

export const BankImage = ({uri}) => {
    return (
        <Image source={{uri: uri}} className="flex-4 w-[36%] aspect-square rounded-l-lg" />
    )
}

export const HomeTitle = ({text}) => {
    return (
        <Text className="text-4xl text-slate-50 mt-16 text-center italic font-extrabold p-4" >{text}</Text>
    )
}