import React, { Component, PropsWithChildren } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import Icon from 'react-native-vector-icons/dist/FontAwesome'

 type IconsProps = PropsWithChildren<{
    name: string,
 }>
const Icons = ({name}: IconsProps) => {
   switch (name) {
    case 'circle':
        return <Icon name='circle-thin' size={38} color='#F7CD2E'></Icon>
    case 'cross':
        return <Icon name='times' size={38} color='#38CC7'></Icon>
        default:
            return <Icon name='pencil' size={38} color='#0D0D0D'></Icon>
        }


}

export default Icons
