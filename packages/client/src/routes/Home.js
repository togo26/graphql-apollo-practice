import { gql, useQuery } from '@apollo/client';

import Movie from '../components/Movie';

const GET_MOVIES = gql`
  query {
    movies {
      id
      title
      isLiked @client
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading) return (<div>Loading...</div>);
  if (error) return (<div>{error}</div>);

  return (
    <>
      {data?.movies?.map(movie =>
        <Movie key={movie.id} id={movie.id} title={movie.title} isLiked={movie.isLiked}  />
      )}
    </>
  );
};

export default Home;
