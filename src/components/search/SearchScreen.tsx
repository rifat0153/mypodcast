import React, {useState} from 'react';

import {View, Text, TextInput, FlatList} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import KeyboardDismissView from '../KeyboardDismissView';

const SearchScreen = () => {
  const [search, setsearch] = useState('');

  return (
    <KeyboardDismissView>
      <View style={tw`flex-1 bg-white`}>
        <TextInput
          style={tw`bg-gray-200 m-2 px-4 py-2 
          text-xl rounded-xl`}
          placeholder="Search Podcast"
          value={search}
          onChangeText={setsearch}
        />
        <View>
          <Text>{search}</Text>
        </View>

        <FlatList
          keyboardShouldPersistTaps="never"
          style={tw`bg-red-200`}
          data={[{id: 1}, {id: 2}]}
          renderItem={() => (
            <View style={tw`flex-row my-2 items-center`}>
              <View
                style={tw`w-16 h-16 items-center justify-center
                mx-4 bg-blue-100 rounded-xl`}>
                {/* <Text>Joe Roegan</Text> */}
              </View>
              <View>
                <Text style={tw`font-bold text-xl`}>Joe Roegan</Text>
                <Text style={tw`text-sm text-gray-500`}>
                  This is the subtitle
                </Text>
                <Text style={tw`text-sm text-blue-500`}>400 episodes</Text>
              </View>
            </View>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </KeyboardDismissView>
  );
};

export default SearchScreen;
