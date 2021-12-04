import React, {FC} from 'react';
import styled from "styled-components";
import {FlexProps} from "../types";

const StyledFlex = styled.div<FlexProps>`
  display: flex;
  width: ${props => props.width};
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'stretch'};
  align-items: ${props => props.align || 'stretch'};
  margin: ${props => props.margin || '0'};
  padding: ${props => props.padding || '0'};
  background: ${props => props.background};
`;

const Flex: FC<FlexProps> = props => {
    return <StyledFlex {...props}/>
};

export default Flex;