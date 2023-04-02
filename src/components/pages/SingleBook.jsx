import React from 'react';
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

function SingleBookPage() {
  const navigate = useNavigate();
  const { bookId } = useParams();
  console.log('bookId ===', bookId);
  // pasiimti knygos id is books data
  // sugeneruoti atitinkama knyga
  console.log('bookData ===', bookData);
  // surasti bookData konkretu book objekta pagal bookId
  const foundBookObj = bookData.find((bObj) => bObj.id === +bookId);
  // ar radom ?
  if (foundBookObj) {
    console.log('radom foundBookObj ===', foundBookObj);
  } else {
    console.log('neradom');
    // nunaviguoti programiskai i not found
    return <Navigate to="/not-found" />;
  }
  // sugeneruoti visa jo informacija su stilium jsx

  function goBackHandler() {
    navigate('/');
  }

  return (
    <div className="container page">
      <Button onClick={goBackHandler}>Go back</Button>
      <BookItem book={foundBookObj} />
    </div>
  );
}

export default SingleBookPage;
