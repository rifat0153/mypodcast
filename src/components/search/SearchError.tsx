import React from 'react';
import {Button, Text, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';

interface Props {
  error: Error;
  retryFunction: (term: string) => {};
}

export const SearchError = (props: Props) => {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text>{props.error.message}</Text>
      <Button onPress={() => props.retryFunction} title="Try again" />
    </View>
  );
};
