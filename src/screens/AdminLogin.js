import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';

const AdminLogin = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = ({navigate}) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('AdminHome');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          // console.log('That email address is invalid!');
          Alert.alert('THE EMAIL AND PASSWORD IS INVALID');
        }
        console.error(error);
      });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar barStyle="light-content"></StatusBar>

        <View style={styles.login}>
          <Text style={{fontSize: 34, fontWeight: 'bold', color: '#ff6900'}}>
            Login
          </Text>
        </View>

        <View style={styles.field}>
          <TextInput
            onChangeText={text => setEmail(text)}
            keyboardType={'email-address'}
            style={{
              width: '80%',
              borderWidth: 2,
              borderColor: 'grey',
              borderRadius: 100,
              paddingLeft: 15,
            }}
            placeholder="Email"
          />
        </View>

        <View style={styles.field}>
          <TextInput
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
            style={{
              width: '80%',
              borderWidth: 2,
              borderColor: 'grey',
              borderRadius: 100,
              paddingLeft: 15,
            }}
            placeholder="Password"
          />
        </View>

        <View style={styles.field}>
          <TouchableOpacity
            onPress={login}
            style={[
              styles.btn,
              {
                backgroundColor: '#ff6900',
                width: '80%',
                padding: 15,
                borderRadius: 100,
                alignItems: 'center',
                justifyContent: 'center',
              },
            ]}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
              LOGIN
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
export default AdminLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 200,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 50,
    width: '100%',
  },
  login: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 15,
  },
  field: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 20,
  },
  btn: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
});
