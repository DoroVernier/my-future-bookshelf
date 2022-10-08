import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import Image from 'next/image';
import add from '../public/add.png';

const apiURL = 'https://www.googleapis.com/books/v1/volumes?q=isbn:';

export default function CreateCard({ onAddBook }) {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const isbn = form.isbn.value.replace(/-/g, '');

    fetch(apiURL + isbn)
      .then((response) => response.json())
      .then((data) => {
        if (data.totalItems === 1) {
          const book = data.items[0];
          const title = book.volumeInfo.title;
          const author = book.volumeInfo.authors[0];
          const cover = book.volumeInfo.imageLinks.thumbnail;
          const newCard = {
            id: nanoid(),
            title: title,
            author: author,
            cover: cover,
          };

          onAddBook(newCard);
          form.reset();
        } else {
          toast('Please enter a valid ISBN!', {
            hideProgressBar: false,
            autoClose: 1000,
            type: 'error',
          });
          form.reset();
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
        />
      </Note>
      <WishButton>
        <Image alt="add" layout="responsive" src={add} width={64} height={64} />
      </WishButton>
    </Form>
  );
}
const Form = styled.form`
  position: fixed;
  top: 100px;
  display: grid;
  grid-template-columns: 5fr 1fr;
`;
const Note = styled.label`
  display: grid;

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
const WishButton = styled.button`
  display: inline-block;
  grid-area: 1 2 3 3;
  background-color: transparent;
  height: 2rem;
  width: 2rem;
  border-radius: 100%;
`;
