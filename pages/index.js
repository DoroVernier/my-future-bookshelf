import { useState } from 'react';
import Card from '../components/BookCard';
import CreateCard from '../components/CreateCard';

export default function WishList() {
  const [bookList, setBookList] = useState([]);

  function addBook(savedBook) {
    setBookList([savedBook, ...bookList]);
  }

  return (
    <div>
      <Card title="Grist" author="Abra Berens" />
      <Card title="The wolf and the woodsman" author="Ava Reid" />
      <Card title="Dark Earth" author="Rebecca Stott" />
      <CreateCard onAddBook={addBook} />
      {bookList.map((book) => {
        return <Card key={book.id} title={book.title} author={book.author} />;
      })}
    </div>
  );
}
