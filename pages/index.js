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
        </HeadlineWrapper>
        <SpaceHolder></SpaceHolder>
        <CreateCard onAddBook={addBook} />

        <Container>
          {bookList.map((book) => {
            return (
              <BookCard
                key={book.id}
                cover={book.cover}
                title={book.title.toLowerCase()}
                author={book.author.toLowerCase()}
                onDelete={() => deleteBook(book.id)}
              />
            );
          })}
        </Container>
      </Wrapper>
      <Fuss>So many books, so little time.</Fuss>
    </>
  );
}

const Wrapper = styled.div`
  position: relative;
`;
const HeadlineWrapper = styled.div`
  background-color: #67597a;
  display: grid;
  grid-template-columns: 4fr 1fr;
  justify-content: end;
  gap: 0.3rem;
  align-content: center;
  position: fixed;
  top: 0;
  margin: 0;
  height: 12vh;
  z-index: 1;
`;
const Headline = styled.h1`
  grid-column-start: 2;
  font-weight: 600;
  color: #eff9ff;
  margin: 1.2rem 0 0 0;
`;

const Shelf = styled.div`
  display: grid;
  align-content: center;
  justify-content: start;
  grid-column-start: 3;
  height: 18vh;
  width: 25vw;
`;
const SpaceHolder = styled.div`
  position: fixed;
  top: 12vh;
  height: 20vh;

  background: rgb(239, 249, 255);
  background: linear-gradient(
    0deg,
    rgba(239, 249, 255, 0) 0%,
    rgba(239, 249, 255, 1) 20%,
    rgba(239, 249, 255, 1) 100%
  );
  width: 100vw;
  z-index: 1;
`;
const Container = styled.ul`
  &::-webkit-scrollbar {
    display: none;
  }
  margin-top: 32vh;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Fuss = styled.div`
  width: 100vw;
  height: 2rem;
  position: fixed;
  bottom: 0;
  color: #eff9ff;
  background-color: #67597a;
  font-family: 'Allura', cursive;
  text-align: center;
  font-size: 1.8rem;
`;
