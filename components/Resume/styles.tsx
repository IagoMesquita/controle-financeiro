import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  width: 98%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  gap: 20px;
  margin-top: -50px;


  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`