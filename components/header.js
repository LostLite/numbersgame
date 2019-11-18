import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import TitleText from '../components/titleText';
import Colors from '../constants/colors';

export const Header = props => {
    return (
        <View style={styles.header}>
            <TitleText style={styles.headerTitle}>{props.title}</TitleText>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 20,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle:{
        color: 'white'
    }
});
