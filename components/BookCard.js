import styled from 'styled-components';

export default function Card({ title, author }) {
  return (
    <Booklist>
      <Container>
        <h2>{title}</h2>
        <h3>{author}</h3>
      </Container>
    </Booklist>
  );
}

const Booklist = styled.ul`
  list-style: none;
`;

const Container = styled.li`
  border: 1px solid black;
  padding: 10px;
  width: 80vw;
`;
