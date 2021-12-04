import React, {FC} from 'react';
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  background: #1aa683;
`;

const AppWrapper: FC = props => {
    return <StyledWrapper {...props}/>
};

export default AppWrapper;