//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import firebase from 'firebase'
import Register from './Register';
import { navigation } from '@react-navigation/stack';
import LoginForm from './LoginForm';
// create a component
class EmailandPassword extends Component { 
   
    state = {
        email:'',
        password:'',
        error:'',
        loading: false,
    }

    onBottomPress = () =>{
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(this.onLoginSucess)
        .catch(err =>{
            this.setState({
                error:err.message
            })
        })
    }

    onSignUpPress = () =>{
        return(
        <Register/>
        )
    }
    onLoginSucess = () =>{
        this.setState({
            error: '',
            loading: false
        })

    }
    render = () => {
       
        return (
          
            <View style={styles.container}>
                <TextInput style={styles.inputText}
                 placeholder="Email..." 
                 placeholderTextColor="#003f5c" 
                 value={this.state.email}
                 onChangeText={email=> this.setState({email})}/> 

                <TextInput secureTextEntry style={styles.inputText}
                 placeholder="Password..." 
                 placeholderTextColor="#003f5c" 
                 value={this.state.password}
                 onChangeText={password=> this.setState({password})}
                 /> 
                <TouchableOpacity>
                 <Text style={styles.forgot}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.loginBtn} onPress={this.onBottomPress}>
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>  
                    <Text style={styles.errorText}>
                         {this.state.error}
                    </Text>    
                      
            </View>
            
        );
        
    }
   
}

// define your styles
const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 20,
    
    //backgroundColor: '#000000',
  //  alignItems: 'center',
  //  justifyContent: 'center',
   
    },
    /*inputView:{
        width:"80%",
        backgroundColor:"#fff",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
     },*/

     loginBtn:{
        width:"100%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignSelf:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:15,
      },
      inputText:{
       width: "100%",
        alignSelf: 'center',
        height:50,
        color:"#000000",
        backgroundColor: '#fff',
        paddingLeft: 10,
        marginBottom:15,
        borderRadius: 25,
      },
      loginText:{
        color:"white",
        alignSelf: 'center',
        fontWeight: 'bold',
      },
      errorText: {
          fontSize: 19,
          color: '#FE0A03',
          alignSelf: 'center',

      },
      forgot:{
        color:"white",
        fontSize:11,
        alignSelf: 'center',
      },
});

//make this component available to the app
export default EmailandPassword;

