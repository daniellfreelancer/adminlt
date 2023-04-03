import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import img404 from '../assets/error-404.png'

const Error404Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #F4F6FA;

`;


const Error404Message = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: #333333;
  text-align: center;
  margin-bottom: 2rem;
`;

const Error404Button = styled.button`
  font-size: 1.25rem;
  font-weight: 500;
  color: #FFFFFF;
  background-color: #006699;
  border: none;
  border-radius: 0.25rem;
  padding: 1rem 2rem;
  cursor: pointer;

  &:hover {
    background-color: #004466;
  }
`;

const Error404 = () => {
    const goHome = useNavigate()
  return (
    <Error404Container >
        <img src={img404} alt='404' />
      <Error404Message>Lo siento, la página que buscas no se pudo encontrar.</Error404Message>
      <Error404Button onClick={()=>goHome('/')} >Volver al inicio</Error404Button>
    </Error404Container>
  );
};

export default Error404;
