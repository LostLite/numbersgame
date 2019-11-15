import React from 'react';
import {StyleSheet, View} from 'react-native';

export const Card = (props) => {
    return (
    <View style={{...styles.card, ...props.style}}>{props.children}</View>
    )
}

const styles = StyleSheet.create({
    card: { 
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset : {
            width: 0,
            height: 2
        },
        shadowRadius: 5,
        elevation: 8,
        shadowOpacity: 0.26, 
        padding: 20,
        borderRadius: 10  
    }
})
