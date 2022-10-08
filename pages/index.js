import { useState } from 'react';
import Image from 'next/image';
import booksForStyle from './../public/body-background_4.jpg';
import BookCard from '../components/BookCard';
import CreateCard from '../components/CreateCard';
import styled from 'styled-components';
import useLocalStorage from '../hooks/useLocalStorage';

function loadFromLocal() {
  try {
    return JSON.parse(localStorage.getItem('book'));
  } catch (error) {
    return false;
  }
}

export default function WishList() {
  const [bookList, setBookList] = useLocalStorage('book', []);

  function addBook(savedBook) {
    setBookList([savedBook, ...bookList]);
  }

  function deleteBook(id) {
    const newBookList = bookList.filter((book) => book.id !== id);
    setBookList(newBookList);
  }

  return (
    <>
      <Wrapper>
        <HeadlineWrapper>
          <Headline>my future bookshelf</Headline>
        </HeadlineWrapper>
        <Container>
          {bookList.map((book) => {
            return (
              <BookCard
                key={book.id}
                cover={book.cover}
                title={book.title}
                author={book.author}
                onDelete={() => deleteBook(book.id)}
              />
            );
          })}
          <CreateCard onAddBook={addBook} />
        </Container>
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
const HeadlineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  position: sticky;
  top: 0;
  margin: 0;
  background-color: #67597a;
  width: 100vw;
  height: 10vh;
`;
const Headline = styled.h1`
  font-weight: 600;
  margin: 0 5vw 0 0;
  color: #eff9ff;
  width: 10rem;
`;
const Container = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  list-style: none;
`;
