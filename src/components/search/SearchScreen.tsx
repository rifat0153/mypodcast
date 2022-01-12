import {ApolloError, useLazyQuery} from '@apollo/client';
import React, {useState} from 'react';

import {
  View,
  Text,
  TextInput,
  FlatList,
  ActivityIndicator,
  Button,
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {SearchQuery, SearchQueryVariables} from '../../types/graphql';
import searchQuery from './../../graphql/query/searchQuery';
import {SearchQuery_search} from '../../types/graphql';
import SearchEmpty from './SearchEmpty';
import {SearchTile} from './SearchTile';
import {SearchError} from './SearchError';

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

  // if (loading) {
  //   return <ActivityIndicator style={tw`flex-1`} size="large" />;
  // }

  if (error) {
    return <SearchError error={error} retryFunction={onSearch} />;
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
        ListHeaderComponent={
          <>{loading ?? <ActivityIndicator style={tw`h-28`} size="large" />}</>
        }
        contentContainerStyle={{flexGrow: 1}}
        centerContent={true}
        data={data?.search ?? []}
        ListEmptyComponent={<SearchEmpty />}
        renderItem={({item}) => <SearchTile item={item} />}
        keyExtractor={item => item.feedUrl.toString()}
      />
    </View>
  );
};

export default SearchScreen;
