import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {SearchStackRouteParamsList} from '../../navigators/types';

interface Props {}

type NavigationParams = RouteProp<SearchStackRouteParamsList, 'PodcastDetails'>;

export const PodcastDetailScreen = (props: Props) => {
  const {data} = useRoute<NavigationParams>().params ?? {};

  return (
    <View style={tw`flex-1 bg-white`}>
      <Text>{data.podcastName}</Text>
    </View>
  );
};
