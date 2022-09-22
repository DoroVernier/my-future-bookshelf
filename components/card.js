
import {useState} from 'react'; 
import styled from "styled-components"; 
import AddCard from "./input";


export default function Card() {
 const [newBook, setNewBook] = useState(""); 

function  addBook(savedBook) {
    setNewBook([savedBook, ...newBook]); 

}

    return (
        <Booklist>
        <Container>   
                <h2>Dark Earth</h2>
                <h3>Rebecca Stott</h3>    
        </Container>

        <Container>
                <h2>Grist</h2>
                <h3>Abra Berens</h3>
        </Container>

        <Container>
                <h2>The wolf and the woodsman</h2>
                <h3>Ava Reid</h3>
            </Container>

            <Container>
            <AddCard onAddBook={addBook} />
             {newBook.map((book) => {
                return (
                    <span key={book.id}>
                        <bookWish/>
                    </span>
                ); 
            })} 
            </Container>
        </Booklist>
    ); 
}

const Booklist = styled.ul`
list-style: none; 
`;

const Container = styled.li`

border: 1px solid black; 
margin: 10px;
padding: 10px; 
`; 
