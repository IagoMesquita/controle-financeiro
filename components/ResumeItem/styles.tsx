import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 5px;
  width: 30%;
  padding: 5px 15px;

  @media screen and (max-width: 767px) {
    width: 80%;
  }

`

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  gap: 10px;
  margin: 20px auto;

  svg{
    width: 25px;
    height: 25px;
  }
`
export const HeaderTitle = styled.p`
  font-size: 20px;
`

export const Total = styled.span`
  font-size: 30px;
  font-weight: bold;
  @media (max-width: 768px) and (min-width: 1023px) {
    font-size: 20px;
  }

`