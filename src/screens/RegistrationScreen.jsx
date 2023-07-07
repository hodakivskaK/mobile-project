import { useState } from 'react';
import {
    Text, Button, TextInput,
    View, StyleSheet, Image,
    TouchableOpacity, KeyboardAvoidingView, Platform,
    TouchableWithoutFeedback, Keyboard
} from 'react-native';

import emptyAvatar from '../Image/emptyAvatar.png'
import { FontApp } from '../assets/font'
import Svg, { Circle, Path } from 'react-native-svg';


export const RegistrationScreen = () => {
    const [login, onChangeLogin] = useState('Логін');
    const [mail, onChangeMail] = useState('Адреса електронної пошти');
    const [password, onChangePassword] = useState('Пароль');

const signIn = () => {
    console.debug(Platform.OS);
    };
    
    
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            
            <View style={styles.avatar}>
                <Image source={emptyAvatar} style={styles.image} />
                    <Svg style={styles.avatarIcon}>
                        <Circle cx="12.5" cy="12.5" r="11" fill="white" stroke="#FF6C00"/>
                          <Path fill-rule="evenodd" clip-rule="evenodd" d="M13 6H12V12H6V13H12V19H13V13H19V12H13V6Z" fill="#FF6C00"/>     
                    </Svg>
               
                  
            </View>
               

            <Text style={styles.title} >Реєстрація</Text>
            <KeyboardAvoidingView  behavior={Platform.OS == "ios" ? "padding" : "height"}>
                <TextInput style={styles.input} onChangeLogin={onChangeLogin} value={login} placeholder="Type text"/>  

            
                     <TextInput style={styles.input} onChangeMail={onChangeMail} value={mail} autoComplete="email"/>  


                   <TextInput style={styles.input} onChangePassword={onChangePassword} value={password} autoComplete="password"/>  
             </KeyboardAvoidingView>
           
            
            <TouchableOpacity style={styles.btn} onPress={signIn}>
                  <Text style={styles.buttonTitle}>Зареєстуватися</Text>
             </TouchableOpacity>
            
            
                <Text style={styles.link}> Вже є акаунт? Увійти</Text>
         
        </View> 
          </TouchableWithoutFeedback >
    );
    
}




const styles = StyleSheet.create({
    container: {
    position: "relative",
    flex: 1,
   maxHeight: 550,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
        paddingBottom: 30,
    
    borderTopLeftRadius: "25px",
        borderTopRightRadius: "25px",
     width: 390,
    },
    
    avatar: {
        position: "relative",

    },

    avatarIcon: {
        position: "absolute",
        width: 30,
        height: 30,
        right: -15,
        top: 70,
    },
    
    input: {
    width: 343,
    height: 50,
    margin: 12,
        borderWidth: 1,
        padding: 10,

    padding: 10,
    color: "#BDBDBD",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 10,
    },

    title: {
        textAlign: "center",
        fontFamily: "Roboto-Medium",
        fontWeight: 500,
        fontSize: 30,
        marginBottom: 32,

    },

    link: {
        marginTop: 16,
        fontFamily: "Roboto-Regular",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        color: "#1B4371",
    },

    btn: {
    // width: 345,
   
    marginTop: 43,
        backgroundColor: '#FF6C00',
        borderRadius: 100,
       
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 111,
        paddingRight: 111,
    },

    buttonTitle: {
        fontFamily: "Roboto-Regular",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        color: "#FFFFFF",

     
        
    },

    iconAdd: {
        width: 25,
        height: 25,
        color: "#1B4371",
    },

    image: {
        height: 120,
        width: 120,
        marginBottom: 32,
    }


});