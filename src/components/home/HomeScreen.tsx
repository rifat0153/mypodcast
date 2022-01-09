import React from 'react';

import {View, Text} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const HomeScreen = () => {
  return (
    <View style={tw`flex flex-row  justify-center items-center`}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
