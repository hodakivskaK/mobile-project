import { useState } from 'react';
import {
    Text, TextInput,
    View, StyleSheet, Image,
    TouchableOpacity, KeyboardAvoidingView, Platform,
    TouchableWithoutFeedback, Keyboard
} from 'react-native';

import emptyAvatar from '../Image/emptyAvatar.png'
import { AntDesign } from '@expo/vector-icons';

export const RegistrationScreen = () => {
    const [login, setChangeLogin] = useState('');
    const [mail, setChangeMail] = useState('');
    const [password, setChangePassword] = useState('');

    const [isFocusedLogin, setIsFocusedLogin] = useState(false);
    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    const [isFocusedPassword, setIsFocusedPassword] = useState(false);



const signIn = () => {
       console.debug("Database", `${login} + ${mail} + ${password}`);
    };
    
    
      return (
     
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
     <KeyboardAvoidingView
                 behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                  style={styles.container}>
                  
                  
      
        <View style={styles.inner} >
                      
              <View style={styles.avatarContainer}>
                <Image source={emptyAvatar} style={styles.image} />
                <AntDesign name="pluscircleo" size={24} color="#FF6C00" style={styles.avatarIcon}/>             
              </View>
                      
                      
        <Text style={styles.header} >Реєстрація</Text>
                      
          <TextInput
            value={login}
            onChangeText={setChangeLogin}
            placeholder="Логін"
            onFocus={() => setIsFocusedLogin(true)}
              onBlur={() => setIsFocusedLogin(false)}
         style={[ styles.input, {
             borderColor: isFocusedLogin
                 ? '#FF6C00'
                 : '#E8E8E8',
             borderBottomWidth: 1,
         }]}
                     />    
              
          <View style={styles.form}>

                           <TextInput
            value={mail}
            onChangeText={setChangeMail}
            placeholder="Mail"
     
              onFocus={() => setIsFocusedEmail(true)}
              onBlur={() => setIsFocusedEmail(false)}
         style={[ styles.input, {
             borderColor: isFocusedEmail
                 ? '#FF6C00'
                 : '#E8E8E8',
             borderBottomWidth: 1,
         }]}
                     />

            <View style={styles.containerPassword}> 
               <TextInput
            value={password}
            onChangeText={setChangePassword}
            placeholder="Password"
            
              secureTextEntry
               onFocus={() => setIsFocusedPassword(true)}
              onBlur={() => setIsFocusedPassword(false)}
              style={[ styles.input, {
             borderColor: isFocusedPassword
                 ? '#FF6C00'
                 : '#E8E8E8',
             borderBottomWidth: 1,
         }]}
              /> 
              

             <TouchableOpacity style={styles.visible} onPress={signIn}>
                  <Text style={styles.visibleTitle}>Показати</Text>
              </TouchableOpacity>
            </View>

         </View>
         
             
         
            <TouchableOpacity style={styles.btn} onPress={signIn}>
              <Text style={styles.buttonTitle}>Зареєстуватися</Text>
            </TouchableOpacity>
            
            <Text style={styles.link}> Вже є акаунт? Увійти</Text>
                      
        </View>
      </KeyboardAvoidingView>
      </TouchableWithoutFeedback>

  );
    
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    
  },
  
  inner: {
    maxHeight: 600,
    marginBottom: 0,
    maxWidth: "100%",
    padding: 24,
    flex: 1,
   
    backgroundColor: "#fff",
    alignItems: "center",


    borderTopLeftRadius: "25px",
    borderTopRightRadius: "25px",
    },
  
  avatarContainer: {
    position: "relative",
    width: 120,
    marginTop: -85,
    marginHorizontal: "20%",
    },

    avatarIcon: {
        position: "absolute",
        width: 30,
        height: 30,
      top: "50%",
      right: -20,
        
    },
    

  header: {
    fontFamily: "Roboto-Medium",
    textAlign: "center",
        fontWeight: 500,
        fontSize: 30,
        marginTop: 32,
        marginBottom: 32,
  },
  input: {
    minWidth: "100%",
    height: 50,

    marginLeft: 16,
    marginRight: 16,
    marginBottom: 12,
    marginTop:12,

    padding: 10,
    color: "#BDBDBD",

    borderWidth: 1,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderRadius: 10,
  },

  form: {
    marginBottom: 43,
  },

  btn: {
    width: "100%",
    marginLeft: 16,
    marginRight: 16,
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
      
  containerPassword: {
    position: "relative"
  },

  visible: {
    position: "absolute",
    right: 26,
    top: "35%",

  },
      
  visibleTitle: {
      fontFamily:  "Roboto-Regular",
fontSize: 16,
fontWeight: 400,
lineHeight: 19,
textAlign: "center",
color: "#1B4371",
    }
});

