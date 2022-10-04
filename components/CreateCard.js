import { nanoid } from 'nanoid';
import { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import add from '../public/add.png';
const apiURL = 'https://www.googleapis.com/books/v1/volumes?q=isbn:'; // ISBN adden
// const apiURL = 'https://www.googleapis.com/books/v1/volumes?q=intitle:${title}+inauthor:${author}'; // ISBN adden

// https://www.googleapis.com/books/v1/volumes?q=intitle:Alice+inauthor:caroll

export default function CreateCard({ onAddBook }) {
  const initialCount = 0;
  const [titleCount, setTitleCount] = useState(0);
  const titleCounter = (event) => {
    setTitleCount(event.target.value.length);
  };

  // const [authorCount, setAuthorCount] = useState(0);
  // const authorCounter = (event) => {
  //   setAuthorCount(event.target.value.length);
  // };

  // const resetCount = () => {
  //   setTitleCount(initialCount);
  //   setAuthorCount(initialCount);
  // };

  const [inputCount, setInputCount] = useState(0);
  const inputCounter = (event) => {
    setInputCoung(event.target.value.length);
  };

  function handleSubmit(event) {
    event.preventDefault();

    // 1. User hat ISBN eingegeben (9789575854584)
    const form = event.target;
    const isbn = form.isbn.value;
    // 2. Hole Daten von der Books API zu dieser ISBN

    fetch(apiURL + isbn) // 'https://www.googleapis.com/books/v1/volumes?q=isbn:9789575854584'
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.totalItems > 0) {
          const book = data.items[0]; // data.items is an array -> just get the first one
          const title = book.volumeInfo.title;
          const author = book.volumeInfo.authors[0];

          const newCard = { id: nanoid(), title: title, author: author };
          console.log(newCard);
          onAddBook(newCard);
          form.reset();
        } else {
          // Fehlerbehandlung
        }
      });

    // 3. Ziehe Titel und Autor aus den API-Daten
    // 4. Füge Buch / neue Karte mit diesen gewonnenen Daten hinzu

    // const form = event.target;
    // const title = form.title.value.replace(/\s+/g, ' ').trim();
    // const author = form.author.value.replace(/\s+/g, ' ').trim();
    // const newCard = { id: nanoid(), title: title, author: author };

    // onAddBook(newCard);
    // form.reset();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Note htmlFor="isbn">
        ISBN:
        <NoteField
          type="text"
          name="isbn"
          id="isbn"
          maxLength="13"
          placeholder="9780571200832"
          required
        />
      </Note>

      {/* <Note htmlFor="title">
        Title, author or ISBN:
        <NoteField
          type="text"
          name="title"
          id="title"
          placeholder="(required)..."
          maxLength="70"
          onChange={titleCounter}
          required
        />
        <Counter>{titleCount}/70</Counter>
      </Note>

      <Note htmlFor="author">
        Further info:
        <NoteField
          type="text"
          name="author"
          id="author"
          placeholder="(optional)..."
          maxLength="70"
          onChange={authorCounter}
        />
        <Counter>{authorCount}/70</Counter>
      </Note> */}
      <WishButton
      // onClick={resetCount}
      >
        <Image alt="add" layout="responsive" src={add} width={64} height={64} />
      </WishButton>
    </Form>
  );
}

const Form = styled.form`
  display: grid;
  gap: 1rem;
  grid-template-columns: 5fr 1fr;
`;
const Note = styled.label`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-start: 1;
  margin-left: 3rem;
  color: rgb(228, 229, 242);
  font-size: 1.5rem;
`;
const NoteField = styled.input`
  grid-column-start: 2;
  margin-left: 1rem;
  height: 2rem;
`;

const Counter = styled.span`
  grid-column-start: 3;
  margin-left: 0.5rem;
  font-size: 1rem;
  color: rgb(228, 229, 242);
`;

const WishButton = styled.button`
  grid-area: 1 2 3 3;
  background-color: transparent;
  height: 3rem;
  width: 3rem;
  border-radius: 100%;
`;
