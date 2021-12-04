import React, {FC} from 'react';
import styled from "styled-components";

const StyledNavBar = styled.div`
  width: 100%;
  padding: 10px 5px;
  background: #FFFFFF;
  box-shadow: 0 3px 4px rgba(92, 92, 92, 0.25);
`;

const AppNavBar: FC = props => {
    return <StyledNavBar {...props}/>
};

export default AppNavBar;