import React, {PropsWithChildren} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Keyboard} from 'react-native';
import tw from 'tailwind-react-native-classnames';

interface Props {
  withScrollView?: boolean;
}

const KeyboardDismissView: React.FC<Props> = (
  props: PropsWithChildren<Props>,
) => {
  if (props.withScrollView) {
    return (
      <ScrollView keyboardShouldPersistTaps="never" style={tw`flex-1`}>
        {props.children}
      </ScrollView>
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={tw`flex-1`}
      onPress={Keyboard.dismiss}>
      {props.children}
    </TouchableOpacity>
  );
};

export default KeyboardDismissView;
