import React from 'react';
import styled from 'styled-components';

const ListItem = styled.article`
  background-color: #f3bc77;
  border-left: 2rem solid #333;
  color: #333;
  padding: 7rem;
  border-radius: 10px;
  font-size: 5rem;

  max-width: 700px;
  margin: 5rem auto;
`;

const Title = styled.h2`
  margin-bottom: 0.5rem;
`;

const Author = styled.p`
  font-style: italic;
  margin-bottom: 1rem;
  font-size: 3rem;
  text-align: right;
`;

const Year = styled.p`
  font-weight: 400;
  font-size: 2.5rem;
  text-align: center;
`;
const Status = styled.p`
  font-weight: 500;
  font-size: 2rem;
  text-align: right;
`;

function BookItem({ book }) {
  return (
    <ListItem>
      <Title>{book.title}</Title>
      <Author>by {book.author}</Author>
      <Year>Year: {book.year}</Year>
      <p>Genre: {book.genre}</p>
      <p>Category: {book.category}</p>
      <Status>{book.read ? 'Read' : 'Not read'}</Status>
    </ListItem>
  );
}

export default BookItem;
