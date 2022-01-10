import {ApolloError, useLazyQuery} from '@apollo/client';
import React, {useState} from 'react';

import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {SearchQuery, SearchQueryVariables} from '../../types/graphql';
import searchQuery from './../../graphql/query/searchQuery';
import {SearchQuery_search} from '../../types/graphql';
import SearchEmpty from './SearchEmpty';

const SearchScreen = () => {
  const [term, setTerm] = useState<string>('');

  const [search, {data, loading, error}] = useLazyQuery<
    SearchQuery,
    SearchQueryVariables
  >(searchQuery);

  const onSearch = async () => {
    try {
      await search({variables: {term}});
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <ActivityIndicator style={tw`flex-1`} size="large" />;
  }

  if (error) {
    return (
      <View style={tw`flex-1 justify-center items-center`}>
        <Text>{error.message}</Text>
        {/* <Text>{error.networkError?.message}</Text> */}
      </View>
    );
  }

  return (
    <View style={tw`flex-1 bg-white`}>
      <TextInput
        style={tw`bg-gray-200 m-2 px-4 py-2 
          text-xl rounded-xl`}
        placeholder="Search Podcast"
        value={term}
        onChangeText={setTerm}
        onSubmitEditing={onSearch}
        autoCorrect={false}
      />

      <FlatList<SearchQuery_search>
        keyboardShouldPersistTaps="never"
        // style={tw`flex-1 bg-purple-100 `}
        contentContainerStyle={{flexGrow: 1}}
        centerContent={true}
        data={data?.search ?? []}
        ListEmptyComponent={<SearchEmpty />}
        renderItem={function ({item}) {
          return SearchTile(item);
        }}
        keyExtractor={item => item.feedUrl.toString()}
      />
    </View>
  );
};

export default SearchScreen;
function SearchTile(item: SearchQuery_search) {
  return (
    <View style={tw`flex-row my-2 items-center`}>
      {item.thumbnail && (
        <Image
          style={tw`w-16 h-16
                    mx-4 bg-blue-100 rounded-xl`}
          source={{
            uri: item.thumbnail,
          }}
        />
      )}

      <View style={tw`flex-1`}>
        <Text style={tw`font-bold text-xl`} numberOfLines={1}>
          {item.podcastName}
        </Text>
        <Text style={tw`text-sm text-gray-500`}>{item.artist}</Text>
        <Text style={tw`text-sm text-blue-500`}>
          {item.episodesCount} episodes
        </Text>
      </View>
    </View>
  );
}
