import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

const OtpInputScreen = ({navigation}) => {
  const [otp, setOtp] = useState(null);
  const OnPressVerify = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingStyle}>Enter OTP</Text>
      </View>
      <TextInput
        style={styles.OtpInputStyle}
        keyboardType="numeric"
        value={otp}
        onChangeText={code => setOtp(code)}
      />

      <View style={styles.bottomView}>
        <TouchableOpacity onPress={OnPressVerify}>
          <View
            style={[
              styles.btnVerify,
              {
                backgroundColor: otp ? '#244DB7' : 'gray',
              },
            ]}>
            <Text style={styles.verifyLabel}>Verify</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* Test Button */}
      <Button
        title="Authentication"
        onPress={() => navigation.navigate('Authentication')}
      />
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default OtpInputScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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

  OtpInputStyle: {
    height: 50,
    width: '60%',
    textAlign: 'center',
    backgroundColor: 'white',
    fontSize: 20,
    color: 'black',
    borderRadius: 10,
    letterSpacing: 0.5,
    borderBottomColor: '#244DB7',
    borderBottomWidth: 2,
  },

  bottomView: {
    marginTop: 50,
  },

  btnVerify: {
    width: 250,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  verifyLabel: {
    color: 'white',
    alignItems: 'center',
    fontSize: 20,
    textTransform: 'uppercase',
  },
});
