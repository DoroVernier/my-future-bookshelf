import styled from 'styled-components';
import { useState } from 'react';
import Image from 'next/image';
import closedEye from '../assets/closedEye.svg';
import openEye from '../assets/openEye.svg';
import bin from '../assets/bin.svg';

export default function BookCard({ title, author, cover, onDelete }) {
  const [read, setRead] = useState(false);
  const handleClick = () => {
    setRead(!read);
  };

  return (
    <Card>
      <CoverContainer>
        <Image
          src={cover}
          alt="Cover"
          layout="responsive"
          width={57}
          height={80}
        />
      </CoverContainer>
      <Title>{title}</Title> <Author>{author}</Author>
      <IconWrapper>
        <Eye onClick={handleClick}>
          <Icon read={read}>
            <Image
              alt={read ? 'open eye' : 'closed eye'}
              layout="responsive"
              src={read ? openEye : closedEye}
              width={64}
              height={64}
            />
          </Icon>
        </Eye>
      </IconWrapper>
      <Delete onClick={onDelete}>
        <Image alt="bin" layout="responsive" src={bin} width={64} height={64} />
      </Delete>
    </Card>
  );
}

const Card = styled.li`
  /* background: linear-gradient(
    270deg,
    rgba(207, 217, 223, 1) 0%,
    rgba(239, 249, 255, 1) 100%
  ); */
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  object-fit: contain;
  gap: 1rem;
  align-items: center;
  justify-items: center;
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;

  padding: 10px;
  width: 80vw;
  height: 20vh;
  border: none;
`;

const CoverContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  justify-self: fill;
  align-self: fill;
  min-width: 0px;
  align-content: center;
  max-height: 15vh;
  min-width: 20vw;
  max-width: 20vw;
`;
const Title = styled.h2`
  grid-column-start: 2;
  color: #544e61;
  font-weight: 400;
  font-size: 20px;
`;
const Author = styled.p`
  grid-column-start: 2;
  color: #544e61;
  font-weight: 300;
  font-size: 16px;
`;

const IconWrapper = styled.div`
  grid-column-start: 3;
  grid-row-start: 1;
  height: 2.5rem;
  width: 2.5rem;
`;

const Eye = styled.button`
  background-color: transparent;
  position: relative;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  grid-column-start: 2;
  grid-row-start: 1;
  cursor: pointer;
`;
const Icon = styled.div`
  /* grid-column-start: 2;
  grid-row-start: 1; */
  height: 1.5rem;
  width: 1.5rem;
`;

const Delete = styled.button`
  grid-column-start: 3;
  height: 3rem;
  width: 3rem;
  background-color: transparent;
  border: none;
`;
