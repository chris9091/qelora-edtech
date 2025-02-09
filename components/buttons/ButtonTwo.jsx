'use client'
import React from 'react';
import styled from 'styled-components';

const ButtonTwo = () => {
  return (
    <StyledWrapper>
      <button>SUBMIT</button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    border-radius: 0.25rem;
    width: 100%;
    text-transform: uppercase;
    font-style: normal;
    font-weight: 500;
    padding-left: 25px;
    padding-right: 25px;
    color: #fff;
    -webkit-clip-path: polygon(
      0 0,
      0 0,
      100% 0,
      100% 0,
      100% calc(100% - 15px),
      calc(100% - 15px) 100%,
      15px 100%,
      0 100%
    );
    clip-path: polygon(
      0 0,
      0 0,
      100% 0,
      100% 0,
      100% calc(100% - 15px),
      calc(100% - 15px) 100%,
      15px 100%,
      0 100%
    );
    height: 40px;
    font-size: 0.7rem;
    line-height: 14px;
    letter-spacing: 1.2px;
    transition: 0.2s 0.1s;
    background-image: linear-gradient(90deg, #1c1c1c, #6220fb);
    border: 0 solid;
    overflow: hidden;
  }

  button:hover {
    cursor: pointer;
    transition: all 0.3s ease-in;
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export default ButtonTwo;
