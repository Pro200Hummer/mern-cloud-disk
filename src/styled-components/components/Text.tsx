import React, {FC} from 'react';
import styled from "styled-components";
import {TitleProps} from "../types";

const StyledTitle = styled.h1<TitleProps>`
  font-weight: 700;
  font-size: ${props => props.size || '18px'};
  line-height: ${props => props.line || '21px'};
  color: #566885;;
`;

const Text: FC<TitleProps> = props => {
    return <StyledTitle {...props}/>
};

export default Text;