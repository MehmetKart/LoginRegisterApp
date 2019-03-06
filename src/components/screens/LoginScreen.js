  import React, { Component } from 'react';
  import { TextInput, View, TouchableOpacity, Text } from 'react-native';
  import styles from '../styles';

  export default class LoginScreen extends Component {
      constructor(props) {
          super(props)
          this.state= {
              email: '',
              password: '',
              loginUrl:'',
          }
      }
      onLoginPress = () => {
          return fetch('http://jpara.prodrom.com/api/account/login?email='+this.state.email+'&password='+this.state.password)
            .then((response) => response.json()) 
            .then((responseJson) => {
              if (responseJson.result == 'ok') {
                loginUrl = 'http://jpara.prodrom.com/api/account/login?email='+this.state.email+'&password='+this.state.password;
                this.props.navigation.navigate('Home');
              }
              else {
                alert('Login Failed.')
              }
            })
        }
      render() {
          return (
              <View style={styles.container}>
              
                  <TextInput style={styles.inputText} placeholder="Email" onChangeText={email => this.setState({ email })} value={this.state.email} />
                  <TextInput style={styles.inputText} secureTextEntry placeholder="Password"  onChangeText={password => this.setState({ password })} value={this.state.password}/>
                  
                  <TouchableOpacity style={styles.loginButton} onPress={this.onLoginPress}>
                  <Text style={styles.loginText}>Login</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.registerButton} onPress={()=>this.props.navigation.navigate('Register')}>
                  <Text style={styles.registerText}>Register</Text>
                  </TouchableOpacity>
              </View>
          );
      }
  }

