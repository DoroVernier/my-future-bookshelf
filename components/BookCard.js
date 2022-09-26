import styled from 'styled-components';

export default function Card({ title, author, onDelete }) {
  return (
    <Container>
      <Booklist>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <button onClick={onDelete}>X</button>
      </Booklist>
    </Container>
  );
}

const Container = styled.ul`
  list-style: none;
`;

const Booklist = styled.li`
  border: 1px solid black;
  padding: 10px;
  width: 80vw;
`;
