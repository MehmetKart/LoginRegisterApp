import React, { Component } from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import styles from '../styles';

export default class RegisterScreen extends Component {
    constructor() {
        super()
        this.state= {
            name: '',
            surname: '',
            email: '',
            password: '',
            phonenumber: '',
        }
    }
   /* Post Method React Native
   handlePress = () => {
        fetch('http://jpara.prodrom.com/api/account/register?name='+this.state.name+'&surname='+this.state.surname+'&email='+this.state.email+'&password='+this.state.password+'&telephone='+this.state.phonenumber, {
            method: 'GET',
            headers : { 
                'Accept': 'application/json',
                'Content-Type': 'application/json',
               },
               body: JSON.stringify({
                   name: this.state.name,
                   surname: this.state.surname,
                   email: this.state.email,
                   password: this.state.password,
                   phonenumber: this.state.phonenumber,
               }),
        }).then((response) => response.json())
            .then((responseJson) => {
               console.log(responseJson)
            })
            .catch((error) => {
                console.error(error);
            });

    }*/

     onRegisterPress = () => {
        return fetch('http://jpara.prodrom.com/api/account/register?name='+this.state.name+'&surname='+this.state.surname+'&email='+this.state.email+'&password='+this.state.password+'&telephone='+this.state.phonenumber)
          .then((response) => response.json())
          .then((responseJson) => {
            if (responseJson.result == 'ok') {
              alert('Register is successfully')
              this.props.navigation.navigate('Login');
            }
            else {
              alert('Register failed.')
            }
          })
          .catch((error) => {
            alert(error)
          });
      }
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.inputText} placeholder="Name" onChangeText={name => this.setState({ name })} />
                <TextInput style={styles.inputText} placeholder="Surname"  onChangeText={surname => this.setState({ surname })}/>
                <TextInput style={styles.inputText} placeholder="Email" onChangeText={email => this.setState({ email })} />
                <TextInput style={styles.inputText} secureTextEntry placeholder="Password"  onChangeText={password => this.setState({ password })}/>
                <TextInput style={styles.inputText} keyboardType= "number-pad" maxLength={11} placeholder="PhoneNumber" onChangeText={phonenumber => this.setState({ phonenumber })} />
                <TouchableOpacity style={styles.registerButton} onPress={this.onRegisterPress}>
                  <Text style={styles.registerText}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.memberButton} onPress={()=>this.props.navigation.navigate('Login')}>
                  <Text style={styles.memberText}>I'm Already Member</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


  