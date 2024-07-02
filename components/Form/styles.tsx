import styled from "styled-components";
import { FaPlus } from "react-icons/fa";

export const Form = styled.form`
  width: 98%;
  max-width: 1120px;
  background: #fff;
  margin: 20px auto;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  padding: 15px 0px;
  display: flex;
  justify-content: space-around;


  @media (max-width: 750px) {
    display: grid;
  }

  @media (max-width: 778px) and (min-width: 757px) {
    align-items: center;
    justify-content: space-evenly;
  }
`
export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const Label = styled.label`
  cursor: pointer;
  transition: .5s;
  

`

export const Input = styled.input`
  outline: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 15px;
  border: 1px solid #ccc;
  transition: .5s;

  :hover {
    border:solid 1px teal;
  }
`

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  column-gap: .2em;
  cursor: pointer;

  label:hover  {
    color: #ccc;
  }

  input {
    margin-left: 20px;
    accent-color: black;
    margin-top: 0;
  }
`
export const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  background: teal;
  cursor: pointer;
  transition: .5s;

  :hover {
    background: #009e9e;
    
  }

  @media (max-width: 778px) and (min-width: 757px) {
    padding: 10px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;


  }
`

export const Text = styled.span`
    @media (max-width: 778px) and (min-width: 757px) {
    display: none;
  }
`

export const Icon = styled(FaPlus)`
  display: none;

  @media (max-width: 778px) and (min-width: 757px) {
    display: block;
  }
`
