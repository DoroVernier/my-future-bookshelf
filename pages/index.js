import { useState } from 'react';
import Image from 'next/image';
import booksForStyle from './../public/body-background.jpg';
import BookCard from '../components/BookCard';
import CreateCard from '../components/CreateCard';
import styled from 'styled-components';

export default function WishList() {
  const [bookList, setBookList] = useState([]);

  function addBook(savedBook) {
    setBookList([savedBook, ...bookList]);
  }

  function deleteBook(id) {
    const newBookList = bookList.filter((book) => book.id !== id);
    setBookList(newBookList);
  }

  return (
    <>
      <ImageWrapper>
        <Image
          alt="Background with books"
          src={booksForStyle}
          objectFit="cover"
          layout="fill"
          width={3456}
          height={4608}
        />
      </ImageWrapper>
      <Wrapper>
        <Headline>My future bookshelf</Headline>
        {bookList.map((book) => {
          return (
            <BookCard
              key={book.id}
              title={book.title}
              author={book.author}
              onDelete={() => deleteBook(book.id)}
            />
          );
        })}
        <BookCard title="Grist" author="Abra Berens" />
        <BookCard title="The wolf and the woodsman" author="Ava Reid" />
        <BookCard title="Dark Earth" author="Rebecca Stott" />
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

const ImageWrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -2;
`;
