q;
import { nanoid } from 'nanoid';
import { useState } from 'react';
import styled from 'styled-components';

export default function CreateCard({ onAddBook }) {
  const initialCount = 0;
  const [titleCount, setTitleCount] = useState(0);
  const titleCounter = (event) => {
    setTitleCount(event.target.value.length);
  };

  const [authorCount, setAuthorCount] = useState(0);
  const authorCounter = (event) => {
    setAuthorCount(event.target.value.length);
  };

  const resetCount = () => {
    setTitleCount(initialCount);
    setAuthorCount(initialCount);
  };

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value.replace(/\s+/g, ' ').trim();
    const author = form.author.value.replace(/\s+/g, ' ').trim();
    const newCard = { id: nanoid(), title: title, author: author };

    onAddBook(newCard);
    form.reset();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Note htmlFor="title">
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
      </Note>
      <WishButton onClick={resetCount}>Wish</WishButton>
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
  background-color: red;
  border: 1px solid black;
  border-radius: 100%;
`;
