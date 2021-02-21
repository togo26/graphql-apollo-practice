import { Link } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';

const LIKE_MOVIE = gql`
  mutation toggleLikeMovie($id: Int!) {
    toggleLikeMovie(id: $id) @client
  }
`;

const Movie = ({ id, title, isLiked }) => {
  const [toggleLikeMovie] = useMutation(LIKE_MOVIE, {
    variables: { id: +id }
  });

  return (
    <div>
      <Link key={id} to={`/${id}`}>
        {title}
      </Link>
      <button onClick={toggleLikeMovie}>{isLiked ? 'Unlike' : 'Like'}</button>
    </div>
  )
}

export default Movie
