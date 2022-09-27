import styled from 'styled-components';
import Image from 'next/image';
import closedEye from '../public/closedEye.png';
import openEye from '../public/openEye.png';
import bin from '../public/bin.png';

export default function BookCard({ title, author, onDelete }) {
  return (
    <Container>
      <Card>
        <Title>{title}</Title>
        <Author>{author}</Author>
        <IconWrapper>
          <Image
            alt="open Eye"
            layout="responsive"
            src={openEye}
            width={64}
            height={64}
          />
        </IconWrapper>
        <ClosedWrapper>
          <Image
            alt="closed Eye"
            layout="responsive"
            src={closedEye}
            width={64}
            height={64}
          />
        </ClosedWrapper>
        <Delete onClick={onDelete}>
          <Image
            alt="bin"
            layout="responsive"
            src={bin}
            width={64}
            height={64}
          />
        </Delete>
      </Card>
    </Container>
  );
}

const Container = styled.ul`
  list-style: none;
`;

const Card = styled.li`
  background-color: rgba(228, 229, 242, 0.5);
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 2fr 1fr;
  border-radius: 2rem;
  padding: 10px;
  width: 80vw;
`;

const Title = styled.h2`
  grid-column-start: 2;
`;

const Author = styled.h3`
  grid-column-start: 2;
`;

const IconWrapper = styled.div`
  grid-column-start: 3;
  grid-row-start: 1;
  height: 2rem;
  width: 2rem;
`;

const ClosedWrapper = styled(IconWrapper)`
  margin-top: 10px;
`;

const Delete = styled.button`
  grid-column-start: 3;
  height: 2rem;
  width: 2rem;
  background-color: transparent;
  border: none;
`;
