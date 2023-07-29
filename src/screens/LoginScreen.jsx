import { useState } from 'react';
import {
    Text, TextInput, Span,
    View, StyleSheet,
    TouchableOpacity, KeyboardAvoidingView, Platform,
    TouchableWithoutFeedback, Keyboard
} from 'react-native';


export const LoginScreen = () => {
    const [mail, setChangeMail] = useState('');
  const [password, setChangePassword] = useState('');
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

const signUp = () => {
  console.debug("Database", `${mail} + ${password}`);
  };
  
  const togglePassInput = () => {
 
    };
    
    
  return (
     
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
     <KeyboardAvoidingView
                 behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}>
      
        <View style={styles.inner} >
            <Text style={styles.header}>Увійти</Text>
            
              
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
              

             <TouchableOpacity style={styles.visible} onPress={signUp}>
                  <Text style={styles.visibleTitle}>Показати</Text>
              </TouchableOpacity>
            </View>

         </View>
         
             
         
                <TouchableOpacity style={styles.btn} onPress={signUp}>
                  <Text style={styles.buttonTitle}>Увійти</Text>
             </TouchableOpacity>
            
                  <Text style={styles.link} >Немає акаунту? Зареєструватися</Text>
        </View>
      </KeyboardAvoidingView>
      </TouchableWithoutFeedback>

  );
    
}

const styles = StyleSheet.create({
  container: {
     
    position: "relative",
    flex: 1,
    alignItems: 'center',
    justifyContent: "flex-end"
    
  },
  
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

  form: {
    marginBottom: 43,
  },

  btn: {
    width: 345,
   
    // marginTop: 43,
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

