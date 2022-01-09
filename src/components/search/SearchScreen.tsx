import React from 'react';

import {View, Text} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const SearchScreen = () => {
  return (
    <View
      style={tw`flex-1 bg-blue-200 items-center 
    justify-center
    `}>
      <View>
        <Text>SearchScreen</Text>
      </View>
    </View>
  );
};

export default SearchScreen;
