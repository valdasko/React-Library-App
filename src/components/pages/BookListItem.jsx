import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Li = styled.li`
  margin-bottom: 1rem;
  border: 1px solid black;
  padding: 1.5em;
  border-radius: 4px;
  background-color: ${(props) => props.bg || 'transparent'};
  color: white;
`;

const Title = styled.h2`
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Year = styled.p`
  font-weight: 500;
`;
const Read = styled.p`
  font-style: italic;
  float: right;
`;

function BookListItem({ item }) {
  const catColors = item.read ? '#5c4d4d' : '#a96851';

  const currentColor = catColors;
  return (
    <Li bg={currentColor}>
      <Link to={`/books/${item.id}`}>
        <Title>{item.title}</Title>
        <Year>{item.year}</Year>
        <Read>
          Read:{' '}
          {item.read ? (
            <i className="fa fa-check" aria-hidden="true"></i>
          ) : (
            <i className="fa fa-times" aria-hidden="true"></i>
          )}
        </Read>
      </Link>
    </Li>
  );
}

export default BookListItem;
