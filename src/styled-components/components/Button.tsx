import React, {FC} from 'react';
import styled from "styled-components";
import {ButtonProps} from "../types";

const StyledButton = styled.button<ButtonProps>`
  width: 100px;
  align-self: ${props => props.align || 'center'};
  padding: 3px 5px;
  margin: 5px 0;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: #ffffff;
  background: #566885;
  border: 1px solid #566885;
  border-radius: 5px;
  transition: all 0.5s;

  &:hover {
    background: #1b61c5;
  }

  &:active {
    outline: none;
  }
`;

const Button: FC<ButtonProps> = props => {
    return <StyledButton {...props} onClick={props.handler}/>
};

export default Button;