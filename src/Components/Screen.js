import React from 'react'
import { View } from 'react-native'

const Screen = ({children}) => {
    return(
        <View className="items-center justify-center bg-slate-900 antialiased flex-1">
            {children}
        </View>
    )
}

export default Screen