import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';

import {SearchQuery_search} from '../../types/graphql';

interface Props {
  item: SearchQuery_search;
}

export const SearchTile = (props: Props) => {
  const navigation = useNavigation<any>();

  return (
    <View style={tw`flex-row my-2 items-center`}>
      {props.item.thumbnail && (
        <Image
          style={tw`w-16 h-16
                        mx-4 bg-blue-100 rounded-xl`}
          source={{
            uri: props.item.thumbnail,
          }}
        />
      )}

      <View style={tw`flex-1`}>
        <Text style={tw`font-bold text-xl`} numberOfLines={1}>
          {props.item.podcastName}
        </Text>
        <Text style={tw`text-sm text-gray-500`}>{props.item.artist}</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('PodcastDetails', {data: props.item})
          }>
          <Text style={tw`text-sm text-blue-500`}>
            {props.item.episodesCount} episodes
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
