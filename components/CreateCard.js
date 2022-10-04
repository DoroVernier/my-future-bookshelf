import { nanoid } from 'nanoid';
import { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import add from '../public/add.png';
const apiURL = 'https://www.googleapis.com/books/v1/volumes?q=isbn:';

export default function CreateCard({ onAddBook }) {
  const initialCount = 0;
  const [titleCount, setTitleCount] = useState(0);
  const titleCounter = (event) => {
    setTitleCount(event.target.value.length);
  };

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const isbn = form.isbn.value.replace(/-/g, '');

    fetch(apiURL + isbn)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        if (data.totalItems > 0) {
          const book = data.items[0];
          const title = book.volumeInfo.title;
          const author = book.volumeInfo.authors[0];

          const newCard = { id: nanoid(), title: title, author: author };
          console.log(newCard);
          onAddBook(newCard);
          form.reset();
        } else {
          console.error('ISBN schon vorhanden', error.message);
        }
      });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Note htmlFor="isbn">
        ISBN:
        <NoteField
          type="text"
          name="isbn"
          id="isbn"
          placeholder="9780571200832"
          pattern=".{13,}"
          required
        />
      </Note>

      <WishButton>
        <Image alt="add" layout="responsive" src={add} width={64} height={64} />
      </WishButton>
    </Form>
  );
}

const Form = styled.form`
  display: grid;

  grid-template-columns: 5fr 1fr;
`;
const Note = styled.label`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-start: 1;
  align-self: center;
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
