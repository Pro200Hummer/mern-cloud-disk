import React, {FC} from 'react';
import styled from "styled-components";
import {InputProps} from "../types";

const StyledInput = styled.input`
  display: inline-block;
  width: 88%;
  padding: 5px 0;
  margin: 10px 0;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #566885;
  border: none;
  border-bottom: 2px solid #566885;
  transition: all 0.5s;
  
  &:focus{
    outline: none;
    border-bottom-color: #1b61c5;
  }
`;

const Input: FC<InputProps> = props => {
    return <StyledInput {...props} onChange={props.handler}/>
};

export default Input;