import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // useNavigation 추가
import HomeScreen from '../pages/Home/home';

const UntactScreen = () => {
    const navigation = useNavigation(); // useNavigation 훅을 사용하여 navigation 객체 가져오기

    const goToMainScreen = () => {
        navigation.goBack(); // 메인 화면으로 돌아가는 함수
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <View>
                <Text style={{fontSize:25}}>Mypage Screen</Text>
            </View>
            <TouchableOpacity
                onPress={goToMainScreen} // TouchableOpacity에 onPress 이벤트 추가
                style={{
                    justifyContent: 'flex-end',
                    backgroundColor: 'rgb(87,174,198)',
                    padding: 20,
                    marginTop: 20,
                    borderRadius: 30
                }}>
                <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>다음</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    }
});

export default UntactScreen;
