import { useState } from 'react';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import Image from 'next/image';
import add from '../assets/add.svg';

export default function CreateCard({ onAddBook }) {
  const [option, setOption] = useState('isbn');
  function chooseOption(event) {
    setOption(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const searchTerm = form.input.value;
    const apiURL = `https://www.googleapis.com/books/v1/volumes?q=`;

    fetch(apiURL + option + ':' + searchTerm)
      .then((response) => response.json())
      .then((data) => {
        if (data.totalItems >= 1) {
          const book = data.items[0];
          const isbn = book.volumeInfo.isbn;
          const title = book.volumeInfo.title;
          const author = book.volumeInfo.authors[0];
          const cover = book.volumeInfo.imageLinks.thumbnail;
          const newCard = {
            id: nanoid(),
            isbn: isbn,
            title: title,
            author: author,
            cover: cover,
          };

          onAddBook(newCard);
          form.reset();
        } else {
          toast('Better luck next time! 📚', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'light',
            type: 'info',
          });
          form.reset();
        }
      });
  }

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <Note>
          <RadioWrapper>
            <label>
              <Radio
                onChange={chooseOption}
                type="radio"
                value="isbn"
                name="search-option"
                defaultChecked={true}
              />
              isbn
            </label>
            <label>
              <Radio
                onChange={chooseOption}
                type="radio"
                value="title"
                name="search-option"
                defaultChecked={true}
              />
              title
            </label>
            <label>
              <Radio
                onChange={chooseOption}
                type="radio"
                value="author"
                name="search-option"
              />
              author
            </label>
          </RadioWrapper>
          <NoteField
            type="text"
            name="input"
            id="input"
            placeholder="9780571200832"
            autoComplete="false"
          />
        </Note>
        <WishButton>
          <Image
            alt="add"
            layout="responsive"
            src={add}
            width={64}
            height={64}
          />
        </WishButton>
      </Form>
    </FormWrapper>
  );
}
const FormWrapper = styled.div`
  background-color: #eff9ff;
  vertical-align: middle;
  position: fixed;
  top: 12vh;
  margin: 0 0 0 1rem;
  height: 30vh;
  opacity: 1;
  z-index: 3;
`;
const Form = styled.form`
  background-color: transparent;
  position: fixed;
  top: 15vh;
  display: grid;
  grid-template-columns: 5fr 1fr;
  margin: 0;
`;
const Note = styled.label`
  background-color: #eff9ff;
  margin: 12 vh 1rem 1rem 1rem;
  display: grid;
  grid-template-columns: 4fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;

  align-self: center;
  color: #544e61;
`;
const NoteField = styled.input`
  grid-column-start: 2;
  height: 3rem;
`;
const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Radio = styled.input`
  color: #544e61;
  accent-color: #544e61;
`;
const WishButton = styled.button`
  background-color: transparent;
  height: 2rem;
  width: 2rem;
  border-radius: 100%;
  &:active {
    transform: translateY(1px);
  }
`;
