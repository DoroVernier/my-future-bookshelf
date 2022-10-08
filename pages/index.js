import BookCard from '../components/BookCard';
import Image from 'next/image';
import bookshelf from '../public/bookshelf_d.png';
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
        <>
          <HeadlineWrapper>
            <Headline>my future bookshelf</Headline>
            <BookShelf>
              <Image
                alt="bookshelf"
                layout="responsive"
                src={bookshelf}
                width={64}
                height={64}
              />
            </BookShelf>
          </HeadlineWrapper>
          <Input>
            <CreateCard onAddBook={addBook} />
          </Input>
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
        </>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  /* margin: 30vh 0; */
`;
const HeadlineWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  justify-content: center;

  position: sticky;
  top: 0;
  margin: 0;
  background-color: #67597a;
  width: 100vw;
  height: 10vh;
`;
const Headline = styled.h1`
  grid-column-start: 2;
  font-weight: 600;
  margin: 0 5vw 0 0;
  color: #eff9ff;
  width: 10rem;
`;

const BookShelf = styled.div`
  grid-column-start: 3;
  height: 15vh;
  width: 10vw;
`;

const Input = styled.div`
  background-color: #eff9ff;
  min-height: 15vh;
  /* margin: 5vh 0; */
`;
const Container = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  list-style: none;
  z-index: -2;
`;
