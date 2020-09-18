import React from 'react';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  text-align: center;
  width: 100%;
  margin-top: 2%;
  position: relative;
  bottom: 0;
`
export const RedesSociais = styled.div`
  background-color: #F2AF88;
  height: 10%;
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
    width: 30px;
    border-radius: 10px;
    cursor: pointer;
  }
`
export const DescricaoFooter = styled.div`
  background: #204473;
  height: 5%;
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