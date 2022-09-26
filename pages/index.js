import { useState } from 'react';
import Card from '../components/BookCard';
import CreateCard from '../components/CreateCard';
import styled from 'styled-components';

export default function WishList() {
  const [bookList, setBookList] = useState([]);

  function addBook(savedBook) {
    setBookList([savedBook, ...bookList]);
  }

  return (
    <>
      <Wrapper>
        <Headline>My future bookshelf</Headline>
        {bookList.map((book) => {
          return <Card key={book.id} title={book.title} author={book.author} />;
        })}
        <Card title="Grist" author="Abra Berens" />
        <Card title="The wolf and the woodsman" author="Ava Reid" />
        <Card title="Dark Earth" author="Rebecca Stott" />
        <CreateCard onAddBook={addBook} />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Headline = styled.h1``;
