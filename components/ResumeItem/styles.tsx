import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 5px;
  width: 30%;
  padding: 5px 15px;

  @media (max-widh: 750px) {
    width: 20%;

    p {
      font-size: 12px;
    }

    span {
      font-size: 20px;
    }

    svg {
      display: none;
    }
  }
`

export const HeaderCard = styled.div`
  /* display: flex; */
  /* justify-content: space-around; */
  /* align-items: center; */
  /* width: 100%; */
  /* gap: 10px; */

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
`