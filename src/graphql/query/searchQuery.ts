import {gql} from '@apollo/client';

const searchQuery = gql`
  query SearchQuery($term: String!) {
    search(term: $term) {
      artist
      episodesCount
      podcastName
      feedUrl
      thumbnail
      genres
    }
  }
`;

export default searchQuery;
