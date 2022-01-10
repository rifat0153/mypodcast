import React, {FC} from 'react';
import {View, Text} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const SearchEmpty = () => {
  return (
    <View
      style={tw`flex-grow items-center 
        justify-center
        `}>
      <Text>No Podcasts.please search more...</Text>
    </View>
  );
};

export default SearchEmpty;
