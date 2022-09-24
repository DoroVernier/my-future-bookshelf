import { nanoid } from 'nanoid';
import styled from 'styled-components';

export default function CreateCard({ onAddBook }) {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value.replace(/\s+/g, ' ').trim();
    const author = form.author.value.replace(/\s+/g, ' ').trim();

    const newCard = { id: nanoid(), title: title, author: author };
    console.log(newCard);

    onAddBook(newCard);
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <Note htmlFor="title">
        Note the title:
        <NoteField
          type="text"
          name="title"
          id="title"
          placeholder="Title (input required)"
          maxLength="70"
          required
        />
      </Note>
      <br />
      <Note htmlFor="author">
        Note the author:
        <NoteField
          type="text"
          name="author"
          id="author"
          placeholder="Author"
          maxLength="70"
        />
      </Note>
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
