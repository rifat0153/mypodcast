import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {SearchStackRouteParamsList} from '../../navigators/types';

interface Props {}

type NavigationParams = RouteProp<SearchStackRouteParamsList, 'PodcastDetails'>;

export const PodcastDetailScreen = (props: Props) => {
  const {data} = useRoute<NavigationParams>().params ?? {};

  return (
    <View style={tw`flex-1 bg-white`}>
      <FlatList
        style={tw``}
        ListHeaderComponent={
          <>
            <View style={tw`flex-row m-4 justify-center`}>
              {data.thumbnail && (
                <Image
                  source={{
                    uri: data.thumbnail,
                  }}
                  style={tw`h-28 w-28 rounded-xl `}
                />
              )}
              <View style={tw`flex-1 px-2`}>
                <Text style={tw`text-lg font-bold text-black`}>
                  {data.podcastName}
                </Text>
                <Text style={tw`text-sm font-bold`}>{data.artist}</Text>
                <Text style={tw`text-sm text-blue-400 font-bold`}>
                  Subscribed
                </Text>
              </View>
            </View>

            <View style={tw`px-4 mb-4 `}>
              <Text>Play last episode</Text>
            </View>

            <View style={tw`px-4 mb-4 `}>
              <Text style={tw`text-lg text-black font-bold`}>Episodes</Text>
            </View>
          </>
        }
        data={[{id: 1}, {id: 2}]}
        renderItem={({item}) => <Text>{item.id} </Text>}
        keyExtractor={item => item.id.toString()}
      />
      <Text>Hello</Text>
    </View>
  );
};
