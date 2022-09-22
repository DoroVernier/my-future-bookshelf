import {useState} from 'react'; 
import Card from "../components/Card";
import AddCard from "../components/input";




export default function WishList() {
 const [newBook, setNewBook] = useState(""); 

function  addBook(savedBook) {
    setNewBook([savedBook, ...newBook]); 

 }


  return (

    <div>
      <Card title="Grist" author="Abra Berens" isbn=""/>
      <Card title="The wolf and the woodsman" author="Ava Reid" isbn=""/>
      <Card title="Dark Earth" author="Rebecca Stott" isbn=""/>
      <AddCard onAddBook={addBook} />
           {newBook.map((book) => {
                 return (
                     <span key={book.id}>
                         <bookWish/>
                     </span>
                 ); 
            })} 
    </div>
  

  ); 
} 
