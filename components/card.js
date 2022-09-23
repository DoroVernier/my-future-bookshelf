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
  padding: none;
  margin: none;
`;

const Container = styled.li`
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
`;
