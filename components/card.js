
import styled from "styled-components"; 
import GlobalStyle from "./GlobalStyle";



export default function Card() {
    return (
        <ul>
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
             onAddNewCard={}  
               
         
            </Container>
        </ul>
    ); 
}

const Container = styled.li`


border: 1px solid black; 
margin: 10px;
padding: 10px; 
`
