import { View, Text } from 'react-native'
import React from 'react'
import "./../global.css"

const index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-rose-100">
      <Text className="text-l text-2xl font-bold text-red-500"> Welcome to E-CookFood App</Text>
    </View>
  )
}

export default index