import { useState } from 'react';
import BookCard from '../components/BookCard';
import Image from 'next/image';
import React from 'react';
import Bookshelf from '../public/bookshelf_light.svg';
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

          <Shelf>
            <Image src={Bookshelf} alt="bookshelf" height={66} width={53} />
          </Shelf>
          <CreateCard onAddBook={addBook} />
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
        </Container>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  /* margin: 0; */
`;

const HeadlineWrapper = styled.div`
  /* background-color: #67597a; */
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  grid-template-rows: 0.5fr 1fr 0.5fr;
  justify-content: end;
  align-content: center;
  position: sticky;
  top: 0;
  margin: 0 5vh 0 0;
  padding-top: 5vh;
  width: 100vw;
  height: 15vh;
`;
const Headline = styled.h1`
  grid-column-start: 2;
  font-weight: 500;
  margin: 0;
  width: 10rem;

  /* color: #eff9ff; */
`;

const Shelf = styled.div`
  grid-column-start: 3;
  justify-self: center;
  align-self: center;
  height: 8vh;
  width: 10vw;
`;

const Input = styled.div`
  background-color: #eff9ff;
  min-height: 15vh;
  margin: 5vh 0;
`;

const Container = styled.ul`
  list-style: none;
  margin-top: 20vh;

  /* display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem; */
  /* z-index: -2; */
`;
