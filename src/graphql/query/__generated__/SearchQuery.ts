/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchQuery
// ====================================================

export interface SearchQuery_search {
  __typename: "Podcast";
  artist: string;
  episodesCount: number;
  podcastName: string;
  feedUrl: string;
  thumbnail: string;
  genres: string[];
}

export interface SearchQuery {
  search: SearchQuery_search[];
}

export interface SearchQueryVariables {
  term: string;
}
