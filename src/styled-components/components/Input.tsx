import React, {FC} from 'react';
import styled from "styled-components";

const StyledInput = styled.input`
  display: inline-block;
  width: 88%;
  padding: 10px 5px;
  margin: 10px 0;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #566885;
`;

const Input: FC = props => {
    return <StyledInput {...props}/>
};

export default Input;