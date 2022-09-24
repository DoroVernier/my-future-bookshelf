import { nanoid } from 'nanoid';
import styled from 'styled-components';
import { useState } from 'react';

export default function CreateCard({ onAddBook }) {
  const [titleCount, setTitleCount] = useState(0);
  const titleCounter = (event) => {
    setTitleCount(event.target.value.length);
  };

  const [authorCount, setAuthorCount] = useState(0);
  const authorCounter = (event) => {
    setAuthorCount(event.target.value.length);
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
    <form onSubmit={handleSubmit}>
      <Note htmlFor="title">
        Note title, author or ISBN:
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
      <br />
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
      </Note>
      <Counter>{authorCount}/70</Counter>
      <WishButton>Wish</WishButton>
    </form>
  );
}

const WishButton = styled.button`
  margin-left: 1rem;
  background-color: red;
  border: 1px solid black;
  border-radius: 50%;

  padding: 0.5rem;
`;
const Note = styled.label`
  margin-left: 3rem;
`;
const NoteField = styled.input`
  margin-left: 1rem;
`;

const Counter = styled.span`
  margin-left: 0.5rem;
  font-size: 0.5rem;
`;
