import React, { Component } from 'react';
import {  View, TouchableOpacity, Text } from 'react-native';
import styles from '../styles';

export default class HomeScreen extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            surname: '',
            email: '',
        }
    }
    componentWillMount() {
        fetch(loginUrl)
            .then((res) => res.json())
            .then((resJson) => this.setState({
                name: resJson.user.name,
                surname: resJson.user.surname,
                email: resJson.user.email,
            })
            )
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.nameSurnameText}> {this.state.name} {this.state.surname} </Text>
                <Text style={styles.emailText}> {this.state.email} </Text>
            </View>
        );
    }
}