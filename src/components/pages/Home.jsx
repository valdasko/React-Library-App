import React from 'react';
import styled from 'styled-components';
import { bookData } from '../../assets/db';
import BookListItem from './BookListItem';

const Title = styled.h1`
  font-size: 3.4rem;
  color: #333;
  font-weight: 400;
  text-align: center;
  margin-top: 5rem;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

function Home() {
  return (
    <div className="container">
      <Title>Personal Book Library</Title>
      <List>
        {bookData.map((bObj) => (
          <BookListItem key={bObj.id} item={bObj} />
        ))}
      </List>
    </div>
  );
}

export default Home;
