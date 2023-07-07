import { useState } from 'react';
import {
    Text, Button, TextInput,
    View, StyleSheet, Image,
    TouchableOpacity, KeyboardAvoidingView, Platform,
    TouchableWithoutFeedback, Keyboard
} from 'react-native';

import {FontApp} from '../assets/font'



export const LoginScreen = () => {
    const [login, setChangeLogin] = useState('');
    const [mail, setChangeMail] = useState('');
    const [password, setChangePassword] = useState('');

const signIn = () => {
    console.debug(Platform.OS);
    };
    
    
  return (
     
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    
      
        <View style={styles.inner} >
            <Text style={styles.header}>Увійти</Text>
            
               <KeyboardAvoidingView
                 behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}>
            <View>
                       <TextInput placeholder="Пошта" value={mail}
                        onChangeNail={setChangeMail}
              style={styles.input} />
            
            <TextInput placeholder="Пароль" value={password}
                        onChangeNail={setChangePassword}
                        style={styles.input}/>

            </View>
             </KeyboardAvoidingView>
         
                <TouchableOpacity style={styles.btn} onPress={signIn}>
                  <Text style={styles.buttonTitle}>Увійти</Text>
             </TouchableOpacity>
            
                  <Text style={styles.link} >Немає акаунту? Зареєструватися</Text>
      </View>
      </TouchableWithoutFeedback>

  );
    
}

const styles = StyleSheet.create({
  
  inner: {
  
    maxHeight: 450,
    marginBottom: 0,
    padding: 24,
    flex: 1,
    width: 390,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingBottom: 30,

    borderTopLeftRadius: "25px",
    borderTopRightRadius: "25px",
  },

  header: {
        fontFamily: "Roboto-Medium",
        fontWeight: 500,
        fontSize: 30,
        marginTop: 32,
        marginBottom: 32,
  },
  input: {
    width: 343,
    height: 50,
    margin: 12,
    borderWidth: 1,

    padding: 10,
    color: "#BDBDBD",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 10,
    },
  btn: {
    width: 345,
   
    marginTop: 43,
    marginBottom: 16,
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
      link: {
        fontFamily: "Roboto-Regular",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        color: "#1B4371",
    },
});

