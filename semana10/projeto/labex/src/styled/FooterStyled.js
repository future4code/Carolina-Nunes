import React from 'react';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding-top: 0;
  text-align: center;
  width: 100%;
  margin-top: 5%;
  position: absolute;
`
export const RedesSociais = styled.div`
  background-color: #F2AF88;
  height: 10vh;
  > p {
    margin: 0;
    padding: 5px 0 0 0;
    font-family: 'Space Mono', monospace;
  }
`
export const Icones = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 5px 0;
  > img {
    width: 35px;
    border-radius: 10px;
    cursor: pointer;
  }
`
export const DescricaoFooter = styled.div`
  background: #204473;
  height: 5vh;
  color: white;
  font-family: 'Space Mono', monospace;
  > p {
    margin: 0;
    padding: 5px 0;
    @media (max-width: 415px) {
      padding: 5px 0 0 0;
    }
  }
`