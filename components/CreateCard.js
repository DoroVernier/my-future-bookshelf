import { useState } from 'react';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import Image from 'next/image';
import add from '../public/add.png';

export default function CreateCard({ onAddBook }) {
  const [option, setOption] = useState({ choice: '' });
  function chooseOption(event) {
    setOption({ ...option, choice: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const searchTerm = form.value;
    // const isbn = form.isbn.value.replace(/-/g, '');
    const apiURL = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;

    fetch(apiURL + searchTerm + ':' + event.target.value)
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
          toast('😕 Better luck next time!', {
            hideProgressBar: false,
            autoClose: 1000,
            type: 'error',
          });
          form.reset();
        }
      });
  }
  // console.log('VALUES', option);
  return (
    <Form onSubmit={handleSubmit}>
      <div onChange={chooseOption}>
        <label>
          <input
            type="radio"
            value="isbn"
            name="search-option"
            defaultChecked={true}
          />
          ISBN
        </label>

        <label>
          <input type="radio" value="title" name="search-option" />
          Title
        </label>

        <label>
          <input type="radio" value="author" name="search-option" />
          Author
        </label>
      </div>
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
  /* position: fixed;
  top: 20vh;
  display: grid;
  grid-template-columns: 5fr 1fr; */
`;
const Note = styled.label`
  font-size: 1.5rem;

  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-start: 1;
  align-self: center;
  /* color: rgb(228, 229, 242); */
`;
const NoteField = styled.input`
  /* grid-column-start: 2;
  margin-left: 1rem;
  height: 2rem; */
`;
const WishButton = styled.button`
  background-color: transparent;
  height: 2rem;
  width: 2rem;
  border-radius: 100%;

  /* display: inline-block;
  grid-area: 1 2 3 3; */
`;

// } else if (data.totalItems >= 1) {
//   {
//     result.map((book) => {
//       return (
//         <DropdownList
//           Key="id"
//           textField="book"
//           value={result}
//           onChange={(nextValue) => setResult(nextResult.id)}
//           // data={[(id = 'id'), , (title = { title })]}
//         />
//       );
//     });
//   }
//   form.reset();
// }
