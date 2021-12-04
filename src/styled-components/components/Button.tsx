import React, {FC} from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
  width: 120px;
  padding: 5px 20px;
  margin: 5px 0;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  color: #ffffff;
`;

const Button: FC = props => {
    return <StyledButton {...props}/>
};

export default Button;