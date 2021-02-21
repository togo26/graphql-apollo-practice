import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
      language
      rating
      isLiked @client
    }

    suggestions(id: $id) {
      id
      title
    }
  }
`;

const Detail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_MOVIE, {
    variables: { id: +id },
  });

  if (loading) return (<div>Loading...</div>);
  if (error) return (<div>{error}</div>);

  return (
    <div>
      <img src={data.movie.medium_cover_image} alt={data.movie.title} />
      <div>{data.movie.title}</div>
      <div>{data.movie.rating}</div>
      <div>{data.movie.description_intro}</div>
      <div>{data.movie.isLiked ? '💖' : '😞'}</div>
      <div>
        <p>Suggestions</p>
        {data.suggestions.map(movie => <div key={movie.id}>{movie.title}</div>)}
      </div>
    </div>
  );
};

export default Detail;
