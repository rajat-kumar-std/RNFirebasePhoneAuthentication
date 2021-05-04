import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

const MobileInputScreen = ({navigation}) => {
  const [phone, setPhone] = useState(null);
  const [error, setError] = useState('');

  const OnPressContinue = () => {
    let temp = phone;
    let digit = 0;
    while (temp > 0) {
      temp = Math.floor(temp / 10);
      digit++;
    }
    if (digit === 10) {
      navigation.navigate('Verification');
      setError('');
    } else setError('Invalid Mobile Number');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingStyle}>Enter Your Mobile Number</Text>
      </View>
      {/* Input Container */}
      <View style={styles.containerInput}>
        {/* Country Code */}
        <View style={styles.openDialogView}>
          <Text style={styles.textStyle}>{'+91  |'}</Text>
        </View>

        {/* Input Field */}
        <TextInput
          style={styles.PhoneInputStyle}
          keyboardType="phone-pad"
          value={phone}
          onChangeText={no => setPhone(no)}
          secureTextEntry={false}
          maxLength={10}
          placeholderStyle={{color: '#232323'}}
        />
      </View>
      <View>
        <Text style={styles.errorMsg}>{error}</Text>
      </View>

      {/* Get OTP Button Section*/}
      <View style={styles.bottomView}>
        <TouchableOpacity onPress={OnPressContinue}>
          <View
            style={[
              styles.btnContinue,
              {
                backgroundColor: phone ? '#244DB7' : 'gray',
              },
            ]}>
            <Text style={styles.continueLabel}>Continue</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* Test Button */}
      {/* <Button
        title="Verifiaction Page"
        onPress={() => navigation.navigate('Verification')}
      /> */}
    </View>
  );
};

export default MobileInputScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  headingContainer: {
    marginBottom: 25,
    backgroundColor: '#244DB7',
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
  },

  headingStyle: {
    fontSize: 18,
    color: 'white',
  },

  containerInput: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    width: '80%',
    borderBottomColor: '#244DB7',
    borderBottomWidth: 2,
  },

  openDialogView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyle: {
    fontSize: 18,
    letterSpacing: 0.5,
  },

  PhoneInputStyle: {
    flex: 1,
    height: 50,
    fontSize: 18,
    marginLeft: 5,
    letterSpacing: 0.5,
    color: 'black',
  },

  // placeStyle:{
  //   fontFamily: "AnotherFont",
  //   borderColor: 'red',
  //   color:"#232323"
  // },

  errorMsg: {
    color: 'rgba(255,0,0,0.8)',
    margin: 10,
  },

  bottomView: {
    marginTop: 50,
  },

  btnContinue: {
    width: 300,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  continueLabel: {
    color: 'white',
    alignItems: 'center',
    fontSize: 18,
    textTransform: 'uppercase',
  },
});

/*
<Text>Mobile number input Screen</Text>
      <Button
        title="Go to otp screen"
        onPress={() => navigation.navigate('OtpInput')}
      />
*/
