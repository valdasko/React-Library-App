import React, { useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { bookData } from '../../assets/db';
import BookItem from '../booksComponents/SingleBookItem';
import styled from 'styled-components';

const Button = styled.button`
  margin-top: 3rem;
  padding: 0.5em 1em;
  background-color: #f3bc77;
  color: #333;
  border: none;
  border-radius: 5px;
  font-family: inherit;
  font-size: 1.8rem;
  font-weight: 500;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  transition: color 0.3s ease-out, background-color 0.3s ease-out;
  &:hover {
    background-color: #333;
    color: #f3bc77;
  }
`;
const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

function SingleBookPage() {
  const navigate = useNavigate();
  const { bookId } = useParams();
  const foundBookObj = bookData.find((bObj) => bObj.id === +bookId);
  const [read, setRead] = useState(foundBookObj.read);

  if (foundBookObj) {
    console.log('radom foundBookObj ===', foundBookObj);
  } else {
    return <Navigate to="/not-found" />;
  }

  function goBackHandler() {
    navigate('/');
  }
  function readStatusHandler() {
    foundBookObj.read = !foundBookObj.read;
    setRead(!read);
  }

  return (
    <div className="container page">
      <Buttons>
        <Button onClick={goBackHandler}>Go back</Button>
        <Button onClick={readStatusHandler}>
          {foundBookObj.read ? 'Not read' : 'Read'}
        </Button>
      </Buttons>
      <BookItem book={foundBookObj} />
    </div>
  );
}

export default SingleBookPage;
