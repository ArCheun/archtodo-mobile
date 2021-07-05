import React from 'react';
import GoogleLogin from './buttons/GoogleLogin';
import {Text, View} from 'react-native';

const Login = () => {
  return (
      <View>
        <Text>Login Using</Text>
        <GoogleLogin />
      </View>
  );
};

export default Login;
