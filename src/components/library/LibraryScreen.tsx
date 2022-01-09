import React from 'react';

import {View, Text} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const LibraryScreen = () => {
  return (
    <View
      style={tw`flex-1 bg-red-200 items-center 
    justify-center
    `}>
      <View>
        <Text>Library</Text>
      </View>
    </View>
  );
};

export default LibraryScreen;
